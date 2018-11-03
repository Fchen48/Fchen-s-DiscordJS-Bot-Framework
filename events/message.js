const settings = require("../settings.json");

module.exports = message => {
    if(message.author.bot) return;
    if(!message.content.startsWith(settings.prefix)) return;
    const client = message.client;
    const guild = message.guild;
    const command = message.content.slice(settings.prefix.length).split(" ")[0];
    const args = message.content.substring(command.length + settings.prefix.length + 1).split(" ");
    const argresult = message.content.substring(command.length + settings.prefix.length + 1);

    try {
        // eslint-disable-next-line global-require
        const cmdFile = require(`../commands/${command}`);
        if(message.channel.type == "text" && message.channel.permissionsFor(client.user).has("MANAGE_MESSAGES")) {
            message.delete();
        }
        console.log(message.author.username + ": " + message.content);
        cmdFile(client, message, args, command, argresult, guild);
    }
    catch (error) {
        if(error.code === "MODULE_NOT_FOUND") return;
        console.error(error);
    }
};