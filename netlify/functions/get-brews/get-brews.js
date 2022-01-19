const axios = require('axios')

exports.handler = async (event, context) => {
  const customer_name = event.queryStringParameters.name.replace(/\s/g, '').toLowerCase()
  const res = await axios.get('http://powerful-sierra-2165.herokuapp.com/api/v1/person/'+customer_name+'/status')
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