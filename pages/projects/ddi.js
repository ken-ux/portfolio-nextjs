import * as React from "react";
import Layout from "../../components/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/legacy/image";
import Grid from "@mui/material/Grid";

export default function Pura() {
  return (
    <Layout>
      <Box
        maxWidth="500px"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          mb: 4,
        }}
      >
        <Typography variant="body2">UI + Mobile Design</Typography>
        <Typography variant="body2">Mar. 2022 - Present</Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 4 }}>
          <strong>DoubleDown Interactive</strong>
        </Typography>
        <Typography>
          Work I&apos;ve done as a UX designer creating AAA mobile games.
        </Typography>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100vw",
          left: "calc(-50vw + 50%)",
          my: 4,
        }}
      >
        <Image
          src="/images/ddi/ddi_banner.png"
          width={3000}
          height={900}
          alt="project banner"
          priority={true}
        />
      </Box>

      <Grid
        container
        direction="column"
        rowSpacing={10}
        maxWidth="xl"
        sx={{ mx: "auto" }}
      >
        <Grid container item columnSpacing={8} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">My Role</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography gutterBottom>
              <strong>Instilling Foundation for UX</strong>
              <br />
              etc
              <br />
              <br />
              <strong>International Collaboration</strong>
              <br />
              etc
              <br />
              <br />
              <strong>Full-Cycle Design and Iteration</strong>
              <br />
              etc
            </Typography>
          </Grid>
        </Grid>

        <Grid container item columnSpacing={8} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Company Background</Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography gutterBottom>
              <strong>Instilling Foundation for UX</strong>
              <br />
              etc
              <br />
              <br />
              <strong>International Collaboration</strong>
              <br />
              etc
              <br />
              <br />
              <strong>Full-Cycle Design and Iteration</strong>
              <br />
              etc
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
