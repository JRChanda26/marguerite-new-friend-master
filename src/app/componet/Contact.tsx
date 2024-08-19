import { createClient } from "@/prismicio";
import { Grid, TextField, Typography } from "@mui/material";
import { PrismicNextLink } from "@prismicio/next";
import React from "react";

export default async function Contact() {
  const client = createClient();
  const settings = await client.getSingle("contact");

  const backgroundImage = settings?.data?.banner?.url || "";

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
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          width: "100%",
          // height: "603.67px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "425.67px",
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
              {settings.data.heading}
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
              {settings.data.sub_heading}
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
          {settings.data.title}
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
              {settings.data.email_icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={settings.data.email_icon.url || undefined}
                  alt={settings.data.email_icon.alt || "Image"}
                />
              )}
              <p style={details}>{settings.data.email}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              {settings.data.phone_icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={settings.data.phone_icon.url || undefined}
                  alt={settings.data.phone_icon.alt || "Image"}
                />
              )}
              <p style={details}>{settings.data.phone}</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              {settings.data.web_icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={settings.data.web_icon.url || undefined}
                  alt={settings.data.web_icon.alt || "Image"}
                />
              )}
              <p style={details}>{settings.data.web}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-evenly",
                flexDirection: "row",
              }}
            >
              <PrismicNextLink field={settings.data.facebook_link}>
                {settings.data.facebook && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={settings.data.facebook.url || undefined}
                    alt={settings.data.facebook.alt || "Image"}
                  />
                )}
              </PrismicNextLink>
              <PrismicNextLink field={settings.data.twitter_link}>
                {settings.data.twitter && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={settings.data.twitter.url || undefined}
                    alt={settings.data.twitter.alt || "Image"}
                  />
                )}
              </PrismicNextLink>
              <PrismicNextLink field={settings.data.linked_in_link}>
                {settings.data.linked_in && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={settings.data.linked_in.url || undefined}
                    alt={settings.data.linked_in.alt || "Image"}
                  />
                )}
              </PrismicNextLink>
              <PrismicNextLink field={settings.data.instagram_link}>
                {settings.data.instagram && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={settings.data.instagram.url || undefined}
                    alt={settings.data.instagram.alt || "Image"}
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
                value={settings.data.nom_text_field || ""}
                placeholder="Nom"
                variant="standard"
                type="text"
                fullWidth
                sx={mouseHover}
              />
              <TextField
                value={settings.data.email_text_field || ""}
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
                value={settings.data.subject_text_field || ""}
                placeholder="Subject"
                variant="standard"
                type="text"
                fullWidth
                sx={mouseHover}
              />
              <TextField
                value={settings.data.telephone_text_field || ""}
                placeholder="Téléphone"
                variant="standard"
                type="text"
                fullWidth
                sx={mouseHover}
              />
            </div>
            <div>
              <TextField
                value={settings.data.bonjour_text_field || ""}
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
          <p>
            <a
              href={`https://www.google.com/maps?q=${settings.data.map.latitude},${settings.data.map.longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {settings.data.map.latitude}, {settings.data.map.longitude}
            </a>
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
