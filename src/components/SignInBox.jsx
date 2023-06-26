import {
  Box,
  Button,
  Divider,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import LinkMUI from "@mui/material/Link";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const SignInBox = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [passVisible, setPassVisible] = useState(false);
  const [passwordError, setPasswordError] = useState(true);
  const [emailError, setEmailError] = useState(true);
  const [showErrors, setShowErrors] = useState(false);
  useEffect(() => {
    validateInputs();
  }, [formData]);

  //input validation
  const validateInputs = () => {
    if (formData.password.length >= 8) {
      setPasswordError(false);
    } else {
      setPasswordError(true);
    }
    if (formData.email.includes(".") && formData.email.includes("@", 1)) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };

  //form submit handler

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
        color="#7A7A7A"
        sx={{ marginTop: "1rem", marginBottom: "2rem" }}
      />

      <Stack
        component="form"
        color="text.primary"
        rowGap="1rem"
        width="80%"
        alignSelf="center">
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
              error={showErrors ? emailError : false}
              helperText={
                showErrors
                  ? emailError
                    ? "Should not be empty and should be valid email"
                    : ""
                  : ""
              }
              value={formData.email}
              required
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
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
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              required
              error={showErrors ? passwordError : false}
              helperText={
                showErrors
                  ? passwordError
                    ? "Minimum character length should be 8"
                    : ""
                  : ""
              }
              type={passVisible ? "text" : "password"}
              placeholder="xxxxxxxxxx"
              id="outlined-basic"
              variant="outlined"
              fullWidth
            />
            <FormControlLabel
              control={
                <Checkbox onClick={() => setPassVisible(!passVisible)} />
              }
              label="Show Password"
            />
          </Box>
          <LinkMUI variant="subtitle2" underline="hover" color="error">
            Forgot Password
          </LinkMUI>
        </Stack>
        <Link to={passwordError || emailError ? "/" : `/${formData.email}`}>
          <Button
            onClick={() => setShowErrors(true)}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth>
            Sign In
          </Button>
        </Link>

        <Typography variant="subtitle2" alignSelf="center">
          New to vajra?
          <LinkMUI color="secondary.main">Sign UP Now</LinkMUI>
        </Typography>
      </Stack>
    </Box>
  );
};

export default SignInBox;
