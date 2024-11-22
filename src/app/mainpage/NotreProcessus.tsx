"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { Grid, Typography } from "@mui/material";

export default function NotreProcessus() {
  // const client = createClient();
  // const settings = await client.getSingle("notre_processus");

  const [notrePage, setNotrePage] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const data = await client.getSingle("notre_processus" as any);
      setNotrePage(data);
    }
    fetchData();
  },[]);

  const title: React.CSSProperties = {
    color: "#1E1E1E",
    fontSize: "42px",
    lineHeight: "49.22px",
    fontFamily: "Mulish",
  };

  const heading: React.CSSProperties = {
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
          <Typography
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: "80.32px",
              color: "#0A1411",
              fontFamily: "Mulish",
            }}
          >
            {notrePage?.data.heading}
          </Typography>
          <Typography
            style={{
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "38.04px",
              color: "#565656",
              padding: "0px 100px",
              fontFamily: "Mulish",
            }}
          >
            {notrePage?.data.description}
          </Typography>
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
            flexDirection: { xs: "column", sm: "row", lg: "row" },
            gap: "50px",
            // padding: "50px 50px 0px 80px",
          }}
        >
          <div>
            {notrePage?.data.card_image1 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={notrePage.data.card_image1.url || undefined}
                alt={notrePage.data.card_image1.alt || "Image"}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            )}
          </div>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: {xs:'0%', sm:'3%', lg:'10%'},
              paddingRight: "5%",
              paddingLeft:'5%'
            }}
          >
            <Typography style={heading}>
              {notrePage?.data.card_heading1}
            </Typography>
            <Typography style={title}>{notrePage?.data.card_title1}</Typography>
            <Typography style={description}>
              {notrePage?.data.card_description1}
            </Typography>
            <Typography
              style={{
                ...textLink,
                transition: "transform 0.3s ease",
                transform: isHovered === 1 ? "scale(1.02)" : "scale(1)",
              }}
              onMouseEnter={() => setIsHovered(1)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {notrePage?.data.link_text}
              {notrePage?.data.link_icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={notrePage.data.link_icon.url || undefined}
                  alt={notrePage.data.link_icon.alt || "Image"}
                  style={{
                    width: "50px",
                    height: "auto",
                  }}
                />
              )}
            </Typography>
          </Grid>
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
            flexDirection: { xs: "column", sm: "row", lg: "row" },
            gap: "50px",
            // padding: "50px 0px 0px 50px",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: {xs:'10%', sm:'3%', lg:'10%'},
              paddingLeft: "5%",
            }}
          >
            <Typography style={heading}>
              {notrePage?.data.card_heading2}
            </Typography>
            <Typography style={title}>{notrePage?.data.card_title2}</Typography>
            <Typography style={description}>
              {notrePage?.data.card_description2}
            </Typography>
            <Typography
              style={{
                ...textLink,
                transition: "transform 0.3s ease",
                transform: isHovered === 2 ? "scale(1.02)" : "scale(1)",
              }}
              onMouseEnter={() => setIsHovered(2)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {notrePage?.data.link_text}
              {notrePage?.data.link_icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={notrePage.data.link_icon.url || undefined}
                  alt={notrePage.data.link_icon.alt || "Image"}
                  style={{
                    width: "50px",
                    height: "auto",
                  }}
                />
              )}
            </Typography>
          </Grid>
          <div>
            {notrePage?.data.card_image2 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={notrePage.data.card_image2.url || undefined}
                alt={notrePage.data.card_image2.alt || "Image"}
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
            flexDirection: { xs: "column", sm: "row", lg: "row" },
            gap: "50px",
            // padding: "50px 50px 0px 50px",
          }}
        >
          <div>
            {notrePage?.data.card_image3 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={notrePage.data.card_image3.url || undefined}
                alt={notrePage.data.card_image3.alt || "Image"}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            )}
          </div>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingTop: {xs:'0%', sm:'3%', lg:'10%'},
              paddingRight: "5%",
              paddingLeft:'5%'
            }}
          >
            <Typography style={heading}>
              {notrePage?.data.card_heading3}
            </Typography>
            <Typography style={title}>{notrePage?.data.card_title3}</Typography>
            <Typography style={description}>
              {notrePage?.data.card_description3}
            </Typography>
            <Typography
              style={{
                ...textLink,
                transition: "transform 0.3s ease",
                transform: isHovered === 3 ? "scale(1.02)" : "scale(1)",
              }}
              onMouseEnter={() => setIsHovered(3)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {notrePage?.data.link_text}
              {notrePage?.data.link_icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={notrePage.data.link_icon.url || undefined}
                  alt={notrePage.data.link_icon.alt || "Image"}
                  style={{
                    width: "50px",
                    height: "auto",
                  }}
                />
              )}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
