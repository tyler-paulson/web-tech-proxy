const axios = require('axios')

exports.handler = async (event, context) => {
  const res = await axios.get('https://coffee.alexflipnote.dev/random.json')
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET'
    },
    body: JSON.stringify(res.data)
  }
}