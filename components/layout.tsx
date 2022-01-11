import styles from "./layout.module.css";
import Link from "next/link";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <Container maxWidth="xl" disableGutters>
      <ResponsiveAppBar />

      <Box
        component="main"
        sx={{
          p: { xs: "1rem 3rem", md: "2rem 6rem" },
          m: "0 auto 4rem",
        }}
      >
        {children}
      </Box>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <Typography variant="subtitle2" align="center" sx={{my: 2}}>
        © {new Date().getFullYear()} — Coded with care by Kenny Nguyen ɿ(｡･ɜ･)ɾ
      </Typography>
    </Container>
  );
}
