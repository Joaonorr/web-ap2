import { IconButton, Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from "axios";

const ListarAlunos = () => {
    const [alunos, setAlunos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/api/v1/aluno/")
            .then((response) => setAlunos(response.data))
            .catch((error) => console.log(error));
    }
    , []);

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
                                return (
                                    <TableRow
                                        key={aluno.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{aluno.nome}</TableCell>
                                        <TableCell>{aluno.curso}</TableCell>
                                        <TableCell>{aluno.ira}</TableCell>
                                        <TableCell>
                                            <Box>
                                                <IconButton aria-label="edit" color="primary">
                                                    <EditIcon />
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                        <TableCell>
                                            <Box>
                                                <IconButton aria-label="delete" color="error">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </Box>
                                        </TableCell>
                                    </TableRow>

                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>

        </>
    );


}

export default ListarAlunos;