url = require('url');  
var fs = require('fs');
var request = require('request');
var API = require('groupme').Stateless

const ACCESS_TOKEN = "30cacb5026820136cdc62764f0d1194e";
const BOT_ID = "436cf3216eaab6583d6884edb2";
const CALL_BACK = "https:/25.15.212.154";

var opts = {
	picture_url: ""
}

API.Bots.post(ACCESS_TOKEN, BOT_ID, "testing", opts, CALL_BACK)