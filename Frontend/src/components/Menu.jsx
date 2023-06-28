import { AppBar, Container, Toolbar, Typography, Box, Button } from "@mui/material"
import { Link } from "react-router-dom"

const MyMenu = () => {
   // Menu de navegação, com botões para acada operação:
   // cadastrar, autenticar, listar alunos (o editar e apagar está incluso em listar)
    return (
        <>
        <AppBar>
            <Container>
                <Toolbar>
                        <Typography variant ="h4" component = "h1"
                        sx = {{
                            textDecoration: "none",
                            color:"white",
                            fontFamily:"monospace",
                            letterSpacing:".3rem",
                            fontWeight:800
                        }}>
                            CRUD
                        </Typography>


                        <Box 
                        sx ={{
                            ml: 3, 
                            display:"flex",
                            justifyContent:"flex-end",
                            width: "100%"
                        }}>
                            
                            <Button sx ={{
                            color: "white",
                            my: 2,
                        }}
                        component = {Link}
                    to = {"cadastrarAluno"}
                        >
                                Cadastrar Aluno
                </Button>

                        <Button sx ={{
                            color: "white",
                            my: 2,
                        }}
                    component = {Link}
                    to = {"listarAluno"}
                        >
                                Listar Alunos
                </Button>
                <Button sx ={{
                            color: "white",
                            my: 2,
                        }}
                    component = {Link}
                    to = {"listarAlunoAprovado"}
                        >
                                Listar Alunos Aprovados
                </Button>

                        <Button sx = {{
                            color:"white",
                            my: 2
                        }}
                        component = {Link}
                        to = {"autenticarAluno"}
                        >
                            Sign In
                        </Button>
                        </Box>

                </Toolbar>
            </Container>
        </AppBar>
        </>
    )
}

export default MyMenu