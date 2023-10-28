import styled from "@emotion/styled";
import { Box, Divider } from "@mui/material";

// Components
import Header from "../components/Header";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import EducationSection from "../components/EducationSection";
import Footer from "../components/Footer";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const HomeContainer = styled(Box)({
  width: "100%",
  height: "100vh",
  overflowY: "scroll",
  background: "#000000db",
  display: "flex",
  flexDirection: "column",
  overflowX: "hidden",
});

const Home = () => {
  const CustomHR = () => {
    return (
      <Divider
        style={{
          margin: "12px auto",
          background: "rgba(236, 236, 236, 0.51)",
          width: "98%",
        }}
      />
    );
  };

  return (
    <>
      <HomeContainer>
        <Header />
        <div id="home" style={{ width: "100%" }}>
          <HomeSection />
        </div>
        <CustomHR />
        <div id="about" style={{ width: "100%" }}>
          <AboutSection />
        </div>
        <CustomHR />
        <div id="skills" style={{ width: "100%" }}>
          <SkillsSection />
        </div>
        <CustomHR />
        <div id="education" style={{ width: "100%" }}>
          <EducationSection />
        </div>
        <CustomHR />
        <div id="projects" style={{ width: "100%" }}>
          <ProjectsSection />
        </div>
        <CustomHR />
        <div id="contact" style={{ width: "100%", margin: "9px 0" }}>
          <ContactSection />
        </div>
        <div style={{ width: "100%", margin: "9px 0" }}>
          <Footer />
        </div>
      </HomeContainer>
    </>
  );
};

export default Home;
