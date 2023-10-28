import { Box, Button, Typography } from "@mui/material";
import { resume_link } from "../constants";
import styled from "@emotion/styled";
import { ArrowRight } from "@mui/icons-material";

const CustomButton = styled(Button)({
  textTransform: "none",
  background: "#2b3334",
  color: "#ebeb90",
  margin: "12px 0",
  padding: "6px 10px",
  "&>hover": {
    background: "#000",
  },
});

const AboutSection = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <Box
          sx={{
            width: { lg: "60%", md: "60%", sm: "80%", xs: "90%" },
            background: "#2b2626",
            textAlign: "center",
            borderRadius: "12px",
            padding: { lg: "7px", md: "7px", sm: "5px", xs: "5px" },
          }}
        >
          <Typography variant="h5">About</Typography>
          <Typography>
            Myself Parbhat Sharma a{" "}
            <b style={{ color: "yellow" }}>Full stack MERN developer</b> and a
            BSc Computer Science student. I have a great interest in web and app
            development, I like to build new projects using my own idea or some
            clone project.{" "}
          </Typography>
          <br />
          <Typography>
            I am not only limited to MERN development I have also earned
            certificates from <b style={{ color: "yellow" }}>HackerRank</b>{" "}
            which are <b style={{ color: "yellow" }}>Java</b> and{" "}
            <b style={{ color: "yellow" }}>JavaScript</b> certificates in
            addition to that I also have an{" "}
            <b style={{ color: "yellow" }}>AWS Cloud Essentials Badge</b>. I am
            looking forward to become a better developer and trying to enhance
            my skills.
          </Typography>
          <a href={resume_link} target="_blank" rel="noreferrer">
            <CustomButton>
              Resume
              <ArrowRight />
            </CustomButton>
          </a>
        </Box>
      </Box>
    </>
  );
};

export default AboutSection;
