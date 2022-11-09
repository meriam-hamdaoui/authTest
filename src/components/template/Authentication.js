import React from "react";
import {
  Typography,
  Grid,
  Box,
  Paper,
  Avatar,
  CssBaseline,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Log_Styling, Reg_Styling } from "../constant/constants";
import { useLocation } from "react-router-dom";

const theme = createTheme();

const Authentication = (props) => {
  const currentLocation = useLocation().pathname;
  // console.log(currentLocation);
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        {currentLocation === "/signin" && (
          <Grid item xs={false} sm={4} md={7} sx={Log_Styling} />
        )}
        <CssBaseline />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "info.main" }}>
              {/* <MdOutlineAppRegistration /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              {currentLocation === "/signin"
                ? "Sign in"
                : currentLocation === "/signup"
                ? "Sign Up"
                : null}
            </Typography>
            <br />
            <Box sx={{ mt: 1 }}>{props.children}</Box>
          </Box>
        </Grid>
        {currentLocation === "/signup" && (
          <Grid item xs={false} sm={4} md={7} sx={Reg_Styling} />
        )}
      </Grid>
    </ThemeProvider>
  );
};

export default Authentication;
