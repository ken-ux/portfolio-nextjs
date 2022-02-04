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
          A redesign of the Visualization Studies Research Studio&apos;s website
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
              Our team was tasked in redesigning a website to align with typical
              standards for a research-based lab/studio while emphasizing its
              core focus in visualization studies.
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
              Competitive analysis, stakeholder interview, heuristic evaluation
              (Neilsen&apos;s principles). Primary researcher/facilitator for
              affinity mapping
              <br />
              <br />
              <strong>Design System and Iteration</strong>
              <br />
              Wireframing, Typography system, card iteration, final design.
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
          <Typography variant="h4">Affinity Mapping, Mood Board</Typography>
          <Typography>Keywords</Typography>
          <Box sx={{ textAlign: "center" }}>
            <Image
              src="/images/vsrs/moodboard.png"
              alt="Moodboard"
              width={2022}
              height={1449}
            />
          </Box>
        </Grid>

        <Grid container item rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Information Architecture</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/images/vsrs/info_arch.svg"
                alt="Information architecture"
                width={700}
                height={600}
              />
            </Box>
          </Grid>
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
                width={3840 / 2}
                height={3047 / 2}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container item rowSpacing={4} columnSpacing={8}>
          <Grid item xs={12}>
            <Typography variant="h4">Iterations</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography>
              <strong>Card Variant 1</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Image
              src="/images/vsrs/card_var_1.png"
              alt="Card variant 1"
              width={1202}
              height={709}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography>
              <strong>Card Variant 2</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Image
              src="/images/vsrs/card_var_2.png"
              alt="Card variant 2"
              width={1255}
              height={495}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography>
              <strong>Card Variant 3</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Image
              src="/images/vsrs/card_var_3.png"
              alt="Card variant 3"
              width={729 / 2}
              height={763 / 2}
            />
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
            <Typography variant="h5">
              <strong>Home</strong>
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ border: "1px solid lightgrey" }}>
              <Image
                src="/images/vsrs/rd_home.png"
                alt="Redesigned home page"
                width={1512}
                height={2478}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography>Home Rationale</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>About</strong>
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ border: "1px solid lightgrey" }}>
              <Image
                src="/images/vsrs/rd_about.png"
                alt="New about page"
                width={1512}
                height={1155}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography>About Rationale</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>Projects</strong>
            </Typography>
            <br />
            <Typography>Projects rationale</Typography>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ border: "1px solid lightgrey" }}>
              <Image
                src="/images/vsrs/rd_project.png"
                alt="Redesigned projects page"
                width={1512}
                height={1334}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box sx={{ border: "1px solid lightgrey" }}>
              <Image
                src="/images/vsrs/rd_project_detail.png"
                alt="Redesigned individual project page"
                width={1512}
                height={2016}
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>Publications</strong>
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ border: "1px solid lightgrey" }}>
              <Image
                src="/images/vsrs/rd_publications.png"
                alt="Redesigned publications page"
                width={1512}
                height={2289}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography>Publications Rationale</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography variant="h5">
              <strong>People</strong>
            </Typography>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box sx={{ border: "1px solid lightgrey" }}>
              <Image
                src="/images/vsrs/rd_people.png"
                alt="Redesigned people page"
                width={1512}
                height={1563}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography>People Rationale</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
