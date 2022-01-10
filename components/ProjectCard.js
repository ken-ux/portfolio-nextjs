import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import CardActionArea from "@mui/material/CardActionArea";
import Box from "@mui/material/Box";

export default function ProjectCard() {
  const [cardHover, setCardHover] = React.useState();

  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{
          maxWidth: 600,
          position: "relative",
          transition: "0.2s",
          "&:hover": { transform: "scale(1.05)" },
        }}
      >
        <CardMedia
          component="img"
          image="/images/pura_splash.png"
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
            backgroundColor: "rgba(255,255,255,0.9)",
            color: "black",
            "&:hover": { opacity: 1 },
          }}
        >
          <CardContent>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography variant="h5">Space</Typography>
              <Typography>
                The space between the stars and galaxies is largely empty.
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
