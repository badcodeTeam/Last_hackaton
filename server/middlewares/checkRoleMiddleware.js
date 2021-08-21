const jwt = require('jsonwebtoken')
const ApiError = require('../handler/apiError')

module.exports = function(role) {
    return function (req, res, next) {
        if (req.method === "OPTIONS") {
            next()
        }
        try {
            const token = req.headers.authorization.split(' ')[1] // Bearer asfasnfkajsfnjk
            if (!token) {
                return next(ApiError.UnauthorizedError());
            }
            const decoded = jwt.verify(token, process.env.SECRET)
            if (decoded.role !== role) {
                return next(ApiError.BadRequestError('Нет доступа'))
            }
            req.user = decoded;
            next()
        } catch (e) {
            return next(ApiError.UnauthorizedError());
        }
    };
}