import * as React from "react";
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectCard from "../components/ProjectCard";
import Grid from "@mui/material/Grid";
import Image from "next/image";

export default function Index() {
  return (
    <Layout>
      <Grid container>
        <Grid item sx={{ mb: 18 }}>
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
            color="primary"
          >
            Kenny Nguyen
            <br />
          </Typography>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            /ˈkɛni ŋwiəŋ˧˨/
            <br />
            <em>noun</em>
            <br />
            <br />
            seattle-based{" "}
            <Typography variant="span" color="primary">
              ux designer
            </Typography>{" "}
            + frontend developer
            <br />
            <br />
            <br />
          </Typography>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "normal" }}>
            <strong>currently:</strong> ux designer @ doubledown interactive 👾
            <br />
            <br />
            <br />
            <br />
            view my work below ↓
          </Typography>
        </Grid>
        <Grid item sx={{display: {xs: "none", lg: "block"}, mx: "auto"}}>
          <Image
            src="/images/lightbulb.gif"
            width="360"
            height="450"
            alt="me and a lightbulb"
          />
        </Grid>
      </Grid>
      <Grid container spacing={4} sx={{ mb: 12 }}>
        <ProjectCard
          image="/images/vsrs_splash.png"
          title="VSRS Website Redesign"
          text="Redesign of a lab website informed through UX principles."
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
        <ProjectCard
          image="/images/collegedemo_splash.png"
          title="Demographics of Washington Universities"
          text="Infographics of racial and gender diversity refined through user research."
          tags="Information Design, Data Science, UX Research"
          link="/projects/collegeinfographic"
        />
      </Grid>
      <Typography variant="h5" component="h2">
        <strong>miscellaneous projects</strong>
        <br />
        <br />
      </Typography>
      <Grid container spacing={4}>
        <ProjectCard
          image="/images/cookies_splash.png"
          title="Chocolate Chip Cookie Ingredients Analysis"
          text="Notebook detailing my process and insights analyzing common cookie ingredients."
          tags="Data Science, Data Visualization, HCDE"
          link="https://www.kaggle.com/code/kennynguyen2/hcde-530-a5"
          external
        />
        <ProjectCard
          image="/images/meteors_splash.png"
          title="Meteorite Diversity and Occurrence Analysis"
          text="Notebook detailing my process and insights analyzing fragments from celestial bodies."
          tags="Data Science, Data Visualization, HCDE"
          link="https://www.kaggle.com/code/kennynguyen2/hcde-530-mini-project-1b"
          external
        />
      </Grid>
    </Layout>
  );
}
