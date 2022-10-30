import * as React from "react";
import Layout from "../components/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProjectCard from "../components/ProjectCard";
import Grid from "@mui/material/Grid";
import Image from "next/legacy/image";

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
            in the gaming industry
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
        <Grid item sx={{ display: { xs: "none", lg: "block" }, mx: "auto" }}>
          <Image
            src="/images/lightbulb.gif"
            width="360"
            height="450"
            alt="me and a lightbulb"
          />
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <ProjectCard
          image="/images/ddi_splash.png"
          title="DoubleDown Interactive"
          text="Work I've done as a UX designer at an established mobile gaming company."
          platform="Mobile"
          link="/projects/ddi"
        />
        <ProjectCard
          image="/images/vsrs_splash.png"
          title="VSRS Website Redesign"
          text="Redesign of a lab website informed through UX principles."
          platform="Web"
          link="/projects/vsrs"
        />
        <ProjectCard
          image="/images/pura_splash.png"
          title="Pura"
          text="Mobile app for making fishing safer for coastal communities."
          platform="Mobile"
          link="/projects/pura"
        />
        <ProjectCard
          image="/images/packwithus_splash.png"
          title="Pack With Us"
          text="Service design for a holistic trip-planning experience."
          platform="Web + Mobile"
          link="/projects/packwithus"
        />
      </Grid>
    </Layout>
  );
}
