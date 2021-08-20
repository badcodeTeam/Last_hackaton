const jwt = require('jsonwebtoken');


//Вообще авторизация делает
class TokenService {

    generateToken (payload) {
        const accessToken = jwt.sign(payload, process.env.SECRET, {expiresIn: '30d'});
        return {
            accessToken
        }
    }

    validateAcessToken (token) {
        try{
            const userData = jwt.verify(token, process.env.SECRET)
            return userData
        } catch (e) {
            return null
        }
    }

}

module.exports = new TokenService();