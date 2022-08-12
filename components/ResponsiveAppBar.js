import * as React from "react";
import Image from "next/image";
import Link from "../src/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

function ResponsiveAppBar(props) {
  const [anchorElNav, setAnchorElNav] = React.useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      color="transparent"
      sx={{ py: { xs: 6, md: 8 }, px: { xs: 2, md: 8 } }}
    >
      <Container maxWidth={false}>
        <Toolbar disableGutters id="back-to-top-anchor">
          {/* Desktop View */}
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
            <Box
              component={Link}
              href="/"
              sx={{
                transition: "opacity 170ms ease-in-out",
                "&:hover": {
                  opacity: "50%",
                  transition: "opacity 170ms ease-in-out",
                },
              }}
            >
              <Image src="/icon.svg" height="50px" width="50px" alt="logo" />
            </Box>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "space-between",
            }}
          >
            <Link
              href="/"
              sx={{ textDecoration: "none", my: 2, mx: 2, display: "block" }}
            >
              <Typography
                variant="h6"
                color="black"
                sx={{
                  transition: "opacity 170ms ease-in-out",
                  "&:hover": {
                    opacity: "60%",
                    transition: "opacity 170ms ease-in-out",
                  },
                }}
              >
                home
              </Typography>
            </Link>
            <Link
              href="/about"
              sx={{ textDecoration: "none", my: 2, mx: 2, display: "block" }}
            >
              <Typography
                variant="h6"
                color="black"
                sx={{
                  transition: "opacity 170ms ease-in-out",
                  "&:hover": {
                    opacity: "60%",
                    transition: "opacity 170ms ease-in-out",
                  },
                }}
              >
                about
              </Typography>
            </Link>
            <IconButton
              color="inherit"
              disableRipple
              sx={{
                ml: 2,
                mr: 1,
                transition: "opacity 170ms ease-in-out",
                "&:hover": {
                  opacity: "60%",
                  transition: "opacity 170ms ease-in-out",
                },
              }}
              component={Link}
              href="mailto:kennynguyenx@gmail.com"
            >
              <EmailIcon fontSize="large" />
            </IconButton>
            <IconButton
              color="inherit"
              disableRipple
              sx={{
                mx: 1,
                transition: "opacity 170ms ease-in-out",
                "&:hover": {
                  opacity: "60%",
                  transition: "opacity 170ms ease-in-out",
                },
              }}
              component={Link}
              href="https://www.linkedin.com/in/kennyhn/"
            >
              <LinkedInIcon fontSize="large" />
            </IconButton>
          </Box>

          {/* Mobile View */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            <IconButton
              size="large"
              aria-label="links"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  color="black"
                  textAlign="center"
                  underline="none"
                  component={Link}
                  href="/"
                >
                  Home
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  color="black"
                  textAlign="center"
                  underline="none"
                  component={Link}
                  href="/about"
                >
                  About
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            component={Link}
            href="/"
            underline="none"
            noWrap
            color="black"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
            }}
          >
            Kenny Nguyen
          </Typography>
        </Toolbar>
      </Container>
      <ScrollTop {...props}>
        <Fab
          color="primary"
          sx={{ boxShadow: 0 }}
          size="small"
          aria-label="scroll back to top"
        >
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </AppBar>
  );
}
export default ResponsiveAppBar;
