require('dotenv').config(); 
const discord = require("discord.js");
const client = new discord.Client();

const polls = require("./functions/polls");
const fun = require("./functions/fun");

const commands = {
  "roll": fun.roll,
  "poll": polls.createPoll
}

client.on("ready", () => {
  console.log(`Client online as ${client.user.tag} on ${client.guilds.cache.map((guild) => guild.name)}!`);
});

client.on("message", (msg) => {
  if (msg.author.bot || !msg.channel.type == "text" || !msg.content.startsWith(process.env.PREFIX)) return;

  const command = msg.content.toLowerCase().substring(1, msg.content.length).split(" ")[0];

  if (commands[command]) commands[command](client, msg);
});

client.login();
