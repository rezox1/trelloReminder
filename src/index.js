process.env["NODE_CONFIG_DIR"] = '../config';
const config = require('config');

const app = require("express");

const trello = require("trello");

console.log(config.get("web.port"));

console.log(123);