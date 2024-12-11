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
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { PrismicNextLink } from "@prismicio/next";
import Header from "../mainpage/Header";

const LecarechezMargueriteServices: React.FC = () => {
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

  const headerBackground = leCarePage[0]?.data?.header_background?.url || "";
  const squareBracketsBackground =
    leCarePage[0]?.data?.square_brackets_background?.url || "";
  const middleBackground = leCarePage[0]?.data?.middle_background?.url || "";
  const bottomBackground = leCarePage[0]?.data?.bottom_background?.url || "";

  const personCards = [
    {
      id: 1,
      profile: leCarePage[0]?.data?.profile_picture1?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook1,
      twitterLink: leCarePage[0]?.data.profile_twitter1,
      linkedinLink: leCarePage[0]?.data.profile_linkedin1,
      instagramLink: leCarePage[0]?.data.profile_instagram1,
    },
    {
      id: 2,
      profile: leCarePage[0]?.data?.profile_picture2?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook2,
      twitterLink: leCarePage[0]?.data.profile_twitter2,
      linkedinLink: leCarePage[0]?.data.profile_linkedin2,
      instagramLink: leCarePage[0]?.data.profile_instagram2,
    },
    {
      id: 3,
      profile: leCarePage[0]?.data?.profile_picture3?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook3,
      twitterLink: leCarePage[0]?.data.profile_twitter3,
      linkedinLink: leCarePage[0]?.data.profile_linkedin3,
      instagramLink: leCarePage[0]?.data.profile_instagram3,
    },
    {
      id: 4,
      profile: leCarePage[0]?.data?.profile_picture4?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook4,
      twitterLink: leCarePage[0]?.data.profile_twitter4,
      linkedinLink: leCarePage[0]?.data.profile_linkedin4,
      instagramLink: leCarePage[0]?.data.profile_instagram4,
    },
    {
      id: 5,
      profile: leCarePage[0]?.data?.profile_picture5?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook5,
      twitterLink: leCarePage[0]?.data.profile_twitter5,
      linkedinLink: leCarePage[0]?.data.profile_linkedin5,
      instagramLink: leCarePage[0]?.data.profile_instagram5,
    },
    {
      id: 6,
      profile: leCarePage[0]?.data?.profile_picture6?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook6,
      twitterLink: leCarePage[0]?.data.profile_twitter6,
      linkedinLink: leCarePage[0]?.data.profile_linkedin6,
      instagramLink: leCarePage[0]?.data.profile_instagram6,
    },
    {
      id: 7,
      profile: leCarePage[0]?.data?.profile_picture7?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook7,
      twitterLink: leCarePage[0]?.data.profile_twitter7,
      linkedinLink: leCarePage[0]?.data.profile_linkedin7,
      instagramLink: leCarePage[0]?.data.profile_instagram7,
    },
    {
      id: 8,
      profile: leCarePage[0]?.data?.profile_picture8?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook8,
      twitterLink: leCarePage[0]?.data.profile_twitter8,
      linkedinLink: leCarePage[0]?.data.profile_linkedin8,
      instagramLink: leCarePage[0]?.data.profile_instagram8,
    },
  ];

  const [flippedStates, setFlippedStates] = useState(
    Array(personCards.length).fill(false)
  );

  const handleFlipCard = (index: any) => {
    setFlippedStates((prevStates) =>
      prevStates.map((flipped, i) => (i === index ? !flipped : flipped))
    );
  };

  const [clicked1, setClicked1] = useState<number | null>(1);
  const handleColor1 = (index: number) => {
    setClicked1(index);
  };

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

  const designerNameStyle: React.CSSProperties = {
    fontFamily: "DM Serif Display",
    fontWeight: 400,
    lineHeight: "37.5px",
    letterSpacing: "1%",
    textAlign: "center",
    color: "#292F36",
  };

  const designerDetailsStyle: React.CSSProperties = {
    fontFamily: "Jost",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "1%",
    textAlign: "center",
    color: "#4D5053",
  };

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

  const dimensions = getDimensions();

  const getRightImageHeight = () => {
    if (isXs) return { height: "100%" };
    if (isSm) return { height: "48%" };
    if (isLg) return { height: "51%" };
    if (isXl) return { height: "62%" };
  };
  const rightImageHeight = getRightImageHeight();

  const getMiddleImageHeight = () => {
    if (isXs) return { height: "100%" };
    if (isSm) return { height: "90%" };
    if (isLg) return { height: "88%" };
    if (isXl) return { height: "auto" };
  };
  const middleImageHeight = getMiddleImageHeight();

  const profileNameFontSize = {
    fontSize: isXs ? "20px" : "25px",
  };

  const profileDetailsFontSize = {
    fontSize: isXs ? "12px" : "18px",
  };

  return (
    <Box>
      <Header />
      <Grid
        sx={{
          backgroundImage: `url(${headerBackground})`,
          backgroundSize: {
            xs: "cover",
            sm: "cover",
            lg: "cover",
            xl: "cover",
          },
          backgroundRepeat: "no-repeat",
        }}
      >
        {leCarePage.map((post: any) => (
          <>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                padding: {
                  xs: "70px 50px 0px 50px",
                  sm: "100px 150px 0px 150px",
                  lg: "250px 150px 0px 150px",
                  xl: "352px 441px 0px 441px",
                },
              }}
            >
              <Grid
                sx={{
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: {
                    xs: "20px 20px 0px 0px",
                    sm: "37px 37px 0px 0px",
                    lg: "37px 37px 0px 0px",
                    xl: "37px 37px 0px 0px",
                  },
                  padding: {
                    xs: "0% 5% 0% 5%",
                    sm: "3% 8%",
                    lg: "41px 0px 42px 0px",
                    xl: "41px 132px 42px 132px",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "DM Serif Display",
                    color: "#292F36",
                    fontWeight: 700,
                    fontSize: {
                      xs: "16px",
                      sm: "40px",
                      lg: "50px",
                      xl: "50px",
                    },
                    lineHeight: {
                      xs: "40px",
                      sm: "48px",
                      lg: "125%",
                      xl: "125%",
                    },
                    letterSpacing: "0%",
                  }}
                >
                  {post.data.heading}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    color: "#4D5053",
                    fontWeight: 400,
                    fontSize: {
                      xs: "10px",
                      sm: "18px",
                      lg: "22px",
                      xl: "22px",
                    },
                    lineHeight: {
                      xs: "20px",
                      sm: "28px",
                      lg: "150%",
                      xl: "150%",
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

      <Grid
        sx={{
          textAlign: "center",
          padding: {
            xs: "20px",
            sm: "70px",
            lg: "92px 100px 50px 100px",
            xl: "92px 254px 168px 254px",
          },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Mulish",
            color: "#24535C",
            fontWeight: 400,
            fontSize: { xs: "28px", sm: "38px", lg: "48px", xl: "48px" },
            lineHeight: { xs: "30px", sm: "45px", lg: "auto", xl: "auto" },
          }}
        >
          {leCarePage[0]?.data.main_title}
        </Typography>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          sx={{
            backgroundImage: `url(${squareBracketsBackground})`,
            backgroundSize: {
              xs: "contain",
              sm: "contain",
              lg: "contain",
              xl: "contain",
            },
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: {
              xs: "5%",
              sm: "10%",
              lg: "50px 300px",
              xl: "107px 525px",
            },
            flexDirection: "column",
          }}
        >
          {leCarePage.map((post: any) => (
            <>
              <Grid
                sx={{
                  padding: {
                    xs: "80px 0px 0px 0px",
                    sm: "80px 0px 0px 0px",
                    lg: "67px 0px 27px 0px",
                    xl: "67px 0px 27px 0px",
                  },
                }}
              >
                {leCarePage[0]?.data.quote_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={leCarePage[0]?.data.quote_image.url || undefined}
                    alt={leCarePage[0]?.data.quote_image.alt || "Image"}
                    width="50%"
                    height="auto"
                  />
                )}
              </Grid>
              <div>
                <Typography
                  sx={{
                    fontFamily: "Jenna Sue",
                    color: "#292F36",
                    fontWeight: 400,
                    fontSize: {
                      xs: "28px",
                      sm: "38px",
                      lg: "48px",
                      xl: "48px",
                    },
                    lineHeight: {
                      xs: "30px",
                      sm: "45px",
                      lg: "125%",
                      xl: "125%",
                    },
                    textAlign: "center",
                    padding: {
                      xs: "10px 20px 10px 20px",
                      sm: "12%",
                      lg: "27px 62px 34px 62px",
                      xl: "27px 62px 34px 62px",
                    },
                    letterSpacing: "2%",
                  }}
                >
                  {post.data.quote_text}
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{
                    fontFamily: "Jost",
                    color: "#4D5053",
                    fontWeight: 400,
                    fontSize: {
                      xs: "14px",
                      sm: "18px",
                      lg: "25px",
                      xl: "25px",
                    },
                    lineHeight: {
                      xs: "18px",
                      sm: "25px",
                      lg: "150%",
                      xl: "150%",
                    },
                    textAlign: "center",
                    letterSpacing: "1%",
                    padding: {
                      xs: "0px 0px 100px 0px",
                      sm: "0px 100px 80px 100px",
                      lg: "0px 195px 80px 195px",
                      xl: "0px 195px 168px 195px",
                    },
                  }}
                >
                  {post.data.writer_name}
                </Typography>
              </div>
            </>
          ))}
        </Grid>
      </Box>
      <Grid
        sx={{
          padding: {
            xs: "7%",
            sm: "7%",
            lg: "100px 200px 150px 200px",
            xl: "200px 368px 229px 368px",
          },
        }}
      >
        {leCarePage.map((post: any) => (
          <Grid container spacing={2} key={post}>
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
                justifyContent: "center",
                gap: { xs: "50px", sm: "50px", lg: "206px", xl: "206px" },
                alignItems: "center",
              }}
            >
              <Grid item xl={5} lg={5} xs={12} sm={7}>
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    fontWeight: 700,
                    fontSize: {
                      xs: "30px",
                      sm: "40px",
                      lg: "50px",
                      xl: "50px",
                    },
                    lineHeight: {
                      xs: "35px",
                      sm: "48px",
                      lg: "125%",
                      xl: "125%",
                    },
                    color: "#292F36",
                    letterSpacing: "2%",
                  }}
                >
                  {post.data.top_left_title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "12px",
                      sm: "18px",
                      lg: "22px",
                      xl: "22px",
                    },
                    fontWeight: 400,
                    lineHeight: {
                      xs: "18px",
                      sm: "25px",
                      lg: "150%px",
                      xl: "150%px",
                    },
                    paddingTop: "23px",
                    fontFamily: "Mulish",
                    color: "#4D5053",
                  }}
                >
                  {post.data.top_left_description}
                </Typography>
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
                {leCarePage[0]?.data.top_right_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={leCarePage[0]?.data.top_right_image.url || undefined}
                    alt={leCarePage[0]?.data.top_right_image.alt || "Image"}
                    width="100%"
                    height="auto"
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
          padding: { lg: "0px 100px 200px 100px", xl: "0px 363px 229px 363px" },
        }}
      >
        <Grid item lg={12}>
          <Typography
            sx={{
              textAlign: "center",
              color: "#292F36",
              // fontSize: "50px",
              fontSize: { xs: "30px", sm: "40px", lg: "50px", xl: "50px" },
              fontWeight: 400,
              marginTop: "50px",
            }}
          >
            {modulesPage[0]?.data.video_title}
          </Typography>
          <Grid
            item
            lg={12}
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row", lg: "row", xl: "row" },
              justifyContent: "space-evenly",
              marginTop: "50px",
              alignItems: "center",
              gap: { lg: "60px", xl: "60px" },
            }}
          >
            <Grid item xs={12} sm={5} lg={6} xl={6}>
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
                  width="100%"
                  height="auto"
                />
              )}
            </Grid>
            <Grid
              item
              xs={12}
              sm={5}
              lg={6}
              xl={6}
              sx={{
                height: { xs: "0px", sm: "400px", lg: "450px", xl: "450px" },
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
                            color: clicked1 === index ? "#3D8C6E" : "#292F36",
                          }}
                        />
                      }
                    >
                      <Typography
                        onClick={() => handleColor1(index)}
                        sx={{
                          color: clicked1 === index ? "#3D8C6E" : "#292F36",
                          lineHeight: "150%",
                          fontSize: {
                            xs: "18px",
                            sm: "22px",
                            lg: "25px",
                            xl: "25px",
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
                        sx={{
                          color: "#4D5053",
                          fontSize: {
                            xs: "14px",
                            sm: "18px",
                            lg: "22px",
                            xl: "22px",
                          },
                          fontWeight: 400,
                          fontFamily: "Mulish",
                          lineHeight: "150%",
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

      <div>
        <Grid
          item
          lg={12}
          sx={{
            textAlign: "center",
            fontSize: { xs: "38px", sm: "50px", lg: "64px", xl: "64px" },
            fontFamily: "Mulish",
            fontWeight: 700,
            color: "1D1D1D",
            padding: { xs: "15% 0% 5% 0%" },
          }}
        >
          <div>{leCarePage[0]?.data.mission_title}</div>
        </Grid>
        <Grid
          item
          lg={12}
          sx={{
            textAlign: "center",
            fontSize: { xs: "18px", sm: "25px", lg: "36px", xl: "36px" },
            fontFamily: "Mulish",
            color: "1D1D1D",
            padding: {
              xs: "0px 30px 50px 30px",
              sm: "0px 30px 50px 30px",
              lg: "20px 257px 143px 257px",
              xl: "20px 457px 143px 457px",
            },
          }}
        >
          <div>{leCarePage[0]?.data.mission_description}</div>
        </Grid>
        {leCarePage.map((post: any, postIndex: number) => (
          <Grid container key={post}>
            <Grid
              item
              lg={12}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row", lg: "row" },
                justifyContent: "space-evenly",
                gap: "20px",
                padding: {
                  lg: "0px 195px 229px 195px",
                  xl: "0px 195px 229px 195px",
                },
              }}
            >
              <Grid
                item
                lg={4}
                xs={12}
                sm={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  gap: "28px",
                }}
              >
                {leCarePage[0]?.data.mission_left_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={
                      leCarePage[0]?.data.mission_left_image.url || undefined
                    }
                    alt={leCarePage[0]?.data.mission_left_image.alt || "Image"}
                    width="100%"
                    height="auto"
                  />
                )}
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    gap: "20px",
                    border: "1px solid #1D685A",
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "50px",
                        sm: "30px",
                        lg: "40px",
                        xl: "50px",
                      },
                      color: "#1D1D1D",
                      fontFamily: "Mulish",
                      lineHeight: "125%",
                      letterSpacing: "0%",
                      padding: {
                        xs: "25px 30px 0px 30px",
                        sm: "10px 30px 0px 30px",
                        lg: "25px 18px 0px 18px",
                        xl: "85px 49px 24px 49px",
                      },
                    }}
                  >
                    {post.data.mission_left_title}
                  </Typography>
                  <Typography
                    sx={{
                      // fontSize: "24px",
                      fontSize: {
                        xs: "24px",
                        sm: "20px",
                        lg: "18px",
                        xl: "24px",
                      },
                      color: "#1D1D1D",
                      fontFamily: "Mulish",
                      lineHeight: "30px",
                      letterSpacing: "0%",
                      padding: {
                        xs: "0px 30px 30px 30px",
                        sm: "0px 10px 10px 30px",
                        lg: "0px 18px 20px 18px",
                        xl: "0px 49px 80px 49px",
                      },
                    }}
                  >
                    {post.data.mission_left_description}
                  </Typography>
                </Grid>
              </Grid>
              {/* <Grid
                item
                lg={4}
                xs={12}
                sm={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  gap: "20px",
                }}
              >
                {leCarePage[0]?.data.mission_middle_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={
                      leCarePage[0]?.data.mission_middle_image.url || undefined
                    }
                    alt={
                      leCarePage[0]?.data.mission_middle_image.alt || "Image"
                    }
                    style={{
                      width: "100%",
                      height: middleImageHeight?.height,
                    }}
                  />
                )}
                <Button
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
                      lg: "220.47px",
                      xl: "220.47px",
                    },
                    height: {
                      xs: "auto",
                      sm: "auto",
                      lg: "62.47px",
                      xl: "62.47px",
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
                    sx={{
                      fontWeight: 400,
                      fontFamily: "Mulish",
                      fontSize: {
                        xs: "12px",
                        sm: "18px",
                        lg: "15.2px",
                        xl: "15.2px",
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
                    {leCarePage[0]?.data.button_text}
                  </Typography>
                  {leCarePage[0]?.data.button_icon && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={leCarePage[0]?.data.button_icon.url || undefined}
                      alt={leCarePage[0]?.data.button_icon.alt || "Image"}
                      style={{
                        width: "20%",
                        height: "auto",
                      }}
                    />
                  )}
                </Button>
              </Grid> */}
              <Grid
                item
                lg={4}
                xs={12}
                sm={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  gap: "20px",
                }}
              >
                {/* {leCarePage[0]?.data.mission_middle_image && ( */}
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: middleImageHeight?.height,
                    }}
                  >
                    {leCarePage[0]?.data.mission_middle_image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={
                          leCarePage[0]?.data.mission_middle_image.url ||
                          undefined
                        }
                        alt={
                          leCarePage[0]?.data.mission_middle_image.alt ||
                          "Image"
                        }
                        style={{
                          width: "100%",
                          height: "100%",
                          // objectFit: "cover",
                        }}
                      />
                    )}

                    {/* Button */}
                    <Button
                      sx={{
                        position: "absolute",
                        bottom: "20px", // Adjust this value to position the button vertically
                        left: "50%",
                        transform: "translateX(-50%)", // Center horizontally
                        display: "flex",
                        flexDirection: "row",
                        background: "#24535C",
                        borderRadius: "82px",
                        justifyContent: "space-around",
                        width: {
                          xs: "50%",
                          sm: "70%",
                          lg: "220.47px",
                          xl: "220.47px",
                        },
                        height: {
                          xs: "auto",
                          sm: "auto",
                          lg: "62.47px",
                          xl: "62.47px",
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
                        sx={{
                          fontWeight: 400,
                          fontFamily: "Mulish",
                          fontSize: {
                            xs: "12px",
                            sm: "12px",
                            lg: "15.2px",
                            xl: "15.2px",
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
                        {leCarePage[0]?.data.button_text}
                      </Typography>
                      {leCarePage[0]?.data.button_icon && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={leCarePage[0]?.data.button_icon.url || undefined}
                          alt={leCarePage[0]?.data.button_icon.alt || "Image"}
                          style={{
                            width: "20%",
                            height: "auto",
                          }}
                        />
                      )}
                    </Button>
                  </div>
                {/* )} */}
              </Grid>

              <Grid
                item
                lg={4}
                xs={12}
                sm={4}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  gap: "28px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    textAlign: "left",
                    gap: "20px",
                    padding: "30px",
                    border: "1px solid #1D685A",
                    borderRadius: "12px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "50px",
                        sm: "30px",
                        lg: "40px",
                        xl: "50px",
                      },
                      color: "#1D1D1D",
                      fontFamily: "Mulish",
                      lineHeight: "125%",
                      letterSpacing: "0%",
                      padding: {
                        xs: "0px",
                        sm: "0px",
                        lg: "0px",
                        xl: "28px 49px 24px 49px",
                      },
                    }}
                  >
                    {post.data.mission_right_title}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: {
                        xs: "24px",
                        sm: "20px",
                        lg: "18px",
                        xl: "24px",
                      },
                      color: "#1D1D1D",
                      fontFamily: "Mulish",
                      lineHeight: "30px",
                      letterSpacing: "0%",
                      padding: {
                        xs: "0px",
                        sm: "0px",
                        lg: "0px",
                        xl: "0px 20px 40px 49px",
                      },
                    }}
                  >
                    {post.data.mission_right_description}
                  </Typography>
                </div>
                {leCarePage[0]?.data.mission_right_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={
                      leCarePage[0]?.data.mission_right_image.url || undefined
                    }
                    alt={leCarePage[0]?.data.mission_right_image.alt || "Image"}
                    style={{
                      width: "100%",
                      height: rightImageHeight?.height,
                    }}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>

      <div
        style={{
          backgroundImage: `url(${middleBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "100%",
          height: "auto",
          marginTop: "5%",
        }}
      >
        {leCarePage.map((post: any, postIndex: number) => (
          <React.Fragment key={postIndex}>
            <div>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  fontSize: { xs: "28px", sm: "52px", lg: "64px", xl: "64px" },
                  fontWeight: 700,
                  lineHeight: {
                    xs: "30px",
                    sm: "65px",
                    lg: "auto",
                    xl: "auto",
                  },
                  textAlign: "center",
                  color: "#0A1411",
                  padding: {
                    xs: "5% 0% 0% 0%",
                    sm: "8% 10% 0% 10%",
                    lg: "100px 100px 40px 100px",
                    xl: "187px 289px 40px 289px",
                  },
                }}
              >
                {post.data.profile_title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  fontSize: { xs: "14px", sm: "18px", lg: "22px", xl: "22px" },
                  fontWeight: 400,
                  lineHeight: {
                    xs: "16px",
                    sm: "25px",
                    lg: "33px",
                    xl: "33px",
                  },
                  textAlign: "center",
                  color: "#4D5053",
                  padding: {
                    xs: "2% 5%",
                    sm: "2% 10%",
                    lg: "0px 100px 30px 100px",
                    xl: "0px 280px 30px 280px",
                  },
                }}
              >
                {post.data.profile_description}
              </Typography>
            </div>
            <Grid container spacing={2}>
              <Grid
                item
                xl={12}
                lg={12}
                xs={12}
                sm={12}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    sm: "repeat(3, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)",
                    xl: "repeat(4, 1fr)",
                  },
                  textAlign: "center",
                  gap: "3%",
                  margin: {
                    xs: "0%",
                    sm: "0%",
                    lg: "",
                    xl: "0px 360px 304px 360px",
                  },
                }}
              >
                {personCards.map((person, index) => (
                  <Grid
                    key={person.id}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {flippedStates[index] ? (
                      <Grid
                        sx={{
                          background: "#FFFFFF",
                          width: dimensions.width,
                          height: dimensions.height,
                          borderRadius: "25px",
                        }}
                        onClick={() => handleFlipCard(index)}
                      >
                        <div>
                          <Typography
                            sx={{
                              ...designerNameStyle,
                              fontSize: profileNameFontSize.fontSize,
                              paddingTop: {
                                xs: "50px",
                                sm: "70px",
                                lg: "70px",
                                xl: "70px",
                              },
                            }}
                          >
                            {person.name}
                          </Typography>
                          <Typography
                            sx={{
                              ...designerDetailsStyle,
                              fontSize: profileDetailsFontSize.fontSize,
                            }}
                          >
                            {person.details}
                          </Typography>
                          <Grid
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              paddingTop: {
                                xs: "20px",
                                sm: "30px",
                                lg: "65px",
                                xl: "65px",
                              },
                              justifyContent: "space-evenly",
                            }}
                          >
                            <PrismicNextLink field={person.facebookLink}>
                              {leCarePage[0]?.data.facebook_icon && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={
                                    leCarePage[0]?.data.facebook_icon.url ||
                                    undefined
                                  }
                                  alt={
                                    leCarePage[0]?.data.facebook_icon.alt ||
                                    "Image"
                                  }
                                />
                              )}
                            </PrismicNextLink>
                            <PrismicNextLink field={person.twitterLink}>
                              {leCarePage[0]?.data.twitter_icon && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={
                                    leCarePage[0]?.data.twitter_icon.url ||
                                    undefined
                                  }
                                  alt={
                                    leCarePage[0]?.data.twitter_icon.alt ||
                                    "Image"
                                  }
                                />
                              )}
                            </PrismicNextLink>
                            <PrismicNextLink field={person.linkedinLink}>
                              {leCarePage[0]?.data.linkedin_icon && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={
                                    leCarePage[0]?.data.linkedin_icon.url ||
                                    undefined
                                  }
                                  alt={
                                    leCarePage[0]?.data.linkedin_icon.alt ||
                                    "Image"
                                  }
                                />
                              )}
                            </PrismicNextLink>
                            <PrismicNextLink field={person.instagramLink}>
                              {leCarePage[0]?.data.instagram_icon && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={
                                    leCarePage[0]?.data.instagram_icon.url ||
                                    undefined
                                  }
                                  alt={
                                    leCarePage[0]?.data.instagram_icon.alt ||
                                    "Image"
                                  }
                                />
                              )}
                            </PrismicNextLink>
                          </Grid>
                          <Typography
                            sx={{
                              ...designerDetailsStyle,
                              fontSize: profileDetailsFontSize.fontSize,
                              paddingTop: {
                                xs: "20px",
                                sm: "30px",
                                lg: "65px",
                                xl: "65px",
                              },
                            }}
                          >
                            {person.phone}
                          </Typography>
                          <Typography
                            sx={{
                              ...designerDetailsStyle,
                              fontSize: profileDetailsFontSize.fontSize,
                            }}
                          >
                            {person.email}
                          </Typography>
                        </div>
                      </Grid>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={person.profile || undefined}
                        alt={person.name || "Image"}
                        style={{
                          width: dimensions.width,
                          height: dimensions.height,
                        }}
                        onClick={() => handleFlipCard(index)}
                      />
                    )}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
      </div>

      <div
        style={{
          backgroundImage: `url(${bottomBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "auto",
          width: "100%",
        }}
      >
        {leCarePage.map((post: any) => (
          <>
            <div>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  fontSize: { xs: "35px", sm: "48px", lg: "64px", xl: "64px" },
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
                    xs: "150px 0px 0px 0px",
                    sm: "100px 0px 0px 0px",
                    lg: "100px 150px 8px 150px",
                    xl: "0px 300px 8px 300px",
                  },
                }}
              >
                {post.data.bottom_title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  fontSize: { xs: "16px", sm: "18px", lg: "22px", xl: "22px" },
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
                    lg: "20px 80px 157px 80px",
                    xl: "0px 480px 157px 480px",
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
                    xl: "0px 112px 177px 112px",
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
                              lg: "36px",
                              xl: "36px",
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
                            lg: "24px",
                            xl: "24px",
                          },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: { lg: "", xl: "14px 21px 148px 32px" },
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
                              lg: "36px",
                              xl: "36px",
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
                            lg: "24px",
                            xl: "24px",
                          },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: { lg: "", xl: "14px 21px 148px 32px" },
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
                              lg: "36px",
                              xl: "36px",
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
                            lg: "24px",
                            xl: "24px",
                          },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: { lg: "", xl: "14px 21px 148px 32px" },
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
                              lg: "36px",
                              xl: "36px",
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
                            lg: "24px",
                            xl: "24px",
                          },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: { lg: "", xl: "14px 21px 148px 32px" },
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

export default LecarechezMargueriteServices;
