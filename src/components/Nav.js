import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

const pages = [
  { title: 'O wydarzeniu', id: 'o-wydarzeniu' },
  { title: 'Agenda', id: 'agenda' },
  { title: 'Wystawcy', id: 'wystawcy' },
  { title: 'Galeria', id: 'galeria' },
  { title: 'Dla Pracodawcy', id: 'dla-pracodawcy' },
  { title: 'Kontakt', id: 'kontakt' },
];

function Nav() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100; // 100 pixels higher
      window.scroll({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        maxWidth: '100%',
        marginLeft: 'auto',
        display: 'flex',
        bgcolor: '#5E5E5E',
        height: '5vh',
        justifyContent: 'center',
        alignItems: 'center',
        mt: 0,
        elevation: 0,
        boxShadow: 'none',
        top: 0,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                width: '100%',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.id} onClick={() => handleNavigation(page.id)}>
                  {page.title}
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
            {pages.map((page) => (
              <Button
                key={page.id}
                onClick={() => handleNavigation(page.id)}
                sx={{ my: 2, color: 'white', display: 'block', fontSize: '0.8rem' }}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}

export default Nav;
