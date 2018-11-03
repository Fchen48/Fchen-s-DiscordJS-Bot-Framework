module.exports = event => {
    if(event.wasClean) return console.log("clean exit");
    console.error(event);
};