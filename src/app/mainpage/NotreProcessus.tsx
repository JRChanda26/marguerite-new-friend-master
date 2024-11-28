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
  }, []);

  const title: React.CSSProperties = {
    fontWeight: 400,
    color: "#1E1E1E",
    fontFamily: "Mulish, sans-serif",
  };

  const heading: React.CSSProperties = {
    color: "#24535C",
    textTransform: "uppercase",
    fontWeight: 600,
    letterSpacing: "5px",
    fontFamily: "Mulish, sans-serif",
  };

  const description: React.CSSProperties = {
    color: "#1E1E1E",
    fontWeight: 400,
    fontFamily: "Mulish, sans-serif",
    // fontStyle: "italic",
  };

  const textLink: React.CSSProperties = {
    color: "#24535C",
    fontSize: "14px",
    fontWeight: 400,
    textDecoration: "none",
    display: "flex",
    flexDirection: "row",
    fontFamily: "Mulish, sans-serif",
    // fontStyle: "italic",
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
            sx={{
              // fontSize: "64px",
              fontWeight: 700,
              // lineHeight: "80.32px",
              fontSize: { xs: "28px", sm: "45px", lg: "65px" },
              lineHeight: { xs: "30px", sm: "50px", lg: "80px" },
              color: "#0A1411",
              fontFamily: "sans-serif",
              marginTop: { xs: "10%", sm: "10%", lg: "7%" },
            }}
          >
            {notrePage?.data.heading}
          </Typography>
          <Typography
            sx={{
              // fontSize: "24px",
              fontWeight: 400,
              // lineHeight: "38.04px",
              fontSize: { xs: "12px", sm: "16px", lg: "25px" },
              lineHeight: { xs: "20px", sm: "20px", lg: "38.4px" },
              color: "#565656",
              margin: { xs: "1% 3%", sm: "1% 8%", lg: "1% 15%" },
              fontFamily: "sans-serif",
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
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", lg: "row" },
            justifyContent: "space-evenly",
            margin: "8% 5% 0% 5%",
            gap: "3%",
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
              justifyContent: "center",
              gap: { xs: "2%", sm: "2%", lg: "5%" },
            }}
          >
            <Typography
              sx={{
                ...heading,
                fontSize: { xs: "12px", sm: "14px", lg: "18px" },
                lineHeight: { xs: "28px", sm: "25px", lg: "33px" },
              }}
            >
              {notrePage?.data.card_heading1}
            </Typography>
            <Typography
              sx={{
                ...title,
                fontSize: { xs: "25px", sm: "32px", lg: "42px" },
                lineHeight: { xs: "30px", sm: "38px", lg: "49.22px" },
              }}
            >
              {notrePage?.data.card_title1}
            </Typography>
            <Typography
              sx={{
                ...description,
                fontSize: { xs: "12px", sm: "14px", lg: "18px" },
                lineHeight: { xs: "20px", sm: "25px", lg: "33px" },
              }}
            >
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
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", lg: "row" },
            justifyContent: "space-evenly",
            margin: "0% 5%",
            gap: "3%",
          }}
        >
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: { xs: "2%", sm: "2%", lg: "5%" },
            }}
          >
            <Typography
              sx={{
                ...heading,
                fontSize: { xs: "12px", sm: "14px", lg: "18px" },
                lineHeight: { xs: "28px", sm: "25px", lg: "33px" },
              }}
            >
              {notrePage?.data.card_heading2}
            </Typography>
            <Typography
              sx={{
                ...title,
                fontSize: { xs: "25px", sm: "32px", lg: "42px" },
                lineHeight: { xs: "30px", sm: "38px", lg: "49.22px" },
              }}
            >
              {notrePage?.data.card_title2}
            </Typography>
            <Typography
              sx={{
                ...description,
                fontSize: { xs: "12px", sm: "14px", lg: "18px" },
                lineHeight: { xs: "20px", sm: "25px", lg: "33px" },
              }}
            >
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
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", lg: "row" },
            justifyContent: "space-evenly",
            margin: "0% 5%",
            gap: "3%",
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
              justifyContent: "center",
              gap: { xs: "2%", sm: "2%", lg: "5%" },
            }}
          >
           <Typography
              sx={{
                ...heading,
                fontSize: { xs: "12px", sm: "14px", lg: "18px" },
                lineHeight: { xs: "28px", sm: "25px", lg: "33px" },
              }}
            >
              {notrePage?.data.card_heading3}
            </Typography>
            <Typography
              sx={{
                ...title,
                fontSize: { xs: "25px", sm: "32px", lg: "42px" },
                lineHeight: { xs: "30px", sm: "38px", lg: "49.22px" },
              }}
            >
              {notrePage?.data.card_title3}
            </Typography>
            <Typography
              sx={{
                ...description,
                fontSize: { xs: "12px", sm: "14px", lg: "18px" },
                lineHeight: { xs: "20px", sm: "25px", lg: "33px" },
              }}
            >
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
