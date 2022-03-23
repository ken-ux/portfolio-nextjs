import * as React from "react";
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../src/Link";
import IconButton from "@mui/material/IconButton";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function About() {
  return (
    <Layout home>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          my: 4,
          mx: "auto",
        }}
      >
        <Box sx={{ mb: 4, maxWidth: 800 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Hi, I&apos;m Kenny. ☺️
          </Typography>
          <Typography>
            I am a UX designer that occasionally moonlights as a frontend
            engineer.
            <br />
            <br />
            To me, design is a way to harness creativity, expand boundaries, and
            deliver intention. I hope to build my career with these principles
            in mind and creatie experiences that can endure and be adored. I
            want my work to show my passion for creating things that people will
            enjoy.
          </Typography>
          <br />
          <br />
          <Typography variant="h4" component="h2" gutterBottom>
            And here&apos;s a little more about me.
          </Typography>
          <Typography gutterBottom>
            I have an M.S. in Information Management from the University of
            Washington, where I specialized in User Experience. I also hold a
            dual BA/BS in Public Health and Biology from the same institution.
            <br />
            <br />
            I am a first-generation Vietnamese-American raised in and around
            South Seattle. As a queer person of color, I heavily draw
            inspiration from the resiliency of communities I am part of.
            <br />
            <br />
            Some of my hobbies include watercolor painting, digital art, film
            photography, comics (I am a DC fanboy), listening to R{"&"}B music,
            and gaming—I was born the same year as Pokémon, so there has to be a
            correlation there.
            <br />
            <br />
            Feel free to connect with me about anything you&apos;re curious
            about!
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">Let&apos;s connect!</Typography>
          <IconButton
            sx={{
              color: "white",
              transition: "opacity 170ms ease-in-out",
              "&:hover": {
                opacity: "50%",
                transition: "opacity 170ms ease-in-out",
              },
            }}
            component={Link}
            href="https://www.linkedin.com/in/kennyhn/"
          >
            <LinkedInIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            sx={{
              color: "white",
              transition: "opacity 170ms ease-in-out",
              "&:hover": {
                opacity: "50%",
                transition: "opacity 170ms ease-in-out",
              },
            }}
            component={Link}
            href="https://github.com/ken-ux/"
          >
            <GitHubIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            sx={{
              color: "white",
              transition: "opacity 170ms ease-in-out",
              "&:hover": {
                opacity: "50%",
                transition: "opacity 170ms ease-in-out",
              },
            }}
            component={Link}
            href="mailto:kennynguyenx@gmail.com"
          >
            <EmailIcon fontSize="inherit" />
          </IconButton>
        </Box>
      </Box>
    </Layout>
  );
}
