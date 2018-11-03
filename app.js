const Discord = require("discord.js");
const client = new Discord.Client();
const settings = require("./settings.json");

let token = settings.token;
if(process.env.OS === "Windows_NT") {
    token = settings.tokenDev;
}

if(!token) process.exit(1);

require("./functions/eventLoader")(client);

process.on("unhandledRejection", console.error);
process.on("uncaughtException", console.error);

client.login(token);