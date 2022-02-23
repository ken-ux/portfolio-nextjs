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
          A multi-touchpoint service design that incorporates AI to streamline
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
          src="/images/packwithus/pack_banner.png"
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
              The purpose of this project was to carry out designing an
              experience from end-to-end, i.e. from concept to prototype to
              evaluation to presentation. Our experience was also to be situated
              within a real or fictituous organization to understand how
              business requirements align with design constraints.
              <br />
              <br />
              Our group investigated negatives experiences that occur in
              airports and developed our experience design in the context of
              Expedia&apos;s existing services.
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
              I helped in planning the questions for our user interviews and
              conducted surveys as part of our contextual inquiry process. I led
              the data analysis process that was integral in consolidating our
              team&apos;s findings and identifying key insights.
              <br />
              <br />
              <strong>Project Coordination</strong>
              <br />I set meeting agendas and mapped project goals to ensure our
              team was reaching important development milestones.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              <strong>Team Members</strong>
              <br />
              Ansul Sinha
              <br />
              Lily Hernandez
              <br />
              Hannah Chung
              <br />
              Minjoo Kim
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
              semi-structured approach to allow flexibility for travelers&apos;
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
              From our research, we concluded that preparing for a flight is an
              anxiety-inducing experience for infrequent and frequent travelers
              alike. In addition, flight-booking agencies are largely uninvolved
              with flyers after seats are purchased, further compounding issues
              of unpreparedness. Most importantly,{" "}
              <strong>
                travelers often act independently, even when it may impede them
                from getting help.
              </strong>
              <br />
              <br />
              Altogether, our team decided that these insights pointed towards
              an overall need for a resource of centralized information which:
              <ul>
                <li>Bridges knowledge gaps for different kinds of users.</li>
                <li>Understands priorities of an individual user.</li>
                <li>Emphasizes a sense of autonomy for each user.</li>
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
            <Typography component="span">
              Based on our research, our team came up with different ways to
              optimize a traveler&apos;s experience before, during, or after the
              airport. Our team produced over 30 distinct ideas ranging from
              robots for carrying luggage to scannable wristbands for faster
              screening.
              <br />
              <br />
              <strong>Limitations</strong>
              <br />
              Something our group had to keep in mind was that our design idea
              had to{" "}
              <strong>
                be feasible within the context of our organization and
                environment
              </strong>
              . While robots or built structures can be an interesting
              implementation in airports, national safety guidelines and
              exorbitant costs make them an unreasonable choice.
              <br />
              <br />
              <strong>Final Selection</strong>
              <br />
              Our selected idea was an amalgamation of three interconnected
              experience touchpoints:
              <ol>
                <li>
                  Web survey to understand the user&apos;s needs after they book
                  their flight.
                </li>
                <li>
                  Curated packing list based on the user&apos;s trip itinerary and
                  survey feedback.
                </li>
                <li>
                  Mobile voice AI that can responsively provide information
                  on-the-go.
                </li>
              </ol>
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
            <Typography variant="h4">Voice AI Flow</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              A prominent part of our service design was the integration of
              voice AI, so our team began by drafting a potential flow for user
              inputs and AI outputs. We then prototyped and tested this flow for
              ease-of-use using a conversation design tool.
              <br />
              <br />
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/images/packwithus/voiceflow.png"
                alt="Voice flow chart"
                width={2048}
                height={780}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid item>
          <Typography variant="h4">User Flow</Typography>
          <Box sx={{ textAlign: "center" }}>
            <Image
              src="/images/packwithus/userflow.svg"
              alt="User flow chart"
              width={1000}
              height={500}
            />
          </Box>
        </Grid>

        <Grid container item columnSpacing={8} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Final Design</Typography>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/images/packwithus/webscreens.png"
                alt="Website screens"
                width={2317}
                height={2982}
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/images/packwithus/designsystem.png"
                alt="Color and typography system"
                width={1344 / 2}
                height={538 / 2}
              />
            </Box>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/images/packwithus/mobilescreens.png"
                alt="Chatbot and mobile screens"
                width={2317}
                height={3345}
              />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
