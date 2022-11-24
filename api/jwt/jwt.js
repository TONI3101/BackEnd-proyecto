const jwt = require('jsonwebtoken');

const generateSign = (id, mail) => {
    return jwt.sign({id, mail}, process.env.JWT_KEY, {expiresIn: '1h'});
}

module.exports = {generateSign}