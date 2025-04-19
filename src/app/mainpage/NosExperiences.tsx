"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";

const NosExperiences: React.FC = () => {
  const [nosPage, setNosPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("nos_experiences" as any);
      setNosPage(response);
    };
    fetchData();
  }, []);

  const backgroundImage = nosPage[0]?.data?.background_image?.url || "";

  const testimonials = nosPage
    .flatMap((post) => [post.data.testimonial1, post.data.testimonial2])
    .filter(Boolean);

  const repeatedTestimonials = Array.from(
    { length: 10 },
    () => testimonials
  ).flat();

  const [animationSpeed, setAnimationSpeed] = useState(40);

  const handleMouseEnter = () => setAnimationSpeed(100);
  const handleMouseLeave = () => setAnimationSpeed(40);

  const isMax8 = useMediaQuery("(min-width:200px)");
  const isMax7 = useMediaQuery("(min-width:750px)");
  const isMax6 = useMediaQuery("(min-width:1030px)");
  const isMax5 = useMediaQuery("(min-width:1370px)");
  const isMax = useMediaQuery("(min-width:1930px)");
  const isMax1 = useMediaQuery("(min-width:2050px)");
  const isMax2 = useMediaQuery("(min-width:2570px)");
  const isMax3 = useMediaQuery("(min-width:2890px)");
  const isMax4 = useMediaQuery("(min-width:3210px)");

  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: {
            xs: "contain",
            sm: "cover",
            lg: "contain",
            xl: "cover",
          },
          backgroundRepeat: "no-repeat",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={3}
          style={{
            // padding: isMax ? "0px 350px" : "0px 0px",
            padding: isMax4
              ? "0px 500px"
              : isMax3
                ? "0px 320px"
                : isMax2
                  ? "0px 280px"
                  : isMax1
                    ? "0px 220px"
                    : isMax
                      ? "0px 140px"
                      : isMax5
                        ? "0px 110px"
                        : isMax6
                          ? "0px 70px"
                          : isMax7
                            ? "0px 50px"
                            : isMax8
                              ? "0px 20px"
                              : "0px",
          }}
        >
          {nosPage.map((post: any, postIndex: number) => (
            <Grid
              item
              xs={12}
              key={postIndex}
              sx={{
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
              variant="h2"
                sx={{
                  fontFamily: "Mulish",
                  // fontFamily: "Helvetica, sans-serif",
                  color: "#FFFFFF",
                  // fontWeight: 700,
                  fontWeight: 600,
                  fontSize: {
                    xs: "20px",
                    sm: "48px",
                    lg: "34px",
                    // xl: "66.25px",
                    xl: "34px",
                  },
                  lineHeight: {
                    xs: "30px",
                    sm: "55px",
                    lg: "120%",
                    // xl: "120%",
                    xl: "1.5em",
                  },
                  padding: {
                    xs: "12% 0% 2% 0%",
                    sm: "8% 0% 2% 0%",
                    lg: "200px 0px 50px 0px",
                    xl:isMax?"270px 0px 50px 0px": "220px 0px 50px 0px",
                  },
                }}
              >
                {post.data.heading}
              </Typography>
              <Typography
              // variant=""
                sx={{
                  fontFamily: "Mulish",
                  // fontFamily: "Helvetica, sans-serif",
                  color: "#FFFFFF",
                  // fontWeight: 400,
                  fontWeight: 500,
                  fontSize: { xs: "8px", sm: "18px", lg: "18px", xl: "18px" }, // xl: "24px"
                  lineHeight: {
                    xs: "10px",
                    sm: "25px",
                    lg: "120%",
                    xl: "1.9em",
                  },
                  padding: {
                    xs: "0% 2%",
                    sm: "2%",
                    lg: "0px 0px 0px 0px",
                    xl: "0px 0px 0px 0px",
                  },
                }}
              >
                {post.data.description}
              </Typography>

              {/* Testimonials Scrolling Section */}
              <style jsx>{`
                @keyframes slide {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-100%);
                  }
                }
              `}</style>

              <Grid
                container
                item
                xs={12}
                sx={{
                  overflow: "hidden",
                  display: "flex",
                  justifyContent: "center",
                  padding: {
                    xs: "5px 0px 50px 0px",
                    sm: "50px 0px 80px 0px",
                    lg: "50px 0px 250px 0px",
                    xl: isMax ? "50px 0px 120px 0px" : "50px 0px 70px 0px",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    gap: "20px",
                    animation: `slide ${animationSpeed}s linear infinite`,
                    width: "100%",
                    maxWidth: "100vw",
                  }}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {repeatedTestimonials.map((testimonial, index) => (
                    <Box
                      key={index}
                      sx={{
                        background: "#FFFFFF",
                        borderRadius: "22.08px",
                        padding: {
                          xs: "10px",
                          sm: "20px",
                          md: "20px",
                          lg: "20px",
                          xl: "20px",
                        },
                        minWidth: {
                          xs: "200px",
                          sm: "300px",
                          md: "300px",
                          lg: "300px",
                          xl: "300px",
                        },
                        minHeight: { xl: "200px" },
                      }}
                    >
                      <Typography
                      // variant=""
                        sx={{
                          fontFamily: "Mulish",
                          // fontFamily: "Helvetica, sans-serif",
                          color: "#161C2D",
                          // fontWeight: 400,
                          fontWeight: 500,
                          fontSize: {
                            xs: "10px",
                            sm: "16px",
                            lg: "18px",
                            // xl: "19.32px",
                            xl: "18px",
                          },
                          lineHeight: {
                            xs: "10px",
                            sm: "22px",
                            lg: "160%",
                            // xl: "160%",
                            xl: "1.5em",
                          },
                          textAlign: "justify",
                        }}
                      >
                        {testimonial}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default NosExperiences;
