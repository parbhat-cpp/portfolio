import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { projects } from "../constants";
import CustomCard from "../components/CustomCard";

const Container = styled(Box)({
  background: "#242424",
  color: "#fff",
  overflowY: "hidden",
});

const Projects = () => {
  return (
    <Container>
      <Box
        sx={{
          background: "#2b2626",
          borderRadius: "12px",
          padding: "8px",
          margin: "12px",
          display: "grid",
          gridTemplateColumns: {
            lg: "auto auto auto auto",
            md: "auto auto auto",
            sm: "auto auto",
            xs: "auto",
          },
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        {projects.map((project) => (
          <Box
            key={project}
            sx={{
              margin: "2px 4px",
            }}
          >
            <CustomCard
              title={project.name}
              content={project.content}
              img_src={project.img}
              source_code={project.source_code}
              link={project.url}
            />
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Projects;
