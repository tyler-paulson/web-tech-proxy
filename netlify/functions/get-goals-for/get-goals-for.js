const axios = require('axios')
const https = require('https')

exports.handler = async (event, context) => {
  const team = event.queryStringParameters.team.replace(/\s/g, '').toLowerCase()
  const opts = {
    httpsAgent: new https.Agent({
      rejectUnauthorized: false
    })
  }
  const res = await axios.get('https://morehockeystats.com/teams/en?table=1&season=2021&stage=2&view=against&page=1&hl=', opts)
  var ret = {};
  res.data.data.forEach((item, index) => {
    console.log(`${index} : ${item}`);
    if(item[0]._id.toLowerCase() === team) {
      ret.goals = parseInt(item[1], 10);
    }
  });
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET'
    },
    body: JSON.stringify(ret)
  }
}