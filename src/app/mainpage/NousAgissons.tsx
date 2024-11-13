"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const NousAgissons: React.FC = () => {
  const [posts, setPosts] = useState<[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("header");
      setPosts(response);
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
        {posts.map((post: any) => (
          <>
            <div
              // style={{
              //   position: "absolute",
              //   backgroundColor: "#FFFFFF",
              //   borderRadius: "48px",
              //   margin: "260px 776px 219px 108.04px",
              // }}
              style={{
                position: "absolute",
                backgroundColor: "#FFFFFF",
                borderRadius: "48px",
                // margin: "200px 600px 0px 100px",
                margin: "10% 40% 0px 5%",
                padding: "30px",
                opacity: isVisible ? 1 : 0, // Control visibility with state
                transform: isVisible ? "translateY(0)" : "translateY(50px)", // Initial animation effect
                transition: "opacity 2s ease-in-out, transform 2s ease-in-out", // Smooth transition for both opacity and transform
              }}

              // style={{
              //   position: "absolute",
              //   backgroundColor: "#FFFFFF",
              //   borderRadius: "48px",
              //   margin: "260px 776px 219px 108.04px",
              //   padding: '64px',
              //   animation: "fadeInUp 2s ease-in-out",
              //   opacity: 0,
              //   animationFillMode: "forwards",
              //   transform: 'translateY(50px)',
              //   transition: 'opacity 2s ease-in-out, transform 2s ease-in-out',
              // }}
              // onAnimationEnd={(e) => {
              //   e.currentTarget.style.opacity = "1"; // after animation ends, ensure opacity remains at 1
              //   e.currentTarget.style.transform = "translateY(0)";
              // }}
            >
              <div>
                <Typography
                  sx={{
                    fontFamily: "Jenna Sue",
                    fontWeight: 400,
                    // fontSize: "44px",
                    fontSize: "5vw",
                    // lineHeight: "76.8px",
                    lineHeight:{ xs: "35px", md: "69.6px" },
                    color: "rgba(36, 83, 92, 1)",
                  }}
                >
                  {post.data.leftcontent1}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    color: "rgba(36, 83, 92, 1)",
                    fontWeight: 700,
                    // fontSize: "45px",
                    fontSize: "3.5vw",
                    // lineHeight: "69.6px",
                    lineHeight:{ xs: "20px", md: "69.6px" },
                  }}
                >
                  {post.data.leftcontent2}
                </Typography>
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    background: "#24535C",
                    padding: "5px 10px",
                    gap: "18px",
                    borderRadius: "82px",
                    marginTop: "20px",
                    maxWidth: "200px",
                    width: "100%",
                    justifyContent: "center",
                  }}
                  onClick={handleNavigation}
                >
                  <Typography
                    sx={{
                      fontFamily: "Mulish",
                      fontWeight: 400,
                      // fontSize: "15.2px",
                      fontSize: { xs: "10px", md: "15.2px" },
                      lineHeight: "18.24px",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    {post.data.buttontext}
                  </Typography>
                  {post?.data.buttonimage && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.data.buttonimage.url || ""}
                      alt={post.data.buttonimage}
                      style={{
                        width: "30px",
                        height: "30px",
                      }}
                    />
                  )}
                </Button>
              </div>
            </div>
            {/* <Grid container spacing={0} key={post.id}>
              <Grid item lg={4} sx={{ backgroundColor: "#F6C09E" }}></Grid>
              <Grid item lg={8}>
                <img
                  src={post.data.backgroundimage.url || ""}
                  alt={post.data.backgroundimage}
                  style={{ height: "100%", width: "100%" }}
                />
              </Grid>
            </Grid> */}
            <Grid container spacing={0} key={post.id}>
              <Grid
                item
                xs={12}
                sm={4}
                sx={{ backgroundColor: "#F6C09E" }}
              ></Grid>
              <Grid item xs={12} sm={8}>
                {post?.data.backgroundimage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.backgroundimage.url || ""}
                    alt={post.data.backgroundimage}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
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
