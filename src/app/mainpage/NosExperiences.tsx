"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Grid, Typography } from "@mui/material";

const NosExperiences: React.FC = () => {
  const [nosPage, setNosPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("nos_experiences");
      setNosPage(response);
    };
    fetchPosts();
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
        backgroundSize: "cover",
        width: "100%",
        paddingBottom: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          padding: "40px 20px",
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
              sx={{
                fontFamily: "Mulish, sans-serif",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: { xs: "36px", md: "66.25px" },
                lineHeight: { xs: "44px", md: "79.51px" },
                paddingTop: "200px",
              }}
            >
              {post.data.heading}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Mulish, sans-serif",
                color: "#FFFFFF",
                fontWeight: 400,
                fontSize: { xs: "18px", md: "24px" },
                lineHeight: "1.5",
                paddingTop: "20px",
                maxWidth: "800px",
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
                padding: { xs: "20px", md: "40px 0" },
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
                      minWidth: { xs: "250px", sm: "300px", md: "350px" },
                    }}
                  >
                    <Typography>{testimonial}</Typography>
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
