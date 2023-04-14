const { CommandType } = require('wokcommands')

module.exports = {
    description: 'run this command to recieve the badge.',
    type: CommandType.SLASH,
    testOnly: true,

    callback: () => {
        return {
            content: 'Thanks for using the bot! Please allow a few days for the badge to be added to you Discord account.',
            ephemeral: true,
        }
    }
}

// Don't change this file