import styles from "./layout.module.css";
import Link from "next/link";
import ResponsiveAppBar from "./ResponsiveAppBar";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const name = "Kenny";

export default function Layout({
  children,
  home,
}: {
  children: React.ReactNode;
  home?: boolean;
}) {
  return (
    <Box>
      <ResponsiveAppBar />

      <main className={styles.container}>{children}</main>

      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}

      <Typography align="center">Made with care by Kenny Nguyen 🌱</Typography>
    </Box>
  );
}
