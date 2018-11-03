const settings = require("../settings.json");

// eslint-disable-next-line max-params, no-unused-vars
module.exports = (client, message) => {
    if(settings.botowner.includes(message.author.id)) {
        client.on("disconnect", () => {
            process.exit(0);
        });
        client.destroy();
    }
};