const Discord = require('discord.js')
const client = new Discord.Client({ intents: 513 })
const wokcommands = require('wokcommands')
const path = require('path')

client.on('ready', () => {
    console.log('The bot is online.')

    new wokcommands({
        client,
        commandsDir: path.join(__dirname, "cmd"),
        // Everything above leave as is.
        testServers: ['SERVER ID HERE']
    })
})

client.login(YOUR_TOKEN_HERE)