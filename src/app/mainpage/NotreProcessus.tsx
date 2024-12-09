"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { Grid, Typography } from "@mui/material";
import { client } from "../../../prismic-configuration";

export default function NotreProcessus() {
  // const client = createClient();
  // const settings = await client.getSingle("notre_processus");

  const [notrePage, setNotrePage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("notre_processus" as any);
      setNotrePage(response);
    };
    fetchData();
  }, []);

  const title: React.CSSProperties = {
    fontWeight: 400,
    color: "#1E1E1E",
    fontFamily: "Mulish",
    letterSpacing: "0%",
  };

  const heading: React.CSSProperties = {
    color: "#24535C",
    textTransform: "uppercase",
    fontWeight: 600,
    letterSpacing: "17.5%",
    fontFamily: "Mulish",
  };

  const description: React.CSSProperties = {
    color: "#1E1E1E",
    fontWeight: 400,
    fontFamily: "Mulish",
    fontStyle: "italic",
    letterSpacing: "0%",
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
    letterSpacing: "0%",
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
              fontSize: { xs: "28px", sm: "45px", lg: "64px", xl: "64px" },
              lineHeight: { xs: "30px", sm: "50px", lg: "auto", xl: "auto" },
              color: "#0A1411",
              fontFamily: "Mulish",
              margin: {
                xs: "10%",
                sm: "10%",
                lg: "5% 10%",
                xl: "225.32px 273px 31px 379px",
              },
            }}
          >
            {notrePage[0]?.data.heading}
          </Typography>
          <Typography
            sx={{
              // fontSize: "24px",
              fontWeight: 400,
              // lineHeight: "38.04px",
              fontSize: { xs: "12px", sm: "16px", lg: "24px", xl: "24px" },
              lineHeight: {
                xs: "20px",
                sm: "20px",
                lg: "38.4px",
                xl: "38.4px",
              },
              color: "#565656",
              margin: {
                xs: "1% 3%",
                sm: "1% 8%",
                lg: "0px 225px 196px 225px",
                xl: "0px 425px 196px 425px",
              },
              fontFamily: "Mulish",
            }}
          >
            {notrePage[0]?.data.description}
          </Typography>
        </Grid>
        <Grid
          sx={{
            margin: {
              xs: "5%",
              sm: "5%",
              lg: "0px 100px 200px 100px",
              xl: "0px 249px 349px 237px",
            },
          }}
        >
          <Grid
            item
            xl={12}
            lg={12}
            xs={12}
            sm={12}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", lg: "row", xl: "row" },
              justifyContent: "space-evenly",
              margin: {
                xs: "",
                sm: "",
                lg: "",
                xl: "0px 42px 0px 0px",
              },
              gap: { xs: "", sm: "", lg: "124px", xl: "124px" },
            }}
          >
            <div>
              {notrePage[0]?.data.card_image1 && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={notrePage[0]?.data.card_image1.url || undefined}
                  alt={notrePage[0]?.data.card_image1.alt || "Image"}
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
                gap: { xs: "2%", sm: "2%", lg: "18px", xl: "18px" },
              }}
            >
              <Typography
                sx={{
                  ...heading,
                  fontSize: { xs: "12px", sm: "14px", lg: "18px", xl: "18px" },
                  lineHeight: {
                    xs: "28px",
                    sm: "25px",
                    lg: "auto",
                    xl: "auto",
                  },
                }}
              >
                {notrePage[0]?.data.card_heading1}
              </Typography>
              <Typography
                sx={{
                  ...title,
                  fontSize: { xs: "25px", sm: "32px", lg: "42px", xl: "42px" },
                  lineHeight: {
                    xs: "30px",
                    sm: "38px",
                    lg: "auto",
                    xl: "auto",
                  },
                }}
              >
                {notrePage[0]?.data.card_title1}
              </Typography>
              <Typography
                sx={{
                  ...description,
                  fontSize: { xs: "12px", sm: "14px", lg: "18px", xl: "18px" },
                  lineHeight: {
                    xs: "20px",
                    sm: "25px",
                    lg: "185%",
                    xl: "185%",
                  },
                }}
              >
                {notrePage[0]?.data.card_description1}
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
                {notrePage[0]?.data.link_text}
                {notrePage[0]?.data.link_icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={notrePage[0]?.data.link_icon.url || undefined}
                    alt={notrePage[0]?.data.link_icon.alt || "Image"}
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
            xl={12}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", lg: "row", xl: "row" },
              justifyContent: "space-evenly",
              margin: {
                lg: "100px 0px 100px 60px",
                xl: "128px 42px 128px 0px",
              },
              gap: { lg: "50px", xl: "154px" },
            }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: { xs: "2%", sm: "2%", lg: "18px", xl: "18px" },
              }}
            >
              <Typography
                sx={{
                  ...heading,
                  fontSize: { xs: "12px", sm: "14px", lg: "18px", xl: "18px" },
                  lineHeight: {
                    xs: "28px",
                    sm: "25px",
                    lg: "auto",
                    xl: "auto",
                  },
                }}
              >
                {notrePage[0]?.data.card_heading2}
              </Typography>
              <Typography
                sx={{
                  ...title,
                  fontSize: { xs: "25px", sm: "32px", lg: "42px", xl: "42px" },
                  lineHeight: {
                    xs: "30px",
                    sm: "38px",
                    lg: "auto",
                    xl: "auto",
                  },
                }}
              >
                {notrePage[0]?.data.card_title2}
              </Typography>
              <Typography
                sx={{
                  ...description,
                  fontSize: { xs: "12px", sm: "14px", lg: "18px", xl: "18px" },
                  lineHeight: {
                    xs: "20px",
                    sm: "25px",
                    lg: "185%",
                    xl: "185%",
                  },
                }}
              >
                {notrePage[0]?.data.card_description2}
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
                {notrePage[0]?.data.link_text}
                {notrePage[0]?.data.link_icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={notrePage[0]?.data.link_icon.url || undefined}
                    alt={notrePage[0]?.data.link_icon.alt || "Image"}
                    style={{
                      width: "50px",
                      height: "auto",
                    }}
                  />
                )}
              </Typography>
            </Grid>
            <div>
              {notrePage[0]?.data.card_image2 && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={notrePage[0]?.data.card_image2.url || undefined}
                  alt={notrePage[0]?.data.card_image2.alt || "Image"}
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
            xl={12}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", lg: "row", xl: "row" },
              justifyContent: "space-evenly",
              margin: { lg: "", xl: "0px 42px 0px 0px" },
              gap: { lg: "111px", xl: "111px" },
            }}
          >
            <div>
              {notrePage[0]?.data.card_image3 && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={notrePage[0]?.data.card_image3.url || undefined}
                  alt={notrePage[0]?.data.card_image3.alt || "Image"}
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
                gap: { xs: "2%", sm: "2%", lg: "18px", xl: "18px" },
              }}
            >
              <Typography
                sx={{
                  ...heading,
                  fontSize: { xs: "12px", sm: "14px", lg: "18px", xl: "18px" },
                  lineHeight: {
                    xs: "28px",
                    sm: "25px",
                    lg: "auto",
                    xl: "auto",
                  },
                }}
              >
                {notrePage[0]?.data.card_heading3}
              </Typography>
              <Typography
                sx={{
                  ...title,
                  fontSize: { xs: "25px", sm: "32px", lg: "42px", xl: "42px" },
                  lineHeight: {
                    xs: "30px",
                    sm: "38px",
                    lg: "auto",
                    xl: "auto",
                  },
                }}
              >
                {notrePage[0]?.data.card_title3}
              </Typography>
              <Typography
                sx={{
                  ...description,
                  fontSize: { xs: "12px", sm: "14px", lg: "18px", xl: "18px" },
                  lineHeight: {
                    xs: "20px",
                    sm: "25px",
                    lg: "185%",
                    xl: "185%",
                  },
                }}
              >
                {notrePage[0]?.data.card_description3}
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
                {notrePage[0]?.data.link_text}
                {notrePage[0]?.data.link_icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={notrePage[0]?.data.link_icon.url || undefined}
                    alt={notrePage[0]?.data.link_icon.alt || "Image"}
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
      </Grid>
    </div>
  );
}
