import { Box, Link, Typography } from "@mui/material";
import VajraLogo from "/VajraLogo.svg";
import React from "react";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        boxShadow: "footer",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: { mobile: "column", laptop: "row" },
        justifyContent: "space-between",
        alignItems: "center",
        padding: { mobile: "1.25rem 1rem", tablet: "1.25rem 4rem" },
      }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: { mobile: "1rem", laptop: "4rem" },
          alignSelf: "self-start",
        }}>
        <img src={VajraLogo} alt="Vajra Footer" />
        <Typography variant="body2" color="text.primary">
          © 2020 VAJRA, All Rights Reserved
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          gap: "0.25rem",
          alignItems: "center",
          alignSelf: { laptop: "center", mobile: "self-end" },
        }}
        color="text.secondary"
        className="flex items-center gap-1 text-black text-lg max-xs:text-mobileFontSm max-md:self-end">
        <Link color="text.secondary" variant="body2" underline="hover">
          Terms & Conditions
        </Link>
        <Typography color="text.secondary" variant="body2">
          |
        </Typography>
        <Link color="text.secondary" variant="body2" underline="hover">
          FAQ's
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
