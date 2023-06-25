
import Aluno from "../models/AlunoModel.js";

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

    /**
     * Método responsável por criar um novo aluno
     * 
     * @param {*} req
     * @param {*} res
     * @returns @see Aluno
     * 
     */
    async create(req, res) {
            
        const { nome, curso, ira } = req.query;

        try {

            const aluno = await Aluno.create({ nome, curso, ira });

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
        const { nome, curso, ira } = req.query;

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