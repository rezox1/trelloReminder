const config = require('config');

const TrelloApp = require("trello");

const TRELLO_APP_KEY = config.get("trello.applicationKey"),
	TRELLO_TOKEN = config.get("trello.userToken");

const myTrelloApp = new TrelloApp(TRELLO_APP_KEY, TRELLO_TOKEN);

const TO_DO_LIST_ID = "5c324675614e3e84678d2ebb";

(async () => {
	try {
		await myTrelloApp.addCard('Заменить зубную счетку', '', TO_DO_LIST_ID);
		console.log("new card added");
	} catch (err) {
		console.error(err);
	}
})();

//const DATA_PATH = congig.get("data.path");