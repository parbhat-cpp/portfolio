import styled from "@emotion/styled";
import { Alert, Box, Button, InputBase, Typography } from "@mui/material";
import { useState } from "react";
import SendIcon from "@mui/icons-material/Send";

const SERVER_URL = "https://portfolio-server-8k26.onrender.com/";

const CustomButton = styled(Button)({
  background: "#2b3334",
  color: "#ebeb90",
});

const CustomInput = styled(InputBase)({
  border: "1px solid #00ffe7",
  color: "#fff",
  borderRadius: "9px",
  padding: "7px",
  margin: "12px 0",
});

const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [empty, setEmpty] = useState(false);

  const setDefault = () => {
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSend = async () => {
    if (!name || !email || !message) {
      setEmpty(true);
      return;
    }

    try {
      setDefault();
      await fetch(`${SERVER_URL}/send-mail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

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
          component="form"
          sx={{
            width: { lg: "60%", md: "60%", sm: "80%", xs: "90%" },
            background: "#2b2626",
            borderRadius: "12px",
            padding: { lg: "7px", md: "7px", sm: "5px", xs: "5px" },
            textAlign: "center",
            "&>div": {
              width: {
                lg: "75%",
                md: "75%",
                sm: "82%",
                xs: "90%",
              },
            },
          }}
        >
          <Typography variant="h6">Contact Me</Typography>
          <CustomInput
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <CustomInput
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            type="text"
            placeholder="Type your message"
            multiline
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          {empty ? (
            <Alert
              sx={{
                background: "#0006",
                color: "#fff",
                margin: "0 auto",
              }}
              severity="error"
            >
              Enter all the fields
            </Alert>
          ) : (
            ""
          )}
          <div
            style={{
              width: "100%",
              display: "flex",
              margin: "7px 0",
            }}
          >
            <CustomButton
              style={{
                textTransform: "none",
                margin: "0 auto",
              }}
              onClick={handleSend}
            >
              <Typography>Send</Typography>{" "}
              <SendIcon style={{ marginLeft: 6 }} fontSize="40px"/>
            </CustomButton>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default ContactSection;
