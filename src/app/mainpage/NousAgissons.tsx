"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

const NousAgissons: React.FC = () => {
  const [nousPage, setNousPage] = useState<[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("nous_agissons");
      setNousPage(response);
    };

    fetchPosts();
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
    <Box>
      <div>
        {nousPage.map((post: any) => (
          <>
            <Grid
              sx={{
                position: "absolute",
                borderRadius: "48px",
                margin: {
                  xs: "5% 40% 0% 0%",
                  sm: "10% 40% 0% 5%",
                  lg: "15% 40% 0% 5%",
                },
                padding: "30px",
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
                    fontSize: { xs: "28px", sm: "40px", lg: "65px" },
                    lineHeight: { xs: "20px", sm: "50px", lg: "80px" },
                    color: "rgba(36, 83, 92, 1)",
                  }}
                >
                  {post.data.heading}
                </Typography>
                <Typography
                  sx={{
                    // fontFamily: "Mulish",
                    color: "rgba(36, 83, 92, 1)",
                    fontWeight: 700,
                    fontSize: { xs: "15px", sm: "25px", lg: "65px" },
                    lineHeight: { xs: "20px", sm: "45px", lg: "69px" },
                  }}
                >
                  {post.data.title}
                </Typography>
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    background: "#24535C",
                    borderRadius: "82px",
                    marginTop: "20px",
                    justifyContent: "space-around",
                  }}
                  // onClick={handleNavigation}
                >
                  <Typography
                    sx={{
                      // fontFamily: "Mulish",
                      fontWeight: 400,
                      fontSize: { xs: "12px", sm: "18px", lg: "20px" },
                      lineHeight: { xs: "5px", sm: "12px", lg: "18.24px" },
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
              </div>
            </Grid>
            <Grid container spacing={0} key={post.id}>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ backgroundColor: "#F6C09E" }}
              ></Grid>
              <Grid item xs={12} sm={8}>
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
