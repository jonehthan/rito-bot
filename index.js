const Discord = require("discord.js")

const TOKEN = "OTc5Mjg3OTM2MjAzOTA3MTEz.GE-PWe.i9zU8C5WoNHNCd2MqkjO_7jAEsYYA5vH6cJEfE"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.login(TOKEN);