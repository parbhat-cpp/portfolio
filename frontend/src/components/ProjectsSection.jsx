import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomCard from "./CustomCard";
import { projects, seeMore } from "../constants";
import { useNavigate } from "react-router-dom";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const ProjectsSection = () => {
  const navigate = useNavigate();

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
          <Typography variant="h5">My Projects</Typography>
          <Carousel responsive={responsive}>
            {projects.slice(0, 5).map((project) => (
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
            <Box
              sx={{
                margin: "2px 4px",
                display: "flex",
              }}
            >
              <Card
                sx={{
                  maxWidth: 345,
                  background: "#27282982",
                  color: "#fff",
                  borderRadius: "9px",
                  margin: "0 auto",
                }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={seeMore}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      See More
                    </Typography>
                    <Button
                      sx={{ color: "#ebeb90" }}
                      onClick={() => navigate("/projects")}
                    >
                      Click Here
                    </Button>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          </Carousel>
        </Box>
      </Box>
    </>
  );
};

export default ProjectsSection;
