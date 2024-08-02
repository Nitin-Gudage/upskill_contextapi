import { AppBar, Box, Button, Container, Toolbar } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    
    const pages = [
        { name: 'Home', path: '/' }
    ];

   
    const activeStyle = {
        fontWeight: 'bold',
        color: '#921A40',
        textDecoration: 'none',
    };

    const inactiveStyle = {
        color: 'inherit',
        textDecoration: 'none',
    };

    return (
        <AppBar position="sticky" sx={{ bgcolor: 'transparent', backdropFilter: 'blur(20px)', color: 'black' }}>
            <Container maxWidth="xl">
                <Toolbar>
                    <AdbIcon sx={{ mr: 1 }} />
                    <NavLink
                        to='/'
                        style={{
                            fontWeight: 800, color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </NavLink>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                        {pages.map((page) => (
                            <NavLink
                                to={page.path}
                                key={page.name}
                                style={({ isActive }) => isActive ? activeStyle : inactiveStyle}
                            >
                                {page.name}
                            </NavLink>
                        ))}
                    </Box>
                    <Box>
                        <NavLink to='/login'>
                            <Button variant='outlined' sx={{ mr: 1 }}>
                                Login
                            </Button>
                        </NavLink>
                        <NavLink to='/signup'>
                            <Button variant='outlined'>
                                Signup
                            </Button>
                        </NavLink>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default NavBar;
