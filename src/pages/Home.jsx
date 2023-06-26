import React from "react";
import Navbar from "../components/Navbar";
import FeatureBox from "../components/FeatureBox";
import { Box } from "@mui/material";
import SignInBox from "../components/SignInBox";
import Download from "../components/Download";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <>
      <Navbar />
      <Box
        component="main"
        maxWidth="100vw"
        display="flex"
        marginTop="2rem"
        marginBottom="5rem"
        paddingX={{ mobile: "1rem", tablet: "4rem" }}
        gap="4rem"
        flexDirection={{ mobile: "column", desktop: "row" }}>
        <FeatureBox />
        <SignInBox />
      </Box>

      <Download />
      <Footer />
    </>
  );
};

export default Home;
