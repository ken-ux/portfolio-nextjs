import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";
import Link from "next/link";

// InternalCard is for cards that link to pages on own website
// ExternalCard is for cards that link externally
function InternalCard(props) {
  return (
    <Link href={props.link} passHref>
      <Card
        sx={{
          position: "relative",
          transition: "0.5s",
          "&:hover": { transform: "scale(0.99)" },
        }}
      >
        <CardMedia
          component="img"
          image={props.image}
          alt="project card"
          sx={{ display: "block", width: "100%", height: "auto" }}
        />
        <CardActionArea
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            width: "100%",
            opacity: 0,
            transition: ".5s ease",
            backgroundColor: "rgba(255,255,255,0.95)",
            color: "black",
            "&:hover": { opacity: 1 },
          }}
        >
          <CardContent>
            <Box sx={{ px: 5 }}>
              <Typography variant="h4" component="h2">
                {props.title}
              </Typography>
              <Typography>{props.text}</Typography>
              <br />
              <Typography variant="subtitle">{props.platform + " Platform"}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}

function ExternalCard(props) {
  return (
    <a href={props.link} target="_blank" rel="noreferrer">
      <Card
        sx={{
          position: "relative",
          transition: "0.5s",
          "&:hover": { transform: "scale(0.99)" },
        }}
      >
        <CardMedia
          component="img"
          image={props.image}
          alt="project card"
          sx={{ display: "block", width: "100%", height: "auto" }}
        />
        <CardActionArea
          sx={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            height: "100%",
            width: "100%",
            opacity: 0,
            transition: ".5s ease",
            backgroundColor: "rgba(255,255,255,0.95)",
            color: "black",
            "&:hover": { opacity: 1 },
          }}
        >
          <CardContent>
            <Box sx={{ px: 5 }}>
              <Typography variant="h4" component="h2">
                {props.title}
              </Typography>
              <Typography>{props.text}</Typography>
              <br />
              <Typography variant="subtitle">{props.tags}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </a>
  );
}

export default function ProjectCard(props) {
  return (
    <Grid item xs={12} md={6}>
      {props.external ? ExternalCard(props) : InternalCard(props)}
    </Grid>
  );
}
