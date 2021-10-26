const axios = require('axios')

exports.handler = async (event, context) => {
  const res = await axios.get('https://coffee.alexflipnote.dev/random.json')
  return {
    statusCode: 200,
    headers: {
      'Content-Type': "text/plain"
    },
    body: JSON.stringify(res.data)
  }
}