const schedule = require('node-schedule');

const channelID = "825133670461341696";

const startScheduler = (client) => {
  const job = schedule.scheduleJob("* 30 12 * * 4", () => {
    client.channels.cache.get(channelID).send("Denkt an das Meeting heute!");
  });
}

module.exports = startScheduler;