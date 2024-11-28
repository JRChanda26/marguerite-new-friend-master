"use client";

import {
  Alert,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { client } from "../../../prismic-configuration";

export default function Liberez() {
  // const client = createClient();
  // const settings = await client.getSingle("liberez");

  const [liberezPage, setLiberezPage] = useState<any>("");
  useState(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("liberez" as any);
      setLiberezPage(response);
    };
    fetchPosts();
  });

  const [emailValue, setEmailValue] = useState("");

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<number | null>(null);

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
    if (!emailValue) newErrors.email = "L'email est requis";
    else if (!emailRegex.test(emailValue))
      newErrors.email = "Veuillez entrer une adresse email valide";
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

      const statusCode = response.status;
      setStatus(statusCode);

      setEmailValue("");
    } catch (error) {
      console.error("Error saving email:", error);
    }
  };

  return (
    <div style={{ background: "#FFFFFF", margin: "5% 10%" }}>
      <Grid container spacing={2}>
        <Grid
          item
          lg={12}
          sx={{
            background: "linear-gradient(to right, #F29B64 60%, #24535C 40%)",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            padding: "5%",
            borderRadius: "60px",
          }}
        >
          <Grid
            item
            lg={4}
            style={{
              margin: "30px",
            }}
          >
            <Typography
              sx={{
                color: "#24535C",
                fontFamily: "Mulish, sans-serif",
                fontSize: { xs: "27px", sm: "35px", lg: "41px" },
                lineHeight: { xs: "28px", sm: "38px", lg: "45px" },
                fontWeight: 700,
              }}
            >
              {liberezPage[0]?.data.heading}
            </Typography>
            <Typography
              sx={{
                color: "#24535C",
                fontFamily: "Mulish, sans-serif",
                fontSize: { xs: "14px", sm: "18px", lg: "23px" },
                lineHeight: { xs: "18px", sm: "28px", lg: "35px" },
                fontWeight: 400,
                paddingTop: "30px",
              }}
            >
              {liberezPage[0]?.data.description}
            </Typography>
            <div>
              {errors.email && (
                <Typography
                  color="error"
                  variant="body2"
                  sx={{ marginTop: "4px" }}
                >
                  {errors.email}
                </Typography>
              )}
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
              // helperText={errors.email}
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
                borderRadius: "30px",
                textTransform: "none",
                color: "#FFFFFF",
                fontFamily: "Mulish, sans-serif",
                fontSize: { xs: "10px", sm: "15px", lg: "19.25px" },
                fontWeight: 400,
                padding: "5px 10px",
                "&:hover": {
                  background: "#24535C",
                  boxShadow: "none",
                },
              }}
              onClick={handleSubmit}
            >
              {liberezPage[0]?.data.button_text}
            </Button>
            <Snackbar
              open={openSnackbar}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
            >
              <Alert
                onClose={handleCloseSnackbar}
                severity={status === 200 ? "success" : "error"}
              >
                {message}
              </Alert>
            </Snackbar>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
