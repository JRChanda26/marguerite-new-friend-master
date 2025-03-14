"use client";

import {
  Alert,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";

export default function NeManquez() {
  const [neManquezPage, setNeManquezPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("ne_manquez" as any);
      setNeManquezPage(response);
    };
    fetchData();
  }, []);

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
 
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  
  const placeholderFontSize = {
    fontSize: isSmallScreen ? "8px" : "19.25px",
  };

  return (
    <Grid
      sx={{
        background: "#FFFFFF",
        margin: {
          xs: "50px 30px 50px 50px",
          sm: "80px 30px 80px 50px",
          // md: "70px 100px",
          // lg: "100px",
          // xl: "145px 178px",
        },
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          lg={12}
          md={12}
          sx={{
            backgroundImage: `url(${backgroundImage}), linear-gradient(to bottom, #F6C09E, #F29B64)`,
            backgroundSize: {
              xs: "contain",
              sm: "contain",
              lg: "contain",
              md: "contain",
              xl: "contain",
            },
            backgroundRepeat: "no-repeat",
            backgroundPosition: "right",
            display: "flex",
            justifyContent: "space-evenly",
            flexDirection: { xs: "row", sm: "row" },
            alignItems: "center",
            padding: {xs:"3%"},
            borderRadius: { xs: "25px", sm: "50px",md:"60px", lg: "90px", xl: "110px" },
          }}
        >
          <Grid
            item
            xs={6}
            sm={5}
            md={4}
            lg={4}
            xl={4}
            sx={{
              padding: {
                xs: "0px 0px 0px 0px",
                sm: "30px 0px 0px 20px",
                lg: "50px 0px 0px 50px",
                md: "20px 0px 0px 50px",
                xl: "50px 0px 0px 50px",
              },
            }}
          >
            <Typography
              sx={{
                color: "#24535C",
                fontFamily: "Mulish",
                fontSize: { xs: "14px", sm: "22px",md: "30px", lg: "38px", xl: "41.81px" },
                lineHeight: { xs: "15px", sm: "28px",md: "42.47px", lg: "52.47px", xl: "52.47px" },
                fontWeight: 700,
              }}
            >
              {neManquezPage[0]?.data.title}
            </Typography>
            <Typography
              sx={{
                color: "#24535C",
                fontFamily: "Mulish",
                fontSize: { xs: "10px", sm: "14px",md: "18px", lg: "18px", xl: "23.52px" },
                lineHeight: { xs: "0px", sm: "28px",md: "160%", lg: "160%", xl: "160%" },
                fontWeight: 400,
                padding: {
                  xs: "5px 0px 15px 0px",
                  sm: "0px 0px 40px 0px",
                  lg: "15px 0px 100px 0px",
                  md: "15px 0px 20px 0px",
                  xl: "15px 0px 50px 0px",
                },
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
            xs={6}
            sm={6}
            md={7}
            lg={8}
            xl={6}
            sx={{
              background: "#FFFFFF",
              borderRadius: "50px",
              display: "flex",
              flexDirection: { xs: "row", sm: "row" },
              justifyContent: "space-between",
              padding: {xs:"0px 2px",sm:"5px 10px",md:"5px 10px",lg:"5px 10px",xl:"5px 10px"},
              alignItems: "center",
              boxShadow: "0px 4px 12px rgba(35, 107, 121, 0.5)",
              height: { xs: "20px", sm: "50px",md: "50px", lg: "80px", xl: "86.58px" },
              width: { xs: "100%", sm: "100%",md: "0px", lg: "0px", xl: "786px" },
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
              InputProps={{
                style: placeholderFontSize,
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
                fontSize: {
                  xs: "5px",
                  sm: "8px",
                  lg: "19.25px",
                  // md: "19.25px",
                  xl: "19.25px",
                },
                fontWeight: 400,
                padding: {xs:"2.5% 1% 2.5% 1%",sm:"2% 2.5%",lg:"2.5%",xl:"2.5%"},
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
    </Grid>
  );
}
