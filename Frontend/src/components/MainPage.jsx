import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyMenu from "./Menu"
import { Container } from "@mui/material"
import ListarAlunos from "./Alunos/ListarAlunos"
import Cadastrar from "./Alunos/CadastrarAlunos"
import Editar from "./Alunos/EditarAluno"
import ListarAlunosAprovados from "./Alunos/ListarAlunosAprovados"
import Signin from "./Aluno-auth"

const MainPage = ( ) => {
    return (
        // página inicial que contém as rotas para as demais páginas
        <BrowserRouter>
        <MyMenu/>
        <Container>
       <Routes>
        <Route path = "cadastrarAluno" element = {<Cadastrar/>} />
        <Route path = "editarAluno" element = {<Editar/>} />
        <Route path = "listarAluno" element = {<ListarAlunos/>} />
        <Route path = "listarAlunoAprovado" element = {<ListarAlunosAprovados/>} />
        <Route path = "autenticarAluno" element = {<Signin/>} />
        </Routes> 
        </Container>
        </BrowserRouter>
    )
}

export default MainPage