import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

const CustomButton = styled(Button)({
  color: "#fff",
  textTransform: "none",
  background: "#2c3537ba",
});

const CustomCard = ({ title, content, img_src, source_code, link }) => {
  return (
    <>
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
          <CardMedia component="img" height="140" image={img_src} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="#fff">
              {content}
            </Typography>
            <Box
              sx={{
                display: link || source_code ? "flex" : "none",
                justifyContent: "space-between",
                "&>a": {
                  textDecoration: "none",
                },
              }}
            >
              <a href={source_code} target="_blank" rel="noreferrer">
                <CustomButton
                  style={{ display: source_code ? "block" : "none" }}
                >
                  Source Code
                </CustomButton>
              </a>
              <a href={link} target="_blank" rel="noreferrer">
                <CustomButton style={{ display: link ? "block" : "none" }}>
                  Link
                </CustomButton>
              </a>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default CustomCard;
