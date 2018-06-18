/*
    Grabs images off danbooru
*/

'use strict';

// Import modules
const fs = require('fs');
const Bot = require('./includes/bot');

// read config
let config = JSON.parse(fs.readFileSync('./config.json'));

// start bot
let bot = new Bot(config);