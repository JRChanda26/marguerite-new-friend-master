"use client";

import { Grid, TextField, Typography } from "@mui/material";
import { PrismicNextLink } from "@prismicio/next";
import React, { useEffect, useState } from "react";
import EastIcon from "@mui/icons-material/East";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { client } from "../../../prismic-configuration";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    email_text_field: "",
    nom_text_field: "",
    subject_text_field: "",
    telephone_text_field: "",
    bonjour_text_field: "",
  });

  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("contact");
      setPosts(response);
      // Initialize form values from fetched data
      if (response.length > 0) {
        setFormValues({
          email_text_field: response[0]?.data.email_text_field || "",
          nom_text_field: response[0]?.data.nom_text_field || "",
          subject_text_field: response[0]?.data.subject_text_field || "",
          telephone_text_field: response[0]?.data.telephone_text_field || "",
          bonjour_text_field: response[0]?.data.bonjour_text_field || "",
        });
      }
    };
    fetchPosts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

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

  return (
    <div>
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
                value={formValues.nom_text_field}
                onChange={handleChange}
                placeholder="Nom"
                variant="standard"
                type="text"
                fullWidth
                sx={mouseHover}
              />
              <TextField
                name="email_text_field"
                value={formValues.email_text_field}
                onChange={handleChange}
                placeholder="Email"
                variant="standard"
                type="text"
                fullWidth
                sx={mouseHover}
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
                value={formValues.subject_text_field}
                onChange={handleChange}
                placeholder="Subject"
                variant="standard"
                type="text"
                fullWidth
                sx={mouseHover}
              />
              <TextField
                name="telephone_text_field"
                value={formValues.telephone_text_field}
                onChange={handleChange}
                placeholder="Téléphone"
                variant="standard"
                type="text"
                fullWidth
                sx={mouseHover}
              />
            </div>
            <div>
              <TextField
                name="bonjour_text_field"
                value={formValues.bonjour_text_field}
                onChange={handleChange}
                placeholder="Bonjour, je suis intéressé par.."
                variant="standard"
                type="text"
                fullWidth
                sx={mouseHover}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item lg={12}>
          <PrismicNextLink
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
          </PrismicNextLink>
        </Grid>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "100px",
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
        </Grid>
      </Grid>
    </div>
  );
}
