import * as React from "react";
import Layout from "../../components/layout";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Image from "next/legacy/image";
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
        <Typography>
          A redesign of the Visualization Studies Research Studio&apos;s website
          based in stakeholder interviews and UX methodologies.
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
          src="/images/vsrs/vsrs_banner.png"
          alt="project banner"
          width={3000}
          height={900}
          priority={true}
        />
      </Box>

      <Grid
        container
        direction="column"
        rowSpacing={10}
        maxWidth="xl"
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
              Our team was tasked in redesigning a website for our research lab,
              the Visualization Studies Research Studio (VSRS). Our goal was to
              align this redesign with established practices for showcasing
              institutional research while preserving its visual identity as a
              hub for image-making studies.
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
              I helped build the protocols for our stakeholder interview,
              conducted an individual heuristic evaluation, and led the
              synthesis of findings from our competitive analysis and cognitive
              walkthroughs.
              <br />
              <br />
              <strong>Wireframing, Design System, and Card Iteration</strong>
              <br />I led the wireframing process and finalized the typography
              and color systems in our final iteration. I developed and iterated
              on the card designs for displaying individual research projects.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              <strong>Team Members</strong>
              <br />
              Hannah Chung
              <br />
              Kristina Te
              <br />
              Misty Becker
              <br />
              Rita Wu
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
              <strong>Stakeholder Interview</strong>
              <br />
              We began our redesign by interviewing the research studio&apos;s
              lead to understand their vision and purpose. This helped our team
              establish the intended audience, style guidelines, and features
              that our client would like to have incorporated in the final
              design.
              <br />
              <br />
              <strong>Competitive Analysis</strong>
              <br />
              An important part of our research was understanding how similar
              research labs structured their websites. We made an inventory of
              10 other labs conducting research at the University of Washington
              (such as the{" "}
              <a href="https://tascha.uw.edu/about/">Digital Youth Lab</a>) and
              made note of similarities in their information architecture.
              <br />
              <br />
              <strong>Heuristic Evaluation</strong>
              <br />
              We used Nielsen&apos;s principles as a framework for heuristic
              evaluation of the website&apos;s current design. Each member
              performed an individual evaluation then came together to compare
              scores and discuss common painpoints in the current design.
              <br />
              <br />
              <strong>Preliminary Usability Test, Cognitive Walkthrough</strong>
              <br />
              To support our heuristic evaluation, our team also conducted
              usability tests to see if our suspected painpoints aligned with
              those of the target audience. This was done through cognitive
              walkthroughs via task-based observations where participants
              attempt to navigate the different aspects of the website.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ border: "1px solid lightgray" }}>
              <Image
                src="/images/vsrs/old_home.png"
                width={1080}
                height={1299}
                alt="Old home page design"
              />
            </Box>
            <Typography variant="caption">
              <br />
              The old home page design.
            </Typography>
          </Grid>
        </Grid>

        <Grid container item rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Insights</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography component="span">
              Based on our stakeholder interview, we gathered the following:
              <ul>
                <li>
                  The <strong>intended audiences</strong> are students, research
                  study participants, and academics who have interest in the
                  lab&apos;s findings.
                </li>
                <li>
                  The website functions as a <strong>repository</strong> and{" "}
                  <strong>network</strong>. Projects and publications are the
                  main focal point but there is also an emphasis on its use as a
                  reference point for students and collaborators.
                </li>
                <li>
                  <strong>
                    Visual elements should drive the content of each page
                  </strong>
                  , rather than text, to emphasize the work that the VSRS does.
                </li>
              </ul>
              <br />
              Across our other research methods, our findings included:
              <ul>
                <li>
                  Project categorization that is too broad may overshadow what
                  each project realistically entails.
                </li>
                <li>
                  Showcasing recent publications are necessary for understanding
                  the direction of the lab&apos;s research.
                </li>
                <li>
                  Research websites bear similarities to personal portfolios but
                  should emphasize the collective effort of its collaborators.
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>

        <Grid container item rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Mood Board</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              We put together a mood board to summarize some of the design
              narratives and themes that the client described during the
              stakeholder interview.
              <br />
              <br />
              <strong>Keywords</strong>: Semiotics, CMYK, Abstract Form,
              Editorial
            </Typography>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/images/vsrs/moodboard.png"
                alt="Moodboard"
                width={2022}
                height={1449}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container item columnSpacing={8} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Information Architecture</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography>
              We constructed a sitemap to represent how information will be
              organized and the most logical flow for where it should be
              displayed.
              <br />
              <br />
              Blue nodes represent 1st-tier information objects, green nodes are
              2nd-tier objects, and yellow are 3rd-tier objects.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/images/vsrs/info_arch.svg"
                alt="Information architecture"
                width={700}
                height={400}
              />
            </Box>
          </Grid>
        </Grid>

        <Grid container item rowSpacing={4} columnSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Wireframes</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography>
              Wireframes were made for the following pages:{" "}
              <strong>
                Home, Projects (Landing), Publications, People, and Project
                (Detailed Page)
              </strong>
              .
              <br />
              <br />
              Of note, although an &quot;About&quot; page is seen in our
              information architecture, it was not wireframed initially.
              Additionally, annotations can be seen here that were used for
              explaining design decisions and initiating group discussion.
            </Typography>
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12} md={6}>
            <Typography component="span">
              <strong>Card Variants</strong>
              <br />
              Cards were a core focus of our design that quickly points users to
              the VSRS&apos;s projects. Our team went through a myriad of card
              variants that explored:
              <ul>
                <li>Usage of space</li>
                <li>Information availability</li>
                <li>Visual impact</li>
              </ul>
              These variants evolved as we developed a unified theme for the
              website redesign.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Image
              src="/images/vsrs/card_var.png"
              alt="Card variants"
              width={1454}
              height={1928}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Typography component="span">
              <strong>Home Page Iterations</strong>
              <br />
              Our team saw the home page&apos;s design as the blueprint for the
              site&apos;s visual identity. We went through many iterations of
              the home page since it would be the anchor for how we designed
              other pages.
              <br />
              <br />
              Our iterations of the home page were mainly grounded in:
              <ul>
                <li>Minimizing text</li>
                <li>Evoking abstract imagery or visually-driven elements</li>
                <li>Prioritizing user actions</li>
              </ul>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/vsrs/home_var_1.png"
              alt="Home page variant 1"
              width={1512}
              height={2264}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <Image
              src="/images/vsrs/home_var_2.png"
              alt="Home page variant 2"
              width={1512}
              height={2264}
            />
          </Grid>
        </Grid>

        <Grid container item columnSpacing={8} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Final Design</Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              <strong>Neutral color palette.</strong>
              <br />
              Minimal use of colors in the website&apos;s redesign was a
              stakeholder priority. The VSRS&apos;s research lead wanted the
              visualizations produced or analyzed in their studies to be the
              main focus of each page.
              <br />
              <br />
              By utilizing a neutral color palette, we created a space for
              color, shape, and form to be the driving element of each page
              instead of the website&apos;s color scheme itself.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography gutterBottom>
              <strong>Organized text content and placement.</strong>
              <br />
              As a repository of past and ongoing projects, information overload
              and crowding was prevalent in its original design. Our team was
              intentional in structuring information on <strong>
                and
              </strong>{" "}
              between pages to best match the flow of common user actions.
              <br />
              <br />
              This was salient in the design of the project pages, which had no
              defined layout despite being a vital part of the website&apos;s
              purpose.
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Box sx={{ textAlign: "center" }}>
              <Image
                src="/images/vsrs/design_system.png"
                alt="Semantic color and typography system"
                width={1598}
                height={552}
              />
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5">
              <strong>Home</strong>
              <br />
              <br />
            </Typography>
            <Image
              src="/images/vsrs/rd_home.png"
              alt="Redesigned home page"
              width={1512}
              height={2478}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5">
              <strong>About</strong>
              <br />
              <br />
            </Typography>
            <Image
              src="/images/vsrs/rd_about.png"
              alt="New about page"
              width={1512}
              height={1155}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5">
              <strong>Projects (Landing)</strong>
              <br />
              <br />
            </Typography>
            <Image
              src="/images/vsrs/rd_project.png"
              alt="Redesigned projects page"
              width={1512}
              height={1334}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5">
              <strong>Project (Detailed Page)</strong>
              <br />
              <br />
            </Typography>
            <Image
              src="/images/vsrs/rd_project_detail.png"
              alt="Redesigned individual project page"
              width={1512}
              height={2016}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5">
              <strong>Publications</strong>
              <br />
              <br />
            </Typography>
            <Image
              src="/images/vsrs/rd_publications.png"
              alt="Redesigned publications page"
              width={1512}
              height={2289}
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <Typography variant="h5">
              <strong>People</strong>
              <br />
              <br />
            </Typography>
            <Image
              src="/images/vsrs/rd_people.png"
              alt="Redesigned people page"
              width={1512}
              height={1563}
            />
          </Grid>
        </Grid>

        <Grid container item columnSpacing={4} rowSpacing={4}>
          <Grid item xs={12}>
            <Typography variant="h4">Original Design</Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography>
              For comparison, these are screenshots of the original website
              design.
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ border: "1px solid black" }}>
              <Image
                src="/images/vsrs/old_home.png"
                alt="Original home page"
                width={1222}
                height={1470}
              />
            </Box>
            <Typography variant="caption">Home</Typography>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ border: "1px solid black" }}>
              <Image
                src="/images/vsrs/old_project.png"
                alt="Original projects landing"
                width={1222}
                height={1470}
              />
            </Box>
            <Typography variant="caption">Projects (Landing)</Typography>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ border: "1px solid black" }}>
              <Image
                src="/images/vsrs/old_project_detail.png"
                alt="Original detailed project page"
                width={1222}
                height={1470}
              />
            </Box>
            <Typography variant="caption">Project (Detailed Page)</Typography>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ border: "1px solid black" }}>
              <Image
                src="/images/vsrs/old_publication.png"
                alt="Original publications page"
                width={1222}
                height={1470}
              />
            </Box>
            <Typography variant="caption">Publications</Typography>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ border: "1px solid black" }}>
              <Image
                src="/images/vsrs/old_people.png"
                alt="Original people page"
                width={1222}
                height={1470}
              />
            </Box>
            <Typography variant="caption">People</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  );
}
