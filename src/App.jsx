import { Box, Button, CssBaseline, Typography } from "@mui/material";
import * as React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import { themeOptions } from "./utils/theme";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Container } from "@mui/material";
import background from "./assets/background4.jpg";
import MainSection from "./components/Mainsection/MainSection.jsx";

export default function App() {
  let theme = createTheme(themeOptions);
  theme = responsiveFontSizes(theme);

  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Container
          disableGutters={true}
          maxWidth={false}
          sx={{
            backgroundImage: `url(${background})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            minHeight: "80vh",
          }}
        >
          <NavBar />
          <Box
            sx={{
              m: "auto",
              mt: 8,

              width: "min-content",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontFamily: "Shantell Sans",
                color: "#E5E3E4",
                textTransform: "uppercase",
                textAlign: "center",
                mb: 4,
              }}
            >
              Welcome to BookZania
            </Typography>
            <Typography
              variant="body1"
              component="p"
              sx={{
                color: "#E5E3E4",
                mb: 4,
              }}
            >
              Discover Egypt like never before. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Et, tenetur.
            </Typography>
            <Button variant="contained">Contact us</Button>
          </Box>
        </Container>
        <MainSection />
      </ThemeProvider>
    </React.Fragment>
  );
}
