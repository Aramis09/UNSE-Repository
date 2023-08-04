require('dotenv').config();
const jwt = require('jsonwebtoken')

// middleware to validate token (rutas protegidas)
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')

    if (!token) return res.status(401).json({ error: 'Acceso denegado' })
    const verified = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = verified
    next() // continuamos
}

module.exports = verifyToken;