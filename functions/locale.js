const settings = require("../settings.json");
// Add your available languages to the array below
const languages = [
    "en"
];

module.exports = {
    get(language) {
        const localefile = "../locale/" + language + ".json";
        // eslint-disable-next-line global-require
        const locale = require(localefile);
        if(!locale) return undefined;
        return locale;
    },
    default() {
        if(!settings) return undefined;
        if(!settings.defaultLang) return undefined;
        return this.get(settings.defaultLang);
    },
    list() {
        return languages;
    },
    prefix() {
        if(!settings) return undefined;
        if(!settings.prefix) return undefined;
        return settings.prefix;
    }
};