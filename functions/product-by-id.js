const products = require("../data/products.json")

exports.handler = async ({ queryStringParameters }) => {
    const { id } = queryStringParameters;
    const product = products.find((p) => p.id == id);

    if(!product) {
        return {
            statusCode: 404,
            body: 'Not Found.'
        }
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify(product),
        }
    }
}