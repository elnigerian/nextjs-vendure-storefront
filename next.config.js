require('dotenv').config()
module.exports = {
    env: {
        // Reference a variable that was defined in the .env file and make it available at Build Time
        API_HOST: process.env.API_HOST,
        API_PORT: process.env.API_PORT,
        SHOP_API_PATH: process.env.SHOP_API_PATH,
    },
}
