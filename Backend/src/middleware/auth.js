import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

/**
 * @function auth
 * @description Função responsável por verificar se o usuário está autenticado
 * @param {object} req Objeto de requisição
 * @param {object} res Objeto de resposta
 * @param {object} next Objeto de próxima função
 */
export default async (req, res, next) => {

    try {

        const header = req.headers.authorization;

        if (!header) {

            return res.status(401).json({message: 'Access token was not provided'})

        }

        const token = header.replace('Bearer ', '');

        const decoded = jwt.verify(token, process.env.API_SECRETE);

        req.header.user = decoded.user;

        return next();
    }
    catch(err) {

        return res.status(401).json({message: 'Aceess denied'})

    }
    
}