import * as React from "react";
import Layout from "../../components/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function Vsrs() {
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
        <Typography variant="body2">Web Design, UX Research</Typography>
        <Typography variant="body2">Fall 2021: 9-Week Project</Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 4 }}>
          <strong>VSRS Website Redesign</strong>
        </Typography>
        <Typography variant="body2">
          A redesign of the Visualization Studies Research Studio's website
          based in stakeholder interviews and user research.
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
        <Grid container item rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">
              <strong>The Challenge</strong>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Our team was tasked in redesigning a website to align with typical
              standards for a research-based lab/studio while emphasizing its core
              focus in visualization studies.
            </Typography>
          </Grid>
        </Grid>

        <Grid container item columnSpacing={8} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">My Role</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              <strong>Research</strong>
              <br />
              I facilitated the ideation process to focus the vision of our app.
              I also onboarded the team in using Figma, such as handling frames
              and interactions. Overall, I coordinated how we went about
              creating our app from idea to prototype.
              <br />
              <br />
              <strong>Wireframing, Design System,</strong>
              <br />I handled UX writing for the text descriptions included in
              our hazard information and reporting screens. This included any
              buttons or labels, as well as ensuring consistent copy across
              texts.
              <br />
              <br />
              <strong>Sketching, Prototyping, and Final Iteration</strong>
              <br />I sketched the initial layout for our app. I also
              contributed to interactive prototyping for the mid-fidelity
              design. In addition, I independently iterated on our mid-fidelity
              design after the hackathon to create a high-fidelity version.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              <strong>Team Members</strong>
              <br />
              Hannah
              <br />
              Kristina
              <br />
              Misty
              <br />
              Rita
              <br />
              <br />
              <strong>Timeframe</strong>
              <br />
              9 Weeks
              <br />
            </Typography>
          </Grid>
        </Grid>

        <Grid container item columnSpacing={8} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Research</Typography>
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
                "My focus is{" "}
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
                ."
              </em>
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant="h4">Affinity Mapping, Mood Board</Typography>
          <Typography>I used a mood board.</Typography>
          <Box sx={{ textAlign: "center" }}>
            <Image
              src="/images/vsrs/moodboard.png"
              alt="Moodboard"
              width={1920}
              height={1571}
            />
          </Box>
        </Grid>

        <Grid container item rowSpacing={4} columnSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Wireframes</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom>
              <strong>Feature: Hazard Dictionary</strong>
              <br />
              During the hackathon, we were able to receive feedback on our
              design from industry professionals that volunteered as mentors. A
              feature that was not present in our sketches was a{" "}
              <strong>hazard dictionary</strong> that could define harmful
              pollutants present in a body of water. This would allow users to
              learn more about pollutants in their environment and health
              detriments from them.
              <br />
              <br />
            </Typography>
            <Box sx={{ textAlign: "center" }}>
            <Image
              src="/images/vsrs/wireframe.png"
              alt="Wireframe of each website page"
              width={3840/2}
              height={3047/2}
            />
          </Box>
          </Grid>
        </Grid>

        <Grid container item columnSpacing={8} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Final Design</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              <strong>Consistent color palette and logo design.</strong>
              <br />
              Our overall aesthetic was inspired by nautical elements. In our
              mid-fidelity design, we emphasized gradients and waves to create
              distinctive visuals. On reevaluation, we considered these
              stylistic choices as roadblocks to establishing a clear visual
              hierarchy.
              <br />
              <br />
              In our final design, we implemented a discrete color palette that
              allowed for us to build distinct visuals through other elements of
              the page. The logo was overhauled into a buoy which broke up the
              monotony of our all-blue landing screens.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              <strong>Edge case addressing unknown information.</strong>
              <br />
              Previously, we labeled locations as either "safe" or "unsafe" in
              regards to its water quality. However, we wanted to make it
              apparent when information was stale or unavailable, which was a
              choice unlisted in our initial design.
              <br />
              <br />
              <strong>Stronger focus on a card-based style.</strong>
              <br />
              Our users' main interactions start from their map screen. We
              thought the use of cards, which are seen when users tap on a
              location, provide a seamless transition of information. Therefore,
              we accentuated the use of cards further through the aesthetics of
              our self-reporting system.
              <br />
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              <strong>Landing, Login, Sign-Up Screens</strong>
            </Typography>
            {[1, 2, 3].map((num) => {
              return (
                <Image
                  key={num}
                  src={"/images/pura/hifi_" + num + ".png"}
                  alt="High-fidelity screen"
                  width={384 / 2}
                  height={773 / 2}
                />
              );
            })}
          </Grid>

          <Grid item xs={12}>
            <Typography gutterBottom>
              <strong>Map, Comment Screens</strong>
            </Typography>
            {[4, 5, 6].map((num) => {
              return (
                <Image
                  key={num}
                  src={"/images/pura/hifi_" + num + ".png"}
                  alt="High-fidelity screen"
                  width={384 / 2}
                  height={773 / 2}
                />
              );
            })}
          </Grid>

          <Grid item xs={12}>
            <Typography gutterBottom>
              <strong>Hazard Dictionary, Report Screens</strong>
            </Typography>
            {[7, 8, 9, 10, 11].map((num) => {
              return (
                <Image
                  key={num}
                  src={"/images/pura/hifi_" + num + ".png"}
                  alt="High-fidelity screen"
                  width={384 / 2}
                  height={773 / 2}
                />
              );
            })}
          </Grid>
        </Grid>

        <Grid container item xs={12} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Reflection</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              This project challenged me and my teammates immensely. Not only
              was this each of our members' first hackathon, it was our first
              time applying a formal design process and methodology. It was a
              rich learning experience that tested our ability to think
              dynamically, work systematically, and execute a clear vision. And
              it paid off! We won the Best Impact award for the mid-fidelity
              design we submitted.
              <br />
              <br />
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/images/pura/hackathon.jpg"
                width={1024 / 2}
                height={681 / 2}
                alt="Team holding up award certificates"
              />
              <Typography variant="body2">
                Left to Right: Bely, Lauren, me, Gabrielle.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
