import * as React from "react";
import Image from "next/image";
import Link from "../src/Link";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

const ResponsiveAppBar = ({ home }) => {
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
      color={home ? "transparent" : "inherit"}
      sx={{ py: 8, px: { xs: 2, md: 8 } }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
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

          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Link
              href="/"
              sx={{ textDecoration: "none", my: 2, mx: 2, display: "block" }}
            >
              <Typography
                variant="h6"
                color={home ? "white" : "black"}
                sx={{
                  transition: "opacity 170ms ease-in-out",
                  "&:hover": {
                    opacity: "60%",
                    transition: "opacity 170ms ease-in-out",
                  },
                }}
              >
                Home
              </Typography>
            </Link>
            <Link
              href="/about"
              sx={{ textDecoration: "none", my: 2, mx: 2, display: "block" }}
            >
              <Typography
                variant="h6"
                color={home ? "white" : "black"}
                sx={{
                  transition: "opacity 170ms ease-in-out",
                  "&:hover": {
                    opacity: "60%",
                    transition: "opacity 170ms ease-in-out",
                  },
                }}
              >
                About
              </Typography>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1tHtYJSEmKTkuUpOlRGGnazmPU2zKWr7S/view"
              target="_blank"
              rel="noopener"
              sx={{ textDecoration: "none", my: 2, mx: 2, display: "block" }}
            >
              <Typography
                variant="h6"
                color={home ? "white" : "black"}
                sx={{
                  transition: "opacity 170ms ease-in-out",
                  "&:hover": {
                    opacity: "60%",
                    transition: "opacity 170ms ease-in-out",
                  },
                }}
              >
                Resume
              </Typography>
            </Link>
          </Box>

          {/* Mobile View */}
          <Box
            sx={{
              flexGrow: 1,
              color: "white",
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
              <MenuIcon />
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
              <MenuItem onClick={handleCloseNavMenu}>
                <Typography
                  color="black"
                  textAlign="center"
                  underline="none"
                  component={Link}
                  href="https://drive.google.com/file/d/1tHtYJSEmKTkuUpOlRGGnazmPU2zKWr7S/view"
                >
                  Resume
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              color: "white",
              display: { xs: "flex", md: "none" },
            }}
          >
            Kenny Nguyen
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
