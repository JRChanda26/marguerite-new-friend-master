"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Grid, Typography } from "@mui/material";

const Choisir: React.FC = () => {
  const [posts, setPosts] = useState<[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("choisir");
      setPosts(response);
    };

    fetchPosts();
  }, []);

  const [isHovered, setIsHovered] = useState<number | null>(null);

  return (
    <Box sx={{ background: "#BBDDD999" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {posts.map((post: any, postIndex: number) => (
          <div key={post}>
            <div>
              <Typography
                sx={{
                  fontFamily: "Mulish, sans-serif",
                  color: "#0A1411",
                  fontWeight: 700,
                  // fontSize:'64px',
                  fontSize: { xs: "28px", md: "64px" },
                  // lineHeight: "80.32px",
                  lineHeight:{ xs: "28px", md: "80.32px" },
                  padding: "30px 70px",
                  textAlign: "center",
                }}
              >
                {post.data.heading}
              </Typography>
            </div>
            <div style={{}}>
                <Typography
                  sx={{
                    fontFamily: "Mulish, sans-serif",
                    color: "#565656",
                    fontWeight: 400,
                    // fontSize: "28px",
                    fontSize: { xs: "14px", md: "28px" },
                    // lineHeight: "38.4px",
                    lineHeight:{ xs: "20px", md: "38.4px" },
                    padding: "0px 70px",
                    textAlign: "center",
                  }}
                >
                  {post.data.content}
                </Typography>
            </div>
          </div>
        ))}
      </div>

      <Grid
        container
        spacing={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          paddingTop: "69.53px",
          paddingBottom: "113.83px",
        }}
      >
        <div
          style={{
            height: "476px",
            width: "350px",
            borderRadius: "16px",
            background:
              "linear-gradient(180.79deg, #FFFFFF 7.81%, rgba(187, 221, 217, 0.6) 205.96%)",
            marginTop: "40px",
            paddingBottom: "34px",
          }}
        >
          {posts.map((post: any, postIndex: number) => (
            <div key={post} style={{ padding: "30px", textAlign: "center" }}>
              {post?.data.homelogo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.data.homelogo.url || undefined}
                  alt={post.data.homelogo.alt || "Image"}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              )}
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  color: "#1E1E1E",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "38.4px",
                  paddingTop: "20px",
                }}
              >
                {post.data.homeheader}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  color: "#1E1E1E",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "29.6px",
                  textAlign: "left",
                  paddingTop: "20px",
                }}
              >
                {post.data.homecontent}
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: "21px",
                  transition: "transform 0.3s ease",
                  transform: isHovered === 1 ? "scale(1.05)" : "scale(1)",
                }}
                onMouseEnter={() => setIsHovered(1)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Typography
                  style={{
                    color: "#24535C",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "25.9px",
                    paddingRight: "12px",
                  }}
                >
                  {post.data.buttontext}
                </Typography>
                {post?.data.buttonicon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.buttonicon.url || undefined}
                    alt={post.data.buttonicon.alt || "Image"}
                    style={{
                      width: "48px",
                      height: "24px",
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            height: "575.83px",
            width: "400px",
            borderRadius: "16px",
            background:
              "linear-gradient(180.23deg, #FFFFFF 7.39%, #FFFFFF 45.36%, #FFB699 193.52%)",
          }}
        >
          {posts.map((post: any, postIndex: number) => (
            <div key={post} style={{ padding: "30px", textAlign: "center" }}>
              {post?.data.editlogo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.data.editlogo.url || undefined}
                  alt={post.data.editlogo.alt || "Image"}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              )}
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  color: "#1E1E1E",
                  fontWeight: 400,
                  fontSize: "28px",
                  lineHeight: "38.4px",
                  paddingTop: "30px",
                }}
              >
                {post.data.editlogoheader}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  color: "#1E1E1E",
                  fontWeight: 400,
                  fontSize: "18px",
                  lineHeight: "29.6px",
                  textAlign: "left",
                  paddingTop: "30px",
                }}
              >
                {post.data.editlogocontent}
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: "21px",
                  transition: "transform 0.3s ease",
                  transform: isHovered === 2 ? "scale(1.05)" : "scale(1)",
                }}
                onMouseEnter={() => setIsHovered(2)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Typography
                  style={{
                    color: "#24535C",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "25.9px",
                    paddingRight: "12px",
                  }}
                >
                  {post.data.buttontext}
                </Typography>
                {post?.data.buttonicon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.buttonicon.url || undefined}
                    alt={post.data.buttonicon.alt || "Image"}
                    style={{
                      width: "48px",
                      height: "24px",
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            height: "476px",
            width: "350px",
            borderRadius: "16px",
            background:
              "linear-gradient(180.79deg, #FFFFFF 7.81%, rgba(187, 221, 217, 0.6) 205.96%)",
            marginTop: "40px",
            paddingBottom: "34px",
          }}
        >
          {posts.map((post: any, postIndex: number) => (
            <div key={post} style={{ padding: "30px", textAlign: "center" }}>
              {post?.data.calenderlogo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.data.calenderlogo.url || undefined}
                  alt={post.data.calenderlogo.alt || "Image"}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              )}
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  color: "#1E1E1E",
                  fontWeight: 400,
                  fontSize: "24px",
                  lineHeight: "38.4px",
                  paddingTop: "20px",
                }}
              >
                {post.data.calenderheader}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  color: "#1E1E1E",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "29.6px",
                  textAlign: "left",
                  paddingTop: "20px",
                }}
              >
                {post.data.calendercontent}
              </Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  paddingTop: "21px",
                  transition: "transform 0.3s ease",
                  transform: isHovered === 3 ? "scale(1.05)" : "scale(1)",
                }}
                onMouseEnter={() => setIsHovered(3)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <Typography
                  style={{
                    color: "#24535C",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "25.9px",
                    paddingRight: "12px",
                  }}
                >
                  {post.data.buttontext}
                </Typography>
                {post?.data.buttonicon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.buttonicon.url || undefined}
                    alt={post.data.buttonicon.alt || "Image"}
                    style={{
                      width: "48px",
                      height: "24px",
                    }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </Grid>
    </Box>
  );
};

export default Choisir;
