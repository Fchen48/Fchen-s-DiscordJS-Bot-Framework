/*
These are all available events on DiscordJS, simply add the event you want and insert your code in the specific file unter /events/.

Visit https://discord.js.org/#/docs/main/master/class/Client for more information in DiscordJS events.
*/

/* eslint-disable global-require */
module.exports = client => {
    client.on("disconnect", require("../events/disconnect"));
    client.on("error", require("../events/error"));
    client.on("guildCreate", require("../events/guildCreate"));
    client.on("guildDelete", require("../events/guildDelete"));
    client.on("message", require("../events/message"));
    client.on("rateLimit", require("../events/rateLimit"));
    client.on("ready", require("../events/ready"));
    client.on("reconnecting", require("../events/reconnecting"));
    client.on("resumed", require("../events/resumed"));
    client.on("warn", require("../events/warn"));
};