import { Router } from "express";
import AlunoController from "../Controllers/AlunoController.js";

const router = Router();

/**
 * Rota responsável por resgatar todos os alunos
 * 
 * @returns @see Aluno
 */
router.get('/aluno', AlunoController.getAll);

/**
 * Rota responsável por resgatar um aluno pelo seu id
 * 
 * @param {id} req
 * @returns @see Aluno
 */
router.get('/aluno/:id', AlunoController.getById);

/**
 * Rota responsável por criar um novo aluno
 * 
 * @param {*} req
 * @returns @see Aluno
 * 
 */
router.post('/aluno', AlunoController.create);

/**
 * Rota responsável por atualizar um aluno
 * 
 * @param {*} req
 * @returns @see Aluno
 * 
 */
router.put('/aluno/:id', AlunoController.update);

/**
 * Rota responsável por deletar um aluno
 * 
 * @param {*} req
 * @returns @see Aluno
 * 
 */
router.delete('/aluno/:id', AlunoController.delete);

export default router;