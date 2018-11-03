module.exports = error => {
    console.error("websocket error");
    if(error) {
        console.error(error);
        process.exit(1);
    }
};