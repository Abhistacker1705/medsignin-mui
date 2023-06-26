import React from "react";
import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

const Display = () => {
  const { email } = useParams();
  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Typography variant="h1">{email}</Typography>
    </Box>
  );
};

export default Display;
