import { Box, Typography } from "@mui/material";
import React from "react";
import GooglePlay from "/PlayStore.png";
import AppleStore from "/AppStore.png";
const Download = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        flexDirection: { mobile: "column", laptop: "row" },
        gap: "3rem",
        marginBottom: "2.5rem",
        justifyContent: "center",
        alignItems: "center",
        paddingX: { mobile: "1rem", tablet: "4.5rem" },
      }}>
      <Typography color="primary" variant="h4">
        Download Our App
      </Typography>
      <Box sx={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
        <img
          className="download-images"
          src={GooglePlay}
          alt="Download Vajra App from Google Play Store"
        />
        <img
          className="download-images"
          src={AppleStore}
          alt="Download Vajra App from App Store"
        />
      </Box>
    </Box>
  );
};

export default Download;
