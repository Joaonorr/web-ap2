import Aluno from "../models/AlunoModel.js";

const InitialDataAlunos = () => {
    let aluno1 = new Aluno({
        nome: 'João',
        senha: '123',
        curso: 'cc',
        ira: 8.5
    });

    let aluno2 = new Aluno({
        nome: 'Maria',
        senha: '123',
        curso: 'es',
        ira: 9.5
    });

    let aluno3 = new Aluno({
        nome: 'José',
        senha: '123',
        curso: 'cc',
        ira: 7.5
    });

    let aluno4 = new Aluno({
        nome: 'Ana',
        senha: '123',
        curso: 'ec',
        ira: 8.0
    });

    let aluno5 = new Aluno({
        nome: 'Pedro',
        senha: '123',
        curso: 'si',
        ira: 9.0
    }); 

    try {

        if (Aluno.findOne({ nome: aluno1.nome }) != 'João') {
            Aluno.create(aluno1);
        }

        if (Aluno.findOne({ nome: aluno2.nome }) != 'Maria') {
            Aluno.create(aluno2);
        }

        if (Aluno.findOne({ nome: aluno3.nome }) != 'José') {
            Aluno.create(aluno3);
        }

        if (Aluno.findOne({ nome: aluno4.nome }) != 'Ana') {
            Aluno.create(aluno4);
        }

        if (Aluno.findOne({ nome: aluno5.nome }) != 'Pedro') {
            Aluno.create(aluno5);
        }
    }
    catch (error) {
        console.log(error);
    }
    console.log('Alunos criados com sucesso');
}

export default InitialDataAlunos;