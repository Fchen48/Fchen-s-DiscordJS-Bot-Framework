/*
These are all available events on DiscordJS, simply uncomment the event you want and insert your code in the specific file unter /events/.

Visit https://discord.js.org/#/docs/main/master/class/Client for more information in DiscordJS events.
*/

/* eslint-disable global-require */
module.exports = client => {
    // client.on("channelCreate", require("../events/channelCreate"));
    // client.on("channelDelete", require("../events/channelDelete"));
    // client.on("channelPinsUpdate", require("../events/channelPinsUpdate"));
    // client.on("channelUpdate", require("../events/channelUpdate"));
    // client.on("debug", require("../events/debug"));
    client.on("disconnect", require("../events/disconnect"));
    // client.on("emojiCreate", require("../events/emojiCreate"));
    // client.on("emojiDelete", require("../events/emojiDelete"));
    // client.on("emojiUpdate", require("../events/emojiUpdate"));
    client.on("error", require("../events/error"));
    // client.on("guildBanAdd", require("../events/guildBanAdd"));
    // client.on("guildBanRemove", require("../events/guildBanRemove"));
    client.on("guildCreate", require("../events/guildCreate"));
    client.on("guildDelete", require("../events/guildDelete"));
    // client.on("guildIntegrationsUpdate", require("../events/guildIntegrationsUpdate"));
    // client.on("guildMemberAdd", require("../events/guildMemberAdd"));
    // client.on("guildMemberAvailable", require("../events/guildMemberAvailable"));
    // client.on("guildMemberRemove", require("../events/guildMemberRemove"));
    // client.on("guildMembersChunk", require("../events/guildMembersChunk"));
    // client.on("guildMemberSpeaking", require("../events/guildMemberSpeaking"));
    // client.on("guildUnavailable", require("../events/guildUnavailable"));
    // client.on("guildUpdate", require("../events/guildUpdate"));
    client.on("message", require("../events/message"));
    // client.on("messageDelete", require("../events/messageDelete"));
    // client.on("messageDeleteBulk", require("../events/messageDeleteBulk"));
    // client.on("messageReactionAdd", require("../events/messageReactionAdd"));
    // client.on("messageReactionRemove", require("../events/messageReactionRemove"));
    // client.on("messageReactionRemoveAll", require("../events/messageReactionRemoveAll"));
    // client.on("messageUpdate", require("../events/messageUpdate"));
    // client.on("presenceUpdate", require("../events/presenceUpdate"));
    client.on("rateLimit", require("../events/rateLimit"));
    client.on("ready", require("../events/ready"));
    client.on("reconnecting", require("../events/reconnecting"));
    client.on("resumed", require("../events/resumed"));
    // client.on("roleCreate", require("../events/roleCreate"));
    // client.on("roleDelete", require("../events/roleDelete"));
    // client.on("roleUpdate", require("../events/roleUpdate"));
    // client.on("typingStart", require("../events/typingStart"));
    // client.on("typingStop", require("../events/typingStop"));
    // client.on("userUpdate", require("../events/userUpdate"));
    // client.on("voiceStateUpdate", require("../events/voiceStateUpdate"));
    client.on("warn", require("../events/warn"));
    // client.on("webhookUpdate", require("../events/webhookUpdate"));
};