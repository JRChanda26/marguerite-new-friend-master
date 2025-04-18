"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import Liberez from "../mainpage/NeManquez";
import Footer from "../mainpage/Footer";
import Header from "../mainpage/Header";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRouter } from "next/navigation";

const NosSolutionsDe: React.FC = () => {
  const [nosPage, setNosPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType(
        "nos_solutions_de" as any
      );
      setNosPage(response);
    };

    fetchData();
  }, []);
  const backgroundImage = nosPage[0]?.data?.header_background?.url || "";

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

  console.log(modulesPage);

  const faqs = [
    {
      question: modulesPage[0]?.data.question1,
      answer: modulesPage[0]?.data.answer1,
    },
    {
      question: modulesPage[0]?.data.question2,
      answer: modulesPage[0]?.data.answer2,
    },
    {
      question: modulesPage[0]?.data.question3,
      answer: modulesPage[0]?.data.answer3,
    },
    {
      question: modulesPage[0]?.data.question4,
      answer: modulesPage[0]?.data.answer4,
    },
    {
      question: modulesPage[0]?.data.question5,
      answer: modulesPage[0]?.data.answer5,
    },
    {
      question: modulesPage[0]?.data.question6,
      answer: modulesPage[0]?.data.answer6,
    },
  ];

  const videoUrl = modulesPage[0]?.data.video?.url;

  const [clicked1, setClicked1] = useState<number | null>(1);
  const handleColor1 = (index: number) => {
    setClicked1(index);
  };

  const points = [
    {
      heading: nosPage[0]?.data.box1,
      background: "#F6C09E",
      points: [nosPage[0]?.data.box1_point1, nosPage[0]?.data.box1_point2],
    },
    {
      heading: nosPage[0]?.data.box2,
      background: "#BBDDD9",
      points: [nosPage[0]?.data.box2_point1, nosPage[0]?.data.box2_point2],
    },
    {
      heading: nosPage[0]?.data.box3,
      background: "#EE8A74",
      points: [nosPage[0]?.data.box3_point1, nosPage[0]?.data.box3_point2],
    },
    {
      heading: nosPage[0]?.data.box4,
      background: "#82C5BE",
      points: [nosPage[0]?.data.box4_point1, nosPage[0]?.data.box4_point2],
    },
    {
      heading: nosPage[0]?.data.box5,
      background: "#F6C09E",
      points: [
        nosPage[0]?.data.box5_point1,
        nosPage[0]?.data.box5_point2,
        nosPage[0]?.data.box5_point3,
      ],
    },
    {
      heading: nosPage[0]?.data.box6,
      background: "#BBDDD9",
      points: [nosPage[0]?.data.box6_point1, nosPage[0]?.data.box6_point2],
    },
    {
      heading: nosPage[0]?.data.box7,
      background: "#EE8A74",
      points: [nosPage[0]?.data.box7_point1, nosPage[0]?.data.box7_point2],
    },
    {
      heading: nosPage[0]?.data.box8,
      background: "#82C5BE",
      points: [nosPage[0]?.data.box8_point1, nosPage[0]?.data.box8_point2],
    },
  ];

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/contact");
  };

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const headingFontSize = {
    fontSize: isSmallScreen ? "14px" : "18.98px",
  };

  const pointsFontSize = {
    fontSize: isSmallScreen ? "18px" : "22px",
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

  return (
    <Box>
      <Header />
      <div
        style={{
          // padding: isMax ? "0px 200px" : "0px 0px",
          padding: isMax4
            ? "0px 450px"
            : isMax3
              ? "0px 320px"
              : isMax2
                ? "0px 250px"
                : isMax1
                  ? "0px 200px"
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
        <Grid
          sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: {
              xs: "cover",
              sm: "cover",
              lg: "cover",
              xl: "cover",
            },
            backgroundRepeat: "no-repeat",
          }}
        >
          {nosPage.map((post: any) => (
            <>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: {
                    xs: "70px 50px 0px 50px",
                    sm: "100px 150px 0px 150px",
                    lg: "250px 150px 0px 150px",
                    md: "250px 100px 0px 100px",
                    xl: "420px 300px 0px 300px",
                  },
                }}
              >
                <Grid
                  sx={{
                    background: "#fff",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    textAlign: "center",
                    borderRadius: {
                      xs: "20px 20px 0px 0px",
                      sm: "37px 37px 0px 0px",
                      lg: "37px 37px 0px 0px",
                      xl: "37px 37px 0px 0px",
                    },
                    padding: {
                      xs: "0% 5% 0% 5%",
                      sm: "3% 8%",
                      lg: "41px 82px 42px 82px",
                      xl: "21px 82px 21px 82px",
                    },
                  }}
                >
                  <Typography
                  variant="h1"
                    sx={{
                      // fontFamily: "DM Serif Display",
                      fontFamily: "Mulish",
                      color: "#292F36",
                      // fontWeight: 700,
                      fontWeight: 700,
                      fontSize: {
                        xs: "16px",
                        sm: "40px",
                        lg: "55px",
                        // xl: "50px",
                        xl: "55px",
                      },
                      lineHeight: {
                        xs: "40px",
                        sm: "48px",
                        lg: "125%",
                        // xl: "125%",
                        xl: "1.5em",
                      },
                      letterSpacing: "0%",
                    }}
                  >
                    {post.data.heading}
                  </Typography>
                  <Typography
                  variant="h4"
                    sx={{
                      // fontFamily: "Jost",
                      fontFamily: "Mulish",
                      color: "#4D5053",
                      fontWeight: 400,
                      fontSize: {
                        xs: "10px",
                        sm: "21px",
                        lg: "21px",
                        xl: "21px",
                      },
                      lineHeight: {
                        xs: "20px",
                        sm: "28px",
                        lg: "50%",
                        xl: "50%",
                      },
                      letterSpacing: "1%",
                    }}
                  >
                    {post.data.sub_heading}
                  </Typography>
                </Grid>
              </Grid>
            </>
          ))}
        </Grid>
        <div
          style={{
            // padding: isMax ? "0px 150px" : "0px 0px",
            padding: isMax4
              ? "0px 300px"
              : isMax3
                ? "0px 280px"
                : isMax2
                  ? "0px 200px"
                  : isMax1
                    ? "0px 150px"
                    : isMax
                      ? "0px 0px"
                      : "0px 0px",
          }}
        >
          <Grid
            sx={{
              padding: {
                xs: "5%",
                sm: "5%",
                lg: "50px",
                xl: "100px 100px 50px 100px" //"50px 228px 50px 228px"
              },
            }}
          >
            {nosPage.map((post: any) => (
              <Grid container spacing={0} key={post.id}>
                <Grid
                  item
                  lg={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      lg: "row",
                      xl: "row",
                    },
                    gap: { xs: "50px", sm: "50px", lg: "200px", xl: "300px" },
                    alignItems: "center",
                  }}
                >
                  <Grid item xl={5} lg={5} xs={12} sm={7}>
                    {nosPage.map((post: any) => (
                      <Typography
                      variant="h2"
                        key={post}
                        sx={{
                          fontFamily: "Mulish",
                          // fontWeight: 700,
                          fontWeight: 600,
                          fontSize: {
                            xs: "30px",
                            sm: "34px",
                            lg: "34px",
                            // xl: "58px",
                            xl: "34px",
                          },
                          lineHeight: {
                            xs: "35px",
                            sm: "48px",
                            lg: "125%",
                            // xl: "125%",
                            xl: "1.5em",
                          },
                          color: "#292F36",
                          letterSpacing: "2%",
                          // paddingRight:{xl:'150px'}
                        }}
                      >
                        {post.data.top_left_title}
                      </Typography>
                    ))}
                    <Typography
                    variant="h4"
                      sx={{
                        fontSize: {
                          xs: "12px",
                          sm: "21px",
                          lg: "21px",
                          // xl: "22px",
                          xl: "21px",
                        },
                        // fontWeight: 400,
                        fontWeight: 500,
                        lineHeight: {
                          xs: "18px",
                          sm: "25px",
                          lg: "150%",
                          // xl: "150%",
                          xl: "1.3em",
                        },
                        paddingTop: "23px",
                        // fontFamily: "Jost",
                        fontFamily: "Mulish",
                        color: "#4D5053",
                        textAlign: "justify",
                      }}
                    >
                      {post.data.top_left_description}
                    </Typography>
                    <div style={{ paddingTop: "0px" }}>
                      {nosPage.map((post: any) => (
                        <Button
                          key={post}
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            background: "#24535C",
                            borderRadius: "82px",
                            marginTop: {
                              xs: "20px",
                              sm: "20px",
                              lg: "45px",
                              xl: "45px",
                            },
                            justifyContent: "space-around",
                            width: {
                              xs: "50%",
                              sm: "70%",
                              lg: "250px",
                              md: "250px",
                              xl: "250px",
                            },
                            height: {
                              xs: "auto",
                              sm: "auto",
                              lg: "70px",
                              xl: "70px",
                            },
                            "&:focus": {
                              background: "#24535C",
                            },
                            "&:hover": {
                              background: "#24535C",
                            },
                          }}
                          // onClick={handleNavigation}
                        >
                          <Typography
                          variant="h4"
                            sx={{
                              fontWeight: 400,
                              fontFamily: "Mulish",
                              fontSize: {
                                xs: "12px",
                                sm: "21px",
                                lg: "21px",
                                xl: "21px",
                              },
                              lineHeight: {
                                xs: "8px",
                                sm: "12px",
                                lg: "18.24px",
                                xl: "18.24px",
                              },
                              color: "#FFFFFF",
                            }}
                          >
                            {post.data.button_text}
                          </Typography>
                          {post?.data.button_icon && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={post?.data.button_icon.url || undefined}
                              alt={post?.data.button_icon.alt || "Image"}
                              style={{
                                width: "20%",
                                height: "auto",
                              }}
                            />
                          )}
                        </Button>
                      ))}
                    </div>
                  </Grid>

                  <Grid
                    xl={6}
                    lg={6}
                    xs={12}
                    sm={5}
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    {post?.data.top_right_image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={post?.data.top_right_image.url || undefined}
                        alt={post?.data.top_right_image.alt || "Image"}
                        style={{
                          width: "100%",
                          height: "auto",
                          borderRadius: "20px",
                        }}
                      />
                    )}
                  </Grid>
                </Grid>
              </Grid>
            ))}
          </Grid>

          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              padding: { lg: "0px 100px 0px 100px", xl: "0px 200px 0px 200px" },
            }}
          >
            <Grid item lg={12}>
              <Typography
              variant="h2"
                sx={{
                  textAlign: "center",
                  color: "#292F36",
                  fontSize: { xs: "30px", sm: "34px", lg: "34px", xl: "34px" }, //xl: "50px"
                  // fontWeight: 400,
                  fontWeight: 600,
                  lineHeight: "1.5em",
                  marginTop: "0px",
                  fontFamily: "Mulish",
                }}
              >
                {modulesPage[0]?.data.video_title}
              </Typography>
              <Grid
                item
                lg={12}
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                    lg: "row",
                    xl: "row",
                  },
                  justifyContent: "space-evenly",
                  marginTop: "50px",
                  alignItems: "center",
                  gap: { lg: "60px", xl: "0px" },
                }}
              >
                <Grid item xs={12} sm={5} lg={6} md={5} xl={5}>
                  {/* {videoUrl ? (
                <video
                  width="100%"
                  height="auto"
                  controls
                  style={{
                    borderRadius: "12px",
                    objectFit: "cover",
                  }}
                >
                  <source src={videoUrl} type="video/mp4" />
                </video>
              ) : (
                <p>Video not available</p>
              )} */}
                  {modulesPage[0]?.data.video_image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={modulesPage[0]?.data.video_image.url || undefined}
                      alt={modulesPage[0]?.data.video_image.alt || "Image"}
                      width={isMax ? "95%" : isMax8 ? "100%" : "90%"}
                      height="auto"
                    />
                  )}
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={5}
                  lg={6}
                  md={5}
                  xl={5}
                  sx={{
                    height: {
                      xs: "0px",
                      sm: "400px",
                      md: "450px",
                      lg: "450px",
                      // xl: "600px",
                    },
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                  }}
                >
                  {faqs.slice(3, 6).map((faq, index) => (
                    <div key={index}>
                      <Accordion
                        expanded={clicked1 === index}
                        style={{
                          backgroundColor: "transparent",
                          boxShadow: "none",
                        }}
                      >
                        <AccordionSummary
                          expandIcon={
                            <KeyboardArrowUpIcon
                              onClick={() => handleColor1(index)}
                              sx={{
                                color:
                                  clicked1 === index ? "#3D8C6E" : "#292F36",
                              }}
                            />
                          }
                        >
                          <Typography
                            onClick={() => handleColor1(index)}
                            variant="h4"
                            sx={{
                              color: clicked1 === index ? "#3D8C6E" : "#292F36",
                              lineHeight: "1.5em",
                              fontSize: {
                                xs: "18px",
                                sm: "14px",
                                lg: "21px",
                                md: "21px",
                                // xl: "35px",
                                xl: "21px",
                              },
                              fontWeight: 500,
                              fontFamily: "Mulish",
                              letterSpacing: "1%",
                            }}
                          >
                            {faq.question}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography
                          // variant=""
                            sx={{
                              color: "#4D5053",
                              fontSize: {
                                xs: "14px",
                                sm: "12px",
                                lg: "18px",
                                md: "18px",
                                // xl: "28px",
                                xl: "18px",
                              },
                              // fontWeight: 400,
                              fontWeight: 500,
                              fontFamily: "Mulish",
                              lineHeight: "1.9em",
                              letterSpacing: "1%",
                            }}
                          >
                            {faq.answer}
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <hr style={{ border: "1px solid #3D8C6E" }} />
                    </div>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            container
            sx={{
              padding: {
                xs: "30px",
                sm: "40px",
                lg: "50px 50px 0px 50px",
                xl: isMax ? "50px 156px 0px 156px" : "70px 50px 0px 50px",
              },
            }}
          >
            {points.map((item, index) => (
              <Grid
                key={index}
                item
                xl={3}
                lg={3}
                md={3}
                sm={6}
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                // variant=""
                  sx={{
                    background: item.background,
                    borderRadius: "42.9px",
                    padding: "20px",
                    width: "70%",
                    height: "7vh",
                    textAlign: "center",
                    fontFamily: "Mulish",
                    // fontSize: headingFontSize.fontSize,
                    fontSize: {
                      // xl: "18.98px",
                      xl: "18px",
                      xs: "14px",
                      lg: "18px",
                      sm: "14px",
                      md: "18px",
                    },
                    lineHeight: "1.5em",
                    letterSpacing: "2%",
                    color: "#000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 500,
                  }}
                >
                  {item.heading}
                </Typography>
                <ul>
                  {item.points.map((point, idx) => (
                    <li key={idx}>
                      <Typography
                        sx={{
                          color: "#4D5053",
                          fontFamily: "Mulish",
                          // fontSize: pointsFontSize.fontSize,
                          fontSize: {
                            xl: "18px",
                            xs: "18px",
                            lg: "18px",
                            sm: "18px",
                            md: "18px",
                          },
                          lineHeight: "150%",
                          letterSpacing: "1%",
                          fontWeight: 500,
                        }}
                      >
                        {point}
                      </Typography>
                    </li>
                  ))}
                </ul>
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
      <Liberez />
      <Footer />
    </Box>
  );
};

export default NosSolutionsDe;
