"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import Liberez from "../mainpage/Liberez";
import Footer from "../mainpage/Footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { PrismicNextLink } from "@prismicio/next";

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
      link: posts2[0]?.data.linked_in_link,
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
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          width: "100%",
          height: "603.67px",
        }}
      >
        {posts.map((post: any, postIndex: number) => (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "425.67px",
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
                  padding: "41px 152px 42px 152px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Mulish, sans-serif",
                    color: "#0A1411",
                    fontWeight: 400,
                    fontSize: "50px",
                    lineHeight: "62.5px",
                  }}
                >
                  {post.data.headertext}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Jost, sans-serif",
                    color: "#4D5053",
                    fontWeight: 400,
                    fontSize: "22px",
                    lineHeight: "33px",
                  }}
                >
                  {post.data.content}
                </Typography>
              </div>
            </div>
          </>
        ))}
      </div>

      <Grid item lg={12}>
        <div></div>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/*  */}
        <div
          style={{
            backgroundImage: `url(${contentbackground})`,
            backgroundSize: "cover",
            width: "875.5px",
            height: "440px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "209.87px",
            flexDirection: "column",
          }}
        >
          {posts.map((post: any, postIndex: number) => (
            <>
              <div>
                <Typography
                  style={{
                    fontFamily: "Mulish, sans-serif",
                    color: "#0A1411",
                    fontWeight: 400,
                    fontSize: "85px",
                    lineHeight: "106.25px",
                    textAlign: "center",
                    // padding:'67px 67px 0px 67px',
                    fontStyle: "italic",
                  }}
                >
                  {post.data.comma}
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    fontFamily: "Jenna Sue, sans-serif",
                    color: "#0A1411",
                    fontWeight: 400,
                    fontSize: "48px",
                    lineHeight: "60px",
                    textAlign: "center",
                    padding: "0px 80px 0px 80px",
                  }}
                >
                  {post.data.excellence}
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    fontFamily: "Mulish, sans-serif",
                    color: "#0A1411",
                    fontWeight: 400,
                    fontSize: "25px",
                    lineHeight: "37.5px",
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
      <div style={{ paddingTop: "209.87px" }}>
        {posts.map((post: any, postIndex: number) => (
          <Grid container spacing={2} key={post}>
            <Grid
              item
              lg={12}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Grid item lg={4}>
                <Typography
                  style={{
                    fontSize: "50px",
                    fontWeight: 600,
                    lineHeight: "62.5px",
                  }}
                >
                  {post.data.leftheader}
                </Typography>
                <Typography
                  style={{
                    fontSize: "22px",
                    fontWeight: 400,
                    lineHeight: "33px",
                    paddingTop: "23px",
                  }}
                >
                  {post.data.leftcontent}
                </Typography>
              </Grid>
              <Grid item lg={5}>
                <img
                  src={post.data.bodyrightimage?.url || ""}
                  alt={post.data.bodyrightimage?.alt || "icon"}
                  style={{ width: "659px", height: "377px" }}
                />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>

      <Grid container spacing={2} style={{ marginTop: "50px" }}>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              color: "#292F36",
              fontSize: "50px",
              fontWeight: 400,
            }}
          >
            {posts1[0]?.data.title2}
          </div>
        </Grid>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: "50px",
          }}
        >
          <Grid item lg={5}>
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
            style={{
              // marginTop: "100px",
              height: "300px",
              overflowY: "auto",
              scrollbarWidth: "thin",
            }}
          >
            {faqs.slice(3, 6).map((faq: any, index: any) => (
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
                      style={{
                        color: clicked1 === index ? "#3D8C6E" : "#292F36",
                        fontSize: "25px",
                        fontWeight: 400,
                      }}
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography
                      style={{
                        color: "#4D5053",
                        fontSize: "22px",
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
          style={{
            textAlign: "center",
            fontSize: "64px",
            fontFamily: "Mulish",
            fontWeight: 700,
            color: "1D1D1D",
            paddingTop: "100px",
          }}
        >
          <div>{posts[0]?.data.notre_title}</div>
        </Grid>
        <Grid
          item
          lg={12}
          style={{
            textAlign: "center",
            fontSize: "36px",
            fontFamily: "Mulish",
            color: "1D1D1D",
            padding: "20px 100px",
          }}
        >
          <div>{posts[0]?.data.notre_description}</div>
        </Grid>
        {posts.map((post: any, postIndex: number) => (
          <Grid container spacing={2} key={post}>
            <Grid
              item
              lg={12}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                paddingTop: "100px",
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
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  gap: "40px",
                }}
              >
                <img
                  src={post.data.notre_image?.url || ""}
                  alt={post.data.notre_image?.alt || "icon"}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
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
                  <div
                    style={{
                      fontSize: "50px",
                      color: "#1D1D1D",
                      fontFamily: "Mulish",
                    }}
                  >
                    {post.data.notre_text}
                  </div>
                  <div
                    style={{
                      fontSize: "24px",
                      color: "#1D1D1D",
                      fontFamily: "Mulish",
                    }}
                  >
                    {post.data.notre_text_description}
                  </div>
                </div>
              </Grid>
              <Grid
                item
                lg={3}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                  gap: "50px",
                }}
              >
                <img
                  src={post.data.notre_middle_image?.url || ""}
                  alt={post.data.notre_middle_image?.alt || "icon"}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              </Grid>
              <Grid
                item
                lg={3}
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
                  <div
                    style={{
                      fontSize: "50px",
                      color: "#1D1D1D",
                      fontFamily: "Mulish",
                    }}
                  >
                    {post.data.nos_text}
                  </div>
                  <div
                    style={{
                      fontSize: "24px",
                      color: "#1D1D1D",
                      fontFamily: "Mulish",
                    }}
                  >
                    {post.data.nos_text_description}
                  </div>
                </div>
                <img
                  src={post.data.nos_image?.url || ""}
                  alt={post.data.nos_image?.alt || "icon"}
                  style={{
                    width: "100%",
                    height: "53%",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>

      <div
        style={{
          background: `url(${backgroundpeople})`,
          backgroundSize: "cover",
          width: "auto",
          height: "auto",
          paddingTop: "187.05px",
        }}
      >
        {posts.map((post: any, postIndex: number) => (
          <>
            <div>
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "64px",
                  fontWeight: 700,
                  lineHeight: "80.32px",
                  textAlign: "center",
                  color: "#0A1411",
                }}
              >
                {post.data.peopleheading}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: "33px",
                  textAlign: "center",
                  color: "#4D5053",
                  paddingLeft: "120px",
                  paddingRight: "120px",
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
                  padding: "60px 60px 60px 0px",
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
                    <img
                      src={post.data.person1?.url || ""}
                      alt={post.data.person1?.alt || "icon"}
                      style={{ width: "283.55px", height: "433px" }}
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

      <div
        style={{
          paddingTop: "192.53px",
        }}
      >
        {posts.map((post: any, postIndex: number) => (
          <>
            <div>
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "64px",
                  fontWeight: 700,
                  lineHeight: "80.32px",
                  textAlign: "center",
                  color: "#0A1411",
                }}
              >
                {post.data.lastheader}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: "33px",
                  textAlign: "center",
                  color: "#4D5053",
                  paddingLeft: "190px",
                  paddingRight: "190px",
                }}
              >
                {post.data.lastcontent}
              </Typography>
            </div>
            <div
              style={{
                backgroundImage: `url(${lastbackground})`,
                backgroundSize: "cover",
                height: "100vh",
                width: "auto",
              }}
            >
              <Grid container spacing={2} style={{
                display:'flex',
                flexDirection:'column',
                gap:'30px',
                padding:'50px'
              }}>
                <Grid
                  item
                  lg={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    // gap: "50px",
                    // padding: "80px",
                  }}
                >
                  {/* <Grid
                    item
                    lg={3}
                    style={{
                      background: "#fff",
                      width: "373px",
                      height: "452px",
                      borderRadius: "24px",
                      marginTop: "144px",
                      boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "61.41px",
                      }}
                    >
                      <img
                        src={post.data.lastlogo1?.url || ""}
                        alt={post.data.lastlogo1?.alt || "icon"}
                        style={{ width: "62.63px", height: "60.49px" }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "Mulish, sans-serif",
                          fontSize: "29.26px",
                          fontWeight: 600,
                          lineHeight: "36.72px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "41.5px",
                          padding: "20px",
                        }}
                      >
                        {post.data.box1header}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Mulish, sans-serif",
                          fontStyle: "italic",
                          fontSize: "19.5px",
                          fontWeight: 400,
                          lineHeight: "36.08px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "20.72px",
                          paddingLeft: "60px",
                          paddingRight: "47px",
                        }}
                      >
                        {post.data.box1content}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    style={{
                      background: "#FFFFFF",
                      width: "auto",
                      height: "452px",
                      borderRadius: "24px",
                      boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "83.96px",
                      }}
                    >
                      <img
                        src={post.data.lastlogo2?.url || ""}
                        alt={post.data.lastlogo2?.alt || "icon"}
                        style={{ width: "63.33px", height: "60.26px" }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "Mulish, sans-serif",
                          fontSize: "29.26px",
                          fontWeight: 600,
                          lineHeight: "36.72px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "41.5px",
                        }}
                      >
                        {post.data.box2header}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Mulish, sans-serif",
                          fontStyle: "italic",
                          fontSize: "19.5px",
                          fontWeight: 400,
                          lineHeight: "36.08px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "20.72px",
                          paddingLeft: "60px",
                          paddingRight: "47px",
                        }}
                      >
                        {post.data.box2content}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    style={{
                      background: "#FFFFFF",
                      width: "373px",
                      height: "452px",
                      borderRadius: "24px",
                      marginTop: "144px",
                      boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "70.44px",
                      }}
                    >
                      <img
                        src={post.data.lastlogo3?.url || ""}
                        alt={post.data.lastlogo3?.alt || "icon"}
                        style={{ width: "56px", height: "60px" }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "Mulish, sans-serif",
                          fontSize: "29.26px",
                          fontWeight: 600,
                          lineHeight: "36.72px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "41.5px",
                        }}
                      >
                        {post.data.box3header}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Mulish, sans-serif",
                          fontStyle: "italic",
                          fontSize: "19.5px",
                          fontWeight: 400,
                          lineHeight: "36.08px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "20.72px",
                          paddingLeft: "60px",
                          paddingRight: "47px",
                        }}
                      >
                        {post.data.box3content}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    style={{
                      background: "#FFFFFF",
                      width: "373px",
                      height: "452px",
                      borderRadius: "24px",
                      boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "104.62px",
                      }}
                    >
                      <img
                        src={post.data.lastlogo4?.url || ""}
                        alt={post.data.lastlogo4?.alt || "icon"}
                        style={{ width: "54.4px", height: "60px" }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: "Mulish, sans-serif",
                          fontSize: "29.26px",
                          fontWeight: 600,
                          lineHeight: "36.72px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "41.5px",
                        }}
                      >
                        {post.data.box4header}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "Mulish, sans-serif",
                          fontStyle: "italic",
                          fontSize: "19.5px",
                          fontWeight: 400,
                          lineHeight: "36.08px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "20.72px",
                          paddingLeft: "60px",
                          paddingRight: "50px",
                        }}
                      >
                        {post.data.box4content}
                      </Typography>
                    </div>
                  </Grid>*/}
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
                        <div
                          style={{
                            fontSize: "26px",
                            fontFamily: "Mulish",
                            fontWeight: 400,
                            color: "#1E1E1E",
                            paddingLeft:'10px'
                          }}
                        >
                          {posts[0]?.data.box1header}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "18px",
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop:'20px'
                        }}
                      >
                        {posts[0]?.data.box1content}
                      </div>
                    </div>
                    {posts[0]?.data.last_image1 && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={posts[0]?.data.last_image1.url || undefined}
                        alt={posts[0]?.data.last_image1.alt || "Image"}
                        style={{
                          width: "40%",
                          height: "auto",
                          borderBottomRightRadius:'20px'
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
                        <div
                          style={{
                            fontSize: "26px",
                            fontFamily: "Mulish",
                            fontWeight: 400,
                            color: "#1E1E1E",
                            paddingLeft:'10px'
                          }}
                        >
                          {posts[0]?.data.box2header}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "18px",
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop:'20px'
                        }}
                      >
                        {posts[0]?.data.box2content}
                      </div>
                    </div>
                    {posts[0]?.data.last_image2 && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={posts[0]?.data.last_image2.url || undefined}
                        alt={posts[0]?.data.last_image2.alt || "Image"}
                        style={{
                          width: "40%",
                          height: "auto",
                          borderBottomRightRadius:'20px'
                        }}
                      />
                    )}
                  </Grid>
                </Grid>
                <Grid
                  item
                  lg={12}
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    // gap: "20px",
                    // padding: "80px",
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
                        <div
                          style={{
                            fontSize: "26px",
                            fontFamily: "Mulish",
                            fontWeight: 400,
                            color: "#1E1E1E",
                            paddingLeft:'10px'
                          }}
                        >
                          {posts[0]?.data.box3header}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "18px",
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop:'20px'
                        }}
                      >
                        {posts[0]?.data.box3content}
                      </div>
                    </div>
                    {posts[0]?.data.last_image3 && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={posts[0]?.data.last_image3.url || undefined}
                        alt={posts[0]?.data.last_image3.alt || "Image"}
                        style={{
                          width: "40%",
                          height: "auto",
                          borderBottomRightRadius:'20px'
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
                        <div
                          style={{
                            fontSize: "26px",
                            fontFamily: "Mulish",
                            fontWeight: 400,
                            color: "#1E1E1E",
                            paddingLeft:'10px'
                          }}
                        >
                          {posts[0]?.data.box4header}
                        </div>
                      </div>
                      <div
                        style={{
                          fontSize: "18px",
                          fontFamily: "Mulish",
                          fontStyle: "italic",
                          color: "#1E1E1E",
                          paddingTop:'20px'
                        }}
                      >
                        {posts[0]?.data.box4content}
                      </div>
                    </div>
                    {posts[0]?.data.last_image4 && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={posts[0]?.data.last_image4.url || undefined}
                        alt={posts[0]?.data.last_image4.alt || "Image"}
                        style={{
                          width: "40%",
                          height: "auto",
                          borderBottomRightRadius:'20px'
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
