"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

const Headerwithfirstpage: React.FC = () => {
  const [posts, setPosts] = useState<[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("header");
      setPosts(response);
    };

    fetchPosts();
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
              borderRadius: "16px",
              // justifyContent: "space-between",
              alignItems: "center",
              boxSizing: "border-box",
              border:'2.32px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <Grid item lg={12} sx={{
                display: "flex",
                flexDirection: "row",
                }}>
              <img
                src={post.data.logo.url || ""}
                alt={post.data.logo.alt || "logo"}
                style={{ height: "70px", width: "122px" ,padding:'13px 0px 13px 124px'}}
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
              <Typography
                style={{
                  fontFamily:'Mulish',
                  color: "#24535C",
                  fontSize: "26.49px",
                  fontWeight: 400,
                  lineHeight:'33.25px',
                  padding:'27px 55.33px 36px 262px'
                }}
              >
                {post.data.title1}
              </Typography>
              <Typography
                style={{
                  fontFamily:'Mulish',
                  color: "#24535C",
                  fontSize: "26.49px",
                  fontWeight: 400,
                  lineHeight:'33.25px',
                  padding:'27px 27.67px 36px 55.33px'
                }}
              >
                {post.data.title2}
              </Typography>
              <Typography
                style={{
                  fontFamily:'Mulish',
                  color: "#24535C",
                  fontSize: "26.49px",
                  fontWeight: 400,
                  lineHeight:'33.25px',
                  padding:'27px 57.53px 36px 27.67px'
                }}
              >
                {post.data.title3}
              </Typography>
              <img
                src={post.data.contact.url || ""}
                alt={post.data.contact.alt || "icon"}
                style={{ height: "66.7px", width: "66.7px", padding:'13.08px 0px 16.22px 57.53px'}}
              />
            </Grid>
          </Grid>
        ))}
      </div>

      <div>
        {posts.map((post: any) => (
          <>
            <div
              style={{
                position: "absolute",
                backgroundColor: "#FFFFFF",
                borderRadius: "48px",
                margin: "260px 776px 219px 108.04px",
              }}
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

export default Headerwithfirstpage;
