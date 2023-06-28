import { BrowserRouter, Route, Routes } from "react-router-dom"
import MyMenu from "./Menu"
import { Container } from "@mui/material"
import ListarAlunos from "./Alunos/ListarAlunos"
import Cadastrar from "./Alunos/CadastrarAlunos"
import Editar from "./Alunos/EditarAluno"

const MainPage = ( ) => {
    return (
        <BrowserRouter>
        <MyMenu/>
        <Container>
       <Routes>
        <Route path = "cadastrarAluno" element = {<Cadastrar/>} />
        <Route path = "editarAluno" element = {<Editar/>} />
        <Route path = "listarAluno" element = {<ListarAlunos/>} />
        </Routes> 
        </Container>
        </BrowserRouter>
    )
}

export default MainPage