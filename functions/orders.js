const { query } = require('./util/hasura');

exports.handler = async ({ queryStringParameters }) => {
    const { id } = queryStringParameters;
    const { orders } = await query({
        query: `
        query OrderByID {
            orders(where: {order: {_eq: "${id}"}}) {
              order
              email
              total
              type
            }
          }
        `
    })
    return {
        statusCode: 200,
        body: JSON.stringify(orders)
    }
}