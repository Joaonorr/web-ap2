import { IconButton, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";
import { Link } from "react-router-dom";

const ListarAlunos = () => {
    const [alunos, setAlunos] = useState([]);

    const [media, setMedia] = useState(0);

    const [reload, setReload] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8082/api/v1/aluno/")
            .then((response) => {
                setAlunos(response.data);
            })
            .catch((error) => console.log(error));

    }, [reload]);

    useEffect(() => {
        let somaIra = 0.0;
        let contador = 0;

        alunos.forEach((aluno) => {
            somaIra += aluno.ira;
            contador++;
        });

        if (contador > 0) {
            const novaMedia = somaIra / contador;
            setMedia(novaMedia);
        }

    }, [alunos]);


    function deleteProfessor(id) {
        if (window.confirm("Deseja Excluir?")){
            axios.delete("http://localhost:8082/api/v1/aluno/" + id)
            .then(()=> alert(`Aluno ${id} excluído!`))
            .catch((erro)=>erro)
        }
    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Alunos
            </Typography>
            <Box sx={{ width: '100%' }}>
                <TableContainer component={Paper} sx={{ mt: 2, mb: 4 }}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Nome</TableCell>
                                <TableCell>Curso</TableCell>
                                <TableCell>Ira</TableCell>
                                <TableCell>Editar</TableCell>
                                <TableCell>Excluir</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {alunos.map((aluno) => {                                
                                let backgroundColor = "";

                                if (aluno.ira < media) {
                                    backgroundColor = 'error.main';
                                }

                                return (
                                    <TableRow
                                        key={aluno.id}
                                        sx={{ backgroundColor, border: 0 } }
                                    >
                                        <TableCell>{aluno.nome}</TableCell>
                                        <TableCell>{aluno.curso}</TableCell>
                                        <TableCell>{aluno.ira}</TableCell>
                                        <TableCell>
                                            <Box component = {Link} to = {"../editarAluno/" + aluno.id}>
                                                <IconButton aria-label="edit" color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box>
                                                <IconButton aria-label="delete" color="error" onClick={()=>deleteProfessor(professor.id)}>
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                )
                            })
                            }
                            <Typography variant="h4" fontWeight="bold">
                                Média: {media}
                            </Typography>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </>
    );


}

export default ListarAlunos;