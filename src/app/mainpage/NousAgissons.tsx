"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import { Box, Button, Grid, Typography } from "@mui/material";
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
  
  return (
    <div>
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
              xl: "100px",
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
              marginTop: "0%",
              display: "flex",
              justifyContent: "center", // Centers horizontally
              alignItems: "center",
              backgroundColor: "#F6C09E",
              paddingTop: { xs: "20px", sm: "25px", lg: "30px", xl: "30px" },
              paddingBottom: { xs: "20px", sm: "25px", lg: "30px", xl: "30px" },
              paddingLeft: { xs: "20px", sm: "20px", lg: "30px", xl: "30px" },
              paddingRight: { xs: "20px", sm: "20px", lg: "30px", xl: "30px" },
              // padding: { xs: "20px", sm: "25px", lg: "30px", xl: "30px" },
              opacity: isVisible ? 1 : 0, // Control visibility with state
              transform: isVisible ? "translateY(0)" : "translateY(50px)", // Initial animation effect
              transition: "opacity 2s ease-in-out, transform 2s ease-in-out",
            }}
          >
            <Box
              sx={{
                // height: "100%", // Ensure the Box takes the full height of the parent Grid item
                // display: "flex",
                // flexDirection: "column",
                // justifyContent: "center",
                // width: "700px",
                // height: "510px",
                // top: "285px",
                // left: "52px",
                gap: "0px",
                opacity: "0px",
                backgroundColor: "#F6C09E",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                // alignItems: "center",
                // textAlign: "center",
                // padding: "20px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Helvetica, sans-serif",
                  fontWeight: 400,
                  fontSize: {
                    xs: "20px",
                    sm: "30px",
                    lg: "45px",
                    xl: "64px",
                  },

                  lineHeight: {
                    xs: "18px",
                    sm: "30px",
                    lg: "40px",
                    xl: "50px",
                  },
                  color: "#24535C",
                  textAlign: "left",
                }}
              >
                {post.data.heading}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Sans Serif Collection",
                  color: "#24535C",
                  fontWeight: 400,
                  paddingTop: { xs: "8px", sm: "25px", lg: "33px", xl: "33px" },
                  fontSize: {
                    xs: "12px",
                    sm: "25px",
                    lg: "40px",
                    xl: "58px",
                  },

                  lineHeight: {
                    xs: "12px",
                    sm: "30px",
                    lg: "40px",
                    xl: "69.6px",
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
                  onClick={handleNavigation}
                >
                  <Typography
                    sx={{
                      fontFamily: "Helvetica, sans-serif",
                      fontWeight: 400,
                      fontSize: {
                        xs: "7px",
                        sm: "12px",
                        lg: "15.2px",
                        xl: "15.2px",
                      },
                      lineHeight: {
                        xs: "0px",
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
            xl={7.5}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
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
