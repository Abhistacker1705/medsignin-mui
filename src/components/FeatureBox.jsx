import { Box, Typography } from "@mui/material";
import React from "react";
import DigitizeLogo from "/DigitizeLogo.svg";
import TrackLogo from "/TrackLogo.svg";
import BioLogo from "/BioLogo.svg";

const FeatureBox = () => {
  return (
    <Box
      bgcolor="primary.main"
      boxShadow="box"
      sx={{
        display: "flex",
        minWidth: "calc(45vw - 13rem)",
        flexDirection: "column",
        borderRadius: "1.825rem",
        padding: { mobile: "2.25rem 1rem", laptop: "2.25rem 5rem" },
        color: "#FFFFFF",
      }}>
      <Typography
        sx={{ alignSelf: "center", marginBottom: "2.75rem" }}
        variant="h2">
        Features
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "4.25em",
        }}>
        <Box
          sx={{
            display: "flex",
          }}>
          <img
            className="feature-images"
            src={DigitizeLogo}
            alt="Digitization done by Vajra"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "2.25rem",
              justifyContent: "space-around",
            }}>
            <Typography variant="h3">Digitize</Typography>
            <Typography color="background.default" variant="subtitle1">
              A Bird eye view of the entire Biomedical Operations.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}>
          <img
            className="feature-images"
            src={TrackLogo}
            alt="Tracking done by Vajra"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "2.25rem",
              justifyContent: "space-around",
            }}>
            <Typography variant="h3">Track</Typography>
            <Typography color="background.default" variant="subtitle1">
              Track the product life cycle and service history.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
          }}>
          <img
            className="feature-images"
            src={BioLogo}
            alt="Biomedical Budget calculation done by Vajra"
          />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "2.25rem",
              justifyContent: "space-between",
            }}>
            <Typography variant="h3">Biomedical Budget</Typography>
            <Typography color="background.default" variant="subtitle1">
              Regulate and save budget through analysed data and informed.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeatureBox;
