const jwt = require('jsonwebtoken');

const getJwtToken = (userId) => {
    return jwt.sign({ userId: userId }, process.env.JWT_SECRET_KEY, { expiresIn: '1d' });
}

module.exports = getJwtToken;