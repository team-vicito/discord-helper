const schedule = require("node-schedule");
const fetch = require("node-fetch");

const channelID = "825133670461341696";

const getOffset = () => {
  return fetch("http://worldtimeapi.org/api/timezone/Europe/Berlin")
    .then(res => res.text())
    .then(body => parseInt(JSON.parse(body)["utc_offset"].split(":")[0]));
}

const startScheduler = (client) => {
  const offset = getOffset();
  const time = {
    second: 3,
    minute: 30,
    hour: (14 + offset),
    dayofweek: 4
  }

  const job = schedule.scheduleJob(`${time.second} ${time.minute} ${time.hour} * * ${time.dayofweek}`, () => {
    client.channels.cache.get(channelID).send("Denkt an das Meeting heute!");
  });
}

module.exports = startScheduler;