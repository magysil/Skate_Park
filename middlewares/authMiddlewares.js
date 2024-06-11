
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req.query.token; 
    const secretKey =process.env.SECRET_KEY
    if (!token) {
        return res.status(403).send('Token no proporcionado');
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).send('Token no válido');
    }
};

