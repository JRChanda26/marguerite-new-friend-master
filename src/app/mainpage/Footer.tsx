"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

const Footer: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("footer");
      setPosts(response);
    };

    fetchPosts();
  }, []);

  return (
    <Box sx={{ backgroundColor: "#24535C", padding: "50px", mt: 4 }}>
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ margin: "1 auto" }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          textAlign={{ xs: "center", sm: "left" }}
        >
          {posts.map((post, postIndex) => (
            <div key={postIndex}>
              {post?.data.footerlogo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.data.footerlogo.url || undefined}
                  alt={post.data.footerlogo.alt || "Logo"}
                  style={{
                    height: "67.1px",
                    width: "56.26px",
                    paddingBottom: "36.49px",
                  }}
                />
              )}
              <Typography
                sx={{
                  fontFamily: "Mulish, sans-serif",
                  color: "#FFFFFF",
                  fontWeight: 400,
                  fontSize: { xs: "16px", sm: "18px", md: "19.84px" },
                  lineHeight: "24.9px",
                  paddingTop: "10px",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                {post?.data.lefttext}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  mt: 2,
                  gap: "20px",
                }}
              >
                <Link
                  href={"www.linkedin.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post?.data.linkedin && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.data.linkedin.url || undefined}
                      alt={post.data.linkedin.alt || "LinkedIn"}
                      style={{ width: "24px", height: "24px" }}
                    />
                  )}
                </Link>
                <Link
                  href={"www.twitter.com"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {post?.data.twitter && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.data.twitter.url || undefined}
                      alt={post.data.twitter.alt || "Twitter"}
                      style={{ width: "24px", height: "24px" }}
                    />
                  )}
                </Link>
              </Box>
            </div>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          {posts.map((post, postIndex) => (
            <div key={postIndex}>
              {post?.data.middletext
                ?.split("\n")
                .map((line: any, index: any) => (
                  <Typography
                    key={index}
                    sx={{
                      fontFamily: "Mulish, sans-serif",
                      color: "#D3DDDE",
                      fontWeight: 400,
                      fontSize: { xs: "18px", md: "24.8px" },
                      lineHeight: "31.13px",
                      paddingBottom: "19.84px",
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    {line}
                  </Typography>
                ))}
            </div>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          {posts.map((post, postIndex) => (
            <div key={postIndex}>
              {post?.data.righttext.split("\n").map((line: any, index: any) => (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: "Mulish, sans-serif",
                    color: "#D3DDDE",
                    fontWeight: 400,
                    fontSize: { xs: "18px", md: "24.8px" },
                    lineHeight: "31.13px",
                    paddingBottom: "19.84px",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  {line}
                </Typography>
              ))}
            </div>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
