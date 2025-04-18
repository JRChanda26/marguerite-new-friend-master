"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NousAgissons: React.FC = () => {
  const [nousPage, setNousPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("nous_agissons" as any);
      setNousPage(response);
    };

    fetchData();
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/contact");
  };

  const isMax = useMediaQuery("(min-width:1930px)");
  const isMax1 = useMediaQuery("(min-width:2050px)");
  const isMax2 = useMediaQuery("(min-width:2570px)");
  const isMax3 = useMediaQuery("(min-width:2890px)");
  const isMax4 = useMediaQuery("(min-width:3210px)");
  const isMax5 = useMediaQuery("(min-width:1370px)");
  const isMax6 = useMediaQuery("(min-width:1200px)");
  const isMax7 = useMediaQuery("(min-width:750px)");
  const isMax8 = useMediaQuery("(min-width:200px)");

  return (
    <div
      style={{
        // padding: isMax ? "0px 200px" : "0px 0px",
        padding: isMax4
          ? "0px 450px"
          : isMax3
            ? "0px 320px"
            : isMax2
              ? "0px 250px"
              : isMax1
                ? "0px 200px"
                : isMax
                  ? "0px 140px"
                  : isMax5
                    ? "50px 120px 30px 80px"
                    : isMax6
                      ? "20px 70px 20px 5px"
                      : isMax7
                        ? "20px 50px 20px 30px"
                        : isMax8
                          ? "20px 20px 20px 0px"
                          : "0px",
        background: isMax || isMax5 ? "#F6C09E" : "#F6C09E",
      }}
    >
      {nousPage.map((post: any) => (
        <Grid
          container
          spacing={0}
          key={post.id}
          sx={{
            marginTop: {
              xs: "50px",
              sm: "50px",
              lg: "70px",
              xl: "80px",
            },
            backgroundColor: "#F6C09E",
            alignItems: "stretch",
          }}
        >
          {/* Two Grid Items in a Single Row */}
          <Grid
            item
            xs={4.5}
            sm={4.5}
            lg={4.5}
            xl={6}
            sx={{
              marginTop: "0%",
              display: "flex",
              justifyContent: "center", // Centers horizontally
              alignItems: "center",
              backgroundColor: "#F6C09E",
              paddingTop: { xs: "20px", sm: "25px", lg: "30px", xl: "70px" },
              paddingBottom: { xs: "20px", sm: "25px", lg: "30px", xl: "60px" },
              paddingLeft: {
                xs: "20px",
                sm: "20px",
                lg: "60px",
                xl: isMax ? "0px" : "30px",
              },
              paddingRight: { xs: "20px", sm: "20px", lg: "30px", xl: "30px" },
              opacity: isVisible ? 1 : 0, // Control visibility with state
              transform: isVisible ? "translateY(0)" : "translateY(50px)", // Initial animation effect
              transition: "opacity 2s ease-in-out, transform 2s ease-in-out",
            }}
          >
            <Box
              sx={{
                gap: "0px",
                opacity: "0px",
                // backgroundColor: "#F6C09E",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
              variant="h1"
                sx={{
                  fontFamily: "Mulish",
                  fontWeight: 500,
                  fontSize: {
                    xs: "20px",
                    sm: "55px",
                    lg: "55px",
                    xl: "55px",
                  },

                  lineHeight: {
                    xs: "18px",
                    sm: "1.1em",
                    lg: "1.1em",
                    xl: "1.1em",
                  },
                  color: "#24535C",
                  textAlign: "left",
                }}
              >
                {post.data.heading}
              </Typography>
              <Typography
              variant="h2"
                sx={{
                  fontFamily: "Mulish",
                  color: "#24535C",
                  fontWeight: 300,
                  paddingTop: { xs: "8px", sm: "25px", lg: "33px", xl: "33px" },
                  paddingRight: isMax5 ? "300px" : "0px",
                  fontSize: {
                    xs: "12px",
                    sm: "25px",
                    lg: "34px",
                    xl: "34px",
                  },

                  lineHeight: {
                    xs: "12px",
                    sm: "30px",
                    lg: "1.2em",
                    xl: "1.2em",
                  },
                  letterSpacing: "0%",
                }}
              >
                {post.data.title}
              </Typography>
              <Button
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  background: "#24535C",
                  borderRadius: "82px",
                  top: { xs: "5px", sm: "10px", lg: "30px", xl: "30px" },
                  height: { xs: "22px", sm: "40px", lg: "66px", xl: "66px" },
                  width: {
                    xs: "80px",
                    sm: "150px",
                    lg: "203px",
                    xl: "203.85px",
                  },
                  justifyContent: "space-around",
                  "&:focus": {
                    background: "#24535C",
                  },
                  "&:hover": {
                    background: "#24535C",
                  },
                }}
                onClick={handleNavigation}
              >
                <Typography
                variant="h4"
                  sx={{
                    fontFamily: "Mulish",
                    fontWeight: 500,
                    fontSize: {
                      xs: "7px",
                      sm: "12px",
                      lg: "21px",
                      xl: "21px",
                    },
                    lineHeight: {
                      xs: "0px",
                      sm: "12px",
                      lg: "1.7em",
                      xl: "1.7em",
                    },
                    letterSpacing: "0%",
                    color: "#FFFFFF",
                    textTransform: "none",
                  }}
                >
                  {post.data.button_text}
                </Typography>
                {post?.data.button_icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.button_icon.url || ""}
                    alt={post.data.button_icon}
                    style={{
                      width: "20%",
                      height: "auto",
                    }}
                  />
                )}
              </Button>
            </Box>
          </Grid>

          {/* Second Grid Item (Image) */}
          <Grid
            item
            xs={7.5}
            sm={7.5}
            lg={7.5}
            xl={5.5} //6
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: isMax ? "90px 0px 40px 0px" : "0px 0px",
            }}
          >
            {post?.data.background_image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.data.background_image.url || ""}
                alt={post.data.background_image.alt || "Background"}
                style={{
                  height: "100%",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            )}
          </Grid>
        </Grid>
      ))}
    </div>
  );
};

export default NousAgissons;
