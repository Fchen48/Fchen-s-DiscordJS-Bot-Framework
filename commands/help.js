const Discord = require("discord.js");
const locale = require("../functions/locale");

// eslint-disable-next-line max-params, no-unused-vars
module.exports = (client, message, args, command, argresult, guild) => {

    const embed = new Discord.MessageEmbed()
    .setTitle(locale.default().helpTitle)
    .setDescription(locale.default().helpDesc)
    .addField(locale.prefix() + locale.default().commandHelp, locale.default().commandHelpDesc)
    .setColor(locale.default().infoColor)
    .setFooter(locale.default().botName);

    message.channel.send({ embed }); // Sending the helppage to the current channel
    // message.author.send({ embed }); // Sending the helppage to the user via private message
};