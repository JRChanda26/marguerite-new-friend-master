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

export default function NeManquez() {
  // const client = createClient();
  // const settings = await client.getSingle("liberez");

  const [neManquezPage, setNeManquezPage] = useState<any>("");
  useState(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("ne_manquez" as any);
      setNeManquezPage(response);
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

  const backgroundImage = neManquezPage[0]?.data?.background_image?.url || "";
  console.log(backgroundImage);
  return (
    <div style={{ background: "#FFFFFF", margin: "145px 178px" }}>
      <Grid container spacing={2}>
        <Grid
          item
          lg={12}
          sx={{
            backgroundImage: `url(${backgroundImage}), linear-gradient(to bottom, #F6C09E, #F29B64)`,
            backgroundSize: { xs: "contain", sm: "contain", lg: "contain" },
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: "center",
            // padding: "5%",
            borderRadius: "110px",
          }}
        >
          <Grid
            item
            lg={4}
            sx={{
              padding: { lg: "103px 0px 0px 114px" },
            }}
          >
            <Typography
              sx={{
                color: "#24535C",
                fontFamily: "Mulish",
                fontSize: { xs: "27px", sm: "35px", lg: "41.81px" },
                lineHeight: { xs: "28px", sm: "38px", lg: "auto" },
                fontWeight: 700,
              }}
            >
              {neManquezPage[0]?.data.title}
            </Typography>
            <Typography
              sx={{
                color: "#24535C",
                fontFamily: "Mulish",
                fontSize: { xs: "14px", sm: "18px", lg: "23.52px" },
                lineHeight: { xs: "18px", sm: "28px", lg: "160%" },
                fontWeight: 400,
                padding: { lg: "15px 0px 120px 0px" },
              }}
            >
              {neManquezPage[0]?.data.description}
            </Typography>
            {/* <div>
              {errors.email && (
                <Typography
                  color="error"
                  variant="body2"
                  sx={{ marginTop: "4px" }}
                >
                  {errors.email}
                </Typography>
              )}
            </div> */}
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
              boxShadow: "0px 4px 12px rgba(35, 107, 121, 0.5)",
              height: { lg: "86.58px" },
              width: { lg: "786px" },
            }}
          >
            <TextField
              name="email_text_field"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSubmit(e);
                }
              }}
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
                borderRadius: "88px",
                textTransform: "none",
                color: "#FFFFFF",
                fontFamily: "Mulish",
                fontSize: { xs: "10px", sm: "15px", lg: "19.25px" },
                fontWeight: 400,
                padding: "2.5%",
                "&:hover": {
                  background: "#24535C",
                  boxShadow: "none",
                },
              }}
              onClick={handleSubmit}
            >
              {neManquezPage[0]?.data.button_text}
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
        <div>
          {errors.email && (
            <Typography color="error" variant="body2">
              {errors.email}
            </Typography>
          )}
        </div>
      </Grid>
    </div>
  );
}
