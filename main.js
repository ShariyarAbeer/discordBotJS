const Discord = require("discord.js");
const { prefix, token } = require("./config.json");

const bot = new Discord.Client();

bot.once("ready", () => {
	console.log("Bot is Online!! Happy Coding !");
});

bot.on("message", (message) => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === "ping") {
		message.channel.send("Pong!!!");
	} else if (command === "you") {
		message.channel.send("I am a bot Linda");
	}
});

bot.login(token);
