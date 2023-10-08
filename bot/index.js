const DungeonsAndTrolls = require('dungeons_and_trolls');
DungeonsAndTrolls.ApiClient.instance.authentications.ApiKeyAuth.apiKey = process.argv[2] || "PASTE_YOUR_API_KEY_HERE";
DungeonsAndTrolls.ApiClient.instance.basePath = process.argv[3] || "https://docker.tivvit.cz";
let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();

var gameState;

function fetchGameState() {
	console.log("fetching game state");
	let opts = {
		'blocking': true,
		'items': true
	};
	return new Promise((resolve, reject) => {
		apiInstance.dungeonsAndTrollsGame(opts, (error, data, response) => {
			if (error)
				return reject(error);
			resolve(data);
		});
	})
};

function spendSkillPoints() {
	console.log("spending skill points");
	let attributes = new DungeonsAndTrolls.DungeonsandtrollsAttributes();
	attributes.stamina = gameState.character.skillPoints;
	let opts = {
		'blocking': false
	};
	return new Promise((resolve, reject) => {
		apiInstance.dungeonsAndTrollsAssignSkillPoints(attributes, opts, (error, data, response) => {
			if (error)
				return reject(error);
			resolve(data);
		});
	});
};

function chooseWeaponToBuy() {
	for (let item of gameState.shopItems) {
		if (item.price == 0 && item.slot == "mainHand")
			return item;
	}
}

function buyWeapon() {
	console.log("buying weapon");
	let item = chooseWeaponToBuy();
	console.log("chosen weapon: " + item.name);
	let identifiers = new DungeonsAndTrolls.DungeonsandtrollsIdentifiers();
	identifiers.ids = [item.id];
	let opts = {
		'blocking': false
	};
	return new Promise((resolve, reject) => {
		apiInstance.dungeonsAndTrollsBuy(identifiers, opts, (error, data, response) => {
			if (error)
				return reject(error);
			resolve(data);
		});
	});
};

function walkTo(position) {
	console.log("walking to: " + position.positionX + ", " + position.positionY);
	let opts = {
		'blocking': true
	};
	return new Promise((resolve, reject) => {
		apiInstance.dungeonsAndTrollsMove(position, opts, (error, data, response) => {
			if (error)
				return reject(error);
			resolve(data);
		});
	});
}

function useSkill(skill, target) {
	console.log("using skill: " + skill.name);
	let skillUse = new DungeonsAndTrolls.DungeonsandtrollsSkillUse();
	skillUse.skillId = skill.id;
	if (skill.target == "position") {
		skillUse.position = target;
	} else if (skill.target == "character") {
		skillUse.targetId = target;
	}
	let opts = {
		'blocking': true
	};
	return new Promise((resolve, reject) => {
		apiInstance.dungeonsAndTrollsSkill(skillUse, opts, (error, data, response) => {
			if (error)
				return reject(error);
			resolve(data);
		});
	});
}

function evaluateParameters(params) {
	var sum = 0;
	sum += (params.strength || 0) * (gameState.character.attributes.strength || 0);
	sum += (params.dexterity || 0) * (gameState.character.attributes.dexterity || 0);
	sum += (params.intelligence || 0) * (gameState.character.attributes.intelligence || 0);
	sum += (params.willpower || 0) * (gameState.character.attributes.willpower || 0);
	sum += (params.constitution || 0) * (gameState.character.attributes.constitution || 0);
	sum += (params.slashResist || 0) * (gameState.character.attributes.slashResist || 0);
	sum += (params.pierceResist || 0) * (gameState.character.attributes.pierceResist || 0);
	sum += (params.fireResist || 0) * (gameState.character.attributes.fireResist || 0);
	sum += (params.poisonResist || 0) * (gameState.character.attributes.poisonResist || 0);
	sum += (params.electricResist || 0) * (gameState.character.attributes.electricResist || 0);
	sum += (params.life || 0) * (gameState.character.attributes.life || 0);
	sum += (params.stamina || 0) * (gameState.character.attributes.stamina || 0);
	sum += (params.mana || 0) * (gameState.character.attributes.mana || 0);
	sum += (params.constant || 0) * 1;
	return sum;
}

function attackMonster(monster, mrPos) {
	console.log("attacking: " + monster.name + " (" + monster.lifePercentage + " %)");
	for (let item of gameState.character.equip) {
		for (let skill of item.skills) {
			console.log("estimated damage: " + evaluateParameters(skill.damageAmount)); // ignoring resistances
			return useSkill(skill, monster.id);
		}
	}
}

function findMonster() {
	let level = gameState.map.levels[0]; // there is only one level now
	for (let obj of level.objects) {
		for (let monster of obj.monsters)
			return [monster, obj.position];
	}
	return [];
}

function findStairs() {
	let level = gameState.map.levels[0];
	for (let obj of level.objects) {
		if (obj.isStairs)
			return obj.position;
	}
}

function respawn() {
	console.log("respawning");
	let respawn = {
		key: null
	};
	let opts = {
		'blocking': true
	};
	return new Promise((resolve, reject) => {
		apiInstance.dungeonsAndTrollsRespawn(respawn, opts, (error, data, response) => {
			if (error)
				return reject(error);
			resolve(data);
		});
	});
}

async function timerLoop() {
	console.log("----------");
	try {
		gameState = await fetchGameState();
		console.log("level: " + gameState.currentLevel + ", position: " + gameState.currentPosition.positionX + ", " + gameState.currentPosition.positionY);
		console.log("life: " + gameState.character.attributes.life + ", mana: " + gameState.character.attributes.mana + ", stamina: " + gameState.character.attributes.stamina);
		if (false) {
			respawn();
			return;
		}
		if (gameState.character.skillPoints > 0) {
			await spendSkillPoints();
		}
		if (gameState.character.equip.length == 0) {
			await buyWeapon();
		}
		let [monster, mrPos] = findMonster();
		if (monster) {
			if (gameState.currentPosition.positionX == mrPos.positionX && gameState.currentPosition.positionY == mrPos.positionY) {
				await attackMonster(monster, mrPos);
			} else {
				await walkTo(mrPos);
			}
		} else {
			let stairs = findStairs();
			if (stairs) {
				await walkTo(stairs);
			}
		}
	} catch (error) {
		if (error?.response?.text) {
			var j = JSON.parse(error.response.text);
			console.error("***** failure: " + j.message);
		} else {
			console.error(error);
		}
	}
	setTimeout(timerLoop, 0);
};

setTimeout(timerLoop, 0);
