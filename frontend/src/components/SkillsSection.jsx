import { Box, Typography } from "@mui/material";
import { skills } from "../constants";

const SkillsSection = () => {
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
            overflowX: "hidden",
          }}
        >
          <Typography variant="h5">My Skills</Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                lg: "auto auto auto auto",
                md: "auto auto auto auto",
                sm: "auto auto auto auto",
                xs: "auto auto auto",
              },
            }}
          >
            {skills.map((skill) => (
              <Box
                key={skill}
                sx={{
                  margin: "12px 0",
                  "&>img": {
                    width: {
                      lg: "4.3rem",
                      md: "4rem",
                      sm: "3.5rem",
                      xs: "2.5rem",
                    },
                  },
                }}
              >
                <img src={skill.logo} />
                <Typography>{skill.name}</Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SkillsSection;
