import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"
import axios from "axios"
import { useState } from "react"

const Cadastrar = () => {

    const [senha, setSenha] = useState("")
    const [nome, setNome] = useState("")
    const [ira, setIra] = useState(0.0)
    const [curso, setCurso] = useState("cc")

    const Aluno = {nome, senha, ira, curso}

   async function handleSubmit(event){
        event.preventDefault()
        console.log(nome)
        console.log(senha)
        console.log(ira)
        console.log(curso)
        await axios.post("http://localhost:8082/api/v1/aluno/", Aluno)

    }

    return(
        <>
        <Typography variant="h5" fontWeight="bold" sx = {{ mt: 10}}>
        Cadastrar Aluno
        </Typography>

        <Box 
        component = "form"
        onSubmit={handleSubmit}
        sx = {{ display: "flex", flexDirection: "column", justifyContent: "center"}}>

            <TextField 
            required
            margin = "normal"
            requiredfullwidth
            id = "nome"
            name = "nome"
            label = "Nome"
            autoFocus
            onChange = {
                (event)=>{
                    setNome(event.target.value)
                }
            }
            />

            <TextField
                    required
                    fullWidth
                    margin = "normal"
                    
                    label = "Senha"
                    id = "password"
                    name = "password"
                    type = "password"
                    onChange={
                        (event)=>{
                            setSenha(event.target.value)
                        }
                    }
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


            <Box sx = {{ display: "flex", justifyContent: "center"}}>
                <Button
            type = "submit"
            variant = "contained"
            fullWidth
            sx ={{
                my: 3
            }}
            onClick={
                handleSubmit
            }
            >
                Cadastrar
            </Button>
            </Box>
        </Box>
        </>
    )
}
export default Cadastrar