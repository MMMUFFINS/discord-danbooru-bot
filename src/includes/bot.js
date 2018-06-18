// the bot class called in index.js

// require modules
const Discord = require('discord.js');
const client = new Discord.Client();

class Bot {
    constructor (config) {
        this.config = config;

        client.on('ready', () => {
            console.log('I am ready!');
        });

        // Create an event listener for messages
        client.on('message', message => {
            // If the message is "ping"
            if (message.content === 'ping') {
                // Send "pong" to the same channel
                message.channel.send('pong');
            }
        });

        // Log our bot in
        client.login(config.secrets.discord);
    }

    // // static get properties
    // static get properties() {
    //     return {
    //         connectedChannels: {
    //             // example
    //             // "12345": {
    //             //     init: false
    //             // }, ...
    //         }
    //     }
    // }

    // // when it connects to a new channel, we want it to send a message
    // onChannelConnect(chanId) {

    // }
}