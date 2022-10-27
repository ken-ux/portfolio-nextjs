import * as React from "react";
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from '@mui/material/Link';
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import Grid from "@mui/material/Grid";

export default function About() {
  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          mx: "auto",
        }}
      >
        <Box sx={{ maxWidth: 800 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            about me
          </Typography>
          <br />
          <Typography>
            I&apos;m a UX designer occasionally moonlighting as a frontend
            developer. Starting off as a mostly self-taught coder, my interests
            led me to UX in pursuit of a deeper understanding of why things are
            the way they are. I love expanding how people experience the world
            through visual and interactive design.
            <br />
            <br />
            A core aspect of my identity is being a first-generation
            Vietnamese-American growing up around South Seattle. In addition, as
            a queer person of color, I heavily draw inspiration from the
            resiliency of communities I am part of and continue to learn more
            about.
            <br />
            <br />
            I graduated from the University of Washington with an M.S. in
            Information Management. I did my undergrad at the same institution,
            where I earned a dual BA/BS in Public Health and Biology.
            <br />
            <br />
            Some of my hobbies include watercolor painting, digital art, film
            photography, comics (I primarily read DC), and mobile/PC gaming. A
            few game series I like include Pokémon, Shin Megami Tensei, Bravely,
            and Taiko no Tatsujin.
            <br />
            <br />
            Feel free to connect or reach out to me below!
            <br />
            <br />
          </Typography>
          <Grid
            container
            direction="column"
            sx={{ alignItems: { xs: "center", md: "start" } }}
          >
            <Grid item xs={3}>
              <IconButton
                color="primary"
                sx={{
                  transition: "opacity 170ms ease-in-out",
                  "&:hover": {
                    opacity: "50%",
                    transition: "opacity 170ms ease-in-out",
                  },
                }}
                component={Link}
                href="mailto:kennynguyenx@gmail.com"
              >
                <EmailIcon fontSize="large" />
              </IconButton>
              <IconButton
                color="primary"
                sx={{
                  transition: "opacity 170ms ease-in-out",
                  "&:hover": {
                    opacity: "50%",
                    transition: "opacity 170ms ease-in-out",
                  },
                }}
                component={Link}
                href="https://www.linkedin.com/in/kennyhn/"
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton
                color="primary"
                sx={{
                  transition: "opacity 170ms ease-in-out",
                  "&:hover": {
                    opacity: "50%",
                    transition: "opacity 170ms ease-in-out",
                  },
                }}
                component={Link}
                href="https://github.com/ken-ux/"
              >
                <GitHubIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
        {/* <Box>
          Insert picture here.
        </Box> */}
      </Box>
    </Layout>
  );
}
