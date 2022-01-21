import * as React from "react";
import Layout from "../../components/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/image";
import Grid from "@mui/material/Grid";

export default function PackWithUs() {
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
        <Typography variant="body2">
          Service + Web Design, UX Research
        </Typography>
        <Typography variant="body2">Spring 2021: 9-Week Project</Typography>
      </Box>

      <Box sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" sx={{ mb: 4 }}>
          <strong>Pack With Us</strong>
        </Typography>
        <Typography variant="body2">
          A multi-touchpoint service design that relies on AI to streamline
          flight preparation.
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
              The purpose of this project was to carry out designing an
              experience from end-to-end, i.e. from concept to prototype to
              evaluation to presentation. Our experience was also to be situated
              within a real or fictituous organization to understand how
              business requirements align with design constraints.
              <br />
              <br />
              Our group investigated negatives experiences that occur in
              airports, and thus developed our experience design in the context
              of Expedia's existing services.
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
              idk
              <br />
              <br />
              <strong>Design</strong>
              <br />
              idk
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              <strong>Team Members</strong>
              <br />
              Ansul
              <br />
              Lily
              <br />
              Hannah
              <br />
              Minjoo
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
          <Grid item xs={12}>
            <Typography>
              <strong>User Interviews</strong>
              <br />
              Our team conducted semi-structured interviews with three travelers
              (anyone who has taken a flight) and a TSA agent. Although we could
              have chosen to interview more travelers, we surmised that a TSA
              agent would provide a different perspective to the issues
              travelers face but are less cognizant of.
              <br />
              <br />
              Interviews were carried out in 1-hour virtual sessions with a set
              of questions to guide the conversation. However, we chose a
              semi-structured approach to allow flexibility for travelers'
              responses.
              <br />
              <br />
              <strong>Contextual Inquiry</strong>
              <br />
              In addition, our team conducted a brief field study at Seatac
              Airport to observe and interview travelers about their own qualms
              that came with preparing for their flight.
            </Typography>
          </Grid>
        </Grid>

        <Grid container item columnSpacing={8} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Insights</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography component="span">
              From our research, we concluded that preparing for a flight is
              still an anxiety-inducing experience for infrequent and frequent
              travelers alike. In addition, flight-booking agencies are largely
              uninvolved with flyers after seats are purchased, further
              compounding issues of unpreparedness. Most importantly,{" "}
              <strong>
                travelers often act independently, even when it may impede them
                from getting help.
              </strong>
              <br />
              <br />
              Altogether, our team decided that these insights pointed towards
              an overall need for a resource of centralized information which:
              <ul>
                <li>Emphasizes a sense of autonomy for each user.</li>
                <li>Bridges knowledge gaps for different kinds of users.</li>
                <li>Understands priorities of an individual user.</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/packwithus/observations.png"
              alt="sketches of observations from the airport"
              width={1080 / 2}
              height={807 / 2}
            />
            <Typography variant="caption">
              A sketch of some scenarios that were observed in our interviews
              and context study.
            </Typography>
          </Grid>
        </Grid>

        <Grid container item columnSpacing={4} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Ideation</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              Based on our research, our team came up with different ways
              optimize aspects of a traveler's experience. Our team produced
              over 30 distinct ideas before narrowing it down. Ideas ranged from
              robots for carrying luggage to scannable wristbands for faster
              screening.
              <br />
              <br />
              <strong>Narrowing Down</strong>
              <br />
              Something our group had to keep in mind was that our design idea
              had to{" "}
              <strong>
                be feasible within the context of our real or fictional
                organization
              </strong>
              . While robots or built structures can be an interesting
              implementation in airports, national safety guidelines and
              exorbitant costs make them an unreasonable choice.
              <br />
              <br />
              <strong>Final Selection</strong>
              <br />
              lol
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/packwithus/ideation.png"
              alt="experience ideas inspired by our research"
              width={2586 / 3}
              height={1677 / 3}
            />
            <Typography variant="caption">
              A few ideas our group bounced around that I tried to visualize
              through sketches.
            </Typography>
          </Grid>
        </Grid>

        <Grid container item rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Journey Mapping</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/images/packwithus/journey_map.png"
                alt="journey map"
                width={1557}
                height={869}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant="h4">User Flow</Typography>
          <Box sx={{ textAlign: "center" }}>
            <Image
              src="/images/packwithus/userflow.svg"
              alt="Information flow chart"
              width={1000}
              height={500}
            />
          </Box>
        </Grid>

        <Grid container item rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Voice AI Flow</Typography>
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
        </Grid>
      </Grid>
    </Layout>
  );
}
