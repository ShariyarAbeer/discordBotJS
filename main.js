const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

const bot = new Discord.Client();

const cmd = require("fs");

bot.commands = new Discord.Collection();

const commandFiles = cmd
	.readdirSync("./commands/")
	.filter((file) => file.endsWith(".js"));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

bot.once("ready", () => {
	console.log("Bot is Online!! Happy Coding !");
});

bot.on("message", (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === "ping") {
		bot.commands.get("ping").execute(message, args);
	} else if (command === "bot") {
		bot.commands.get("bot").execute(message, args);
	} else if (command === "embed") {
		bot.commands.get("embed").execute(message, args);
	}
});

bot.login(token);
