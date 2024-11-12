"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

const Header: React.FC = () => {
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
          <Grid
            container
            spacing={0}
            key={post.id}
            style={{
              position: "fixed",
              top: 0,
              zIndex: 1,
              display: "flex",
              flexDirection: "row",
              boxShadow:'0px 0px 51.7px 0px rgba(36, 83, 92, 0.1)',
              backdropFilter:'blur(58.09981155395508px)',
              background:'rgba(255, 255, 255, 0.7)',
              // boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2)",
              // background: "#24535C1A",
              // background: "rgba(36, 83, 92, 0.1)",
              // right: 0,
              width: "100%",
              // width: "calc(100% - 123px)",
              borderRadius: "0px 16px",
              // justifyContent: "space-between",
              boxSizing: "border-box",
              border:'2.32px solid rgba(255, 255, 255, 0.1)',
              justifyContent:'space-evenly',
            }}
          >
            <Grid item lg={12} sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent:'space-evenly',
                alignItems:'center',
                padding:'10px'
                }}>
              <img
                src={post.data.logo.url || ""}
                alt={post.data.logo.alt || "logo"}
                style={{ height: "70px", width: "122px" ,
                  // padding:'13px 0px 13px 124px'
                }}
              />
            {/* </Grid>
            <Grid
              item
              lg={10}
              style={{
                display: "flex",
                flexDirection: "row",
                // gap: "55.33px",
                // justifyContent: "flex-end",
              }}
            > */}
            <Link href={'/manageperlacare'} style={{textDecoration:'none'}}>
              <Typography
                style={{
                  fontFamily:'Mulish',
                  color: "#24535C",
                  fontSize: "26.49px",
                  fontWeight: 400,
                  lineHeight:'33.25px',
                  // padding:'27px 55.33px 36px 262px'
                }}
              >
                {post.data.title1}
              </Typography>
              </Link>
              <Link href={'/lecarechez'} style={{textDecoration:'none'}}>
              <Typography
                style={{
                  fontFamily:'Mulish',
                  color: "#24535C",
                  fontSize: "26.49px",
                  fontWeight: 400,
                  lineHeight:'33.25px',
                  // padding:'27px 27.67px 36px 55.33px'
                }}
              >
                {post.data.title2}
              </Typography>
              </Link>
              <Link href={'/caremanagement'} style={{textDecoration:'none'}}>
              <Typography
                style={{
                  fontFamily:'Mulish',
                  color: "#24535C",
                  fontSize: "26.49px",
                  fontWeight: 400,
                  lineHeight:'33.25px',
                  // padding:'27px 57.53px 36px 27.67px'
                }}
              >
                {post.data.title3}
              </Typography>
              </Link>
              <img
                src={post.data.contact.url || ""}
                alt={post.data.contact.alt || "icon"}
                style={{ height: "66.7px", width: "66.7px", 
                  // padding:'13.08px 0px 16.22px 57.53px'
                }}
              />
            </Grid>
          </Grid>
        ))}
      </div>
    </Box>
  );
};

export default Header;
