
const doomsdayClock = require("doomsday-clock")

exports.handler = async (event, context) => {
  const { seconds, source, time } = await doomsdayClock();
  const response = {
    seconds : seconds,
    source: source,
    time: time
  }
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET'
    },
    body: JSON.stringify(response)
  }
}