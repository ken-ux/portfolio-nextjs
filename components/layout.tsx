import styles from "./layout.module.css";
import Link from "next/link";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Typography from "@mui/material/Typography";
import Container from '@mui/material/Container';

const name = "Kenny";

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

      <main className={styles.container}>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <Typography variant="subtitle2" align="center">Made with care by Kenny Nguyen 🌱</Typography>
    </Container>
  );
}
