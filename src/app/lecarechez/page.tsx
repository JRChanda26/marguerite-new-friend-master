"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
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
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("le_care_chez" as any);
      setLeCarePage(response);
    };

    fetchPosts();
  }, []);

  const [modulesPage, setModulesPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType(
        "interactive_learning_modules" as any
      );
      setModulesPage(response);
    };
    fetchPosts();
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
    fontFamily: "'DM Serif Display', serif",
    fontWeight: 400,
    fontSize: "25px",
    lineHeight: "37.5px",
    letterSpacing: "1%",
    textAlign: "center",
    color: "#292F36",
    paddingTop: "70px",
  };

  const designerDetailsStyle: React.CSSProperties = {
    fontFamily: "Jost",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "150%",
    letterSpacing: "1%",
    textAlign: "center",
    color: "#4D5053",
  };

  const isLg = useMediaQuery("(max-width:1200px)");
  const isMd = useMediaQuery("(max-width:992px)");
  const isSm = useMediaQuery("(max-width:768px)");
  const isXs = useMediaQuery("(max-width:576px)");

  const getDimensions = () => {
    if (isXs) return { width: "200px", height: "350px" };
    if (isSm) return { width: "200px", height: "350px" };
    if (isMd) return { width: "250px", height: "400px" };
    if (isLg) return { width: "283.55px", height: "433px" };
    return { width: "283.55px", height: "433px" }; // Default for larger screens
  };

  const dimensions = getDimensions();

  return (
    <Box>
      <Header />
      <div
        style={{
          backgroundImage: `url(${headerBackground})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // width: "100%",
          // height: "603.67px",
        }}
      >
        {leCarePage.map((post: any, postIndex: number) => (
          <>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                padding: {
                  xs: "250.67px 0px 0px 0px",
                  sm: "250.67px 150px 0px 150px",
                  lg: "352px 441px 0px 441px",
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
                  borderRadius: "37px 37px 0px 0px",
                  // padding: "41px 152px 42px 152px",
                  padding: {
                    xs: "2% 5%",
                    sm: "2% 5%",
                    lg: "41px 132px 42px 132px",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "DM Serif Display",
                    color: "#292F36",
                    fontWeight: 700,
                    // fontSize: "50px",
                    fontSize: { xs: "25px", sm: "40px", lg: "50px" },
                    // lineHeight: "62.5px",
                    lineHeight: { xs: "40px", sm: "48px", lg: "125%" },
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
                    // fontSize: "22px",
                    fontSize: { xs: "12px", sm: "18px", lg: "22px" },
                    // lineHeight: "33px",
                    lineHeight: { xs: "20px", sm: "28px", lg: "150%" },
                    letterSpacing: "1%",
                  }}
                >
                  {post.data.sub_heading}
                </Typography>
              </Grid>
            </Grid>
          </>
        ))}
      </div>

      <Grid
        sx={{
          textAlign: "center",
          padding: { lg: "92px 254px 168px 254px" },
        }}
      >
        <Typography
          sx={{
            fontFamily: "Mulish",
            color: "#24535C",
            fontWeight: 400,
            fontSize: { xs: "28px", sm: "38px", lg: "48px" },
            lineHeight: { xs: "30px", sm: "45px", lg: "auto" },
            // marginTop: "5%",
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
            // backgroundSize: "cover",
            backgroundSize: { xs: "contain", sm: "contain", lg: "contain" },
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // marginTop: "10%",
            margin: { xs: "10%", sm: "10%", lg: "107px 525px" },
            flexDirection: "column",
          }}
        >
          {leCarePage.map((post: any, postIndex: number) => (
            <>
              <Grid
                sx={{
                  padding: { lg: "67px 0px 27px 0px" },
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
                    fontSize: { xs: "28px", sm: "38px", lg: "48px" },
                    lineHeight: { xs: "30px", sm: "45px", lg: "125%" },
                    textAlign: "center",
                    padding: {
                      xs: "12%",
                      sm: "12%",
                      lg: "27px 62px 34px 62px",
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
                    fontSize: { xs: "14px", sm: "18px", lg: "25px" },
                    lineHeight: { xs: "18px", sm: "25px", lg: "150%" },
                    textAlign: "center",
                    letterSpacing: "1%",
                    padding: { lg: "0px 195px 168px 195px" },
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
        sx={{ padding: { xs: "7%", sm: "7%", lg: "200px 368px 229px 368px" } }}
      >
        {leCarePage.map((post: any) => (
          <Grid container spacing={2} key={post}>
            <Grid
              item
              lg={12}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row", lg: "row" },
                justifyContent: "center",
                gap: "206px",
                alignItems: "center",
              }}
            >
              <Grid item lg={5} xs={12} sm={7}>
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    fontWeight: 700,
                    fontSize: { xs: "30px", sm: "40px", lg: "50px" },
                    lineHeight: { xs: "35px", sm: "48px", lg: "125%" },
                    color: "#292F36",
                    letterSpacing: "2%",
                  }}
                >
                  {post.data.top_left_title}
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "18px", lg: "22px" },
                    fontWeight: 400,
                    lineHeight: { xs: "18px", sm: "25px", lg: "150%px" },
                    paddingTop: "23px",
                    fontFamily: "Mulish",
                    color: "#4D5053",
                  }}
                >
                  {post.data.top_left_description}
                </Typography>
              </Grid>
              <Grid
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
          padding: { lg: "0px 363px 229px 363px" },
        }}
      >
        <Grid item lg={12}>
          <Typography
            sx={{
              textAlign: "center",
              color: "#292F36",
              // fontSize: "50px",
              fontSize: { xs: "30px", sm: "40px", lg: "50px" },
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
              flexDirection: { xs: "column", sm: "row", lg: "row" },
              justifyContent: "space-evenly",
              marginTop: "50px",
              alignItems: "center",
              gap: { lg: "60px" },
            }}
          >
            <Grid
              item
              xs={12}
              sm={5}
              lg={6}
              // sx={{ marginTop: { xs: "0px", sm: "80px", lg: "20px" } }}
            >
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
              sx={{
                height: { xs: "0px", sm: "400px", lg: "450px" },
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
                          fontSize: { xs: "18px", sm: "22px", lg: "25px" },
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
                          // fontSize: "22px",
                          fontSize: { xs: "14px", sm: "18px", lg: "22px" },
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
            // fontSize: "64px",
            fontSize: { xs: "38px", sm: "50px", lg: "64px" },
            fontFamily: "Mulish",
            fontWeight: 700,
            color: "1D1D1D",
            // paddingTop: "5%",
          }}
        >
          <div>{leCarePage[0]?.data.mission_title}</div>
        </Grid>
        <Grid
          item
          lg={12}
          sx={{
            textAlign: "center",
            // fontSize: "36px",
            fontSize: { xs: "18px", sm: "25px", lg: "36px" },
            fontFamily: "Mulish",
            color: "1D1D1D",
            // padding: "5% 10%",
            padding: { lg: "20px 457px 143px 457px" },
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
                // flexDirection: "row",
                flexDirection: { xs: "column", sm: "row", lg: "row" },
                justifyContent: "space-evenly",
                // paddingTop: "100px",
                gap: "20px",
                padding: { lg: "0px 195px 229px 195px" },
              }}
            >
              <Grid
                item
                lg={4}
                xs={12}
                sm={3.5}
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
                      // fontSize: "50px",
                      fontSize: { xs: "50px", sm: "40px", lg: "50px" },
                      color: "#1D1D1D",
                      fontFamily: "Mulish",
                      lineHeight: "125%",
                      letterSpacing: "0%",
                      padding: { lg: "85px 49px 24px 49px" },
                    }}
                  >
                    {post.data.mission_left_title}
                  </Typography>
                  <Typography
                    sx={{
                      // fontSize: "24px",
                      fontSize: { xs: "24px", sm: "20px", lg: "24px" },
                      color: "#1D1D1D",
                      fontFamily: "Mulish",
                      lineHeight: "30px",
                      letterSpacing: "0%",
                      padding: { lg: "0px 49px 80px 49px" },
                    }}
                  >
                    {post.data.mission_left_description}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                lg={4}
                xs={12}
                sm={3.5}
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
                    width="100%"
                    height="auto"
                  />
                )}
              </Grid>
              <Grid
                item
                lg={4}
                xs={12}
                sm={3.5}
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
                      // fontSize: "50px",
                      fontSize: { xs: "50px", sm: "40px", lg: "50px" },
                      color: "#1D1D1D",
                      fontFamily: "Mulish",
                      lineHeight: "125%",
                      letterSpacing: "0%",
                      padding: { lg: "28px 49px 24px 49px" },
                    }}
                  >
                    {post.data.mission_right_title}
                  </Typography>
                  <Typography
                    sx={{
                      // fontSize: "24px",
                      fontSize: { xs: "24px", sm: "20px", lg: "24px" },
                      color: "#1D1D1D",
                      fontFamily: "Mulish",
                      lineHeight: "30px",
                      letterSpacing: "0%",
                      padding: { lg: "0px 20px 40px 49px" },
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
                    width="100%"
                    height="62%"
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
                  fontSize: { xs: "38px", sm: "52px", lg: "64px" },
                  fontWeight: 700,
                  lineHeight: { xs: "45px", sm: "65px", lg: "auto" },
                  textAlign: "center",
                  color: "#0A1411",
                  padding: {
                    xs: "8% 10% 0% 10%",
                    sm: "8% 10% 0% 10%",
                    lg: "187px 289px 40px 289px",
                  },
                }}
              >
                {post.data.profile_title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  fontSize: { xs: "14px", sm: "18px", lg: "22px" },
                  fontWeight: 400,
                  lineHeight: { xs: "18px", sm: "25px", lg: "33px" },
                  textAlign: "center",
                  color: "#4D5053",
                  padding: {
                    xs: "2% 10%",
                    sm: "2% 10%",
                    lg: "0px 280px 30px 280px",
                  },
                }}
              >
                {post.data.profile_description}
              </Typography>
            </div>
            <Grid container spacing={2}>
              <Grid
                item
                lg={12}
                xs={12}
                sm={12}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(1, 1fr)",
                    sm: "repeat(3, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)",
                  },
                  // gridTemplateRows: "repeat(2, auto)",
                  textAlign: "center",
                  gap: "3%",
                  margin: { xs: "0%", sm: "0%", lg: "0px 360px 304px 360px" },
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
                          // height: "433px",
                          // width: "283.55px",
                          width: dimensions.width,
                          height: dimensions.height,
                          borderRadius: "30px",
                        }}
                        onClick={() => handleFlipCard(index)}
                      >
                        <div>
                          <Typography style={designerNameStyle}>
                            {person.name}
                          </Typography>
                          <Typography style={designerDetailsStyle}>
                            {person.details}
                          </Typography>
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              paddingTop: "65.53px",
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
                          </div>
                          <Typography
                            style={{
                              ...designerDetailsStyle,
                              paddingTop: "65px",
                            }}
                          >
                            {person.phone}
                          </Typography>
                          <Typography style={designerDetailsStyle}>
                            {person.email}
                          </Typography>
                        </div>
                      </Grid>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={person.profile || undefined}
                        alt={person.name || "Image"}
                        // style={{ width: "283.55px", height: "433px" }}
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
        {leCarePage.map((post: any, postIndex: number) => (
          <>
            <div>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  // fontSize: "64px",
                  fontSize: { xs: "35px", sm: "48px", lg: "64px" },
                  fontWeight: 700,
                  // lineHeight: "80.32px",
                  lineHeight: { xs: "50px", sm: "64px", lg: "auto" },
                  textAlign: "center",
                  color: "#0A1411",
                  // padding: "10% 10% 0% 10%",
                  margin: { xs: "600px", sm: "0px", lg: "0px 300px 8px 300px" },
                }}
              >
                {post.data.bottom_title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  // fontSize: "22px",
                  fontSize: { xs: "16px", sm: "18px", lg: "22px" },
                  fontWeight: 400,
                  // lineHeight: "33px",
                  lineHeight: { xs: "20px", sm: "25px", lg: "33px" },
                  textAlign: "center",
                  color: "#4D5053",
                  // padding: "5% 10%",
                  margin: {
                    xs: "5% 10%",
                    sm: "5% 10%",
                    lg: "0px 480px 157px 480px",
                  },
                }}
              >
                {post.data.bottom_description}
              </Typography>
            </div>
            <div
              style={
                {
                  // backgroundImage: `url(${bottomBackground})`,
                  // backgroundSize: "cover",
                  // backgroundPosition: "center",
                  // backgroundRepeat: "no-repeat",
                  // height: "auto",
                  // width: "100%",
                }
              }
            >
              <Grid
                container
                spacing={2}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  padding: { lg: "0px 112px 177px 112px" },
                }}
              >
                <Grid
                  item
                  lg={12}
                  sx={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    // alignItems: "center",
                    // gap: "50px",
                    // padding: "80px",
                    gap: "30px",
                    flexDirection: { xs: "column", sm: "column", lg: "row" },
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
                        // lg: "57px 0px 10px 32px",
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
                            // style={{
                            //   width: "30px",
                            //   height: "30px",
                            // }}
                          />
                        )}
                        <Typography
                          sx={{
                            // fontSize: "26px",
                            fontSize: { xs: "15px", sm: "35px", lg: "36px" },
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
                          // fontSize: "18px",
                          fontSize: { xs: "12px", sm: "25px", lg: "24px" },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: { lg: "14px 21px 148px 32px" },
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
                            // style={{
                            //   width: "30px",
                            //   height: "30px",
                            // }}
                          />
                        )}
                        <Typography
                          sx={{
                            // fontSize: "26px",
                            fontSize: { xs: "15px", sm: "35px", lg: "36px" },
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
                          // fontSize: "18px",
                          fontSize: { xs: "12px", sm: "25px", lg: "24px" },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: { lg: "14px 21px 148px 32px" },
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
                    // padding: "80px",
                    flexDirection: { xs: "column", sm: "column", lg: "row" },
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
                            // style={{
                            //   width: "30px",
                            //   height: "30px",
                            // }}
                          />
                        )}
                        <Typography
                          sx={{
                            // fontSize: "26px",
                            fontSize: { xs: "15px", sm: "35px", lg: "36px" },
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
                          // fontSize: "18px",
                          fontSize: { xs: "12px", sm: "25px", lg: "24px" },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: { lg: "14px 21px 148px 32px" },
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
                            // style={{
                            //   width: "30px",
                            //   height: "30px",
                            // }}
                          />
                        )}
                        <Typography
                          sx={{
                            // fontSize: "26px",
                            fontSize: { xs: "15px", sm: "35px", lg: "36px" },
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
                          // fontSize: "18px",
                          fontSize: { xs: "12px", sm: "25px", lg: "24px" },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: { lg: "14px 21px 148px 32px" },
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
