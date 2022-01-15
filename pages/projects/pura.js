import * as React from "react";
import Layout from "../../components/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
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
        <Typography variant="body2">Jan. 2020: 1-Day Hackathon</Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 4 }}>
          <strong>Pura</strong>
        </Typography>
        <Typography variant="body2">
          An app for making environmental data accessible for coastal
          communities.
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
          src="/images/pura/pura_banner.png"
          width="3000px"
          height="900px"
        />
      </Box>

      <Grid
        container
        direction="column"
        rowSpacing={10}
        maxWidth="1000px"
        sx={{ mx: "auto" }}
      >
        <Grid item>
          <Typography variant="h4">
            <strong>The Challenge</strong>
          </Typography>
          <Typography>
            Our team was tasked with creating an app fitting the theme of the
            hackathon: Driven by Difference. Within a 12-hour timeframe, our
            team had to ideate, design, prototype, and present a case for an app
            that aligned with what our notions of empowering difference meant.
          </Typography>
        </Grid>

        <Grid container item columnSpacing={8}>
          <Grid item xs={12}>
            <Typography variant="h4">My Role</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              <strong>Project Coordination</strong>
              <br />
              I facilitated the ideation process to focus the vision of our app.
              I also onboarded the team in using Figma, such as handling frames
              and interactions. Overall, I coordinated how we went about
              creating our app from idea to prototype.
              <br />
              <br />
              <strong>UX Writing</strong>
              <br />I handled UX writing for the text descriptions included in
              our hazard information and reporting screens. This included any
              buttons or labels, as well as consistent copy across all texts.
              <br />
              <br />
              <strong>Prototyping, and Reiteration</strong>
              <br />I led interactive prototyping for the mid-fidelity design.
              In addition, I independently iterated on our initial design to
              create a high-fidelity version.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              <strong>Team Members</strong>
              <br />
              Gabrielle
              <br />
              Bely
              <br />
              Lauren
              <br />
              <br />
              <strong>Timeframe</strong>
              <br />
              12 Hours
              <br />
            </Typography>
          </Grid>
        </Grid>

        <Grid container item columnSpacing={8}>
          <Grid item xs={12}>
            <Typography variant="h4">Ideation</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              We started the ideation process by writing down focus statements
              exploring issues of accessibility for people of color, low-income,
              and disabled folks. The list was pared down based on originality
              and feasibility for development within the hackathon's timeframe.
              <br />
              <br />
              Our chosen idea was based on the cultural influence of coastal
              indigenous communities in the Pacific Northwest, where our team
              and the hackathon was based.
              <br />
              <br />
              <strong>Artificial Need vs. Fundamental Need</strong>
              <br />
              An core part of our focus statements was demonstrating a clear{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>method</span>
              ,{" "}
              <span style={{ color: "blue", fontWeight: "bold" }}>people</span>,
              and <span style={{ color: "red", fontWeight: "bold" }}>need</span>
              . In doing so, we believed it would guide us towards
              well-articulated ideas that addressed fundamental needs rather
              than surface-level desires.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5">
              <em>
                My focus is{" "}
                <span style={{ color: "green", fontWeight: "bold" }}>
                  centralized information
                </span>{" "}
                that helps{" "}
                <span style={{ color: "blue", fontWeight: "bold" }}>
                  coastal communities
                </span>{" "}
                <span style={{ color: "red", fontWeight: "bold" }}>
                  harvest and fish safely
                </span>
                .
              </em>
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant="h4">Informaton Architecture</Typography>
          <Box sx={{ textAlign: "center" }}>
            <Image src="/images/pura/info_arch.svg" width={700} height={600} />
          </Box>
        </Grid>

        <Grid item>
          <Typography variant="h4">Wireframing</Typography>
          <Typography>Time frame, responsibilities</Typography>
        </Grid>

        <Grid item>
          <Typography variant="h4">Final Design</Typography>
          <Typography>Time frame, responsibilities</Typography>
        </Grid>
      </Grid>
    </Layout>
  );
}
