var conf = require("../ConfigFile/config.json");
var dateTime = new Date();
var exports = module.exports = {};

exports.generateUsername = function()
{
	username = dateTime.getDate().toString() +
			(dateTime.getMonth() + 1).toString() +
			dateTime.getYear().toString() +
			dateTime.getHours().toString() +
			dateTime.getMinutes().toString() +
			dateTime.getSeconds().toString() +
			'@test.co.nz';

	temp = username;
	conf.username = temp;

};

