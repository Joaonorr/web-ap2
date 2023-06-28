/* -----------------------------
 * Definição do modelo de Aluno
 * 
 * Atributos:
 * - nome: string
 * - curso: string
 * - ira: float
 * -----------------------------
 */

import { Sequelize } from 'sequelize';
import DbContext from '../config/mongooseConnection.js';
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Aluno = new Schema({
    nome: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    curso: {
        type: String,
        required: true,
    },
    ira: {
        type: Number,
        required: true,
    },
});

export default mongoose.model('Aluno',Aluno);
