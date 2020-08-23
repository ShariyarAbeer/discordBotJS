const Discord = require("discord.js");

module.exports = {
	name: "poll",
	description: "this is poll message",
	execute(message, args) {
		if (!args[0]) {
			const exampleEmbed = new Discord.MessageEmbed()
				.setColor("#0099ff")
				.setTitle("Some title")
				.setURL("https://discord.js.org/")
				.setDescription("this is poll message");

			message.channel.send(exampleEmbed);
		} else if (args[0]) {
			let msgArgs = args.join(" ");
			message.channel
				.send(`Rate this guyzz ${msgArgs}`)
				.then((messageReaction) => {
					messageReaction.react("😍");
					messageReaction.react("😟");
					messageReaction.react("😨");
					messageReaction.react("😐");
					messageReaction.react("😴");
					messageReaction.react("😂");
					message.delete(3000);
				});

			// let msgArgs = args.slice(1).join(" ");
			// message.channel
			// 	.send(" **" + msgArgs + "**")
			// 	.then((messageReaction) => {
			// 		messageReaction.react("like");
			// 		messageReaction.react("dislike");
			// 	});
		}

		// switch (args[0]) {
		// 	case "poll":
		// 		const exampleEmbed = new MessageEmbed()
		// 			.setColor("#0099ff")
		// 			.setTitle("Some title")
		// 			.setURL("https://discord.js.org/")
		// 			.setDescription("this is poll message");
		// 		if (!args[1]) {
		// 			message.channel.send(exampleEmbed);
		// 			break;
		// 		}
		// 		let msgArgs = args.slice(1).join(" ");
		// 		message.channel
		// 			.send(" **" + msgArgs + "**")
		// 			.then((messageReaction) => {
		// 				messageReaction.react("like");
		// 				messageReaction.react("dislike");
		// 			});
		// 		break;
		// }
	},
};
