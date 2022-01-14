import * as React from "react";
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectCard from "../components/ProjectCard";
import Grid from "@mui/material/Grid";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import IconButton from "@mui/material/IconButton";

export default function Index() {
  return (
    <Layout home>
      <Box sx={{ mt: 4, mb: 24 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "normal" }}
        >
          Kenny Nguyen
          <br />
          /ˈkɛni ŋwiəŋ˧˨/{" "}
          <IconButton color="inherit">
            <VolumeUpIcon />
          </IconButton>
          <br />
          <em>noun</em>
          <br />
          <ol>
            <li>a seattle-based product designer + frontend engineer</li>
            <li>a curator of digital experiences</li>
          </ol>
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <ProjectCard
          image="/images/vsrs_splash.png"
          title="VSRS Website Redesign"
          text="Text"
          tags="UI/UX, Web"
          link="/"
        />
        <ProjectCard
          image="/images/pura_splash.png"
          title="Pura"
          text="Mobile app for making fishing safer for coastal communities."
          tags="UI/UX, Mobile"
          link="/projects/pura"
        />
        <ProjectCard
          image="/images/packwithus_splash.png"
          title="Pack With Us"
          text="Service design that incorporates AI to prepare for trips."
          tags="Service Design, Web, UX Research"
          link="/"
        />
        <ProjectCard
          image="/images/collegedemo_splash.png"
          title="College Racial Demographics"
          text="Infographic of racial/gender diversity refined through user research."
          tags="Information Design"
          link="/"
        />
      </Grid>
    </Layout>
  );
}
