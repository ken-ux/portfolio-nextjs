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
        sx={{
          maxWidth: 1000,
          marginLeft: "auto",
          marginRight: "auto",
          height: "55vh",
        }}
      >
        <Typography variant="h2">
          Hello, details from this project will be added at a later date! ☺️
        </Typography>
      </Box>
    </Layout>
  );
}
