import {
  Box,
  Button,
  Divider,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const SignInBox = () => {
  return (
    <Box
      bgcolor="background.default"
      boxShadow="box"
      minWidth="calc(50vw - 13rem)"
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "30px",
        padding: { mobile: "2.25rem 1rem", laptop: "2.25rem 5rem" },
        color: "#FFFFFF",
      }}>
      <Typography variant="h4" color="secondary" alignSelf="center">
        Sign In
      </Typography>
      <Divider
        color="divider"
        sx={{ marginTop: "1rem", marginBottom: "2rem" }}
      />

      <Stack color="text.primary" rowGap="1rem" width="80%" alignSelf="center">
        <Typography variant="h4" color="primary" marginBottom="1rem">
          Sign in to your account
        </Typography>
        <Stack flex rowGap="1rem">
          <Box>
            <Typography variant="body1" marginBottom="6px">
              Email
            </Typography>
            <TextField
              sx={{
                backgroundColor: "#FFFFFF",
                border: "none",
                boxShadow: "input",
              }}
              placeholder="xxxxxxxxxx"
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Box>
            <Typography variant="body1" marginBottom="6px">
              Password
            </Typography>
            <TextField
              sx={{
                backgroundColor: "#FFFFFF",
                border: "none",
                boxShadow: "input",
              }}
              placeholder="xxxxxxxxxx"
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
          </Box>
          <Link variant="subtitle2" underline="hover" color="error">
            Forgot Password
          </Link>
        </Stack>
        <Button variant="contained" color="primary" fullWidth>
          Sign In
        </Button>
      </Stack>
    </Box>
  );
};

export default SignInBox;
