const Discord = require("discord.js");

const bot = new Discord.Client();

const token = "";

bot.once("ready", () => {
	console.log("Bot is Online!! Happy Coding !");
});

bot.login(token);
