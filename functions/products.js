const { query } = require('./util/hasura');

exports.handler = async () => {
    const { products } = await query({
        query: `
            query AllProducts {
                products {
                    id
                    name
                    img
                    price
                    description
                }
            }
        `
    })
    return {
        statusCode: 200,
        body: JSON.stringify(products)
    }
}