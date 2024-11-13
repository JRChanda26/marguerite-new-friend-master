"use client";

import {
  Alert,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { PrismicNextLink } from "@prismicio/next";
import React, { useEffect, useState } from "react";
import EastIcon from "@mui/icons-material/East";
import { client } from "../../../prismic-configuration";
// import { MapContainer, Marker, TileLayer } from "react-leaflet";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";
import Header from "../mainpage/Header";

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
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("contact" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  const [pinIcon, setPinIcon] = useState(null);

  const latitude = posts[0]?.data.map.latitude;
  const longitude = posts[0]?.data.map.longitude;

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
      borderBottomColor: "gray", // Default underline color
    },
    "& .MuiInput-underline:hover:before": {
      borderBottomColor: "gray", // Underline color on hover
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "transparent", // Remove blue color on focus
    },
    // "& .MuiInput-input": {
    //   color: "blue", // Text color
    // },
  };

  const [nomInputValue, setNomInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [subjectInputValue, setSubjectInputValue] = useState("");
  const [telephoneInputValue, setTelephoneInputValue] = useState("");
  const [bonjourInputValue, setBonjourInputValue] = useState("");

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("");

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  type Errors = {
    nom?: string;
    email?: string;
    subject?: string;
    telephone?: string;
    bonjour?: string;
  };

  const [errors, setErrors] = useState<Errors>({});

  const validateFields = (): Errors => {
    const newErrors: Errors = {};
    if (!nomInputValue) newErrors.nom = "Name is required";
    if (!emailInputValue) newErrors.email = "Email is required";
    if (!subjectInputValue) newErrors.subject = "Subject is required";
    if (!telephoneInputValue) newErrors.telephone = "Telephone is required";
    if (!bonjourInputValue) newErrors.bonjour = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Check for errors
    const newErrors = validateFields();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); // Set errors if validation fails
      return; // Stop form submission
    } else {
      setErrors({}); // Clear errors if validation passes
    }

    const formData = {
      nom: nomInputValue,
      email: emailInputValue,
      subject: subjectInputValue,
      telephone: telephoneInputValue,
      bonjour: bonjourInputValue,
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

      setNomInputValue("");
      setEmailInputValue("");
      setSubjectInputValue("");
      setTelephoneInputValue("");
      setBonjourInputValue("");
    } catch (error) {
      console.error("Error saving contact:", error);
    }
  };

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${posts[0]?.data?.banner?.url || ""})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          // width: "100%",
          // height: "603.67px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "250.67px",
          }}
        >
          <div
            style={{
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "37px 37px 0px 0px",
              padding: "41px 152px 41px 152px",
            }}
          >
            <Typography
              style={{
                fontFamily: "Mulish, sans-serif",
                color: "#0A1411",
                fontWeight: 700,
                fontSize: "64px",
                lineHeight: "80.32px",
              }}
            >
              {posts[0]?.data.heading}
            </Typography>
            <Typography
              style={{
                fontFamily: "Mulish, sans-serif",
                color: "#565656",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "38.4px",
              }}
            >
              {posts[0]?.data.sub_heading}
            </Typography>
          </div>
        </div>
      </div>
      <Grid container>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            justifyContent: "center",
            color: "#292F36",
            fontSize: "50px",
            fontWeight: 700,
            textAlign: "center",
            padding: "50px 200px 50px 200px",
          }}
        >
          {posts[0]?.data.title}
        </Grid>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Grid
            item
            lg={3}
            style={{
              background: "#BBDDD9",
              borderRadius: "12px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              {posts[0]?.data.email_icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={posts[0]?.data.email_icon.url || undefined}
                  alt={posts[0]?.data.email_icon.alt || "Image"}
                />
              )}
              <p style={details}>{posts[0]?.data.email}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              {posts[0]?.data.phone_icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={posts[0]?.data.phone_icon.url || undefined}
                  alt={posts[0]?.data.phone_icon.alt || "Image"}
                />
              )}
              <p style={details}>{posts[0]?.data.phone}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              {posts[0]?.data.web_icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={posts[0]?.data.web_icon.url || undefined}
                  alt={posts[0]?.data.web_icon.alt || "Image"}
                />
              )}
              <p style={details}>{posts[0]?.data.web}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "row",
              }}
            >
              <PrismicNextLink field={posts[0]?.data.facebook_link}>
                {posts[0]?.data.facebook && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={posts[0]?.data.facebook.url || undefined}
                    alt={posts[0]?.data.facebook.alt || "Image"}
                  />
                )}
              </PrismicNextLink>
              <PrismicNextLink field={posts[0]?.data.twitter_link}>
                {posts[0]?.data.twitter && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={posts[0]?.data.twitter.url || undefined}
                    alt={posts[0]?.data.twitter.alt || "Image"}
                  />
                )}
              </PrismicNextLink>
              <PrismicNextLink field={posts[0]?.data.linked_in_link}>
                {posts[0]?.data.linked_in && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={posts[0]?.data.linked_in.url || undefined}
                    alt={posts[0]?.data.linked_in.alt || "Image"}
                  />
                )}
              </PrismicNextLink>
              <PrismicNextLink field={posts[0]?.data.instagram_link}>
                {posts[0]?.data.instagram && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={posts[0]?.data.instagram.url || undefined}
                    alt={posts[0]?.data.instagram.alt || "Image"}
                  />
                )}
              </PrismicNextLink>
            </div>
          </Grid>
          <Grid
            item
            lg={7}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <TextField
                name="nom_text_field"
                value={nomInputValue}
                onChange={(e) => setNomInputValue(e.target.value)}
                placeholder="Nom"
                variant="standard"
                type="text"
                fullWidth
                sx={mouseHover}
                error={!!errors.nom}
                helperText={errors.nom}
              />
              <TextField
                name="email_text_field"
                value={emailInputValue}
                onChange={(e) => setEmailInputValue(e.target.value)}
                placeholder="Email"
                variant="standard"
                type="text"
                fullWidth
                sx={mouseHover}
                error={!!errors.email}
                helperText={errors.email}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: "20px",
              }}
            >
              <TextField
                name="subject_text_field"
                value={subjectInputValue}
                onChange={(e) => setSubjectInputValue(e.target.value)}
                placeholder="Subject"
                variant="standard"
                type="text"
                fullWidth
                sx={mouseHover}
                error={!!errors.subject}
                helperText={errors.subject}
              />
              <TextField
                name="telephone_text_field"
                value={telephoneInputValue}
                onChange={(e) => setTelephoneInputValue(e.target.value)}
                placeholder="Téléphone"
                variant="standard"
                type="text"
                fullWidth
                sx={mouseHover}
                error={!!errors.telephone}
                helperText={errors.telephone}
              />
            </div>
            <div>
              <TextField
                name="bonjour_text_field"
                value={bonjourInputValue}
                onChange={(e) => setBonjourInputValue(e.target.value)}
                placeholder="Bonjour, je suis intéressé par.."
                variant="standard"
                type="text"
                fullWidth
                sx={mouseHover}
                error={!!errors.bonjour}
                helperText={errors.bonjour}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item lg={12}>
          {/* <PrismicNextLink
            field={posts[0]?.data.button_link}
            style={{
              textDecoration: "none",
              background: "#292F36",
              color: "#FFFFFF",
              padding: "16px 44px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              float: "right",
              fontSize: "18px",
              fontWeight: 600,
            }}
          >
            {posts[0]?.data.button_text}
            <EastIcon />
          </PrismicNextLink> */}
          <Button
            style={{
              textDecoration: "none",
              background: "#292F36",
              color: "#FFFFFF",
              padding: "10px 24px",
              borderRadius: "10px",
              display: "flex",
              flexDirection: "row",
              gap: "10px",
              float: "right",
              fontSize: "14px",
              fontWeight: 600,
            }}
            onClick={handleSubmit}
          >
            {posts[0]?.data.button_text}
            <EastIcon />
          </Button>
        </Grid>
        {/* <Grid
          item
          lg={12}
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "100px",
            position:'sticky'
          }}
        >
          {latitude && longitude ? (
            <MapContainer
              center={position}
              zoom={13}
              scrollWheelZoom={false}
              style={{ height: "350px", width: "100%" }}
            >
              <TileLayer url="https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}" />
              {pinIcon && <Marker position={position} icon={pinIcon} />}
            </MapContainer>
          ) : (
            ""
          )}
        </Grid> */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
        >
          <Alert onClose={handleCloseSnackbar} severity="success">
            {message}
          </Alert>
        </Snackbar>
      </Grid>
    </div>
  );
}
