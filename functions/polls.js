const discord = require("discord.js");

const channelID = "825108513771487262";
 
const emojis = {
  "1": ":one:",
  "2": ":two:",
  "3": ":three:",
  "4": ":four:",
  "5": ":five:",
  "6": ":six:",
  "7": ":seven:",
  "8": ":eight:",
  "9": ":nine:"
}

const generateChoices = (args) => {
  let result = [];

  for (let i in args) {
    if (i <= 1) continue;

    result.push({name: args[i], value: emojis[i - 1]});
  }

  return result;
}

const createPoll = (client, msg) => {
  const args = msg.content.substring(1, msg.content.length).split("\"").filter((element) => element.trim() != "");
  const choices = generateChoices(args);

  const embed = new discord.MessageEmbed()
    .setColor("#EB3B5A")
    .setTitle(args[1])
    .setAuthor(msg.author.username, msg.author.defaultAvatarURL)
    .addFields(choices)
    .setTimestamp();

  client.channels.cache.get(channelID).send(embed);
}

module.exports = {
  createPoll: createPoll
}