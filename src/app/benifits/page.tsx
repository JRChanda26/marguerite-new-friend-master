"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useRouter } from "next/navigation";
import { PrismicNextLink } from "@prismicio/next";
import Header from "../mainpage/Header";
import Footer from "../mainpage/Footer";
import Liberez from "../mainpage/NeManquez";
const Benifits: React.FC = () => {
  const [leCarePage, setLeCarePage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("le_care_chez" as any);
      setLeCarePage(response);
    };

    fetchData();
  }, []);

  const [modulesPage, setModulesPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType(
        "interactive_learning_modules" as any
      );
      setModulesPage(response);
    };
    fetchData();
  }, []);

  const bottomBackground = leCarePage[0]?.data?.bottom_background?.url || "";

  const isXl = useMediaQuery("(max-width:1920px)");
  const isLg = useMediaQuery("(max-width:1360px)");
  const isMd = useMediaQuery("(max-width:992px)");
  const isSm = useMediaQuery("(max-width:768px)");
  const isXs = useMediaQuery("(max-width:576px)");

  const getDimensions = () => {
    if (isXs) return { width: "150px", height: "250px" };
    if (isSm) return { width: "200px", height: "320px" };
    if (isMd) return { width: "250px", height: "400px" };
    if (isLg) return { width: "283.55px", height: "433px" };
    if (isXl) return { width: "283.55px", height: "433px" };
    return { width: "283.55px", height: "433px" };
  };

  const isMax = useMediaQuery("(min-width:1930px)");

  return (
    <Box sx={{}}>
      <Header />
      <div
        style={{
          backgroundImage: `url(${bottomBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "auto",
          width: "100%",
          //   marginTop: "10%",
          // padding:{ xs: "70px 50px 0px 50px",
          //     sm: "100px 150px 0px 150px",
          //     lg: "150px 150px 0px 150px",
          //     xl: "150px 441px 0px 441px",}
          padding: isMax ? "0px 350px" : "0px 0px",
        }}
      >
        {leCarePage.map((post: any) => (
          <>
            <div>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  fontSize: { xs: "35px", sm: "48px", lg: "58px", xl: "64px" },
                  fontWeight: 700,
                  lineHeight: {
                    xs: "40px",
                    sm: "64px",
                    lg: "auto",
                    xl: "auto",
                  },
                  textAlign: "center",
                  color: "#0A1411",
                  margin: {
                    xs: "100px 0px 0px 0px",
                    sm: "100px 0px 0px 0px",
                    lg: "150px 80px 8px 80px",
                    xl: "200px 150px 8px 150px",
                  },
                }}
              >
                {post.data.bottom_title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  fontSize: { xs: "16px", sm: "18px", lg: "22px", xl: "25px" },
                  fontWeight: 400,
                  lineHeight: {
                    xs: "20px",
                    sm: "25px",
                    lg: "33px",
                    xl: "33px",
                  },
                  textAlign: "center",
                  color: "#4D5053",
                  margin: {
                    xs: "5%",
                    sm: "5% 10%",
                    lg: "20px 150px 157px 150px",
                    xl: "0px 380px 157px 380px",
                  },
                }}
              >
                {post.data.bottom_description}
              </Typography>
            </div>
            <div>
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  padding: {
                    lg: "0px 50px 177px 50px",
                    md: "0px 50px 177px 50px",
                    xl: "0px 80px 177px 80px",
                  },
                }}
              >
                <Grid
                  item
                  lg={12}
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    gap: "30px",
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                  }}
                >
                  <Grid
                    item
                    lg={6}
                    sx={{
                      background: "#FFFFFF",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      padding: {
                        xs: "20px 0px 0px 20px",
                        sm: "20px 0px 0px 20px",
                      },
                      boxShadow: "0px 4px 12px rgba(35, 107, 121, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        {leCarePage[0]?.data.bottom_card_icon1 && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={
                              leCarePage[0]?.data.bottom_card_icon1.url ||
                              undefined
                            }
                            alt={
                              leCarePage[0]?.data.bottom_card_icon1.alt ||
                              "Image"
                            }
                          />
                        )}
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "15px",
                              sm: "35px",
                              lg: "25px",
                              xl: "36px",
                              md: "20px",
                            },
                            fontFamily: "Mulish",
                            fontWeight: 400,
                            color: "#1E1E1E",
                            paddingLeft: "8px",
                            lineHeight: "auto",
                            letterSpacing: "-5%",
                            opacity: "90%",
                          }}
                        >
                          {leCarePage[0]?.data.bottom_card_title1}
                        </Typography>
                      </div>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "25px",
                            lg: "18px",
                            md: "16px",
                            xl: "24px",
                          },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: { lg: "", xl: "" },
                          opacity: "80%",
                          letterSpacing: "0%",
                          lineHeight: "185%",
                        }}
                      >
                        {leCarePage[0]?.data.bottom_card_description1}
                      </Typography>
                    </div>
                    {leCarePage[0]?.data.bottom_card_image1 && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={
                          leCarePage[0]?.data.bottom_card_image1.url ||
                          undefined
                        }
                        alt={
                          leCarePage[0]?.data.bottom_card_image1.alt || "Image"
                        }
                        style={{
                          width: "40%",
                          height: "auto",
                          borderBottomRightRadius: "20px",
                        }}
                      />
                    )}
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      padding: "20px 0px 0px 20px",
                      boxShadow: "0px 4px 12px rgba(35, 107, 121, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        {leCarePage[0]?.data.bottom_card_icon2 && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={
                              leCarePage[0]?.data.bottom_card_icon2.url ||
                              undefined
                            }
                            alt={
                              leCarePage[0]?.data.bottom_card_icon2.alt ||
                              "Image"
                            }
                          />
                        )}
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "15px",
                              sm: "35px",
                              lg: "25px",
                              xl: "36px",
                              md: "20px",
                            },
                            fontFamily: "Mulish",
                            fontWeight: 400,
                            color: "#1E1E1E",
                            paddingLeft: "8px",
                            lineHeight: "auto",
                            letterSpacing: "-5%",
                            opacity: "90%",
                          }}
                        >
                          {leCarePage[0]?.data.bottom_card_title2}
                        </Typography>
                      </div>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "25px",
                            lg: "18px",
                            md: "16px",
                            xl: "24px",
                          },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: { lg: "", xl: "" },
                          opacity: "80%",
                          letterSpacing: "0%",
                          lineHeight: "185%",
                        }}
                      >
                        {leCarePage[0]?.data.bottom_card_description2}
                      </Typography>
                    </div>
                    {leCarePage[0]?.data.bottom_card_image2 && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={
                          leCarePage[0]?.data.bottom_card_image2.url ||
                          undefined
                        }
                        alt={
                          leCarePage[0]?.data.bottom_card_image2.alt || "Image"
                        }
                        style={{
                          width: "40%",
                          height: "auto",
                          borderBottomRightRadius: "20px",
                        }}
                      />
                    )}
                  </Grid>
                </Grid>
                <Grid
                  item
                  lg={12}
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    gap: "30px",
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      md: "row",
                      lg: "row",
                      xl: "row",
                    },
                  }}
                >
                  <Grid
                    item
                    lg={6}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      padding: "20px 0px 0px 20px",
                      boxShadow: "0px 4px 12px rgba(35, 107, 121, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        {leCarePage[0]?.data.bottom_card_icon3 && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={
                              leCarePage[0]?.data.bottom_card_icon3.url ||
                              undefined
                            }
                            alt={
                              leCarePage[0]?.data.bottom_card_icon3.alt ||
                              "Image"
                            }
                          />
                        )}
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "15px",
                              sm: "35px",
                              lg: "25px",
                              xl: "36px",
                              md: "20px",
                            },
                            fontFamily: "Mulish",
                            fontWeight: 400,
                            color: "#1E1E1E",
                            paddingLeft: "8px",
                            lineHeight: "auto",
                            letterSpacing: "-5%",
                            opacity: "90%",
                          }}
                        >
                          {leCarePage[0]?.data.bottom_card_title3}
                        </Typography>
                      </div>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "25px",
                            lg: "18px",
                            md: "16px",
                            xl: "24px",
                          },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: { lg: "", xl: "" },
                          opacity: "80%",
                          letterSpacing: "0%",
                          lineHeight: "185%",
                        }}
                      >
                        {leCarePage[0]?.data.bottom_card_description3}
                      </Typography>
                    </div>
                    {leCarePage[0]?.data.bottom_card_image3 && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={
                          leCarePage[0]?.data.bottom_card_image3.url ||
                          undefined
                        }
                        alt={
                          leCarePage[0]?.data.bottom_card_image3.alt || "Image"
                        }
                        style={{
                          width: "40%",
                          height: "auto",
                          borderBottomRightRadius: "20px",
                        }}
                      />
                    )}
                  </Grid>
                  <Grid
                    item
                    lg={6}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      padding: "20px 0px 0px 20px",
                      boxShadow: "0px 4px 12px rgba(35, 107, 121, 0.2)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                        }}
                      >
                        {leCarePage[0]?.data.bottom_card_icon4 && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={
                              leCarePage[0]?.data.bottom_card_icon4.url ||
                              undefined
                            }
                            alt={
                              leCarePage[0]?.data.bottom_card_icon4.alt ||
                              "Image"
                            }
                          />
                        )}
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "15px",
                              sm: "35px",
                              lg: "25px",
                              xl: "36px",
                              md: "20px",
                            },
                            fontFamily: "Mulish",
                            fontWeight: 400,
                            color: "#1E1E1E",
                            paddingLeft: "8px",
                            lineHeight: "auto",
                            letterSpacing: "-5%",
                            opacity: "90%",
                          }}
                        >
                          {leCarePage[0]?.data.bottom_card_title4}
                        </Typography>
                      </div>
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "12px",
                            sm: "25px",
                            lg: "18px",
                            md: "16px",
                            xl: "24px",
                          },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: { lg: "", xl: "" },
                          opacity: "80%",
                          letterSpacing: "0%",
                          lineHeight: "185%",
                        }}
                      >
                        {leCarePage[0]?.data.bottom_card_description4}
                      </Typography>
                    </div>
                    {leCarePage[0]?.data.bottom_card_image4 && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={
                          leCarePage[0]?.data.bottom_card_image4.url ||
                          undefined
                        }
                        alt={
                          leCarePage[0]?.data.bottom_card_image4.alt || "Image"
                        }
                        style={{
                          width: "40%",
                          height: "auto",
                          borderBottomRightRadius: "20px",
                        }}
                      />
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </>
        ))}
      </div>
      <Liberez />
      <Footer />
    </Box>
  );
};

export default Benifits;
