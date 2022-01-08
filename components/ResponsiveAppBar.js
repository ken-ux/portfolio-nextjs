import * as React from 'react';
import Link from '../src/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Home', 'About', 'Resume'];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" elevation={0} color="transparent" sx={{ my: 8, px: 8 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Desktop View */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, flexGrow: 1 }}
          >
            LOGO
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link href="/" key={page} sx={{ textDecoration: "none", my: 2, mx: 2, display: 'block' }}>
                <Typography variant="h6" color="white" sx={{ transition: 'opacity 170ms ease-in-out', '&:hover': { opacity: "60%", transition: 'opacity 170ms ease-in-out' } }}>
                  {page}
                </Typography>
              </Link>
            ))}
          </Box>

          {/* Mobile View */}
          <Box sx={{ flexGrow: 1, color: 'white', display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="links"
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
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography color="black" textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, color: 'white', display: { xs: 'flex', md: 'none' } }}
          >
            Kenny Nguyen
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;