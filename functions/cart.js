const cart = require("../data/cart.json")

exports.handler = async () => {

    return {
        statusCode: 200,
        body: JSON.stringify(cart)
    }
}