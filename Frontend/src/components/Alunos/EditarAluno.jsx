import { Typography, Box, TextField, Button, Select, MenuItem, InputLabel, FormControl} from "@mui/material"
import { useState, useEffect, useContext } from "react"
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Aluno from "../MyContext";


const Editar = () => {

    const [nome, setNome] = useState("")
    const [curso, setCurso] = useState("")
    const [ira, setIra] = useState("0.0")
    const navigate = useNavigate()

    let { id } = useParams()


    useEffect(
        () => {
            console.log(id)
            axios.get("http://10.0.119.215:8082/api/v1/aluno/"+ id)
                .then(
                    (res) => {
                        setNome(res.data.nome)
                        setCurso(res.data.curso)
                        setIra(res.data.ira)
                    }
                )
                .catch(error => console.log(error))
        }
        ,
        [id]
    )


    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedAluno =
        {
            nome, curso, ira
        }
        axios.put("http://10.0.119.215:8082/api/v1/aluno/"+ id, updatedAluno)
            .then(
                (res) => {
                    navigate("/listarProfessor")
                }
            )
            .catch(error => console.log(error))

    }

    return (
        <>
            <Typography variant="h5" fontWeight="bold">
                Editar Aluno
            </Typography>

            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    width: "80%"
                }}
            >

                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="nome"
                    label="Nome"
                    name="nome"
                    onChange={(event) => { setNome(event.target.value) }}
                    value={nome}
                />

                <TextField

                    margin="normal"
                    required
                    fullWidth
                    id="ira"
                    label="IRA"
                    name="ira"
                    type="number"
                    inputProps={{
                        maxLength: 10,
                        step: "0.1"
                    }}

                    onChange={(e) =>setIra(parseFloat(e.target.value))}
                    value = {ira}

                />

                <FormControl fullWidth sx = {{mt:2}}  >
                <InputLabel id = "select-curso-label" >
                    Curso
                </InputLabel>
                <Select labelId = "select-curso-label"
                label = "Curso"
                value = {curso}
                onChange = {
                (event)=>{
                    setCurso(event.target.value)
                }
            }
                >

                    <MenuItem value = "si">
                        Sistemas de Informação
                    </MenuItem>

                    <MenuItem value = "cc">
                        Ciência da Computação
                    </MenuItem>

                    <MenuItem value = "dd">
                        Design Digital
                    </MenuItem>

<MenuItem value = "es">
                        Engenharia de Software
                    </MenuItem>

<MenuItem value = "ec">
                        Engenharia da Computação
                    </MenuItem>

<MenuItem value = "rc">
                        Redes de Computadores
                    </MenuItem>

                </Select>
            </FormControl>

                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center"
                    }}

                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Cadastrar
                    </Button>
                </Box>

            </Box>

        </>
    )
}

export default Editar