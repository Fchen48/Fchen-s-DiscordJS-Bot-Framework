# Fchen's DiscordJS Bot Framework
This is my personal Framework, which I created with influences from "An Idiot's Guide", the DiscordJS community and many other Discord programming communities. 
You can use it as a jump-start and build your DiscordBot faster instead of creating the wheel everytime from scratch.

## Attention
I'm using the currently master branch from DiscordJS, most of the code got changed between version 11 and 12, keep in mind to switch the docs from stable to master. 
You can change back to v11, but I can't guarantee that everything will work fine.

## Info
Checkout the branches, there are some variations planned for the future. 

## Usage 
1. Click on "Clone or download" on GitHub and download the repository to your computer. 
2. Open the downloaded repository with your favorite editor (Visual Studio Code, Atom, VIM, ...).
3. Launch a terminal and execute `npm install`, now your dependencies get downloaded and installed. 
4. Enter your Discord token into the `settings.json` and you are on the run. 
5. Code as you want and use it as you want to. 

## Coding
### Activate/Deactivate events
Open the file `./functions/eventLoader.js` and simple comment or uncomment the needed event, each event is associated with a specific file under `./events/`, you don't need to delete any of these files if you won't use it.

### Modifing events
Open your desired event under `./events/` for example we open `./events/guildMemberAdd.js`, the guildMemberAdd event gave us the newly joined member, so all you need to do is, to put your code into the arrow function of `module.exports`, for practise we want to greet every new user:

```js
module.exports = member => {
    member.guild.channels.first().send("Welcome" + member.displayName);
};
```
Now everytime a new user will join your server, the bot will send a message in the first channel of the server. 
Btw. this code isn't in anyway safe to use, the bot can lack the permission to send the message in the first channel, or maybe the first channel is a voicechannel!

### Adding commands
My framework has a simple integrated commandhandler, you can find it under `./events/message.js`, usually you don't have to change anything, if you need, feel free to do so. 
To add a new command, simply create a file called like your command, for example we will create the command `hello`, in order to do this we have to create a file named `hello.js` under `./commands/`, into the empty commandfile we will paste following: 
```js
// eslint-disable-next-line max-params
module.exports = (client, message, args, command, argresult, guild) => {

};
```
Now we have access to many parameters, which we can use inside our command. 
- `client` will represent the bots client, this will be usefull if you want to create a new eventlistener or send information to other guilds.
- `message` represents the message itself, so you can simple reply to it or grab the member from the sent message.
- `args` is an array of all arguments (splitted by whitespaces) behind the command.
- `command` will be the command itself as a string, in our case this will be "hello".
- `argresult` similar to `args` but not an array, only a string of the message content behind the command, usefull if you want to create commands with text inputs.
- `guild` will be the guild object of the current guild.

So now let us create the command.
```js
// eslint-disable-next-line max-params, no-unused-vars
module.exports = (client, message, args, command, argresult, guild) => {
    message.channel.send("Hello " + message.member.displayName)
    .then(msg => {
        msg.react("👋")
        .catch(console.error);
    })
    .catch(console.error);
};
```
Now if a user will execute `!bot hello` the bot will answere with "Hello Username" and reacts his message with 👋.

### Creating new functions
If you want to code a complex bot sooner or later you will consider in using a data storage, like files or databases, this won't be an intense tutorial how to do this, sorry, but I want to show you how to keep your code clean. 

For example we will create a simple filestorage using the package `node-json-db`, in order to use it we have to install it, to do this simple execute `npm i -s node-json-db` in your terminal.
Next we create a new file under `./functions/` called `db.js` and insert in the first step following: 
```js
const JsonDB = require("node-json-db");
const db = new JsonDB("db", true, true);

module.exports = {

}
```
This will create a file called `db.json` if we execute the file `./functions/db.js` with `require("./functions/db.js");`.
We assigned an empty object to `module.exports`, so now we have to populate the object with functions and properties, first function will be a `addGuild` function. 
```js
const JsonDB = require("node-json-db");
const db = new JsonDB("db", true, true);

module.exports = {
    addGuild(guild) {
        db.push("/" + guild.id + "/memberCount", guild.memberCount);
    }
}
```
This will allow us to add the guildID and the guildMemberCount to our `db.json` file, now we continue with deleting the guild.
```js
const JsonDB = require("node-json-db");
const db = new JsonDB("db", true, true);

module.exports = {
    addGuild(guild) {
        db.push("/" + guild.id + "/memberCount", guild.memberCount);
    },
    deleteGuild(guild) {
        db.delete("/" + guild.id);
    }
};
```
And at least we will create a function to get the current memberCount.
```js
const JsonDB = require("node-json-db");
const db = new JsonDB("db", true, true);

module.exports = {
    addGuild(guild) {
        db.push("/" + guild.id + "/memberCount", guild.memberCount);
    },
    deleteGuild(guild) {
        db.delete("/" + guild.id);
    },
    getMemberCount(guild) {
        return db.getData("/" + guild.id + "/memberCount");
    }
};
```
To use our db connection in other commands we have to load the function with `require()` and use some of our own defined functions.
Here is a possible example: 
```js
const db = require("../functions/db");

// eslint-disable-next-line max-params, no-unused-vars
module.exports = (client, message, args, command, argresult, guild) => {
    message.channel.send("We have " + db.getMemberCount(guild) + " memer on this guild.")
    .catch(console.error);
};
```
Btw. this doesn't makes any sense, because we can also fetch the memberCount from the guild object itself, but you can save anything you want.
If you want to learn more about `node-json-db`, you should visit https://www.npmjs.com/package/node-json-db.

### Locales
Under `./functions/locale.js` you will find my simple language parser, this will allow you to maintain your bot with diffrent languages.
To use the parser you simple have to require it and take use of its functions.
```js
const locale = require("../functions/locale");

locale.get("en").botName; // This will get the token "botName" from ./locale/en.json
locale.default().botName; // This will get the token "botName" from your default language set in settings.json
locale.list(); // Will return an array of languagestring
locale.prefix(); // Will return your defined bot prefix
```
In combination with `node-json-db` you can save the prefered language of each guild and enter it on each command.

## Housekeeping
I will give you some tipps to keep your repository clean. 
- Keep everything ordered, functions into `./functions/`, events into `./events/` and commands into `./commands/`, ...
- Don't create files directly unter `./` unless it's really necessary. 
- Don't repeat yourself, if you create a function which will be execute on two places (event and command), create them under `./functions/` and require them where you need them.
- Uninstall unused packages to keep your `node_modules` folder tiny. 