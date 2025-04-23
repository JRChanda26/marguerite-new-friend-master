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

  const isMax8 = useMediaQuery("(min-width:200px)");
  const isMax7 = useMediaQuery("(min-width:750px)");
  const isMax6 = useMediaQuery("(min-width:1200px)");
  const isMax5 = useMediaQuery("(min-width:1370px)");
  const isMax = useMediaQuery("(min-width:1930px)");
  const isMax1 = useMediaQuery("(min-width:2050px)");
  const isMax2 = useMediaQuery("(min-width:2570px)");
  const isMax3 = useMediaQuery("(min-width:2890px)");
  const isMax4 = useMediaQuery("(min-width:3210px)");

  const isTabScreen = useMediaQuery("(width:768px)");
  const isBigTabScreen = useMediaQuery("(width:800px)");

  return (
    <Box sx={{}}>
      <Header />
      <div
        style={{
          // padding: isMax ? "0px 350px" : "0px 0px",
          // padding : isMax4 ? "0px 650px"
          // : isMax3 ? "0px 550px"
          // : isMax2 ? "0px 450px"
          // : isMax1 ? "0px 350px"
          // : isMax ? "0px 120px"
          // : "0px 0px"
          padding: isMax4
            ? "0px 500px"
            : isMax3
              ? "0px 300px 0px 320px"
              : isMax2
                ? "0px 260px 0px 270px"
                : isMax1
                  ? "0px 220px"
                  : isMax
                    ? "0px 140px"
                    : isMax5
                      ? "0px 110px"
                      : isMax6
                        ? "0px 65px"
                        : isMax7
                          ? "0px 50px"
                          : isMax8
                            ? "0px 20px"
                            : "0px 0px",
        }}
      >
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
          }}
        >
          {leCarePage.map((post: any) => (
            <>
              <div>
                <Typography
                variant="h2"
                  sx={{
                    fontFamily: "Mulish",
                    fontSize: {
                      xs: "20px",
                      sm: "30px",
                      lg: "34px",
                      // xl: "64px",
                      xl: "34px",
                    },
                    // fontWeight: 700,
                    fontWeight: 600,
                    lineHeight: {
                      xs: "1.5em",
                      sm: "1.5em",
                      lg: "1.5em",
                      // xl: "auto",
                      xl: "1.5em",
                    },
                    textAlign: "center",
                    color: "#0A1411",
                    margin: {
                      xs: "100px 0px 0px 0px",
                      sm: "100px 0px 0px 0px",
                      lg: "130px 80px 30px 80px",
                      xl: "150px 150px 8px 150px",
                    },
                  }}
                >
                  {post.data.bottom_title}
                </Typography>
                <Typography
                // variant=""
                  sx={{
                    fontFamily: "Mulish",
                    fontSize: {
                      xs: "13px",
                      sm: "17px",
                      lg: "18px",
                      // xl: "25px",
                      xl: "18px",
                    },
                    // fontWeight: 400,
                    fontWeight: 500,
                    lineHeight: {
                      xs: "1.5em",
                      sm: "1.5em",
                      lg: "1.9em",
                      // xl: "33px",
                      xl: "1.9em",
                    },
                    textAlign: "center",
                    color: "#4D5053",
                    margin: {
                      xs: "5% 2% 8% 2%",
                      sm: "30px 100px",
                      lg: "0px 150px 50px 150px",
                      xl: isMax
                        ? "0px 380px 50px 380px"
                        : "0px 350px 50px 350px",
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
                      sm: isTabScreen||isBigTabScreen?"50px 50px 100px 50px":"0px 50px 100px 50px",
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
                        sm: isTabScreen||isBigTabScreen? "column":"row",
                        // md: "row",
                        lg: "row",
                        xl: "row",
                      },
                    }}
                  >
                    <Grid
                      item
                      lg={6}
                      sm={isTabScreen||isBigTabScreen?12:6}
                      sx={{
                        background: "#FFFFFF",
                        borderRadius: "20px",
                        display: "flex",
                        justifyContent: "space-between",
                        flexDirection: "row",
                        // padding: {
                        //   xs: "20px 0px 0px 20px",
                        //   sm: "20px 0px 0px 20px",
                        // },
                        padding : "20px 0px 0px 20px",
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
                          variant="h4"
                            sx={{
                              fontSize: {
                                xs: "15px",
                                sm: "20px",
                                // md: "21px",
                                lg: "21px",
                                // xl: "36px",
                                xl: "21px",
                              },
                              fontFamily: "Mulish",
                              // fontWeight: 400,
                              fontWeight: 500,
                              color: "#1E1E1E",
                              paddingLeft: "8px",
                              // lineHeight: "auto",
                              lineHeight: "1.5em",
                              letterSpacing: "-5%",
                              opacity: "90%",
                            }}
                          >
                            {leCarePage[0]?.data.bottom_card_title1}
                          </Typography>
                        </div>
                        <Typography
                        // variant=""
                          sx={{
                            fontSize: {
                              xs: "13px",
                              sm: "17px",
                              // md: "18px",
                              lg: "18px",
                              // xl: "24px",
                              xl: "18px",
                            },
                            fontFamily: "Mulish",
                            fontStyle: "italic",
                            color: "#1E1E1E",
                            paddingTop: { lg: "", xl: "" },
                            opacity: "80%",
                            letterSpacing: "0%",
                            // lineHeight: "185%",
                            lineHeight: "1.9em",
                            fontWeight: 500,
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
                            leCarePage[0]?.data.bottom_card_image1.alt ||
                            "Image"
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
                      sm={isTabScreen||isBigTabScreen?12:6}
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
                          variant="h4"
                            sx={{
                              fontSize: {
                                xs: "15px",
                                sm: "20px",
                                // md: "22px",
                                lg: "21px",
                                // xl: "36px",
                                xl: "21px",
                              },
                              fontFamily: "Mulish",
                              // fontWeight: 400,
                              fontWeight: 500,
                              color: "#1E1E1E",
                              paddingLeft: "8px",
                              // lineHeight: "auto",
                              lineHeight: "1.5em",
                              letterSpacing: "-5%",
                              opacity: "90%",
                            }}
                          >
                            {leCarePage[0]?.data.bottom_card_title2}
                          </Typography>
                        </div>
                        <Typography
                        // variant=""
                          sx={{
                            fontSize: {
                              xs: "13px",
                              sm: "17px",
                              // md: "18px",
                              lg: "18px",
                              // xl: "24px",
                              xl: "18px",
                            },
                            fontFamily: "Mulish",
                            fontStyle: "italic",
                            color: "#1E1E1E",
                            paddingTop: { lg: "", xl: "" },
                            opacity: "80%",
                            letterSpacing: "0%",
                            // lineHeight: "185%",
                            lineHeight: "1.9em",
                            fontWeight: 500,
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
                            leCarePage[0]?.data.bottom_card_image2.alt ||
                            "Image"
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
                        sm:isTabScreen||isBigTabScreen?"column": "row",
                        // md: "row",
                        lg: "row",
                        xl: "row",
                      },
                    }}
                  >
                    <Grid
                      item
                      lg={6}
                      sm={isTabScreen||isBigTabScreen?12:6}
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
                          variant="h4"
                            sx={{
                              fontSize: {
                                xs: "15px",
                                sm: "20px",
                                // md: "21px",
                                lg: "21px",
                                // xl: "36px",
                                xl: "21px",
                              },
                              fontFamily: "Mulish",
                              // fontWeight: 400,
                              fontWeight: 500,
                              color: "#1E1E1E",
                              paddingLeft: "8px",
                              // lineHeight: "auto",
                              lineHeight: "1.5em",
                              letterSpacing: "-5%",
                              opacity: "90%",
                            }}
                          >
                            {leCarePage[0]?.data.bottom_card_title3}
                          </Typography>
                        </div>
                        <Typography
                        // variant=""
                          sx={{
                            fontSize: {
                              xs: "13px",
                              sm: "17px",
                              lg: "18px",
                              // md: "18px",
                              // xl: "24px",
                              xl: "18px",
                            },
                            fontFamily: "Mulish",
                            fontStyle: "italic",
                            color: "#1E1E1E",
                            paddingTop: { lg: "", xl: "" },
                            opacity: "80%",
                            letterSpacing: "0%",
                            // lineHeight: "185%",
                            lineHeight: "1.9em",
                            fontWeight: 500,
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
                            leCarePage[0]?.data.bottom_card_image3.alt ||
                            "Image"
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
                      sm={isTabScreen||isBigTabScreen?12:6}
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
                          variant="h4"
                            sx={{
                              fontSize: {
                                xs: "15px",
                                sm: "20px",
                                // md: "21px",
                                lg: "21px",
                                // xl: "36px",
                                xl: "21px",
                              },
                              fontFamily: "Mulish",
                              // fontWeight: 400,
                              fontWeight: 500,
                              color: "#1E1E1E",
                              paddingLeft: "8px",
                              // lineHeight: "auto",
                              lineHeight: "1.5em",
                              letterSpacing: "-5%",
                              opacity: "90%",
                            }}
                          >
                            {leCarePage[0]?.data.bottom_card_title4}
                          </Typography>
                        </div>
                        <Typography
                        // variant=""
                          sx={{
                            fontSize: {
                              xs: "13px",
                              sm: "17px",
                              // md: "18px",
                              lg: "18px",
                              // xl: "24px",
                              xl: "18px",
                            },
                            fontFamily: "Mulish",
                            fontStyle: "italic",
                            color: "#1E1E1E",
                            paddingTop: { lg: "", xl: "" },
                            opacity: "80%",
                            letterSpacing: "0%",
                            // lineHeight: "185%",
                            lineHeight: "1.9em",
                            fontWeight: 500,
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
                            leCarePage[0]?.data.bottom_card_image4.alt ||
                            "Image"
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
      </div>
      <Liberez />
      <Footer />
    </Box>
  );
};

export default Benifits;
