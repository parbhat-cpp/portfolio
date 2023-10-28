import { socials } from "../constants";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
} from "@mui/icons-material";
import Typewriter from "typewriter-effect";
import { Box, IconButton, Typography } from "@mui/material";

const HomeSection = () => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          display: { lg: "flex", md: "flex", sm: "flex", xs: "block" },
        }}
      >
        <Box
          sx={{
            display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
            width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
            "&>img": {
              margin: "10px auto",
              height: "300px",
            },
          }}
        >
          <img src="src\assets\img.png" />
        </Box>
        <Box
          sx={{
            width: { lg: "50%", md: "50%", sm: "100%", xs: "100%" },
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              width: "80%",
              margin: {
                lg: "auto auto 0 auto",
                md: "auto auto 0 auto",
                sm: "auto auto 0 auto",
                xs: "22px auto",
              },
              color: "#fff",
            }}
          >
            <Typography variant="h4">
              Hey, Myself{" "}
              <span style={{ color: "yellow", fontWeight: "bold" }}>
                Parbhat Sharma
              </span>
            </Typography>
            <Typography fontWeight="bold">I have Expertise in</Typography>
            <h1 style={{ fontFamily: "sans-serif" }}>
              <Typewriter
                options={{
                  strings: [
                    "C/C++",
                    "Java",
                    "JavaScript",
                    "ReactJs",
                    "Node.js",
                    "Many more...",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Box>
          <Box
            sx={{
              width: "100%",
              margin: "auto 0 auto 0",
            }}
          >
            <Box
              sx={{
                margin: "0 auto",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a href={socials.github.url} target="_blank" rel="noreferrer">
                <IconButton>
                  <GitHub style={{ filter: "invert(1)" }} />
                </IconButton>
              </a>
              <a href={socials.x.url} target="_blank" rel="noreferrer">
                <IconButton>
                  <Twitter style={{ filter: "invert(1)" }} />
                </IconButton>
              </a>
              <a href={socials.linkedin.url} target="_blank" rel="noreferrer">
                <IconButton>
                  <LinkedIn style={{ filter: "invert(1)" }} />
                </IconButton>
              </a>
              <a href={socials.telegram.url} target="_blank" rel="noreferrer">
                <IconButton>
                  <Telegram style={{ filter: "invert(1)" }} />
                </IconButton>
              </a>
              <a href={socials.instagram.url} target="_blank" rel="noreferrer">
                <IconButton>
                  <Instagram style={{ filter: "invert(1)" }} />
                </IconButton>
              </a>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HomeSection;
