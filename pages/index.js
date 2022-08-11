import * as React from "react";
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectCard from "../components/ProjectCard";
import Grid from "@mui/material/Grid";

export default function Index() {
  return (
    <Layout>
      <Box sx={{ mb: 18 }}>
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
          color="#0C80EC"
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
          seattle-based <span style={{ color: "#0C80EC" }}>ux designer</span> +
          frontend developer
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
      </Box>
      <Grid container spacing={4}>
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
    </Layout>
  );
}
