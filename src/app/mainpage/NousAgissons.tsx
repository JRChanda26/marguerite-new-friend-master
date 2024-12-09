"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
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
    <Box>
      <div>
        {nousPage.map((post: any) => (
          <>
            <Grid
              sx={{
                position: "absolute",
                borderRadius: "48px",
                margin: {
                  xs: "10% 60% 0% 0%",
                  sm: "13% 65% 0% 0%",
                  lg: "15% 65% 0% 0%",
                  xl: "20% 65% 0% 0%",
                },
                padding: { xs: "20px", sm: "25px", lg: "30px", xl: "30px" },
                opacity: isVisible ? 1 : 0, // Control visibility with state
                transform: isVisible ? "translateY(0)" : "translateY(50px)", // Initial animation effect
                transition: "opacity 2s ease-in-out, transform 2s ease-in-out", // Smooth transition for both opacity and transform
              }}
            >
              <div>
                <Typography
                  sx={{
                    fontFamily: "Jenna Sue",
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
                      lg: "120%",
                      xl: "120%",
                    },
                    color: "#24535C",
                    letterSpacing: "0%",
                  }}
                >
                  {post.data.heading}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    color: "#24535C",
                    fontWeight: 700,
                    fontSize: {
                      xs: "12px",
                      sm: "25px",
                      lg: "45px",
                      xl: "58px",
                    },
                    lineHeight: {
                      xs: "12px",
                      sm: "30px",
                      lg: "120%",
                      xl: "120%",
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
                    marginTop: { xs: "5px", sm: "10px", lg: "36px", xl: "36px" },
                    height: { xs: "25px", sm: "40px", lg: "66px", xl: "66px" },
                    width: { xs: "80px", sm: "150px", lg: "203.85px", xl: "203.85px" },
                    justifyContent: "space-around",
                    "&:focus": {
                      background: "#24535C",
                    },
                    "&:hover": {
                      background: "#24535C",
                    },
                  }}
                  // onClick={handleNavigation}
                >
                  <Typography
                    sx={{
                      fontFamily: "Mulish",
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
                        lg: "120%",
                        xl: "120%",
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
                  {/* <EastIcon
                    sx={{
                      background: "#82C5BE",
                      borderRadius: "30px",
                      color: "#FFFFFF",
                      padding: {xs:'2px',sm:'5px',lg:'10px'},
                    }}
                  /> */}
                </Button>
              </div>
            </Grid>
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
              }}
            >
              <Grid
                item
                xs={4}
                sm={4}
                lg={4}
                xl={4}
                sx={{ backgroundColor: "#F6C09E" }}
              />
              <Grid item xs={8} sm={8} lg={8} xl={8}>
                {post?.data.background_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.background_image.url || ""}
                    alt={post.data.background_image}
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                )}
              </Grid>
            </Grid>
          </>
        ))}
      </div>
    </Box>
  );
};

export default NousAgissons;
