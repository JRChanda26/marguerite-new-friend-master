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
} from "@mui/material";
import Liberez from "../mainpage/Liberez";
import Footer from "../mainpage/Footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { PrismicNextLink } from "@prismicio/next";
import Header from "../mainpage/Header";

const LecarechezMargueriteServices: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType(
        "soinschezmarguerite" as any
      );
      setPosts(response);
    };

    fetchPosts();
  }, []);
  const backgroundImage = posts[0]?.data?.headerbackground?.url || "";
  const contentbackground = posts[0]?.data?.contentbackground?.url || "";
  const backgroundpeople = posts[0]?.data?.backgroundpeople?.url || "";
  const lastbackground = posts[0]?.data?.lastbackground?.url || "";
  const [person1, setPerson1] = useState(false);
  const [person2, setPerson2] = useState(false);
  const [person3, setPerson3] = useState(false);
  const [person4, setPerson4] = useState(false);
  const handleChangePerson1 = () => {
    setPerson1(!person1);
  };
  const handleChangePerson2 = () => {
    setPerson2(!person2);
  };
  const handleChangePerson3 = () => {
    setPerson3(!person3);
  };
  const handleChangePerson4 = () => {
    setPerson4(!person4);
  };

  const [clicked1, setClicked1] = useState<number | null>(null);
  const handleColor1 = (index: number) => {
    setClicked1(index);
  };

  const [posts1, setPosts1] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType(
        "managementbycare" as any
      );
      setPosts1(response);
    };

    fetchPosts();
  }, []);

  const faqs = [
    { question: posts1[0]?.data.question1, answer: posts1[0]?.data.answer1 },
    { question: posts1[0]?.data.question2, answer: posts1[0]?.data.answer2 },
    { question: posts1[0]?.data.question3, answer: posts1[0]?.data.answer3 },
    { question: posts1[0]?.data.question4, answer: posts1[0]?.data.answer4 },
    { question: posts1[0]?.data.question5, answer: posts1[0]?.data.answer5 },
    { question: posts1[0]?.data.question6, answer: posts1[0]?.data.answer6 },
  ];

  const videoUrl = posts1[0]?.data.video?.url;

  const [posts2, setPost2] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("contact" as any);
      setPost2(response);
    };
    fetchPosts();
  }, []);

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
    fontFamily: "'Jost', sans-serif",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "27px",
    letterSpacing: "1%",
    textAlign: "center",
    color: "#292F36",
  };

  const socialLinks = [
    {
      platform: "facebook",
      link: posts2[0]?.data.facebook_link,
      icon: posts2[0]?.data.facebook,
    },
    {
      platform: "twitter",
      link: posts2[0]?.data.twitter_link,
      icon: posts2[0]?.data.twitter,
    },
    {
      platform: "linkedin",
      link: posts2[0]?.data.linkedin_link,
      icon: posts2[0]?.data.linked_in,
    },
    {
      platform: "instagram",
      link: posts2[0]?.data.instagram_link,
      icon: posts2[0]?.data.instagram,
    },
  ];

  return (
    <Box>
      <Header />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // width: "100%",
          // height: "603.67px",
        }}
      >
        {posts.map((post: any, postIndex: number) => (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                padding: "250.67px 60px 0px 60px",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "37px 37px 0px 0px",
                  // padding: "41px 152px 42px 152px",
                  padding: "2%",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Mulish, sans-serif",
                    color: "#0A1411",
                    fontWeight: 400,
                    // fontSize: "50px",
                    // lineHeight: "62.5px",
                    fontSize: { xs: "25px", sm: "40px", lg: "50px" },
                    lineHeight: { xs: "40px", sm: "48px", lg: "62.5px" },
                  }}
                >
                  {post.data.headertext}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Jost, sans-serif",
                    color: "#4D5053",
                    fontWeight: 400,
                    // fontSize: "22px",
                    // lineHeight: "33px",
                    fontSize: { xs: "12px", sm: "18px", lg: "22px" },
                    lineHeight: { xs: "20px", sm: "28px", lg: "33px" },
                  }}
                >
                  {post.data.content}
                </Typography>
              </div>
            </div>
          </>
        ))}
      </div>

      <Grid
        sx={{
          textAlign: "center",
          padding: "2% 5%",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Mulish",
            color: "#24535C",
            fontWeight: 400,
            fontSize: { xs: "28px", sm: "38px", lg: "48px" },
            lineHeight: { xs: "30px", sm: "45px", lg: "60px" },
          }}
        >
          {posts[0]?.data.heading}
        </Typography>
      </Grid>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            backgroundImage: `url(${contentbackground})`,
            backgroundSize: "cover",
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
            flexDirection: "column",
          }}
        >
          {posts.map((post: any, postIndex: number) => (
            <>
              <div>
                {posts[0]?.data.comma_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={posts[0]?.data.comma_image.url || undefined}
                    alt={posts[0]?.data.comma_image.alt || "Image"}
                    width="100%"
                    height="auto"
                  />
                )}
              </div>
              <div>
                <Typography
                  sx={{
                    fontFamily: "Jenna Sue, sans-serif",
                    color: "#0A1411",
                    fontWeight: 400,
                    // fontSize: "48px",
                    fontSize: { xs: "28px", sm: "38px", lg: "48px" },
                    // lineHeight: "60px",
                    lineHeight: { xs: "30px", sm: "45px", lg: "60px" },
                    textAlign: "center",
                    // padding: "0px 80px 0px 80px",
                    padding: { xs: "8% 15%", sm: "39% 12%", lg: "42% 18%" },
                  }}
                >
                  {post.data.excellence}
                </Typography>
              </div>
              <div>
                <Typography
                  sx={{
                    fontFamily: "Mulish, sans-serif",
                    color: "#0A1411",
                    fontWeight: 400,
                    // fontSize: "25px",
                    fontSize: { xs: "14px", sm: "18px", lg: "25px" },
                    // lineHeight: "37.5px",
                    lineHeight: { xs: "18px", sm: "25px", lg: "37.5px" },
                    textAlign: "center",
                  }}
                >
                  {post.data.boxcontent}
                </Typography>
              </div>
            </>
          ))}
        </div>
      </Box>
      <div style={{ padding: "7%" }}>
        {posts.map((post: any, postIndex: number) => (
          <Grid container spacing={2} key={post}>
            <Grid
              item
              lg={12}
              sx={{
                display: "flex",
                // flexDirection: "row",
                flexDirection: { xs: "column", sm: "row", lg: "row" },
                justifyContent: "center",
                gap: "30px",
              }}
            >
              <Grid item lg={5} xs={12} sm={7}>
                <Typography
                  sx={{
                    // fontSize: "50px",
                    fontSize: { xs: "30px", sm: "40px", lg: "50px" },
                    fontWeight: 600,
                    // lineHeight: "62.5px",
                    lineHeight: { xs: "35px", sm: "48px", lg: "62.5px" },
                  }}
                >
                  {post.data.leftheader}
                </Typography>
                <Typography
                  sx={{
                    // fontSize: "22px",
                    fontSize: { xs: "12px", sm: "18px", lg: "24px" },
                    fontWeight: 400,
                    // lineHeight: "33px",
                    lineHeight: { xs: "18px", sm: "25px", lg: "30.12px" },
                    paddingTop: "23px",
                  }}
                >
                  {post.data.leftcontent}
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
                {posts[0]?.data.bodyrightimage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={posts[0]?.data.bodyrightimage.url || undefined}
                    alt={posts[0]?.data.bodyrightimage.alt || "Image"}
                    width="100%"
                    height="auto"
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>

      <Grid item lg={12}>
        <Typography
          sx={{
            textAlign: "center",
            color: "#292F36",
            // fontSize: "50px",
            fontSize: { xs: "30px", sm: "40px", lg: "50px" },
            fontWeight: 400,
            marginTop: "50PX",
          }}
        >
          {posts1[0]?.data.title2}
        </Typography>
        <Grid
          item
          lg={12}
          sx={{
            display: "flex",
            // flexDirection: "row",
            flexDirection: { xs: "column", sm: "row", lg: "row" },
            justifyContent: "space-evenly",
            marginTop: "50px",
            gap: "50px",
            padding: "2% 5%",
          }}
        >
          <Grid
            item
            xs={12}
            sm={12}
            lg={5}
            sx={{ marginTop: { xs: "0px", sm: "40px", lg: "0px" } }}
          >
            {videoUrl ? (
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
            )}
          </Grid>
          <Grid
            item
            lg={5}
            sx={{
              // marginTop: "100px",
              // height: "300px",
              height: { xs: "300px", sm: "300px", lg: "400px" },
              overflowY: "auto",
              scrollbarWidth: "thin",
            }}
          >
            {faqs.slice(3, 6).map((faq, index) => (
              <div key={index}>
                <Accordion
                  style={{
                    backgroundColor: "transparent",
                    boxShadow: "none",
                  }}
                >
                  <AccordionSummary expandIcon={<KeyboardArrowUpIcon />}>
                    <Typography
                      onClick={() => handleColor1(index)}
                      sx={{
                        color: clicked1 === index ? "#3D8C6E" : "#292F36",
                        // fontSize: "25px",
                        fontSize: { xs: "18px", sm: "25px", lg: "28px" },
                        fontWeight: 400,
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
                        fontSize: { xs: "14px", sm: "20px", lg: "20px" },
                        fontWeight: 400,
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
            paddingTop: "10%",
          }}
        >
          <div>{posts[0]?.data.notre_title}</div>
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
            padding: "5% 10%",
          }}
        >
          <div>{posts[0]?.data.notre_description}</div>
        </Grid>
        {posts.map((post: any, postIndex: number) => (
          <Grid container spacing={2} key={post}>
            <Grid
              item
              lg={12}
              sx={{
                display: "flex",
                // flexDirection: "row",
                flexDirection: { xs: "column", sm: "row", lg: "row" },
                justifyContent: "space-evenly",
                // paddingTop: "100px",
                gap: "50px",
              }}
            >
              {/* <Grid item lg={3}>
                <Typography
                  style={{
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "25px",
                    fontWeight: 700,
                    lineHeight: "31.25px",
                    textAlign: "center",
                    color: "#292F36",
                  }}
                >
                  {post.data.missionheader}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "22px",
                    fontWeight: 400,
                    lineHeight: "33px",
                    textAlign: "center",
                    padding: "20px 0px 0px 0px",
                    color: "#4D5053",
                  }}
                >
                  {post.data.missioncontent}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "52px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      fontFamily: "Mulish, sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      lineHeight: "22.5px",
                      textAlign: "center",
                      color: "#4D5053",
                      textTransform: "none",
                    }}
                  >
                    {post.data.buttontext}
                  </Button>
                  <img
                    src={post.data.buttonicon?.url || ""}
                    alt={post.data.buttonicon?.alt || "icon"}
                    style={{
                      width: "15.14px",
                      height: "13.18px",
                      paddingLeft: "26.02px",
                    }}
                  />
                </div>
              </Grid>
              <Grid item lg={3}>
                <Typography
                  style={{
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "25px",
                    fontWeight: 700,
                    lineHeight: "31.25px",
                    textAlign: "center",
                    color: "#292F36",
                  }}
                >
                  {post.data.vissionheader}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Mulish, sans-serif",
                    fontSize: "22px",
                    fontWeight: 400,
                    lineHeight: "33px",
                    textAlign: "center",
                    // padding: "20px",
                    padding: "20px 0px 0px 0px",
                    color: "#4D5053",
                  }}
                >
                  {post.data.vissioncontent}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "52px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      fontFamily: "Mulish, sans-serif",
                      fontSize: "18px",
                      fontWeight: 600,
                      lineHeight: "22.5px",
                      textAlign: "center",
                      color: "#4D5053",
                      textTransform: "none",
                    }}
                  >
                    {post.data.buttontext}
                  </Button>
                  <img
                    src={post.data.buttonicon?.url || ""}
                    alt={post.data.buttonicon?.alt || "icon"}
                    style={{
                      width: "15.14px",
                      height: "13.18px",
                      paddingLeft: "26.02px",
                    }}
                  />
                </div>
              </Grid>
              <Grid item lg={3}>
                <div style={{ paddingTop: "10px" }}>
                  <Typography
                    style={{
                      fontFamily: "Mulish, sans-serif",
                      fontSize: "25px",
                      fontWeight: 700,
                      lineHeight: "31.25px",
                      textAlign: "center",
                      color: "#292F36",
                    }}
                  >
                    {post.data.valeursheader}
                  </Typography>
                  <Typography
                    style={{
                      fontFamily: "Mulish, sans-serif",
                      fontSize: "22px",
                      fontWeight: 400,
                      lineHeight: "33px",
                      textAlign: "center",
                      // padding:'20px',
                      padding: "20px 0px 0px 0px",
                      color: "#4D5053",
                    }}
                  >
                    {post.data.valeurscontent}
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      paddingTop: "73px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Button
                      style={{
                        fontFamily: "Mulish, sans-serif",
                        fontSize: "18px",
                        fontWeight: 600,
                        lineHeight: "22.5px",
                        textAlign: "center",
                        color: "#4D5053",
                        textTransform: "none",
                      }}
                    >
                      {post.data.buttontext}
                    </Button>
                    <img
                      src={post.data.buttonicon?.url || ""}
                      alt={post.data.buttonicon?.alt || "icon"}
                      style={{
                        width: "15.14px",
                        height: "13.18px",
                        paddingLeft: "26.02px",
                      }}
                    />
                  </div>
                </div>
              </Grid> */}
              <Grid
                item
                lg={3}
                xs={12}
                sm={3.5}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  gap: "40px",
                }}
              >
                {posts[0]?.data.notre_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={posts[0]?.data.notre_image.url || undefined}
                    alt={posts[0]?.data.notre_image.alt || "Image"}
                    width="100%"
                    height="auto"
                  />
                )}
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
                    }}
                  >
                    {post.data.notre_text}
                  </Typography>
                  <Typography
                    sx={{
                      // fontSize: "24px",
                      fontSize: { xs: "24px", sm: "20px", lg: "24px" },
                      color: "#1D1D1D",
                      fontFamily: "Mulish",
                    }}
                  >
                    {post.data.notre_text_description}
                  </Typography>
                </div>
              </Grid>
              <Grid
                item
                lg={3}
                xs={12}
                sm={3.5}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  gap: "50px",
                }}
              >
                {posts[0]?.data.notre_middle_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={posts[0]?.data.notre_middle_image.url || undefined}
                    alt={posts[0]?.data.notre_middle_image.alt || "Image"}
                    width="100%"
                    height="auto"
                  />
                )}
              </Grid>
              <Grid
                item
                lg={3}
                xs={12}
                sm={3.5}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  gap: "40px",
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
                    }}
                  >
                    {post.data.nos_text}
                  </Typography>
                  <Typography
                    sx={{
                      // fontSize: "24px",
                      fontSize: { xs: "24px", sm: "20px", lg: "24px" },
                      color: "#1D1D1D",
                      fontFamily: "Mulish",
                    }}
                  >
                    {post.data.nos_text_description}
                  </Typography>
                </div>
                {posts[0]?.data.nos_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={posts[0]?.data.nos_image.url || undefined}
                    alt={posts[0]?.data.nos_image.alt || "Image"}
                    width="100%"
                    height="auto"
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>

      <div
        style={{
          background: `url(${backgroundpeople})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "auto",
        }}
      >
        {posts.map((post: any, postIndex: number) => (
          <>
            <div>
              <Typography
                sx={{
                  fontFamily: "Mulish, sans-serif",
                  // fontSize: "64px",
                  fontSize: { xs: "38px", sm: "52px", lg: "64px" },
                  fontWeight: 700,
                  // lineHeight: "80.32px",
                  lineHeight: { xs: "45px", sm: "65px", lg: "80.32px" },
                  textAlign: "center",
                  color: "#0A1411",
                  padding: "10%",
                }}
              >
                {post.data.peopleheading}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mulish, sans-serif",
                  // fontSize: "22px",
                  fontSize: { xs: "14px", sm: "18px", lg: "22px" },
                  fontWeight: 400,
                  // lineHeight: "33px",
                  lineHeight: { xs: "18px", sm: "25px", lg: "33px" },
                  textAlign: "center",
                  color: "#4D5053",
                  padding: "5% 10%",
                }}
              >
                {post.data.peoplecontent}
              </Typography>
            </div>
            <Grid
              container
              spacing={2}
              // sx={{
              //   display: "flex",
              //   alignItems: "center",
              //   justifyContent: "center",
              // }}
            >
              <Grid
                item
                lg={12}
                style={{
                  display: "flex",
                  textAlign: "center",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  // padding: "60px 60px 60px 0px",
                }}
                container
                spacing={2}
              >
                <Grid item lg={2}>
                  {person1 ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        height: "433px",
                        width: "283.55px",
                        borderRadius: "30px",
                      }}
                      onClick={handleChangePerson1}
                    >
                      <div>
                        <Typography style={designerNameStyle}>
                          {post.data.designername}
                        </Typography>
                        <Typography style={designerDetailsStyle}>
                          {post.data.designercontent}
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: "65.53px",
                            justifyContent: "space-evenly",
                          }}
                        >
                          {socialLinks.map((social: any, index: any) => (
                            <PrismicNextLink key={index} field={social.link}>
                              {social.icon && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={social.icon.url || undefined}
                                  alt={
                                    social.icon.alt || `${social.platform} icon`
                                  }
                                />
                              )}
                            </PrismicNextLink>
                          ))}
                        </div>
                        <Typography
                          style={{
                            ...designerDetailsStyle,
                            paddingTop: "65px",
                          }}
                        >
                          {post.data.designercontact}
                        </Typography>
                        <Typography style={designerDetailsStyle}>
                          {post.data.designeremail}
                        </Typography>
                      </div>
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.data.person1?.url || ""}
                      alt={post.data.person1?.alt || "icon"}
                      style={{ height: "433px", width: "283.55px" }}
                      onClick={handleChangePerson1}
                    />
                  )}
                </Grid>
                <Grid item lg={2}>
                  {person2 ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        height: "433px",
                        width: "283.55px",
                        borderRadius: "30px",
                      }}
                      onClick={handleChangePerson2}
                    >
                      <div>
                        <Typography style={designerNameStyle}>
                          {post.data.designername}
                        </Typography>
                        <Typography style={designerDetailsStyle}>
                          {post.data.designercontent}
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: "65.53px",
                            justifyContent: "space-evenly",
                          }}
                        >
                          {socialLinks.map((social: any, index: any) => (
                            <PrismicNextLink key={index} field={social.link}>
                              {social.icon && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={social.icon.url || undefined}
                                  alt={
                                    social.icon.alt || `${social.platform} icon`
                                  }
                                />
                              )}
                            </PrismicNextLink>
                          ))}
                        </div>
                        <Typography
                          style={{
                            ...designerDetailsStyle,
                            paddingTop: "65px",
                          }}
                        >
                          {post.data.designercontact}
                        </Typography>
                        <Typography style={designerDetailsStyle}>
                          {post.data.designeremail}
                        </Typography>
                      </div>
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.data.person2?.url || ""}
                      alt={post.data.person2?.alt || "icon"}
                      style={{ width: "283.55px", height: "433px" }}
                      onClick={handleChangePerson2}
                    />
                  )}
                </Grid>
                <Grid item lg={2}>
                  {person3 ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        height: "433px",
                        width: "283.55px",
                        borderRadius: "30px",
                      }}
                      onClick={handleChangePerson3}
                    >
                      <div>
                        <Typography style={designerNameStyle}>
                          {post.data.designername}
                        </Typography>
                        <Typography style={designerDetailsStyle}>
                          {post.data.designercontent}
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: "65.53px",
                            justifyContent: "space-evenly",
                          }}
                        >
                          {socialLinks.map((social: any, index: any) => (
                            <PrismicNextLink key={index} field={social.link}>
                              {social.icon && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={social.icon.url || undefined}
                                  alt={
                                    social.icon.alt || `${social.platform} icon`
                                  }
                                />
                              )}
                            </PrismicNextLink>
                          ))}
                        </div>
                        <Typography
                          style={{
                            ...designerDetailsStyle,
                            paddingTop: "65px",
                          }}
                        >
                          {post.data.designercontact}
                        </Typography>
                        <Typography style={designerDetailsStyle}>
                          {post.data.designeremail}
                        </Typography>
                      </div>
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.data.person3?.url || ""}
                      alt={post.data.person3?.alt || "icon"}
                      style={{ width: "283.55px", height: "433px" }}
                      onClick={handleChangePerson3}
                    />
                  )}
                </Grid>
                <Grid item lg={2}>
                  {person4 ? (
                    <div
                      style={{
                        background: "#FFFFFF",
                        height: "433px",
                        width: "283.55px",
                        borderRadius: "30px",
                      }}
                      onClick={handleChangePerson4}
                    >
                      <div>
                        <Typography style={designerNameStyle}>
                          {post.data.designername}
                        </Typography>
                        <Typography style={designerDetailsStyle}>
                          {post.data.designercontent}
                        </Typography>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingTop: "65.53px",
                            justifyContent: "space-evenly",
                          }}
                        >
                          {socialLinks.map((social: any, index: any) => (
                            <PrismicNextLink key={index} field={social.link}>
                              {social.icon && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={social.icon.url || undefined}
                                  alt={
                                    social.icon.alt || `${social.platform} icon`
                                  }
                                />
                              )}
                            </PrismicNextLink>
                          ))}
                        </div>
                        <Typography
                          style={{
                            ...designerDetailsStyle,
                            paddingTop: "65px",
                          }}
                        >
                          {post.data.designercontact}
                        </Typography>
                        <Typography style={designerDetailsStyle}>
                          {post.data.designeremail}
                        </Typography>
                      </div>
                    </div>
                  ) : (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.data.person4?.url || ""}
                      alt={post.data.person4?.alt || "icon"}
                      style={{ width: "283.55px", height: "433px" }}
                      onClick={handleChangePerson4}
                    />
                  )}
                </Grid>
              </Grid>
            </Grid>
          </>
        ))}
      </div>

      <div>
        {posts.map((post: any, postIndex: number) => (
          <>
            <div>
              <Typography
                sx={{
                  fontFamily: "Mulish, sans-serif",
                  // fontSize: "64px",
                  fontSize: { xs: "35px", sm: "48px", lg: "64px" },
                  fontWeight: 700,
                  // lineHeight: "80.32px",
                  lineHeight: { xs: "50px", sm: "64px", lg: "80.32px" },
                  textAlign: "center",
                  color: "#0A1411",
                  padding: "10% 10% 0% 10%",
                }}
              >
                {post.data.lastheader}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mulish, sans-serif",
                  // fontSize: "22px",
                  fontSize: { xs: "16px", sm: "18px", lg: "22px" },
                  fontWeight: 400,
                  // lineHeight: "33px",
                  lineHeight: { xs: "20px", sm: "25px", lg: "33px" },
                  textAlign: "center",
                  color: "#4D5053",
                  padding: "5% 10%",
                }}
              >
                {post.data.lastcontent}
              </Typography>
            </div>
            <div
              style={{
                backgroundImage: `url(${lastbackground})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                height: "auto",
                width: "100%",
              }}
            >
              <Grid
                container
                spacing={2}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "30px",
                  padding: "50px",
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
                    lg={5}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      padding: "20px 0px 0px 20px",
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
                        {posts[0]?.data.lastlogo1 && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={posts[0]?.data.lastlogo1.url || undefined}
                            alt={posts[0]?.data.lastlogo1.alt || "Image"}
                            style={{
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        )}
                        <Typography
                          sx={{
                            // fontSize: "26px",
                            fontSize: { xs: "15px", sm: "35px", lg: "26px" },
                            fontFamily: "Mulish",
                            fontWeight: 400,
                            color: "#1E1E1E",
                            paddingLeft: "10px",
                          }}
                        >
                          {posts[0]?.data.box1header}
                        </Typography>
                      </div>
                      <Typography
                        sx={{
                          // fontSize: "18px",
                          fontSize: { xs: "12px", sm: "25px", lg: "18px" },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: "20px",
                        }}
                      >
                        {posts[0]?.data.box1content}
                      </Typography>
                    </div>
                    {posts[0]?.data.last_image1 && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={posts[0]?.data.last_image1.url || undefined}
                        alt={posts[0]?.data.last_image1.alt || "Image"}
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
                    lg={5}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      padding: "20px 0px 0px 20px",
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
                        {posts[0]?.data.lastlogo2 && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={posts[0]?.data.lastlogo2.url || undefined}
                            alt={posts[0]?.data.lastlogo2.alt || "Image"}
                            style={{
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        )}
                        <Typography
                          sx={{
                            // fontSize: "26px",
                            fontSize: { xs: "15px", sm: "35px", lg: "26px" },
                            fontFamily: "Mulish",
                            fontWeight: 400,
                            color: "#1E1E1E",
                            paddingLeft: "10px",
                          }}
                        >
                          {posts[0]?.data.box2header}
                        </Typography>
                      </div>
                      <Typography
                        sx={{
                          // fontSize: "18px",
                          fontSize: { xs: "12px", sm: "25px", lg: "18px" },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: "20px",
                        }}
                      >
                        {posts[0]?.data.box2content}
                      </Typography>
                    </div>
                    {posts[0]?.data.last_image2 && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={posts[0]?.data.last_image2.url || undefined}
                        alt={posts[0]?.data.last_image2.alt || "Image"}
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
                    lg={5}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      padding: "20px 0px 0px 20px",
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
                        {posts[0]?.data.lastlogo3 && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={posts[0]?.data.lastlogo3.url || undefined}
                            alt={posts[0]?.data.lastlogo3.alt || "Image"}
                            style={{
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        )}
                        <Typography
                          sx={{
                            // fontSize: "26px",
                            fontSize: { xs: "15px", sm: "35px", lg: "26px" },
                            fontFamily: "Mulish",
                            fontWeight: 400,
                            color: "#1E1E1E",
                            paddingLeft: "10px",
                          }}
                        >
                          {posts[0]?.data.box3header}
                        </Typography>
                      </div>
                      <Typography
                        sx={{
                          // fontSize: "18px",
                          fontSize: { xs: "12px", sm: "25px", lg: "18px" },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: "20px",
                        }}
                      >
                        {posts[0]?.data.box3content}
                      </Typography>
                    </div>
                    {posts[0]?.data.last_image3 && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={posts[0]?.data.last_image3.url || undefined}
                        alt={posts[0]?.data.last_image3.alt || "Image"}
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
                    lg={5}
                    style={{
                      background: "#FFFFFF",
                      borderRadius: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      flexDirection: "row",
                      padding: "20px 0px 0px 20px",
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
                        {posts[0]?.data.lastlogo4 && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={posts[0]?.data.lastlogo4.url || undefined}
                            alt={posts[0]?.data.lastlogo4.alt || "Image"}
                            style={{
                              width: "30px",
                              height: "30px",
                            }}
                          />
                        )}
                        <Typography
                          sx={{
                            // fontSize: "26px",
                            fontSize: { xs: "15px", sm: "35px", lg: "26px" },
                            fontFamily: "Mulish",
                            fontWeight: 400,
                            color: "#1E1E1E",
                            paddingLeft: "10px",
                          }}
                        >
                          {posts[0]?.data.box4header}
                        </Typography>
                      </div>
                      <Typography
                        sx={{
                          // fontSize: "18px",
                          fontSize: { xs: "12px", sm: "25px", lg: "18px" },
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop: "20px",
                        }}
                      >
                        {posts[0]?.data.box4content}
                      </Typography>
                    </div>
                    {posts[0]?.data.last_image4 && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={posts[0]?.data.last_image4.url || undefined}
                        alt={posts[0]?.data.last_image4.alt || "Image"}
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
