const axios = require('axios')

exports.handler = async (event, context) => {
  const q = event.queryStringParameters.q.replace(/\s/g, '').toLowerCase()
  // Use AXIOS to make a get request to the API with data parameters
  const res = await axios.get('https://trefle.io/api/v1/species/search', { 
    params: {
        token: process.env.TREFLE_API_KEY,
        q: q
    }
  })
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET'
    },
    body: JSON.stringify(res.data)
  }
}