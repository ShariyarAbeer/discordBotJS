const { Channel } = require("discord.js");

module.exports = {
	name: "bot",
	description: "this is bot message",
	execute(message, args) {
		// if (message.member.roles.cache.has("746859054844084244"))
		if (message.member.roles.cache.some((r) => r.name === "admin")) {
			message.channel.send("i am a bot Linda");
		} else {
			message.channel.send("You don't have the role to know this");
		}
	},
};
