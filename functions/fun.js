const roll = (_, msg) => {
  const args = msg.content.substring(1, msg.content.length).split(" ");
  let reply;

  switch (args.length) {
    case 1:
      reply = Math.floor(Math.random() * 6);
      break;
    case 2:
      reply = Math.floor(Math.random() * args[1]);
      break;
    case 3:
      reply = Math.floor(Math.random() * (args[2] - args[1]) + args[2]);
      break;
    default:
      msg.reply("Syntax: !roll [{}] oder [{max}] oder [{min} {max}]");
      return;
  }

  if (!isNaN(reply)) msg.reply(`${msg.author.username} würfelt ${reply}`);
}

module.exports = {
  roll: roll
}