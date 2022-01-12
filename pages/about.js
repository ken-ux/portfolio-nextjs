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
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          my: 4,
          mx: "auto",
        }}
      >
        <Box sx={{ mb: 4, maxWidth: 600 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Hi, I'm Kenny. ☺️
          </Typography>
          <Typography>
            I am a product designer that occasionally moonlights as a frontend
            engineer.
            <br />
            <br />I envision design as a way to harness creativity, expand
            boundaries, and deliver intention.
            <br />
            <br />I hope to build my career with these principles in mind;
            creating experiences that are refined enough to endure, be adored,
            and contribute to social good.
          </Typography>
          <br />
          <br />
          <Typography variant="h4" component="h2" gutterBottom>
            And here's my story.
          </Typography>
          <Typography gutterBottom>
            I am a first-generation Vietnamese-American raised around South
            Seattle. I recently finished a M.S. in Information Management from
            the University of Washington, where I specialized in User
            Experience. As a queer person of color, I heavily draw inspiration
            from the resiliency of communities I am part of. To be where I am
            today meant struggling through privileged spaces while finding my
            own voice.
            <br />
            <br />
            Contrary to some in my field, I didn't start off wanting to be a
            designer. I entered university as a pre-med student, eventually
            earning a dual degree in Biology and Public Health. However, my
            younger-self dreamed of making a career that encapsulated
            creativity, self-expression, and storytelling. So, I made the
            difficult decision during my senior year to forego what I had been
            working towards to pursue my passions.
            <br />
            <br />I finished up my degrees while taking a few foundational
            courses in computer science, informatics, and design. I briefly
            interned as a software engineer upon graduation, then entered a
            graduate program to solidify my design techniques and UX
            methodology.
            <br />
            <br />
            And that's where I'm at today: A product designer who was motivated
            enough to take a few steps back so they could begin stepping in the
            right direction.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6">Let's connect!</Typography>
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
