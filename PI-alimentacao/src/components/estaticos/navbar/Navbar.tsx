import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <AppBar position="static" className="colorb">
                <Toolbar variant="dense">
                    <Box className="cursor" >
                        <Typography variant="h5" color="inherit" className='paddingr disable'>
                            BlogAlimentaAção
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">
                        <Box mx={1} className="cursor">
                        <Link to= '/home' className= 'text-decorator-none'> 
                            <Typography variant="h6" color="inherit">
                                Home
                            </Typography>
                        </Link>
                        </Box>
                        <Box mx={1} className="cursor">
                        <Link to= '/sobrenos' className= 'text-decorator-none'> 
                            <Typography variant="h6" color="inherit">
                                SobreNós
                            </Typography>
                        </Link>
                        </Box>
                        <Box mx={1} className="cursor">
                        <Link to= '/contatos' className= 'text-decorator-none'> 
                            <Typography variant="h6" color="inherit">
                                Contatos
                            </Typography>
                        </Link>
                        </Box>
                        <Link to= '/login' className= 'text-decorator-none'> 
                        <Box mx={1} className="cursor">
                            <Typography variant="h6" color="inherit">
                                Logout
                            </Typography>
                        </Box>
                        </Link>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar;