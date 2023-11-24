import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PasswordField from '../components/PasswordField';
import { Container, Paper, Typography } from '@mui/material';

function PaginaLogin() {
    const [idCliente, setIdCliente] = useState('')
    const [contrasena, setContrasena] = useState('')

    const handleClick = (e) => {
        //e.preventDefault()
        //const cliente = { idCliente, contrasena }
        //console.log(cliente)
    }


    return (
        <Container sx={{ my: 8 }}>
            <Paper elevation={10} sx={{ p: 8 }}>
                <Typography variant='h1'>Unisabank</Typography>
                <Box
                    component="form"
                    sx={{ my:4, display: 'flex', flexDirection: 'column' }}
                    noValidate
                    autoComplete="off"
                >
                    <TextField id="outlined-basic" label="Id cliente" variant="outlined"
                        sx={{my: 2}}
                        value={idCliente}
                        onChange={(e) => setIdCliente(e.target.value)}
                    />
                    <TextField id="outlined-basic" label="Contraseña" variant="outlined"
                        sx={{my: 2}}
                        value={contrasena}
                        onChange={(e) => setContrasena(e.target.value)}
                    />
                    <PasswordField />
                </Box>
                <Button variant="contained" href="/home" onClick={handleClick}>Iniciar Sesión</Button>
            </Paper>
        </Container>
    );
}

export default PaginaLogin