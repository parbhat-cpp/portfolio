import { Box } from "@mui/material";
import { college_pic, school_pic } from "../constants";
import CustomCard from "./CustomCard";

const EducationSection = () => {
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
            display: "flex",
            flexDirection: {
              lg: "row",
              md: "row",
              sm: "row",
              xs: "column",
            },
            "&>div>img": {
              objectFit: "contain",
              borderRadius: "9px",
              width: {
                lg: "16rem",
                md: "14rem",
                sm: "12rem",
                xs: "14rem",
              },
            },
          }}
        >
          <Box
            sx={{
              width: "100%",
              flex: {
                lg: "0.5",
                md: "0.5",
                sm: "0.5",
                xs: "1",
              },
              padding: "12px",
            }}
          >
            <CustomCard
              img_src={college_pic}
              title="Government Autonomous College, Rourkela"
              content="Pursuing BSc Computer Science (2022-25)"
            />
          </Box>
          <Box
            sx={{
              width: "100%",
              flex: {
                lg: "0.5",
                md: "0.5",
                sm: "0.5",
                xs: "1",
              },
              padding: "12px",
            }}
          >
            <CustomCard
              img_src={school_pic}
              title="Chinmaya Vidyalaya English Medium School, Rourkela"
              content="Passed ISC with 83.34% (2020-22)"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default EducationSection;
