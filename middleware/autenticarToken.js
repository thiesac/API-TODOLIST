const jwt = require('jsonwebtoken')

function autenticarToken (req, res, next) {
    console.log("Eu sou um middleware");

    try{
        console.log(req.query.token)
        let decoded = jwt.verify(req.query.token, process.env.JWT_KEY)
        // console.log(decoded)
        next()
    }catch(e) {
        // console.log("Excessão:"+ e)
        res.sendStatus(403)
    }
}

module.exports = autenticarToken