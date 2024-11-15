"use client";
import { createClient } from "@/prismicio";
import {
  Alert,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { PrismicRichText } from "@prismicio/react";
import React, { useState } from "react";
import { client } from "../../../prismic-configuration";

export default function Liberez() {
  // const client = createClient();
  // const settings = await client.getSingle("liberez");

  const [settings, setSettings] = useState<any>("");
  useState(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("liberez" as any);
      setSettings(response);
    };
    fetchPosts();
  });

  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "60px",
    background: "linear-gradient(to right, #F6C09E 60%, #24535C 40%)",
    margin: "auto",
  };

  const leftSectionStyle: React.CSSProperties = {
    flex: 1,
    color: "#161C2D",
    padding: "10px",
  };

  const rightSectionStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: "50px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "5px",
  };

  const titleStyle: React.CSSProperties = {
    color: "#24535C",
    fontSize: "41.81px",
    fontWeight: 700,
    lineHeight: "52.47px",
    fontFamily: "Mulish",
  };

  const descriptionStyle: React.CSSProperties = {
    color: "#24535C",
    fontSize: "23.52px",
    fontWeight: 400,
    lineHeight: "37.63px",
    fontFamily: "Mulish",
  };

  const [emailValue, setEmailValue] = useState("");

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  type Errors = {
    email?: string;
  };

  const [errors, setErrors] = useState<Errors>({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateFields = (): Errors => {
    const newErrors: Errors = {};
    if (!emailValue) newErrors.email = "Email is required";
    else if (!emailRegex.test(emailValue))
      newErrors.email = "Please enter a valid email address";
    return newErrors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check for errors
    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    const formData = {
      email: emailValue,
    };

    try {
      const response = await fetch("/api/save-data/email-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      setMessage(result.message);
      setOpenSnackbar(true);

      setEmailValue("");
    } catch (error) {
      console.error("Error saving email:", error);
    }
  };

  return (
    // <div style={{ background: "#FFFFFF", padding: "100px" }}>
    //   <div style={containerStyle}>
    //     <Grid container spacing={2} style={leftSectionStyle}>
    //       <Grid item xs={12}>
    //         <div style={titleStyle}>
    //           <PrismicRichText field={settings[0]?.data.title} />
    //         </div>
    //         <div style={descriptionStyle}>
    //           <PrismicRichText field={settings[0]?.data.description} />
    //         </div>
    //       </Grid>
    //     </Grid>
    //     <div style={rightSectionStyle}>
    //       {" "}
    //       <div style={inputStyle}>
    //         <TextField
    //           name="email_text_field"
    //           value={emailValue}
    //           onChange={(e) => setEmailValue(e.target.value)}
    //           placeholder="Entrez votre adresse email"
    //           variant="outlined"
    //           type="text"
    //           error={!!errors.email}
    //           // helperText={errors.email}
    //           autoComplete="off"
    //           sx={{
    //             // ...inputStyle,
    //             "& .MuiOutlinedInput-root": {
    //               "& fieldset": {
    //                 borderColor: "transparent", // Initial border color
    //               },
    //               "&:hover fieldset": {
    //                 borderColor: "transparent", // Hover border color
    //               },
    //               "&.Mui-focused fieldset": {
    //                 borderColor: "transparent", // Focused border color
    //               },
    //               ...(errors.email && {
    //                 "& fieldset": {
    //                   border: "none",
    //                 },
    //               }),
    //             },
    //           }}
    //         />
    //         <Button
    //           style={{
    //             background: "#24535C",
    //             borderRadius: "25px",
    //             textTransform: "none",
    //             color: "#FFFFFF",
    //             fontFamily: "Mulish",
    //             fontSize: "19.25px",
    //             fontWeight: 400,
    //           }}
    //           onClick={handleSubmit}
    //         >
    //           {settings[0]?.data.button_text}
    //         </Button>
    //       </div>
    //       <Snackbar
    //         open={openSnackbar}
    //         autoHideDuration={3000}
    //         onClose={handleCloseSnackbar}
    //       >
    //         <Alert onClose={handleCloseSnackbar} severity="success">
    //           {message}
    //         </Alert>
    //       </Snackbar>
    //     </div>
    //   </div>
    //   {errors.email && (
    //     <Typography color="error" variant="body2" sx={{ marginTop: "4px" }}>
    //       {errors.email}
    //     </Typography>
    //   )}
    // </div>
    <div style={{ background: "#FFFFFF", margin: "5%" }}>
      <Grid container spacing={2}>
        <Grid
          item
          lg={12}
          sx={{
            background: "linear-gradient(to right, #F6C09E 60%, #24535C 40%)",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            padding: "5%",
            borderRadius: "30px",
          }}
        >
          <Grid
            item
            lg={4}
            style={{
              margin: "30px",
            }}
          >
            <div
              style={{
                color: "#24535C",
                fontFamily: "Mulish",
                fontSize: "41px",
                fontWeight: 700,
              }}
            >
              {settings[0]?.data.title}
            </div>
            <div
              style={{
                color: "#24535C",
                fontFamily: "Mulish",
                fontSize: "23px",
                fontWeight: 400,
                paddingTop: "30px",
              }}
            >
              {settings[0]?.data.description}
            </div>
          </Grid>
          <Grid
            item
            lg={6}
            sx={{
              background: "#FFFFFF",
              borderRadius: "50px",
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              padding: "5px 10px",
              alignItems: "center",
            }}
          >
            <TextField
              name="email_text_field"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              placeholder="Entrez votre adresse email"
              variant="outlined"
              type="text"
              error={!!errors.email}
              helperText={errors.email}
              autoComplete="off"
              sx={{
                // ...inputStyle,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent", // Initial border color
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // Hover border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Focused border color
                  },
                  ...(errors.email && {
                    "& fieldset": {
                      border: "none",
                    },
                  }),
                },
              }}
            />
            <Button
              sx={{
                background: "#24535C",
                borderRadius: "25px",
                textTransform: "none",
                color: "#FFFFFF",
                fontFamily: "Mulish",
                fontSize: { xs: "12px", sm: "19.25px" },
                fontWeight: 400,
                "&:hover": {
                  background: "#24535C",
                  boxShadow: "none",
                },
              }}
              onClick={handleSubmit}
            >
              {settings[0]?.data.button_text}
            </Button>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
            >
              <Alert onClose={handleCloseSnackbar} severity="success">
                {message}
              </Alert>
            </Snackbar>
            {/* {errors.email && (
              <Typography
                color="error"
                variant="body2"
                sx={{ marginTop: "4px" }}
              >
                {errors.email}
              </Typography>
            )} */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
