const { Channel } = require("discord.js");

module.exports = {
	name: "ping",
	description: "this is ping message",
	execute(message, args) {
		message.channel.send("pong!!!");
	},
};
