import React, { useEffect, useState } from 'react'
import AppBar from '../components/AppBar';
import { Button, Container, Box } from '@mui/material';

function MenuPrincipal() {
    const [cliente, setCliente] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8081/cliente/obtener/0")
        .then(res=>res.json())
        .then((result)=>{
            setCliente(result);
        }
    )
    },[])

    return (
        <div>
            <AppBar />
            <Container>
                <h1>Hola, Diego!</h1>
                <Box sx={{ display: 'flex', gap: 2 }}>
                    <Button variant='contained'>Depositar</Button>
                    <Button variant='contained'>Retirar</Button>
                    <Button variant='contained'>Transferir</Button>
                </Box>

                cliente:{cliente}
            </Container>
        </div>
    );
}

export default MenuPrincipal