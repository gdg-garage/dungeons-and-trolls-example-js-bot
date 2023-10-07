const DungeonsAndTrolls = require('dungeons_and_trolls');
DungeonsAndTrolls.ApiClient.instance.authentications.ApiKeyAuth.apiKey = process.argv[2] || "PASTE_YOUR_API_KEY_HERE";
DungeonsAndTrolls.ApiClient.instance.basePath = process.argv[3] || "https://docker.tivvit.cz";

let apiInstance = new DungeonsAndTrolls.DungeonsAndTrollsApi();

var gameState

function fetchGameState() {
	let opts = {
		'blocking': true, // Boolean | default false
		'items': true // Boolean | default true
	};
	apiInstance.dungeonsAndTrollsGame(opts, (error, data, response) => {
		if (error) {
			console.error(error);
		} else {
			gameState = data;
			console.log("position: " + gameState.currentLevel + " - " + gameState.currentPosition.positionX + ", " + gameState.currentPosition.positionY);
		}
	});
}

function timerLoop() {
	fetchGameState();
	setTimeout(timerLoop, 0);
}

setTimeout(timerLoop, 0);
