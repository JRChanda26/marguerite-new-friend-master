"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";

const Choisir: React.FC = () => {
  const [choisirPage, setChoisirPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("choisir" as any);
      setChoisirPage(response);
    };

    fetchData();
  }, []);

  const [isHovered, setIsHovered] = useState<number | null>(null);

  const [isCardHovered, setIsCardHovered] = useState<number | null>(null);

  const bottomBackground = choisirPage[0]?.data?.bottom_background?.url || "";

  const isMax = useMediaQuery("(min-width:1930px)");
  const isMax1 = useMediaQuery("(min-width:2050px)");
  const isMax2 = useMediaQuery("(min-width:2570px)");
  const isMax3 = useMediaQuery("(min-width:2890px)");
  const isMax4 = useMediaQuery("(min-width:3210px)");

  return (
    <div
      style={{
        // padding: isMax ? "0px 350px" : "0px 0px",
        padding : isMax4 ? "0px 650px" 
        : isMax3 ? "0px 550px" 
        : isMax2 ? "0px 450px" 
        : isMax1 ? "0px 350px" 
        : isMax ? "0px 120px" 
        : "0px 0px",
        background: isMax ? "#BBDDD9" : "#FFFFFF",
      }}
    >
      <Box
        sx={{
          background: "#BBDDD999",
          backgroundImage: `url(${bottomBackground})`,
          backgroundSize: {
            xs: "300px",
            sm: "500px",
            lg: "600px",
            xl: "842.34px",
          },
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          width: "100%",
          height: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          // position: "absolute",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          {choisirPage.map((post: any) => (
            <div key={post}>
              <div>
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    color: "#0A1411",
                    fontWeight: 700,
                    fontSize: {
                      xs: "28px",
                      sm: "40px",
                      lg: "64px",
                      xl: "64px",
                    },
                    lineHeight: {
                      xs: "30px",
                      sm: "40px",
                      lg: "80px",
                      xl: "80px",
                    },
                    padding: {
                      xs: "8% 5% 2% 5%",
                      sm: "5% 5% 2% 5%",
                      lg: "70px 77px 0px 77px",
                      xl: isMax ? "100px 0px 0px 0px" : "99px 77px 0px 77px",
                    },
                    textAlign: "center",
                  }}
                >
                  {post.data.heading}
                </Typography>
              </div>
              <div style={{}}>
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    color: "#565656",
                    fontWeight: 400,
                    fontSize: {
                      xs: "12px",
                      sm: "18px",
                      lg: "24px",
                      xl: "24px",
                    },
                    lineHeight: {
                      xs: "20px",
                      sm: "20px",
                      lg: "38.4px",
                      xl: "38.4px",
                    },
                    padding: {
                      xs: "0% 3%",
                      sm: "0% 8%",
                      lg: "21px 148px 69px 148px",
                      xl: "41px 400px 69px 400px",
                    },
                    textAlign: "center",
                    maxWidth: "75%",
                    margin: "0 auto",
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
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: { xs: "column", sm: "row", lg: "row", xl: "row" },
            gap: { xs: "51px", sm: "20px", md: "20px", lg: "51px", xl: "51px" },
            padding: {
              xs: "30px 0px 30px 0px",
              sm: "30px 0px 50px 0px",
              lg: "20px 0px 80px 0px",
              xl: "69px 0px",
            },
            alignItems: "center",
          }}
        >
          <Grid
            sx={{
              height: {
                xs: isCardHovered === 1 ? "340px" : "300px",
                sm: isCardHovered === 1 ? "400px" : "380px",
                lg: isCardHovered === 1 ? "600px" : "480px",
                xl: isCardHovered === 1 ? "629.52px" : "476px",
              },
              width: {
                xs: isCardHovered === 1 ? "300px" : "280px",
                sm: isCardHovered === 1 ? "320px" : "300px",
                lg: isCardHovered === 1 ? "420px" : "380px",
                xl: isCardHovered === 1 ? "486px" : "402px",
              },
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
              <Grid
                key={post}
                sx={{
                  padding: { xs: "22px", sm: "28px", lg: "32px", xl: "32px" },
                  textAlign: "center",
                }}
              >
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
                  sx={{
                    fontFamily: "Mulish",
                    color: "#1E1E1E",
                    fontWeight: 400,
                    opacity: "90%",
                    fontSize: {
                      xs: isCardHovered === 1 ? "18px" : "16px",
                      sm: isCardHovered === 1 ? "24px" : "22px",
                      lg: isCardHovered === 1 ? "29.3px" : "24px",
                      xl: isCardHovered === 1 ? "29.3px" : "24px",
                    },
                    lineHeight: {
                      xs: "20px",
                      sm: "25px",
                      lg: "auto",
                      xl: "auto",
                    },
                    paddingTop: {
                      xs: isCardHovered === 1 ? "12px" : "8px",
                      sm: isCardHovered === 1 ? "18px" : "14px",
                      lg: isCardHovered === 1 ? "34px" : "18.25px",
                      xl: isCardHovered === 1 ? "34px" : "18.25px",
                    },
                  }}
                >
                  {post.data.card_title1}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    color: "#1E1E1E",
                    fontWeight: 400,
                    opacity: "80%",
                    fontStyle: "italic",
                    fontSize: {
                      xs: isCardHovered === 1 ? "12px" : "10px",
                      sm: isCardHovered === 1 ? "16px" : "14px",
                      lg: isCardHovered === 1 ? "19.36px" : "16px",
                      xl: isCardHovered === 1 ? "19.36px" : "16px",
                    },
                    lineHeight: {
                      xs: isCardHovered === 1 ? "18px" : "15px",
                      sm: isCardHovered === 1 ? "22px" : "20px",
                      lg: "185%",
                      xl: "185%",
                    },
                    letterSpacing: "0%",
                    // textAlign: "left",
                    textAlign: "justify",
                    paddingTop: {
                      xs: isCardHovered === 1 ? "12px" : "10px",
                      sm: isCardHovered === 1 ? "14px" : "12px",
                      lg: isCardHovered === 1 ? "44.76px" : "21px",
                      xl: isCardHovered === 1 ? "44.76px" : "21px",
                    },
                  }}
                >
                  {post.data.card_description1}
                </Typography>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: {
                      xs: isCardHovered === 1 ? "8px" : "10px",
                      sm: isCardHovered === 1 ? "5px" : "14px",
                      lg: isCardHovered === 1 ? "44.76px" : "21px",
                      xl: isCardHovered === 1 ? "44.76px" : "21px",
                    },
                    transition: "transform 0.3s ease",
                    transform: isHovered === 1 ? "scale(1.05)" : "scale(1)",
                  }}
                  onMouseEnter={() => setIsHovered(1)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <Typography
                    sx={{
                      fontFamily: "Mulish",
                      color: "#24535C",
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontSize: {
                        xs: isCardHovered === 1 ? "12px" : "10px",
                        sm: isCardHovered === 1 ? "16px" : "14px",
                        lg: isCardHovered === 1 ? "16.94px" : "14px",
                        xl: isCardHovered === 1 ? "16.94px" : "14px",
                      },
                      // lineHeight: "185%",
                      lineHeight: "31.3px",
                      paddingRight: "14.3px",
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
                        height: "30px",
                      }}
                    />
                  )}
                </Grid>
              </Grid>
            ))}
          </Grid>

          <Grid
            sx={{
              height: {
                xs:
                  isCardHovered === 1 || isCardHovered === 2
                    ? "300px"
                    : "340px",
                sm:
                  isCardHovered === 1 || isCardHovered === 2
                    ? "380px"
                    : "400px",
                lg:
                  isCardHovered === 1 || isCardHovered === 2
                    ? "480px"
                    : "600px",
                xl:
                  isCardHovered === 1 || isCardHovered === 2
                    ? "476px"
                    : "629.52px",
              },
              width: {
                xs:
                  isCardHovered === 1 || isCardHovered === 2
                    ? "280px"
                    : "300px",
                sm:
                  isCardHovered === 1 || isCardHovered === 2
                    ? "300px"
                    : "320px",
                lg:
                  isCardHovered === 1 || isCardHovered === 2
                    ? "380px"
                    : "420px",
                xl:
                  isCardHovered === 1 || isCardHovered === 2
                    ? "402px"
                    : "486px",
              },
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
              <Grid
                key={post}
                sx={{
                  padding: { xs: "22px", sm: "28px", lg: "32px", xl: "32px" },
                  textAlign: "center",
                }}
              >
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
                  sx={{
                    fontFamily: "Mulish",
                    color: "#1E1E1E",
                    fontWeight: 400,
                    opacity: "90%",
                    fontSize: {
                      xs:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "16px"
                          : "18px",
                      sm:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "22px"
                          : "24px",
                      lg:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "24px"
                          : "29.3px",
                      xl:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "24px"
                          : "29.3px",
                    },
                    lineHeight: {
                      xs: "20px",
                      sm: "25px",
                      lg: "auto",
                      xl: "auto",
                    },
                    paddingTop: {
                      xs:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "8px"
                          : "12px",
                      sm:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "14px"
                          : "18px",
                      lg:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "18.25px"
                          : "34px",
                      xl:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "18.25px"
                          : "34px",
                    },
                  }}
                >
                  {post.data.card_title2}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    color: "#1E1E1E",
                    fontWeight: 400,
                    opacity: "80%",
                    fontStyle: "italic",
                    fontSize: {
                      xs:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "10px"
                          : "12px",
                      sm:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "14px"
                          : "16px",
                      lg:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "16px"
                          : "19.3px",
                      xl:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "16px"
                          : "19.3px",
                    },
                    lineHeight: {
                      xs:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "15px"
                          : "18px",
                      sm:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "20px"
                          : "22px",
                      lg: "185%",
                      xl: "185%",
                    },
                    // textAlign: "left",
                    textAlign: "justify",
                    paddingTop: {
                      xs:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "10px"
                          : "12px",
                      sm:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "12px"
                          : "14px",
                      lg:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "21px"
                          : "44.76px",
                      xl:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "21px"
                          : "44.76px",
                    },
                  }}
                >
                  {post.data.card_description2}
                </Typography>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: {
                      xs:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "10px"
                          : "8px",
                      sm:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "14px"
                          : "5px",
                      lg:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "21px"
                          : "44.76px",
                      xl:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "21px"
                          : "44.76px",
                    },
                    transition: "transform 0.3s ease",
                    transform: isHovered === 2 ? "scale(1.05)" : "scale(1)",
                  }}
                  onMouseEnter={() => setIsHovered(2)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <Typography
                    sx={{
                      fontFamily: "Mulish",
                      color: "#24535C",
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontSize: {
                        xs:
                          isCardHovered === 1 || isCardHovered === 2
                            ? "10px"
                            : "12px",
                        sm:
                          isCardHovered === 1 || isCardHovered === 2
                            ? "14px"
                            : "16px",
                        lg:
                          isCardHovered === 1 || isCardHovered === 2
                            ? "14px"
                            : "16.94px",
                        xl:
                          isCardHovered === 1 || isCardHovered === 2
                            ? "14px"
                            : "16.94px",
                      },
                      // lineHeight: "185%",
                      lineHeight: "31.3px",
                      paddingRight: "14.3px",
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
                        height: "30px",
                      }}
                    />
                  )}
                </Grid>
              </Grid>
            ))}
          </Grid>

          <Grid
            sx={{
              height: {
                xs: isCardHovered === 2 ? "340px" : "300px",
                sm: isCardHovered === 2 ? "400px" : "380px",
                lg: isCardHovered === 2 ? "600px" : "480px",
                xl: isCardHovered === 2 ? "629.52px" : "476px",
              },
              width: {
                xs: isCardHovered === 2 ? "300px" : "280px",
                sm: isCardHovered === 2 ? "320px" : "300px",
                lg: isCardHovered === 2 ? "420px" : "380px",
                xl: isCardHovered === 2 ? "486px" : "402px",
              },
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
              <Grid
                key={post}
                sx={{
                  padding: { xs: "22px", sm: "28px", lg: "32px", xl: "32px" },
                  textAlign: "center",
                }}
              >
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
                  sx={{
                    fontFamily: "Mulish",
                    color: "#1E1E1E",
                    fontWeight: 400,
                    opacity: "90%",
                    fontSize: {
                      xs: isCardHovered === 2 ? "18px" : "16px",
                      sm: isCardHovered === 2 ? "24px" : "22px",
                      lg: isCardHovered === 2 ? "29.3px" : "24px",
                      xl: isCardHovered === 2 ? "29.3px" : "24px",
                    },
                    lineHeight: {
                      xs: "20px",
                      sm: "25px",
                      lg: "auto",
                      xl: "auto",
                    },
                    paddingTop: {
                      xs: isCardHovered === 2 ? "12px" : "8px",
                      sm: isCardHovered === 2 ? "18px" : "14px",
                      lg: isCardHovered === 2 ? "34px" : "18.25px",
                      xl: isCardHovered === 2 ? "34px" : "18.25px",
                    },
                  }}
                >
                  {post.data.card_title3}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    color: "#1E1E1E",
                    fontWeight: 400,
                    opacity: "80%",
                    fontStyle: "italic",
                    fontSize: {
                      xs: isCardHovered === 2 ? "12px" : "10px",
                      sm: isCardHovered === 2 ? "16px" : "14px",
                      lg: isCardHovered === 2 ? "19.36px" : "16px",
                      xl: isCardHovered === 2 ? "19.36px" : "16px",
                    },
                    lineHeight: {
                      xs: isCardHovered === 2 ? "18px" : "15px",
                      sm: isCardHovered === 2 ? "22px" : "20px",
                      lg: "185%",
                      xl: "185%",
                    },
                    letterSpacing: "0%",
                    // textAlign: "left",
                    textAlign: "justify",
                    paddingTop: {
                      xs: isCardHovered === 2 ? "12px" : "10px",
                      sm: isCardHovered === 2 ? "14px" : "12px",
                      lg: isCardHovered === 2 ? "44.76px" : "21px",
                      xl: isCardHovered === 2 ? "44.76px" : "21px",
                    },
                  }}
                >
                  {post.data.card_description3}
                </Typography>
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: {
                      xs: isCardHovered === 2 ? "18px" : "10px",
                      sm: isCardHovered === 2 ? "5px" : "14px",
                      lg: isCardHovered === 2 ? "44.76px" : "21px",
                      xl: isCardHovered === 2 ? "44.76px" : "21px",
                    },
                    transition: "transform 0.3s ease",
                    transform: isHovered === 3 ? "scale(1.05)" : "scale(1)",
                  }}
                  onMouseEnter={() => setIsHovered(3)}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <Typography
                    sx={{
                      fontFamily: "Mulish",
                      color: "#24535C",
                      fontWeight: 400,
                      fontStyle: "italic",
                      fontSize: {
                        xs: isCardHovered === 2 ? "12px" : "10px",
                        sm: isCardHovered === 2 ? "16px" : "14px",
                        lg: isCardHovered === 2 ? "16.94px" : "14px",
                        xl: isCardHovered === 2 ? "16.94px" : "14px",
                      },
                      // lineHeight: "185%",
                      lineHeight: "31.3px",
                      paddingRight: "14.3px",
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
                        height: "30px",
                      }}
                    />
                  )}
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Choisir;
