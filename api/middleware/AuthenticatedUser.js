require('dotenv').config();
const {sign, verify} = require('jsonwebtoken');
// Creating a token
function createToken(user) {
    return sign({
        emailAdd: user.emailAdd,
        userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    });
}