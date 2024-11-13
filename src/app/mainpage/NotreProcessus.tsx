"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { Grid, Typography } from "@mui/material";
import { PrismicNextLink } from "@prismicio/next";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function NotreProcessus() {
  // const client = createClient();
  // const settings = await client.getSingle("notre_processus");

  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const data = await client.getSingle("notre_processus" as any);
      setSettings(data);
    }
    fetchData();
  });

  const title: React.CSSProperties = {
    color: "#1E1E1E",
    fontSize: "42px",
    lineHeight: "49.22px",
    fontFamily: "Mulish",
  };

  const subTitle: React.CSSProperties = {
    color: "#24535C",
    textTransform: "uppercase",
    fontSize: "18px",
    fontWeight: 600,
    letterSpacing: "5px",
    lineHeight: "20.59px",
    fontFamily: "Mulish",
  };

  const description: React.CSSProperties = {
    color: "#1E1E1E",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "33.3px",
    fontFamily: "Mulish",
    fontStyle: "italic",
  };

  const textLink: React.CSSProperties = {
    color: "#24535C",
    fontSize: "14px",
    fontWeight: 400,
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    fontFamily: "Mulish",
    fontStyle: "italic",
  };

  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: "80.32px",
              color: "#0A1411",
              fontFamily: "Mulish",
            }}
          >
            <PrismicRichText field={settings?.data.title} />
          </div>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "38.04px",
              color: "#565656",
              padding: "0px 100px",
              fontFamily: "Mulish",
            }}
          >
            <PrismicRichText field={settings?.data.description} />
          </div>
        </Grid>
        <Grid
          item
          lg={12}
          xs={12}
          sm={12}
          // md={6}
          sx={{
            display: "flex",
            // flexDirection: "row",
            flexDirection: { xs: "column", sm: "row" },
            gap: "50px",
            // padding: "50px 50px 0px 80px",
          }}
        >
          <div>
            {settings?.data.image1 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={settings.data.image1.url || undefined}
                alt={settings.data.image1.alt || "Image"}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "30px",
            }}
          >
            <div style={subTitle}>{settings?.data.sub_title1}</div>
            <div style={title}>
              <PrismicRichText field={settings?.data.title1} />
            </div>
            <div style={description}>
              <PrismicRichText field={settings?.data.description1} />
            </div>
            <Typography
              style={{
                ...textLink,
                transition: "transform 0.3s ease",
                transform: isHovered === 1 ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setIsHovered(1)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {settings?.data.button_text1}
              <ArrowRightAltIcon />
            </Typography>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          // md={6}
          sx={{
            display: "flex",
            // flexDirection: "row",
            flexDirection: { xs: "column", sm: "row" },
            gap: "50px",
            // padding: "50px 0px 0px 50px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "30px",
            }}
          >
            <div style={subTitle}>{settings?.data.sub_title2}</div>
            <div style={title}>
              <PrismicRichText field={settings?.data.title2} />
            </div>
            <div style={description}>
              <PrismicRichText field={settings?.data.description2} />
            </div>

            <Typography
              style={{
                ...textLink,
                transition: "transform 0.3s ease",
                transform: isHovered === 2 ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setIsHovered(2)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {settings?.data.button_text2}
              <ArrowRightAltIcon />
            </Typography>
          </div>
          <div>
            {settings?.data.image2 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={settings.data.image2.url || undefined}
                alt={settings.data.image2.alt || "Image"}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            )}
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          // md={6}
          sx={{
            display: "flex",
            // flexDirection: "row",
            flexDirection: { xs: "column", sm: "row" },
            gap: "50px",
            // padding: "50px 50px 0px 50px",
          }}
        >
          <div>
            {settings?.data.image3 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={settings.data.image3.url || undefined}
                alt={settings.data.image3.alt || "Image"}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingTop: "30px",
            }}
          >
            <div style={subTitle}>{settings?.data.sub_title3}</div>
            <div style={title}>
              <PrismicRichText field={settings?.data.title3} />
            </div>
            <div style={description}>
              <PrismicRichText field={settings?.data.description3} />
            </div>

            <Typography
              style={{
                ...textLink,
                transition: "transform 0.3s ease",
                transform: isHovered === 3 ? "scale(1.05)" : "scale(1)",
              }}
              onMouseEnter={() => setIsHovered(3)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {settings?.data.button_text3}
              <ArrowRightAltIcon />
            </Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
