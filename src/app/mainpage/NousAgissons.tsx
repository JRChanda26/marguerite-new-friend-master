"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

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
  // Trigger the fade-in effect once the component mounts
  setTimeout(() => {
    setIsVisible(true);
  }, 500); // Delay before the fade-in starts (adjust as needed)
}, []);


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
                margin: "260px 776px 219px 108.04px",
                padding: '64px',
                opacity: isVisible ? 1 : 0, // Control visibility with state
                transform: isVisible ? 'translateY(0)' : 'translateY(50px)', // Initial animation effect
                transition: 'opacity 2s ease-in-out, transform 2s ease-in-out', // Smooth transition for both opacity and transform
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
              <div style={{padding:'64px 64px 64px 64px',}}>
              <Typography
                style={{
                  fontFamily: "Jenna Sue",
                  fontWeight: 400,
                  fontSize: "64px",
                  lineHeight: "76.8px",
                  color: "rgba(36, 83, 92, 1)",
                  
                }}
              >
                {post.data.leftcontent1}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Mulish",
                  color: "rgba(36, 83, 92, 1)",
                  fontWeight: 700,
                  fontSize: "58px",
                  lineHeight: "69.6px",
                }}
              >
                {post.data.leftcontent2}
              </Typography>
              <Link href="/Footer" style={{ textDecoration: "none" }}>
                <Button
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    background: "#24535C",
                    padding: "16px 24px 16px 24px",
                    gap: "18px",
                    borderRadius: "82px",
                    top:'36px'
                  }}
                >
                  <Typography
                    style={{
                      fontFamily:'Mulish',
                      fontWeight: 400,
                      fontSize: "15.2px",
                      lineHeight: "18.24px",
                      color: "rgba(255, 255, 255, 1)",
                    }}
                  >
                    {post.data.buttontext}
                  </Typography>
                  <img
                    src={post.data.buttonimage.url || ""}
                    alt={post.data.buttonimage}
                    style={{}}
                  />
                </Button>
              </Link>
              </div>
            </div>
            <Grid container spacing={0} key={post.id}>
              <Grid item lg={4} sx={{ backgroundColor: "#F6C09E" }}></Grid>
              <Grid item lg={8}>
                <img
                  src={post.data.backgroundimage.url || ""}
                  alt={post.data.backgroundimage}
                  style={{ height: "100%", width: "100%" }}
                />
              </Grid>
            </Grid>
          </>
        ))}
      </div>
    </Box>
  );
};

export default NousAgissons;
