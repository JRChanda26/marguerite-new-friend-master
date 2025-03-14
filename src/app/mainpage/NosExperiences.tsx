"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import { Box, Grid, Typography } from "@mui/material";

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

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: { xs: "cover", sm: "cover", lg: "contain", xl: "cover" },
        backgroundRepeat: "no-repeat",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={3}
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
              sx={{
                // fontFamily: "Mulish",
                fontFamily: 'Helvetica, sans-serif',
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: {
                  xs: "36px",
                  sm: "48px",
                  lg: "66.25px",
                  xl: "66.25px",
                },
                lineHeight: { xs: "44px", sm: "55px", lg: "120%", xl: "120%" },
                padding: {
                  xs: "12% 0% 2% 0%",
                  sm: "8% 0% 2% 0%",
                  lg: "150px 0px 36px 0px",
                  xl: "250px 0px 36px 0px",
                },
              }}
            >
              {post.data.heading}
            </Typography>
            <Typography
              sx={{
                // fontFamily: "Mulish",
                fontFamily: 'Helvetica, sans-serif',
                color: "#FFFFFF",
                fontWeight: 400,
                fontSize: { xs: "14px", sm: "18px", lg: "24px", xl: "24px" },
                lineHeight: { xs: "18px", sm: "25px", lg: "120%", xl: "120%" },
                padding: {
                  xs: "5%",
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
                  xs: "20px 0px 70px 0px",
                  sm: "50px 0px 80px 0px",
                  lg: "100px 0px 231px 0px",
                  xl: "179px 0px 231px 0px",
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
                      padding: "20px",
                      minWidth: {
                        xs: "250px",
                        sm: "300px",
                        md: "350px",
                        lg: "394px",
                        xl: "394px",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        // fontFamily: "Mulish",
                        fontFamily: 'Helvetica, sans-serif',
                        color: "#161C2D",
                        fontWeight: 400,
                        fontSize: {
                          xs: "12px",
                          sm: "16px",
                          lg: "18px",
                          xl: "19.32px",
                        },
                        lineHeight: {
                          xs: "16px",
                          sm: "22px",
                          lg: "160%",
                          xl: "160%",
                        },
                        textAlign:'justify'
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
  );
};

export default NosExperiences;
