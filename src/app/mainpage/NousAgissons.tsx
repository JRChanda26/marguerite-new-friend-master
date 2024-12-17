"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import { Box, Button, Grid, Typography } from "@mui/material";
import EastIcon from "@mui/icons-material/East";

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

  return (
    <div>
      {nousPage.map((post: any) => (
        <Grid
          container
          spacing={0}
          key={post.id}
          sx={{
            marginTop: {
              xs: "20px",
              sm: "-25px",
              lg: "-90px",
              xl: "-100px",
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
            xl={4.5}
            sx={{
              marginTop: "11%",
              // margin: {
              //   xs: "10% 60% 0% 0%",
              //   sm: "13% 65% 0% 0%",
              //   lg: "10% 65% 0% 0%",
              //   xl: "10% 65% 0% 0%",
              // },
              backgroundColor: "#F6C09E",
              padding: { xs: "20px", sm: "25px", lg: "30px", xl: "30px" },
              opacity: isVisible ? 1 : 0, // Control visibility with state
              transform: isVisible ? "translateY(0)" : "translateY(50px)", // Initial animation effect
              transition: "opacity 2s ease-in-out, transform 2s ease-in-out",
            }}
          >
            <Box
              sx={{
                height: "100%", // Ensure the Box takes the full height of the parent Grid item
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Typography
                sx={{
                  fontFamily: 'Helvetica, sans-serif',
                  fontWeight: 400,
                  fontSize: {
                    xs: "20px",
                    sm: "30px",
                    lg: "50px",
                    xl: "64px",
                  },
                  lineHeight: {
                    xs: "15px",
                    sm: "30px",
                    lg: "76.8px",
                    xl: "76.8px",
                  },
                  color: "#24535C",
                  textAlign: "left",
                }}
              >
                {post.data.heading}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Helvetica, sans-serif',
                  color: "#24535C",
                  fontWeight: 700,
                  fontSize: {
                    xs: "12px",
                    sm: "25px",
                    lg: "45px",
                    xl: "50px",
                  },
                  lineHeight: {
                    xs: "12px",
                    sm: "30px",
                    lg: "69.6px",
                    xl: "69.6px",
                  },
                  // letterSpacing: "0%",
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
                  height: { xs: "25px", sm: "40px", lg: "66px", xl: "66px" },
                  width: {
                    xs: "80px",
                    sm: "150px",
                    lg: "203.85px",
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
              >
                <Typography
                  sx={{
                    fontFamily: 'Helvetica, sans-serif',
                    fontWeight: 400,
                    fontSize: {
                      xs: "8px",
                      sm: "12px",
                      lg: "15.2px",
                      xl: "15.2px",
                    },
                    lineHeight: {
                      xs: "10px",
                      sm: "12px",
                      lg: "50px",
                      xl: "50px",
                    },
                    letterSpacing: "0%",
                    color: "#FFFFFF",
                    textTransform: "none",
                  }}
                >
                  {post.data.button_text}
                </Typography>
                {post?.data.button_icon && (
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
            xl={7.5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {post?.data.background_image && (
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
