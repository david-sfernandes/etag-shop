const { query } = require('./util/hasura');

exports.handler = async ({ queryStringParameters }) => {
    const { id } = queryStringParameters;
    const { products }  = await query({
        query: `
            query MyQuery {
                products(where: {id: {_eq: "${id}"}}) {
                description
                id
                img
                name
                price
                }
            }
        `
    })
    return {
        statusCode: 200,
        body: JSON.stringify(products[0]),
    }
    
}