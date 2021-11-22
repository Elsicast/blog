const register = require("./register.js")

module.exports = (app) =>{
    app.use('/api/register',register)
}