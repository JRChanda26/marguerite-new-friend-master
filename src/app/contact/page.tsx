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
import { PrismicNextLink } from "@prismicio/next";
import React, { useEffect, useState } from "react";
import EastIcon from "@mui/icons-material/East";
import { client } from "../../../lib/prismic-configuration";
// import { MapContainer, Marker, TileLayer } from "react-leaflet";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import Header from "../mainpage/Header";
import ReCAPTCHA from "react-google-recaptcha";
import Footer from "../mainpage/Footer";

// Dynamically import Leaflet components
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import("react-leaflet").then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-leaflet").then((mod) => mod.Marker),
  { ssr: false }
);

export default function Contact() {
  const [contactPage, setContactPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("contact" as any);
      setContactPage(response);
    };
    fetchData();
  }, []);

  const [pinIcon, setPinIcon] = useState(null);

  const latitude = contactPage[0]?.data.map.latitude;
  const longitude = contactPage[0]?.data.map.longitude;

  const position: [number, number] = [latitude, longitude];

  useEffect(() => {
    const L = require("leaflet");
    const icon = new L.Icon({
      iconUrl: "map-pin.png",
      iconSize: [32, 32],
    });
    setPinIcon(icon);
  }, []);

  const details: React.CSSProperties = {
    color: "#4D5053",
    fontSize: "20px",
    fontWeight: 400,
  };

  const mouseHover = {
    "& .MuiInput-underline:before": {
      borderBottomColor: "gray",
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "gray",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "transparent",
    },
    // "& .MuiInput-input": {
    //   color: "blue", // Text color
    // },
  };

  const [nomInputValue, setNomInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [sujetInputValue, setSujetInputValue] = useState("");
  const [telephoneInputValue, setTelephoneInputValue] = useState("");
  const [bonjourInputValue, setBonjourInputValue] = useState("");
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<number | null>(null);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  type Errors = {
    nom?: string;
    email?: string;
    sujet?: string;
    telephone?: string;
    bonjour?: string;
    captcha?: string;
  };

  const [errors, setErrors] = useState<Errors>({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateFields = (): Errors => {
    const newErrors: Errors = {};
    if (!nomInputValue) newErrors.nom = "Le nom est requis";
    if (!emailInputValue) newErrors.email = "L'email est requis";
    else if (!emailRegex.test(emailInputValue))
      newErrors.email = "Veuillez entrer une adresse email valide";
    if (!sujetInputValue) newErrors.sujet = "Le sujet est requis";
    if (!telephoneInputValue) newErrors.telephone = "Le téléphone est requis";
    else if (telephoneInputValue.length !== 10)
      newErrors.telephone =
        "Le numéro de téléphone doit comporter exactement 10 chiffres";
    if (!bonjourInputValue) newErrors.bonjour = "Le bonjour est requis";
    // if (!captchaVerified) newErrors.captcha = "Le captcha est requis";
    return newErrors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    // Check for errors
    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    } else {
      setErrors({});
    }

    const formData = {
      nom: nomInputValue,
      email: emailInputValue,
      sujet: sujetInputValue,
      telephone: telephoneInputValue,
      bonjour: bonjourInputValue,
      // captcha:captchaVerified,
    };

    try {
      const response = await fetch("/api/save-data/contact-data", {
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

      sendEmail(e);

      setNomInputValue("");
      setEmailInputValue("");
      setSujetInputValue("");
      setTelephoneInputValue("");
      setBonjourInputValue("");
      setCaptchaVerified(false);
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  const [emailStatus, setEmailStatus] = useState("");

  const sendEmail = async (e: any) => {
    e.preventDefault();

    setEmailStatus("Sending...");

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: emailInputValue }),
    });

    const result = await response.json();
    console.log("Result", result);

    if (response.ok) {
      setEmailStatus("Email sent successfully!");
    } else {
      setEmailStatus("Failed to send email");
    }
  };

  const apiKey = "abcdefghijklmnopqrstuvwxyz";

  const handleCaptcha = (value: any) => {
    console.log("Captcha value:", value);
    if (value) {
      setCaptchaVerified(true);
    } else {
      setCaptchaVerified(false);
    }
  };

  const contactDetails = [
    {
      icon: contactPage[0]?.data.email_icon,
      text: contactPage[0]?.data.email,
    },
    {
      icon: contactPage[0]?.data.phone_icon,
      text: contactPage[0]?.data.phone,
    },
    {
      icon: contactPage[0]?.data.web_icon,
      text: contactPage[0]?.data.web,
    },
  ];

  const socialLinks = [
    {
      platform: "facebook",
      link: contactPage[0]?.data.facebook_link,
      icon: contactPage[0]?.data.facebook,
    },
    {
      platform: "twitter",
      link: contactPage[0]?.data.twitter_link,
      icon: contactPage[0]?.data.twitter,
    },
    {
      platform: "linkedin",
      link: contactPage[0]?.data.linkedin_link,
      icon: contactPage[0]?.data.linked_in,
    },
    {
      platform: "instagram",
      link: contactPage[0]?.data.instagram_link,
      icon: contactPage[0]?.data.instagram,
    },
  ];

  const isMax = useMediaQuery("(min-width:1930px)");

  return (
    <div
      style={{
        padding: isMax ? "0px 350px" : "0px 0px",
      }}
    >
      <Header />
      <Grid
        sx={{
          backgroundImage: `url(${contactPage[0]?.data?.header_background?.url || ""})`,
          backgroundRepeat: "no-repeat",
          // backgroundSize: "cover",
          backgroundSize: {
            xs: "cover",
            sm: "cover",
            lg: "cover",
            xl: "cover",
          },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: {
              xs: "70px 50px 0px 50px",
              sm: "150.67px 150px 0px 150px",
              lg: "250px 150px 0px 150px",
              md: "250px 100px 0px 100px",
              xl: "420px 300px 0px 300px",
            },
          }}
        >
          <Grid
            sx={{
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: {
                xs: "20px 20px 0px 0px",
                sm: "37px 37px 0px 0px",
                lg: "37px 37px 0px 0px",
                xl: "37px 37px 0px 0px",
              },
              // padding: "41px 152px 42px 152px",
              padding: {
                xs: "0% 5% 0% 5%",
                sm: "3% 8%",
                lg: "41px 152px 41px 152px",
                xl: "21px 82px 21px 82px",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "DM Serif Display",
                color: "#292F36",
                fontWeight: 700,
                // fontSize: "50px",
                fontSize: { xs: "16px", sm: "40px", lg: "50px", xl: "50px" },
                // lineHeight: "62.5px",
                lineHeight: { xs: "40px", sm: "48px", lg: "125%", xl: "125%" },
                letterSpacing: "0%",
              }}
            >
              {contactPage[0]?.data.heading}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jost",
                color: "#4D5053",
                fontWeight: 400,
                // fontSize: "22px",
                fontSize: { xs: "10px", sm: "18px", lg: "22px", xl: "22px" },
                // lineHeight: "33px",
                lineHeight: { xs: "20px", sm: "28px", lg: "150%", xl: "150%" },
                letterSpacing: "1%",
              }}
            >
              {contactPage[0]?.data.sub_heading}
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        sx={{
          padding: {
            xs: "6%",
            sm: "5% 10%",
            lg: "50px 120px 287px 120px",
            md: "50px 150px 287px 150px",
            xl: "135px 200px 287px 200px",
          },
        }}
      >
        <Grid item xs={12}>
          <Typography
            sx={{
              color: "#292F36",
              fontSize: { xs: "30px", sm: "40px", lg: "50px", xl: "50px" },
              fontWeight: 700,
              textAlign: "center",
              padding: {
                sm: "0px",
                lg: "0px 196px 80px 196px",
                md: "0px 50px 0px 50px",
                xl: "0px 350px 80px 350px",
              },
              fontFamily: "Mulish",
              lineHeight: "150%",
              letterSpacing: "1%",
            }}
          >
            {contactPage[0]?.data.title}
          </Typography>
        </Grid>

        <Grid
          item
          container
          xs={12}
          sm={12}
          md={12}
          lg={12}
          xl={12}
          // spacing={2}
          sx={{
            justifyContent: "center",
            gap: "55px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid
            item
            xs={12}
            sm={7}
            lg={4}
            md={5}
            xl={4}
            sx={{
              background: "#BBDDD9",
              borderRadius: "50px",
              padding: {
                xs: "50px 32px",
                sm: "50px 32px",
                lg: "76px 32px",
                md: "36px 32px",
                xl: "100px 52px",
              },
              display: "flex",
              flexDirection: "column",
              gap: "42px",
            }}
          >
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "15px",
                }}
              >
                {detail.icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={detail.icon.url || undefined}
                    alt={detail.icon.alt || "Image"}
                    style={{
                      background: "#FFFFFF",
                      padding: "4%",
                      borderRadius: "40%",
                    }}
                  />
                )}
                <Typography
                  sx={{
                    fontSize: {
                      xs: "16px",
                      sm: "20px",
                      lg: "20px",
                      md: "18px",
                      xl: "28px",
                    },
                    display: "flex",
                    alignItems: "center",
                    fontFamily: "Jost",
                    lineHeight: "150%",
                    letterSpacing: "1%",
                    color: "#4D5053",
                  }}
                >
                  {detail.text}
                </Typography>
              </div>
            ))}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                gap: "35px",
              }}
            >
              {socialLinks.map((social, index) => (
                <PrismicNextLink key={index} field={social.link}>
                  {social.icon && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={social.icon.url || undefined}
                      alt={social.icon.alt || `${social.platform} icon`}
                      style={{ maxWidth: "30px", maxHeight: "30px" }}
                    />
                  )}
                </PrismicNextLink>
              ))}
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={8}
            lg={7}
            md={6}
            xl={7}
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                sm: "column",
                lg: "column",
                xl: "column",
              },
              gap: { lg: "50px", xl: "50px" },
            }}
          >
            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="nom_text_field"
                  value={nomInputValue}
                  onChange={(e) => setNomInputValue(e.target.value)}
                  placeholder="Nom"
                  variant="standard"
                  type="text"
                  fullWidth
                  autoComplete="off"
                  error={!!errors.nom}
                  helperText={errors.nom}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="email_text_field"
                  value={emailInputValue}
                  onChange={(e) => setEmailInputValue(e.target.value)}
                  placeholder="Email"
                  variant="standard"
                  type="text"
                  fullWidth
                  autoComplete="off"
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 4 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="sujet_text_field"
                  value={sujetInputValue}
                  onChange={(e) => setSujetInputValue(e.target.value)}
                  placeholder="Sujet"
                  variant="standard"
                  type="text"
                  fullWidth
                  autoComplete="off"
                  error={!!errors.sujet}
                  helperText={errors.sujet}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="telephone_text_field"
                  value={telephoneInputValue}
                  onChange={(e) =>
                    setTelephoneInputValue(e.target.value.replace(/\D/g, ""))
                  }
                  placeholder="Téléphone"
                  variant="standard"
                  type="tel"
                  fullWidth
                  autoComplete="off"
                  error={!!errors.telephone}
                  helperText={errors.telephone}
                />
              </Grid>
            </Grid>
            <TextField
              name="bonjour_text_field"
              value={bonjourInputValue}
              onChange={(e) => setBonjourInputValue(e.target.value)}
              placeholder="Bonjour, je suis intéressé par.."
              variant="standard"
              type="text"
              fullWidth
              autoComplete="off"
              multiline
              rows={5}
              error={!!errors.bonjour}
              helperText={errors.bonjour}
            />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center", mt: 2 }}
        >
          {/* <ReCAPTCHA sitekey={apiKey} onChange={handleCaptcha} /> */}
        </Grid>

        {errors.captcha && (
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            <Typography color="error" variant="body2">
              {errors.captcha}
            </Typography>
          </Grid>
        )}

        <Grid
          item
          xs={12}
          sx={{
            textAlign: { xs: "center", md: "right", lg: "right", xl: "right" },
          }}
        >
          <Button
            variant="contained"
            color="primary"
            sx={{
              textDecoration: "none",
              padding: {
                xs: "10px 24px",
                sm: "10px 24px",
                md: "3px 12px",
                lg: "10px 24px",
                xl: "10px 24px",
              },
              borderRadius: "10px",
              fontSize: {
                xs: "14px",
                sm: "14px",
                md: "10px",
                lg: "14px",
                xl: "14px",
              },
              fontWeight: 600,
              background: "#292F36",
              color: "#FFFFFF",
              "&:hover": {
                background: "#292F36",
                boxShadow: "none",
              },
            }}
            onClick={(e: any) => handleSubmit(e)}
          >
            {contactPage[0]?.data.button_text}
            {contactPage[0]?.data.button_icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={contactPage[0].data.button_icon.url || undefined}
                alt={contactPage[0].data.button_icon.alt || "Logo"}
                style={{
                  height: "auto",
                  width: "30px",
                  paddingTop: "5%",
                }}
              />
            )}
          </Button>
        </Grid>

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
      <Footer />
    </div>
  );
}
