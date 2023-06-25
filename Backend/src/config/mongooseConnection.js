/* -----------------------------
 * Define a conexão com o banco de dados
 * -----------------------------
 */

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Aluno from '../models/AlunoModel.js';

// carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// pega a variável de ambiente MONGO_URI
const { MONGO_URI } = process.env;

mongoose.Promise = global.Promise;

const DbContext = mongoose.connect(MONGO_URI, { useNewUrlParser: true }).then(() => {
    console.log('Conectado ao banco de dados');
}).catch((error) => {
    console.log('Erro ao conectar ao banco de dados');
    console.log(error);
});

export default DbContext;