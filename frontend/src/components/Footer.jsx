import { Box, IconButton, Typography } from "@mui/material";
import { socials } from "../constants";
import {
  GitHub,
  Instagram,
  LinkedIn,
  Telegram,
  Twitter,
  FiberManualRecord,
  Laptop,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        margin: "auto 0 0 0",
        width: "100%",
        background: "#0f2235",
        color: "#ffffff91",
        boxShadow:
          "0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)",
      }}
    >
      <Box
        sx={{
          display: "none",
          justifyContent: "center",
          padding: "17px",
        }}
      >
        <Typography variant="h4">My Portfolio</Typography>
      </Box>
      <Box
        sx={{
          padding: "17px",
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
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: {
            lg: "row",
            md: "row",
            sm: "row",
            xs: "column",
          },
          "&>a": {
            color: "#fff",
            textDecoration: "none",
            fontFamily: "sans-serif",
          },
        }}
      >
        <a href="#home">Home</a>
        <FiberManualRecord fontSize="24px" style={{ margin: "0 3px" }} />
        <a href="#about">About</a>
        <FiberManualRecord fontSize="24px" style={{ margin: "0 3px" }} />
        <a href="#skills">Skills</a>
        <FiberManualRecord fontSize="24px" style={{ margin: "0 3px" }} />
        <a href="#education">Education</a>
        <FiberManualRecord fontSize="24px" style={{ margin: "0 3px" }} />
        <a href="#projects">Projects</a>
        <FiberManualRecord fontSize="24px" style={{ margin: "0 3px" }} />
        <a href="#contact">Contact</a>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "30px 0",
        }}
      >
        <Typography>Developed by Parbhat</Typography>
        <Laptop style={{ margin: "0 5px" }} />
      </Box>
    </Box>
  );
};

export default Footer;
