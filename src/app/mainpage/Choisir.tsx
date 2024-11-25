"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Grid, Typography } from "@mui/material";

const Choisir: React.FC = () => {
  const [choisirPage, setChoisirPage] = useState<[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("choisir");
      setChoisirPage(response);
    };

    fetchPosts();
  }, []);

  const [isHovered, setIsHovered] = useState<number | null>(null);

  const [isCardHovered, setIsCardHovered] = useState<number | null>(null);

  return (
    <Box sx={{ background: "#BBDDD999" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {choisirPage.map((post: any) => (
          <div key={post}>
            <div>
              <Typography
                sx={{
                  fontFamily: "Mulish, sans-serif",
                  color: "#0A1411",
                  fontWeight: 700,
                  fontSize: { xs: "28px", md: "45px", lg:"65px" },
                  lineHeight: { xs: "30px", md: "50px", lg:"80px" },
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
                  fontSize: { xs: "12px", md: "16px", lg:"25px" },
                  lineHeight: { xs: "20px", md: "25px", lg:"38.4px" },
                  padding: "0% 18%",
                  textAlign: "center",
                }}
              >
                {post.data.description}
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
            height: isCardHovered === 1 ? "520px" : "500px",
            width: isCardHovered === 1 ? "400px" : "380px",
            borderRadius: "16px",
            background:
              isCardHovered === 1
                ? "linear-gradient(180.23deg, #FFFFFF 7.39%, #FFFFFF 45.36%, #FFB699 193.52%)"
                : "linear-gradient(180.79deg, #FFFFFF 7.81%, rgba(187, 221, 217, 0.6) 205.96%)",
            transition: "transform 0.3s ease",
            transform: isCardHovered === 1 ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setIsCardHovered(1)}
          onMouseLeave={() => setIsCardHovered(null)}
        >
          {choisirPage.map((post: any) => (
            <div key={post} style={{ padding: "30px", textAlign: "center" }}>
              {post?.data.card_image1 && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.data.card_image1.url || undefined}
                  alt={post.data.card_image1.alt || "Image"}
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
                  fontSize: isCardHovered === 1 ? "28px" : "24px",
                  lineHeight: "38.4px",
                  paddingTop: "20px",
                }}
              >
                {post.data.card_title1}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  color: "#1E1E1E",
                  fontWeight: 400,
                  fontSize: isCardHovered === 1 ? "18px" : "16px",
                  lineHeight: "29.6px",
                  textAlign: "left",
                  paddingTop: "20px",
                }}
              >
                {post.data.card_description1}
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
                  {post.data.link_text}
                </Typography>
                {post?.data.link_icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.link_icon.url || undefined}
                    alt={post.data.link_icon.alt || "Image"}
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
            height:
              isCardHovered === 1 || isCardHovered === 2 ? "500px" : "520px",
            width:
              isCardHovered === 1 || isCardHovered === 2 ? "380px" : "400px",
            borderRadius: "16px",
            background:
              isCardHovered === 1 || isCardHovered === 2
                ? "linear-gradient(180.79deg, #FFFFFF 7.81%, rgba(187, 221, 217, 0.6) 205.96%)"
                : "linear-gradient(180.23deg, #FFFFFF 7.39%, #FFFFFF 45.36%, #FFB699 193.52%)",
            transition: "transform 0.3s ease",
            transform:
              isCardHovered === 1 || isCardHovered === 2
                ? "scale(1)"
                : "scale(1.05)",
          }}
        >
          {choisirPage.map((post: any) => (
            <div key={post} style={{ padding: "30px", textAlign: "center" }}>
              {post?.data.card_image2 && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.data.card_image2.url || undefined}
                  alt={post.data.card_image2.alt || "Image"}
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
                  fontSize:
                    isCardHovered === 1 || isCardHovered === 2
                      ? "24px"
                      : "28px",
                  lineHeight: "38.4px",
                  paddingTop: "30px",
                }}
              >
                {post.data.card_title2}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  color: "#1E1E1E",
                  fontWeight: 400,
                  fontSize:
                    isCardHovered === 1 || isCardHovered === 2
                      ? "16px"
                      : "18px",
                  lineHeight: "29.6px",
                  textAlign: "left",
                  paddingTop: "30px",
                }}
              >
                {post.data.card_description2}
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
                  {post.data.link_text}
                </Typography>
                {post?.data.link_icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.link_icon.url || undefined}
                    alt={post.data.link_icon.alt || "Image"}
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
            height: isCardHovered === 2 ? "520px" : "500px",
            width: isCardHovered === 2 ? "400px" : "380px",
            borderRadius: "16px",
            background:
              isCardHovered === 2
                ? "linear-gradient(180.23deg, #FFFFFF 7.39%, #FFFFFF 45.36%, #FFB699 193.52%)"
                : "linear-gradient(180.79deg, #FFFFFF 7.81%, rgba(187, 221, 217, 0.6) 205.96%)",
            transition: "transform 0.3s ease",
            transform: isCardHovered === 2 ? "scale(1.05)" : "scale(1)",
          }}
          onMouseEnter={() => setIsCardHovered(2)}
          onMouseLeave={() => setIsCardHovered(null)}
        >
          {choisirPage.map((post: any) => (
            <div key={post} style={{ padding: "30px", textAlign: "center" }}>
              {post?.data.card_image3 && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.data.card_image3.url || undefined}
                  alt={post.data.card_image3.alt || "Image"}
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
                  fontSize: isCardHovered === 2 ? "28px" : "24px",
                  lineHeight: "38.4px",
                  paddingTop: "20px",
                }}
              >
                {post.data.card_title3}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  color: "#1E1E1E",
                  fontWeight: 400,
                  fontSize: isCardHovered === 2 ? "18px" : "16px",
                  lineHeight: "29.6px",
                  textAlign: "left",
                  paddingTop: "20px",
                }}
              >
                {post.data.card_description3}
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
                  {post.data.link_text}
                </Typography>
                {post?.data.link_icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.link_icon.url || undefined}
                    alt={post.data.link_icon.alt || "Image"}
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
