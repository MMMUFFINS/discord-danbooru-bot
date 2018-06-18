// the bot class called in index.js

// require modules
const Discord = require('discord.js');
const client = new Discord.Client();

class Bot {
    constructor(config) {
        this.config = config;

        client.on('ready', () => {
            console.log('I am ready!');

            let channels = client.channels;

            // greet each channel
            channels.forEach(channel => {
                if (channel.type === 'text') {
                    channel.guild.fetchMember(client.user)
                    .then(selfInGuild => {
                        let nickInGuild = selfInGuild.nickname;
                        let perms = channel.permissionsFor(client.user);
                        
                        if (perms.has('SEND_MESSAGES')) {
                            console.log('posting to', channel.guild.name, channel.name);
    
                            return channel.send('Hello, ' + nickInGuild + ' here!')
                            .catch(err => {
                                return Promise.reject('Error posting to ' + channel.guild.name + ' #' + channel.name + ": " + err.message);
                            });
                        } else {
                            console.log('No permission to post in', channel.guild.name, channel.name);
                        }
                    }).catch(err => {
                        console.log(err)
                    })
                }
            });  
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

module.exports = Bot;