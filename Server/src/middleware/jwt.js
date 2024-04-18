const dotenv = require('dotenv').config();
const jwt = require('jsonwebtoken');
const verify = async (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }
    try {
        console.log('flag');
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        console.log('\n\n\n\n\n\n\n\n\n\n\n');
        console.log(process.env.JWT_SECRET);
        console.log('\n\n\n\n\n\n\n\n\n\n\n');
        req.idUser = decoded.idUser;
        next();
    } catch (err) {
        return res.status(401).send('Invalid token.');
    }
}
exports.verify = verify;