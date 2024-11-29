"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import EastIcon from "@mui/icons-material/East";

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
                  xs: "0% 55% 0% 0%",
                  sm: "5% 55% 0% 0%",
                  lg: "10% 55% 0% 0%",
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
                    fontSize: { xs: "20px", sm: "40px", lg: "75px" },
                    lineHeight: { xs: "20px", sm: "30px", lg: "80px" },
                    color: "rgba(36, 83, 92, 1)",
                  }}
                >
                  {post.data.heading}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Mulish, sans-serif",
                    color: "rgba(36, 83, 92, 1)",
                    fontWeight: 700,
                    fontSize: { xs: "10px", sm: "25px", lg: "65px" },
                    lineHeight: { xs: "12px", sm: "30px", lg: "80px" },
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
                    marginTop: "3%",
                    justifyContent: "space-around",
                    padding:{ xs: "2% 5%", sm: "3% 5%", lg: "2% 4%" }
                  }}
                  // onClick={handleNavigation}
                >
                  <Typography
                    sx={{
                      fontFamily: "Mulish, sans-serif",
                      fontWeight: 700,
                      fontSize: { xs: "10px", sm: "12px", lg: "16px" },
                      lineHeight: { xs: "10px", sm: "12px", lg: "18.24px" },
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
            <Grid container spacing={0} key={post.id}>
              <Grid
                item
                xs={5}
                sm={5}
                lg={5}
                sx={{ backgroundColor: "#F6C09E" }}
              />
              <Grid item xs={7} sm={7} lg={7}>
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
