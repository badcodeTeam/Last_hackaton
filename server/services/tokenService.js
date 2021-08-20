const jwt = require('jsonwebtoken');


//Вообще авторизация делает
class TokenService {

    generateToken (payload) {
        const accessToken = jwt.sign(payload, process.env.SECRET, {expiresIn: '30d'});
        return {
            accessToken
        }
    }

}

module.exports = new TokenService();