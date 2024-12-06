"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Grid, Typography } from "@mui/material";

const Choisir: React.FC = () => {
  const [choisirPage, setChoisirPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("choisir");
      setChoisirPage(response);
    };

    fetchPosts();
  }, []);

  const [isHovered, setIsHovered] = useState<number | null>(null);

  const [isCardHovered, setIsCardHovered] = useState<number | null>(null);

  const bottomBackground = choisirPage[0]?.data?.bottom_background?.url || "";

  return (
    <Box
      sx={{
        background: "#BBDDD999",
        backgroundImage: `url(${bottomBackground})`,
        backgroundSize: {
          xs: "contain",
          sm: "contain",
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
                  fontSize: { xs: "28px", sm: "45px", lg: "64px", xl: "64px" },
                  lineHeight: {
                    xs: "30px",
                    sm: "50px",
                    lg: "80px",
                    xl: "80px",
                  },
                  // padding: { xs: "8% 5% 2% 5%", sm: "5% 5% 2% 5%", lg: "5% 15% 2% 15%" },
                  padding: {
                    xs: "8% 5% 2% 5%",
                    sm: "5% 5% 2% 5%",
                    lg: "70px 77px 0px 77px",
                    xl: "99px 377px 0px 377px",
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
                  fontSize: { xs: "12px", sm: "16px", lg: "24px", xl: "24px" },
                  lineHeight: {
                    xs: "20px",
                    sm: "20px",
                    lg: "38.4px",
                    xl: "38.4px",
                  },
                  // padding: { xs: "0% 3%", sm: "0% 8%", lg: "0% 15%" },
                  padding: {
                    xs: "0% 3%",
                    sm: "0% 8%",
                    lg: "21px 148px 69px 148px",
                    xl: "41px 348px 69px 348px",
                  },
                  textAlign: "center",
                }}
              >
                {post.data.description}
              </Typography>
            </div>
          </div>
        ))}
      </div>

      {/* <Grid
      sx={{
        backgroundImage: `url(${bottomBackground})`,
        backgroundSize: { xs: "contain", sm: "contain", lg: "contain" },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        flexDirection: "column",
        position: "absolute",
      }}
      >
        {choisirPage.map((post: any) => (
          <div key={post}>
            {post?.data.bottom_background && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.data.bottom_background.url || undefined}
                alt={post.data.bottom_background.alt || "Image"}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            )}
          </div>
        ))}
      </Grid> */}

      <Grid
        container
        // spacing={1}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "51px",
          padding: { xs: "", sm: "", lg: "20px 0px 80px 0px", xl: "69px 0px" },
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            // height: isCardHovered === 1 ? "520px" : "500px",
            height: {
              xs: isCardHovered === 1 ? "400px" : "380px", // Mobile
              sm: isCardHovered === 1 ? "450px" : "430px", // Tablet
              // lg: isCardHovered === 1 ? "520px" : "500px", // Desktop
              lg: isCardHovered === 1 ? "600px" : "480px",
              xl: isCardHovered === 1 ? "629.52px" : "476px",
            },
            // width: isCardHovered === 1 ? "400px" : "380px",
            width: {
              xs: isCardHovered === 1 ? "320px" : "300px", // Mobile
              sm: isCardHovered === 1 ? "340px" : "320px", // Tablet
              // lg: isCardHovered === 1 ? "400px" : "380px", // Desktop
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
            <div key={post} style={{ padding: "32px", textAlign: "center" }}>
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
                  // fontSize: isCardHovered === 1 ? "28px" : "24px",
                  fontSize: {
                    xs: isCardHovered === 1 ? "20px" : "18px", // Mobile
                    sm: isCardHovered === 1 ? "24px" : "22px", // Tablet
                    lg: isCardHovered === 1 ? "29.3px" : "24px", // Desktop
                    xl: isCardHovered === 1 ? "29.3px" : "24px",
                  },
                  lineHeight: {
                    xs: "25px",
                    sm: "32px",
                    lg: "auto",
                    xl: "auto",
                  },
                  // paddingTop: "5%",
                  paddingTop: {
                    lg: isCardHovered === 1 ? "34px" : "18.25px",
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
                  // fontSize: isCardHovered === 1 ? "18px" : "16px",
                  fontSize: {
                    xs: isCardHovered === 1 ? "14px" : "12px", // Mobile
                    sm: isCardHovered === 1 ? "16px" : "14px", // Tablet
                    lg: isCardHovered === 1 ? "19.36px" : "16px", // Desktop
                    xl: isCardHovered === 1 ? "19.36px" : "16px",
                  },
                  lineHeight: {
                    xs: "22px",
                    sm: "22px",
                    lg: "185%",
                    xl: "185%",
                  },
                  letterSpacing: "0%",
                  textAlign: "left",
                  // paddingTop: "5%",
                  paddingTop: {
                    lg: isCardHovered === 1 ? "44.76px" : "21px",
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
                  // paddingTop: "5%",
                  paddingTop: {
                    lg: isCardHovered === 1 ? "44.76px" : "21px",
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
                    // fontSize: "14px",
                    fontStyle: "italic",
                    fontSize: {
                      xs: isCardHovered === 1 ? "14px" : "12px", // Mobile
                      sm: isCardHovered === 1 ? "16px" : "14px", // Tablet
                      lg: isCardHovered === 1 ? "16.94px" : "14px", // Desktop
                      xl: isCardHovered === 1 ? "16.94px" : "14px",
                    },
                    lineHeight: "185%",
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
              </Grid>
            </div>
          ))}
        </Grid>

        <Grid
          sx={{
            // height:
            //   isCardHovered === 1 || isCardHovered === 2 ? "500px" : "520px",
            height: {
              xs:
                isCardHovered === 1 || isCardHovered === 2 ? "380px" : "400px",
              sm:
                isCardHovered === 1 || isCardHovered === 2 ? "430px" : "450px",
              // lg: isCardHovered === 1 || isCardHovered === 2 ? "500px" : "520px",
              lg:
                isCardHovered === 1 || isCardHovered === 2 ? "480px" : "600px",
              xl:
                isCardHovered === 1 || isCardHovered === 2
                  ? "476px"
                  : "629.52px",
            },
            // width:
            //   isCardHovered === 1 || isCardHovered === 2 ? "380px" : "400px",
            width: {
              xs:
                isCardHovered === 1 || isCardHovered === 2 ? "300px" : "320px",
              sm:
                isCardHovered === 1 || isCardHovered === 2 ? "320px" : "340px",
              // lg: isCardHovered === 1 || isCardHovered === 2 ? "380px" : "400px",
              lg:
                isCardHovered === 1 || isCardHovered === 2 ? "380px" : "420px",
              xl:
                isCardHovered === 1 || isCardHovered === 2 ? "402px" : "486px",
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
            <div key={post} style={{ padding: "32px", textAlign: "center" }}>
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
                  // fontSize:
                  //   isCardHovered === 1 || isCardHovered === 2
                  //     ? "24px"
                  //     : "28px",
                  fontSize: {
                    xs:
                      isCardHovered === 1 || isCardHovered === 2
                        ? "18px"
                        : "20px", // Mobile
                    sm:
                      isCardHovered === 1 || isCardHovered === 2
                        ? "22px"
                        : "24px", // Tablet
                    lg:
                      isCardHovered === 1 || isCardHovered === 2
                        ? "24px"
                        : "29.3px", // Desktop
                    xl:
                      isCardHovered === 1 || isCardHovered === 2
                        ? "24px"
                        : "29.3px",
                  },
                  lineHeight: {
                    xs: "25px",
                    sm: "32px",
                    lg: "auto",
                    xl: "auto",
                  },
                  // paddingTop: "5%",
                  paddingTop: {
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
                  // fontSize:
                  //   isCardHovered === 1 || isCardHovered === 2
                  //     ? "16px"
                  //     : "18px",
                  fontSize: {
                    xs:
                      isCardHovered === 1 || isCardHovered === 2
                        ? "12px"
                        : "14px", // Mobile
                    sm:
                      isCardHovered === 1 || isCardHovered === 2
                        ? "14px"
                        : "16px", // Tablet
                    lg:
                      isCardHovered === 1 || isCardHovered === 2
                        ? "16px"
                        : "19.3px", // Desktop
                    xl:
                      isCardHovered === 1 || isCardHovered === 2
                        ? "16px"
                        : "19.3px",
                  },
                  // lineHeight: "29.6px",
                  lineHeight: {
                    xs: "22px",
                    sm: "22px",
                    lg: "185%",
                    xl: "185%",
                  },
                  textAlign: "left",
                  // paddingTop: "5%",
                  paddingTop: {
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
                  // paddingTop: "5%",
                  paddingTop: {
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
                    // fontSize: "14px",
                    fontStyle: "italic",
                    fontSize: {
                      xs:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "12px"
                          : "14px", // Mobile
                      sm:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "14px"
                          : "16px", // Tablet
                      lg:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "14px"
                          : "16.94px", // Desktop
                      xl:
                        isCardHovered === 1 || isCardHovered === 2
                          ? "14px"
                          : "16.94px",
                    },
                    lineHeight: "185%",
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
              </Grid>
            </div>
          ))}
        </Grid>

        <Grid
          sx={{
            // height: isCardHovered === 2 ? "520px" : "500px",
            height: {
              xs: isCardHovered === 2 ? "400px" : "380px", // Mobile
              sm: isCardHovered === 2 ? "450px" : "430px", // Tablet
              // lg: isCardHovered === 2 ? "520px" : "500px", // Desktop
              lg: isCardHovered === 2 ? "600px" : "480px",
              xl: isCardHovered === 2 ? "629.52px" : "476px",
            },
            // width: isCardHovered === 2 ? "400px" : "380px",
            width: {
              xs: isCardHovered === 2 ? "320px" : "300px", // Mobile
              sm: isCardHovered === 2 ? "340px" : "320px", // Tablet
              // lg: isCardHovered === 2 ? "400px" : "380px", // Desktop
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
            <div key={post} style={{ padding: "32px", textAlign: "center" }}>
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
                  // fontSize: isCardHovered === 2 ? "28px" : "24px",
                  fontSize: {
                    xs: isCardHovered === 2 ? "20px" : "18px", // Mobile
                    sm: isCardHovered === 2 ? "24px" : "22px", // Tablet
                    lg: isCardHovered === 2 ? "29.3px" : "24px", // Desktop
                    xl: isCardHovered === 2 ? "29.3px" : "24px",
                  },
                  lineHeight: { xs: "25px", sm: "32px", lg: "auto" },
                  // paddingTop: "5%",
                  paddingTop: {
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
                  // fontSize: isCardHovered === 2 ? "18px" : "16px",
                  fontSize: {
                    xs: isCardHovered === 2 ? "14px" : "12px", // Mobile
                    sm: isCardHovered === 2 ? "16px" : "14px", // Tablet
                    lg: isCardHovered === 2 ? "19.36px" : "16px", // Desktop
                    xl: isCardHovered === 2 ? "19.36px" : "16px",
                  },
                  lineHeight: {
                    xs: "22px",
                    sm: "22px",
                    lg: "185%",
                    xl: "185%",
                  },
                  letterSpacing: "0%",
                  textAlign: "left",
                  // paddingTop: "5%",
                  paddingTop: {
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
                  // paddingTop: "5%",
                  paddingTop: {
                    lg: isCardHovered === 3 ? "44.76px" : "21px",
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
                    // fontSize: "14px",
                    fontStyle: "italic",
                    fontSize: {
                      xs: isCardHovered === 2 ? "14px" : "12px", // Mobile
                      sm: isCardHovered === 2 ? "16px" : "14px", // Tablet
                      lg: isCardHovered === 2 ? "16.94px" : "14px", // Desktop
                      xl: isCardHovered === 2 ? "16.94px" : "14px",
                    },
                    lineHeight: "185%",
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
              </Grid>
            </div>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Choisir;
