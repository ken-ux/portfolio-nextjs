import ResponsiveAppBar from "./ResponsiveAppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth={false} disableGutters>
      <ResponsiveAppBar />
      <Box
        component="main"
        sx={{
          py: "2rem",
          px: { xs: "3rem", md: "6rem" },
          m: "0 auto",
        }}
      >
        {children}
      </Box>

      <Box
        component="footer"
        sx={{
          pt: 8,
          pb: 4,
        }}
      >
        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} — Coded with care by Kenny Nguyen{" "}
          ɿ(｡･ɜ･)ɾ
        </Typography>
      </Box>
    </Container>
  );
}
