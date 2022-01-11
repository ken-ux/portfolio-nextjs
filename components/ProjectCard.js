import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

export default function ProjectCard(props) {

  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          maxWidth: 600,
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
            <Box
              //   display={"flex"}
              //   flexDirection={"column"}
              //   alignItems={"center"}
              //   justifyContent={"center"}
              sx={{ px: 5 }}
            >
              <Typography variant="h4" component="h2">
                <strong>{props.title}</strong>
              </Typography>
              <Typography>{props.text}</Typography>
              <br/>
              <Typography variant="subtitle">{props.tags}</Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
