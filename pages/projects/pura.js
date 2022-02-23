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
          alt="project banner"
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
              Our team was tasked with creating an app fitting the theme of the
              hackathon: Driven by Difference. Within a 12-hour timeframe, our
              team had to ideate, design, prototype, and present a case for an
              app that aligned with what our notions of empowering difference
              meant.
            </Typography>
          </Grid>
        </Grid>

        <Grid container item columnSpacing={8} rowSpacing={4}>
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
              Gabrielle Isaguirre
              <br />
              Bely Lor
              <br />
              Lauren Krieger
              <br />
              <br />
              <strong>Timeframe</strong>
              <br />
              12 Hours
              <br />
            </Typography>
          </Grid>
        </Grid>

        <Grid container item columnSpacing={8} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Ideation</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              We started the ideation process by writing down focus statements
              exploring issues of accessibility for people of color, low-income,
              and disabled folks. The list was pared down based on originality
              and feasibility for development within the hackathon&apos;s
              timeframe.
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
                &quot;My focus is{" "}
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
                .&quot;
              </em>
            </Typography>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant="h4">Information Architecture</Typography>
          <Box sx={{ textAlign: "center" }}>
            <Image
              src="/images/pura/info_arch.svg"
              alt="Information flow chart"
              width={700}
              height={600}
            />
          </Box>
        </Grid>

        <Grid container item columnSpacing={4} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Sketches</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="span">
              We began by individually sketching a general layout for our app
              that we branded as Pura. Pura would allow users to view
              information about their local bodies of water before fishing or
              harvesting.
              <br />
              <br />
              Each member&apos;s sketch was to implement the following features:
              <ul>
                <li>Accessing information about water quality levels.</li>
                <li>Community feedback about a location.</li>
                <li>Reporting information to an environmental agency.</li>
              </ul>
              Ideas from our sketches were consolidated into the following image
              and used to guide our mid-fidelity design:
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/pura/sketch.png"
              alt="Mobile layout sketches"
              width={1080}
              height={1427}
            />
          </Grid>
        </Grid>

        <Grid container item rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Mid-Fidelity Design</Typography>
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
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography gutterBottom>
              <strong>Landing, Login, Sign-Up Screens</strong>
              <br />
              <br />
            </Typography>
            {[1, 2, 3].map((num) => {
              return (
                <Image
                  key={num}
                  src={"/images/pura/midfi_" + num + ".png"}
                  alt="Mid-fidelity screen"
                  width={395 / 2}
                  height={687 / 2}
                />
              );
            })}
          </Grid>

          <Grid item xs={12}>
            <Typography gutterBottom>
              <strong>Map, Comment Screens</strong>
              <br />
              <br />
            </Typography>
            {[4, 5, 6].map((num) => {
              return (
                <Image
                  key={num}
                  src={"/images/pura/midfi_" + num + ".png"}
                  alt="Mid-fidelity screen"
                  width={395 / 2}
                  height={687 / 2}
                />
              );
            })}
          </Grid>

          <Grid item xs={12}>
            <Typography gutterBottom>
              <strong>Hazard Dictionary, Report Screens</strong>
              <br />
              <br />
            </Typography>
            {[7, 8, 9, 10].map((num) => {
              return (
                <Image
                  key={num}
                  src={"/images/pura/midfi_" + num + ".png"}
                  alt="Mid-fidelity screen"
                  width={395 / 2}
                  height={687 / 2}
                />
              );
            })}
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
              Previously, we labeled locations as either &quot;safe&quot; or
              &quot;unsafe&quot; in regards to its water quality. However, we
              wanted to make it apparent when information was stale or
              unavailable, which was a choice unlisted in our initial design.
              <br />
              <br />
              <strong>Stronger focus on a card-based style.</strong>
              <br />
              Our users&apos; main interactions start from their map screen. We
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
              <br />
              <br />
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
              <br />
              <br />
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
              <br />
              <br />
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
              was this each of our members&apos; first hackathon, it was our
              first time applying a formal design process and methodology. It
              was a rich learning experience that tested our ability to think
              dynamically, work systematically, and execute a clear vision. And
              it paid off! We won the Best Impact award for the mid-fidelity
              design we submitted.
              <br />
              <br />
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/images/pura/hackathon.jpg"
                width={1024 / 1.5}
                height={681 / 1.5}
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
