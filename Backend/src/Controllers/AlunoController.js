
import Aluno from "../models/AlunoModel.js";
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

class AlunoController {

    /**
     * Método responsável por criar um novo aluno
     * 
     * @param {*} req
     * @param {*} res
     * @returns @see Aluno
     * 
     */
    async getAll(req, res) {
            
            try {
    
                const alunos = await Aluno.find();
    
                return res.json(alunos);
    
            } catch (error) {
                return res.status(500).json({ error: 'Erro ao buscar alunos' });
            }
    }


    /**
     * Método responsável por resgatar um aluno pelo seu id
     * 
     * @param {id} req
     * @param {*} res 
     * @returns @see Aluno
     *
     */
    async getById(req, res) {

        const { id } = req.params;

        try {

            const aluno = await Aluno.findById(id);

            if (!aluno) {
                return res.status(400).json({ error: 'Aluno não encontrado' });
            }

            return res.json(aluno);

        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar aluno' });
        }
    }

    async getAuthToken(req, res) {
        
        const { nome, senha } = req.body;

        if (!nome || !senha) {

            return res.status(400).json({ message: 'Email e senha são necessários' });

        }

        try {
                
            const aluno = await Aluno.findOne({ nome });

            if (!aluno) {

                return res.status(404).json({ message: 'User not found' });

            }

            if (aluno.senha === senha) {

                return res.status(200).json({ message: "Acesso autorizado" });

            }

            return res.status(401).json({ message: 'Senha inválida' });
    
        }
        catch (error) {
                
            return res.status(500).json({ message: error.message });
    
        }

    }

    /**
     * Método responsável por criar um novo aluno
     * 
     * @param {*} req
     * @param {*} res
     * @returns @see Aluno
     * 
     */
    async create(req, res) {
            
        const { nome, senha, curso, ira } = req.body;

        let erros = [];

        if (!nome || !curso || !ira || !senha) {
            erros.push({ message: 'Preencha todos os campos' });
        }

        if (typeof nome !== 'string') {
            erros.push({ message: 'Nome deve ser uma string' });
        }

        if (typeof curso !== 'string') {
            erros.push({ message: 'Curso deve ser uma string' });
        }

        if (typeof ira !== 'number') {
            erros.push({ message: 'IRA deve ser um número' });
        }

        if (typeof senha !== 'string') {
            erros.push({ message: 'Senha deve ser uma string' });
        }

        if (ira < 0 || ira > 10) {
            erros.push({ message: 'IRA deve ser um número entre 0 e 10' });
        }

        if (erros.length > 0) {
            return res.status(400).json({"errors": erros});
        }

        try {

            const aluno = Aluno.create({ nome, senha, curso, ira });

            return res.json(aluno);

        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar aluno' });
        }
    }

    /**
     * Método responsável por atualizar um aluno
     * 
     * @param {*} req
     * @param {*} res
     * @returns @see Aluno
     * 
     */
    async update(req, res) {
            
        const { id } = req.params;
        
        const { nome, curso, ira } = req.body;

        let erros = [];

        if (!nome || !curso || !ira) {
            erros.push({ message: 'Preencha todos os campos' });
        }

        if (typeof nome !== 'string') {
            erros.push({ message: 'Nome deve ser uma string' });
        }

        if (typeof curso !== 'string') {
            erros.push({ message: 'Curso deve ser uma string' });
        }

        if (typeof ira !== 'number') {
            erros.push({ message: 'IRA deve ser um número' });
        }

        if (ira < 0 || ira > 10) {
            erros.push({ message: 'IRA deve ser um número entre 0 e 10' });
        }

        if (erros.length > 0) {
            return res.status(400).json({"errors": erros});
        }

        try {

            const aluno = await Aluno.findById(id);

            if (!aluno) {
                return res.status(400).json({ error: 'Aluno não encontrado' });                
            }    

            await Aluno.updateOne({ _id: id }, { nome, curso, ira });

            return res.json("Aluno de id " + id + " atualizado com sucesso!");

        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar aluno' });
        }
    }

    /**
     * Método responsável por deletar um aluno
     * 
     * @param {*} req
     * @param {*} res
     * @returns @see Aluno
     */
    async delete(req, res) {
            
        const { id } = req.params;

        try {

            const aluno = await Aluno.findById(id);

            if (!aluno) {
                return res.status(400).json({ error: 'Aluno não encontrado' });                
            }    

            await Aluno.deleteOne({ _id: id });

            return res.json({ message: 'Aluno deletado com sucesso' });

        } catch (error) {
            return res.status(500).json({ error: 'Erro ao deletar aluno' });
        }
    }
}

export default new AlunoController();