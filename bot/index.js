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
	attributes.strength = gameState.character.skillPoints;
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

async function timerLoop() {
	try {
		gameState = await fetchGameState();
		console.log("position: " + gameState.currentLevel + " - " + gameState.currentPosition.positionX + ", " + gameState.currentPosition.positionY);
		if (gameState.character.skillPoints > 0) {
			await spendSkillPoints();
		}
	} catch (error) {
		console.error(error);
	}
	setTimeout(timerLoop, 0);
};

setTimeout(timerLoop, 0);
