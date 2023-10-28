import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const CustomToolbar = styled(Toolbar)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  background: "#0d0c0cc9",
});

const Header = () => {
  const [openMenuDrawer, setOpenMenuDrawer] = useState(false);

  return (
    <>
      <AppBar position="static">
        <CustomToolbar>
          <Box
            sx={{
              width: "80%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography fontWeight="bold" fontSize={{ lg: "1.6rem" }}>
              {"Parbhat's Portfolio"}
            </Typography>
            <Box
              sx={{
                display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
                alignItems: "center",
                "&>a": {
                  marginLeft: "12px",
                  textDecoration: "none",
                  color: "#fff",
                  fontFamily: "sans-serif",
                },
              }}
            >
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </Box>
            <Box
              sx={{
                display: { lg: "none", md: "none", sm: "none", xs: "block" },
              }}
            >
              <IconButton
                onClick={() => setOpenMenuDrawer(true)}
                style={{ color: "rgba(255, 255, 255, 0.76)" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
          <Drawer
            anchor="top"
            open={openMenuDrawer}
            onClose={() => setOpenMenuDrawer(false)}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                width: "100%",
                alignItems: "center",
                "&>a": {
                  marginBottom: "5px",
                  textDecoration: "none",
                  fontFamily: "sans-serif",
                  color: "#000",
                },
              }}
            >
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#education">Education</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </Box>
          </Drawer>
        </CustomToolbar>
      </AppBar>
    </>
  );
};

export default Header;
