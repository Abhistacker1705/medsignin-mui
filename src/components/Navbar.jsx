import React from "react";
import VajraLogo from "/VajraLogo.svg";
import {
  AppBar,
  Stack,
  Link,
  Typography,
  IconButton,
  Icon,
} from "@mui/material";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
const Navbar = () => {
  return (
    <AppBar
      sx={{
        position: "static",
        boxShadow: "nav",
        bgcolor: "background.default",
        display: "flex",
        flexDirection: "row",
        justifyContent: {
          mobile: "space-between",
          laptop: "end",
        },
        alignItems: "center",
        padding: { mobile: "1.25rem 1rem", tablet: "1.25rem 4rem" },
      }}>
      <Stack direction="row" flexBasis="42%">
        <img
          className="vajra-logo"
          src={VajraLogo}
          alt="Vajra for Biomedical operations tracking"
        />
        <Link
          underline="hover"
          marginLeft="5.5rem"
          sx={{
            alignSelf: "center",
            display: { mobile: "none", laptop: "initial" },
          }}
          variant="body2">
          HOME
        </Link>
      </Stack>
      <Typography
        sx={{
          justify: "flex-end",
          display: { mobile: "none", laptop: "initial" },
        }}
        color="primary"
        variant="body1">
        +91 89715 80265
      </Typography>
      <IconButton sx={{ display: { mobile: "initial", laptop: "none" } }}>
        <HomeRoundedIcon color="primary" />
      </IconButton>
    </AppBar>
  );
};

export default Navbar;
