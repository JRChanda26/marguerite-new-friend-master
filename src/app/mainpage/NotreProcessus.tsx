"use client";
import React, { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { client } from "../../../lib/prismic-configuration";

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
    // fontWeight: 400,
    fontWeight: 300,
    color: "#1E1E1E",
    // fontFamily: "Mulish",
    fontFamily: "Helvetica, sans-serif",
    letterSpacing: "0%",
  };

  const heading: React.CSSProperties = {
    color: "#24535C",
    textTransform: "uppercase",
    fontWeight: 600,
    letterSpacing: "17.5%",
    // fontFamily: "Mulish",
    fontFamily: "Helvetica, sans-serif",
  };

  const description: React.CSSProperties = {
    color: "#1E1E1E",
    // fontWeight: 400,
    fontWeight: 500,
    // fontFamily: "Mulish",
    fontFamily: "Helvetica, sans-serif",
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
    fontFamily: "Helvetica, sans-serif",
    // fontFamily: "Mulish",
    fontStyle: "italic",
    letterSpacing: "0%",
  };

  const [isHovered, setIsHovered] = useState<number | null>(null);

  const isMax = useMediaQuery("(min-width:1930px)");
    const isMax1 = useMediaQuery("(min-width:2050px)");
    const isMax2 = useMediaQuery("(min-width:2570px)");
    const isMax3 = useMediaQuery("(min-width:2890px)");
    const isMax4 = useMediaQuery("(min-width:3210px)");

  return (
    <div
      style={{
        // padding: isMax ? "0px 350px" : "0px 0px",
        padding : isMax4 ? "0px 650px" 
        : isMax3 ? "0px 550px" 
        : isMax2 ? "0px 450px" 
        : isMax1 ? "0px 350px" 
        : isMax ? "0px 140px" 
        : "0px 0px",
      }}
    >
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
              // fontWeight: 700,
              fontWeight: 600,
              // lineHeight: "80.32px",
              fontSize: { xs: "28px", sm: "40px", lg: "64px", xl: "32px" }, //xl: "64px"
              lineHeight: { xs: "30px", sm: "50px", lg: "auto", xl: "1.5em" }, //xl: "auto"
              color: "#0A1411",
              // fontFamily: "Mulish",
              fontFamily: "Helvetica, sans-serif",
              margin: {
                xs: "5% 10% 2% 10%",
                sm: "5% 10% 2% 10%",
                lg: "5% 10%",
                xl: isMax ? "100px 0px 31px 0px" : "100px 100px 31px 100px",
              },
            }}
          >
            {notrePage[0]?.data.heading}
          </Typography>
          <Typography
            sx={{
              // fontSize: "24px",
              // fontWeight: 400,
              fontWeight: 500,
              // lineHeight: "38.04px",
              fontSize: { xs: "12px", sm: "16px", lg: "24px", xl: "18px" }, // xl: "24px",
              lineHeight: {
                xs: "15px",
                sm: "20px",
                lg: "38.4px",
                // xl: "38.4px",
                xl: "1.9em",
              },
              color: "#565656",
              margin: {
                xs: "0% 10%",
                sm: "0% 15%",
                lg: "0px 155px 196px 155px",
                xl: isMax ? "30px 425px 50px 425px" : "0px 550px 100px 550px",
              },
              // fontFamily: "Mulish",
              fontFamily: "Helvetica, sans-serif",
            }}
          >
            {notrePage[0]?.data.description}
          </Typography>
        </Grid>
        <Grid
          sx={{
            margin: {
              xs: "0% 0% 0% 5%",
              sm: "5%",
              lg: "0px 100px 200px 100px",
              xl: isMax ? "0px 100px 100px 250px" : "0px 50px 100px 350px",
            },
          }}
        >
          <Grid
            item
            xl={10}
            lg={12}
            xs={12}
            sm={12}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", lg: "row", xl: "row" },
              justifyContent: "space-evenly",
              margin: {
                xs: "0px 0px 30px 0px",
                sm: "0px",
                lg: "",
                xl: "0px 52px 0px 0px",
              },
              gap: { xs: "0px", sm: "0px", lg: "124px", xl: "50px" },
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
                gap: { xs: "5px", sm: "0%", lg: "18px", xl: "28px" },
                paddingLeft: { xs: "20px" },
              }}
            >
              <Typography
                sx={{
                  ...heading,
                  fontSize: { xs: "12px", sm: "14px", lg: "16px", xl: "32px" }, //xl: "18px"
                  lineHeight: {
                    xs: "28px",
                    sm: "25px",
                    lg: "auto",
                    // xl: "auto",
                    xl: "1.5em",
                  },
                }}
              >
                {notrePage[0]?.data.card_heading1}
              </Typography>
              <Typography
                sx={{
                  ...title,
                  fontSize: { xs: "25px", sm: "32px", lg: "35px", xl: "28px" },//xl: "42px"
                  lineHeight: {
                    xs: "30px",
                    sm: "38px",
                    lg: "auto",
                    // xl: "auto",
                    xl:"1.1em"
                  },
                  paddingRight: { xl: "0px" },
                }}
              >
                {notrePage[0]?.data.card_title1}
              </Typography>
              <Typography
                sx={{
                  ...description,
                  fontSize: { xs: "12px", sm: "14px", lg: "14px", xl: "17px" },//xl: "18px" 
                  lineHeight: {
                    xs: "20px",
                    sm: "25px",
                    lg: "185%",
                    // xl: "185%",
                    xl: "1.9em",
                  },
                  paddingRight: { xl: "0px" },
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
            xl={10}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", lg: "row", xl: "row" },
              justifyContent: "space-evenly",
              margin: {
                xs: "0px 0px 0px 0px",
                sm: "0px",
                lg: "100px 0px 100px 60px",
                xl: isMax ? "20px 112px 20px 20px" : "50px 112px 50px 20px",
              },
              gap: { lg: "50px", xl: "0px" },
            }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: { xs: "5px", sm: "2%", lg: "18px", xl: "28px" },
                paddingLeft: { xs: "20px" },
              }}
            >
              <Typography
                sx={{
                  ...heading,
                  fontSize: { xs: "12px", sm: "14px", lg: "16px", xl: "32px" },// xl: "18px"
                  lineHeight: {
                    xs: "28px",
                    sm: "25px",
                    lg: "auto",
                    // xl: "auto",
                    xl: "1.5em",
                  },
                }}
              >
                {notrePage[0]?.data.card_heading2}
              </Typography>
              <Typography
                sx={{
                  ...title,
                  fontSize: { xs: "25px", sm: "32px", lg: "35px", xl: "28px" },//xl: "42px"
                  lineHeight: {
                    xs: "30px",
                    sm: "38px",
                    lg: "auto",
                    // xl: "auto",
                    xl: "1.1em",
                  },
                  paddingRight: { xl: "100px" },
                }}
              >
                {notrePage[0]?.data.card_title2}
              </Typography>
              <Typography
                sx={{
                  ...description,
                  fontSize: { xs: "12px", sm: "14px", lg: "14px", xl: "17px" },//xl: "18px"
                  lineHeight: {
                    xs: "20px",
                    sm: "25px",
                    lg: "185%",
                    // xl: "185%",
                    xl: "1.9em",
                  },
                  paddingRight: { xl: "150px" },
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
                    width: "95%",
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
            xl={10}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", lg: "row", xl: "row" },
              justifyContent: "space-evenly",
              margin: {
                xs: "0px 0px 30px 0px",
                lg: "",
                xl: "0px 42px 0px 0px",
              },
              gap: { lg: "111px", xl: "50px" },
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
                gap: { xs: "5px", sm: "2%", lg: "18px", xl: "28px" },
                paddingLeft: { xs: "20px" },
              }}
            >
              <Typography
                sx={{
                  ...heading,
                  fontSize: { xs: "12px", sm: "14px", lg: "16px", xl: "32px" }, //xl: "18px" 
                  lineHeight: {
                    xs: "28px",
                    sm: "25px",
                    lg: "auto",
                    // xl: "auto",
                    xl: "1.5em",
                  },
                }}
              >
                {notrePage[0]?.data.card_heading3}
              </Typography>
              <Typography
                sx={{
                  ...title,
                  fontSize: { xs: "25px", sm: "32px", lg: "35px", xl: "28px" },//xl: "42px"
                  lineHeight: {
                    xs: "30px",
                    sm: "38px",
                    lg: "auto",
                    // xl: "auto",
                    xl: "1.1em",
                  },
                  paddingRight: { xl: "0px" },
                }}
              >
                {notrePage[0]?.data.card_title3}
              </Typography>
              <Typography
                sx={{
                  ...description,
                  fontSize: { xs: "12px", sm: "14px", lg: "14px", xl: "17px" }, //xl: "18px"
                  lineHeight: {
                    xs: "20px",
                    sm: "25px",
                    lg: "185%",
                    // xl: "185%",
                    xl: "1.9em",
                  },
                  paddingRight: { xl: "0px" },
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
