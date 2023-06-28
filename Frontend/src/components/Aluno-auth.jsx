import React from 'react'
import { Container, Typography, Box, Button, TextField } from '@mui/material'

// função contém os campos de nome e senha para autenticação
const Signin = () =>{
    return(
        <div>
            <Container maxWidth = "xs">
                <Box 
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginTop:10
                }}
                >
                    <Typography
                    component  = "h1"
                    variant = "h5">
                        Sign In
                    </Typography>
                    
                    <TextField
                    required
                    fullWidth
                    autoFocus
                    margin = "normal"
                    
                    label = "Nome"
                    id = "nome"
                    name = "nome"
                    />

                    <TextField
                    required
                    fullWidth
                    margin = "normal"
                    
                    label = "Senha"
                    id = "password"
                    name = "password"
                    type = "password"
                    />

                    <Button
                    fullWidth
                    variant = "contained"
                    sx ={{
                        mt:2, mb:2
                    }}
                    >
                        Sign in
                    </Button>

                </Box>
            </Container>
        </div>
    )
}

export default Signin;
