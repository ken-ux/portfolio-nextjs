import * as React from "react";
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectCard from "../components/ProjectCard";
import Grid from "@mui/material/Grid";

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
          /ˈkɛni ŋwiəŋ˧˨/
          <br />
          <em>noun</em>
          <br />
          <ol>
            <li>seattle-based product designer + frontend engineer</li>
            <li>curator of digital experiences</li>
          </ol>
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <ProjectCard
          image="/images/vsrs_splash.png"
          title="VSRS Website Redesign"
          text="Redesign of a research website for clarity and stronger identity."
          tags="UI/UX, Web Design, UX Research"
          link="/projects/vsrs"
        />

        <ProjectCard
          image="/images/pura_splash.png"
          title="Pura"
          text="Mobile app for making fishing safer for coastal communities."
          tags="UI/UX, Mobile Design"
          link="/projects/pura"
        />
        <ProjectCard
          image="/images/packwithus_splash.png"
          title="Pack With Us"
          text="Service design for a holistic trip-planning experience."
          tags="Service Design, Web Design, UX Research"
          link="/projects/packwithus"
        />
        <Box sx={{ display: "none" }}>
          <ProjectCard
            image="/images/collegedemo_splash.png"
            title="Demographics of Washington Universities"
            text="Infographic of racial and gender diversity refined through user research."
            tags="Information Design, Data Science, UX Research"
            link="/"
          />
        </Box>
      </Grid>
    </Layout>
  );
}
