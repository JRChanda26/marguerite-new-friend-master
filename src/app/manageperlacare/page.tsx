"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Liberez from "../mainpage/Liberez";
import Footer from "../mainpage/Footer";
import Header from "../mainpage/Header";

const ManagePerLaCare: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType(
        "managementbycare" as any
      );
      setPosts(response);
    };

    fetchPosts();
  }, []);
  const backgroundImage = posts[0]?.data?.headerbackground?.url || "";
  const boxbackground = posts[0]?.data?.boxbackground?.url || "";

  const [posts1, setPosts1] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType(
        "soinschezmarguerite" as any
      );
      setPosts1(response);
    };

    fetchPosts();
  }, []);
  const contentbackground = posts1[0]?.data?.contentbackground?.url || "";

  const videoUrl = posts[0]?.data.video?.url;

  const [clicked, setClicked] = useState<number | null>(null);
  const handleColor = (index: number) => {
    setClicked(index);
  };

  const [clicked1, setClicked1] = useState<number | null>(null);
  const handleColor1 = (index: number) => {
    setClicked1(index);
  };

  const faqs = [
    { question: posts[0]?.data.question1, answer: posts[0]?.data.answer1 },
    { question: posts[0]?.data.question2, answer: posts[0]?.data.answer2 },
    { question: posts[0]?.data.question3, answer: posts[0]?.data.answer3 },
    { question: posts[0]?.data.question4, answer: posts[0]?.data.answer4 },
    { question: posts[0]?.data.question5, answer: posts[0]?.data.answer5 },
    { question: posts[0]?.data.question6, answer: posts[0]?.data.answer6 },
  ];

  return (
    <Box sx={{}}>
      <Header />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          width: "100%",
          height: "auto",
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

      <div style={{ paddingTop: "173px" }}>
        {posts.map((post: any) => (
          <Grid container spacing={0} key={post.id}>
            <Grid
              item
              lg={12}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              <Grid item lg={5} style={{}}>
                {posts.map((post: any, index: any) => (
                  <Typography
                    style={{
                      fontFamily: "Mulish",
                      fontWeight: 700,
                      fontSize: "50px",
                      lineHeight: "62.5px",
                      color: "rgba(41, 47, 54, 1)",
                      letterSpacing: "2%",
                    }}
                    key={index}
                  >
                    {post.data.leftheader}
                  </Typography>
                ))}
                <Typography
                  style={{
                    fontFamily: "Mulish",
                    color: "rgba(35, 125, 108, 1)",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "30.12px",
                    paddingTop: "33px",
                  }}
                >
                  {post.data.leftcontentheader}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Mulish",
                    color: "rgba(35, 125, 108, 1)",
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "30.12px",
                  }}
                >
                  {post.data.leftcontent}
                </Typography>
                <div
                  style={{ paddingTop: "68.14px", paddingBottom: "159.85px" }}
                >
                  {posts.map((post: any) => (
                    <Button
                      key={post}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        background: "#24535C",
                        padding: "16px 24px 16px 24px",
                        gap: "18px",
                        borderRadius: "82px",
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: 400,
                          fontSize: "15.2px",
                          lineHeight: "18.24px",
                          color: "#FFFFFF",
                        }}
                      >
                        {post.data.buttontext}
                      </Typography>
                      <img
                        src={post.data.buttonimage.url || ""}
                        alt={post.data.buttonimage}
                        style={{
                          background: "#82C5BE",
                          borderRadius: "15.9px",
                          padding: "7.29px",
                          width: "9.27px",
                          height: "9.27px",
                        }}
                      />
                    </Button>
                  ))}
                </div>
              </Grid>

              <Grid item lg={4}>
                <img
                  src={post.data.rightimage.url || ""}
                  alt={post.data.rightimage}
                  style={{
                    height: "446.99px",
                    width: "626.75px",
                    borderRadius: "18px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>

      {/* <div style={{}}>
        {posts.map((post: any, postIndex: number) => (
          <>
            <Grid container spacing={1}>
              <Grid
                item
                lg={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "123px",
                }}
              >
                <Grid item lg={4}>
                  <Typography
                    style={{
                      paddingLeft: "40px",
                      paddingRight: "40px",
                      fontFamily: 'Mulish, sans-serif',
                      fontWeight: 700,
                      fontSize: "48px",
                      lineHeight: "60.24px",
                      color: "#24535C",
                    }}
                  >
                    {post.data.leftparagraph1}
                  </Typography>
                </Grid>
                <Grid item lg={5}>
                  <Typography
                    style={{
                      padding: "0px",
                      fontFamily: 'Mulish, sans-serif',
                      fontWeight: 400,
                      fontSize: "24px",
                      lineHeight: "30.12px",
                      color: "#237D6C",
                    }}
                  >
                    {post.data.rightparagraph1}
                  </Typography>
                  <div style={{ paddingTop: "51px" }}>
                    <Button
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        background: "#24535C",
                        padding: "16px 24px 16px 24px",
                        gap: "18px",
                        borderRadius: "82px",
                      }}
                    >
                      <Typography
                        style={{
                          fontWeight: 400,
                          fontSize: "15.2px",
                          lineHeight: "18.24px",
                          color: "#FFFFFF",
                        }}
                      >
                        {post.data.buttontext}
                      </Typography>
                      <img
                        src={post.data.buttonimage.url || ""}
                        alt={post.data.buttonimage}
                        style={{
                          background: "#82C5BE",
                          borderRadius: "15.9px",
                          padding: "7.29px",
                          width: "9.27px",
                          height: "9.27px",
                        }}
                      />
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </>
        ))}
      </div> */}

      {posts.map((post: any, postIndex: number) => (
        <>
          <div
            style={{
              color: "rgba(36, 83, 92, 1)",
              fontFamily: "Mulish",
              fontWeight: 800,
              fontSize: "64px",
              lineHeight: "80.32px",
              paddingTop: "115px",
              paddingBottom: "107px",
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {post.data.boxtopheader}
          </div>

          <div
            style={{
              backgroundImage: `url(${boxbackground})`,
              height: "auto",
              width: "100%",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <Box
              style={{
                background: "rgba(255, 255, 255, 1)",
                // padding: "85.33px 40.23px 85.33px 40.23px",
                paddingBottom: "85.33px",
                borderRadius: "19.5px",
                boxShadow: "0px 32.91px 29.26px 0px #28626D33",
                height: "auto",
                width: "762px",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: " 29.26px",
                  fontWeight: 600,
                  lineHeight: "36.72px",
                  textAlign: "center",
                  padding: "24px 25px 0px 25px",
                }}
              >
                {post.data.box1header}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontStyle: "italic",
                  fontSize: " 19.5px",
                  fontWeight: 400,
                  lineHeight: "36.08px",
                  textAlign: "justify",
                  padding: "24px 25px 0px 25px",
                }}
              >
                {post.data.box1content}
              </Typography>
            </Box>
            <Box
              style={{
                width: "771px",
                height: "auto",
                background: "rgba(255, 255, 255, 1)",
                // padding: "85.33px 40.23px 85.33px 40.23px",
                paddingBottom: "85.33px",
                borderRadius: "19.5px",
                boxShadow: "0px 32.91px 29.26px 0px #28626D33",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: " 29.26px",
                  fontWeight: 600,
                  lineHeight: "36.72px",
                  textAlign: "center",
                  padding: "24px 25px 0px 25px",
                }}
              >
                {post.data.box2header}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontStyle: "italic",
                  fontSize: " 19.5px",
                  fontWeight: 400,
                  lineHeight: "36.08px",
                  textAlign: "justify",
                  padding: "24px 25px 0px 25px",
                }}
              >
                {post.data.box2content}
              </Typography>
            </Box>
            <Box
              style={{
                width: "738px",
                height: "auto",
                background: "rgba(255, 255, 255, 1)",
                // padding: "85.33px 40.23px 85.33px 40.23px",
                paddingBottom: "85.33px",
                borderRadius: "19.5px",
                boxShadow: "0px 32.91px 29.26px 0px #28626D33",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: " 29.26px",
                  fontWeight: 600,
                  lineHeight: "36.72px",
                  textAlign: "center",
                  padding: "24px 25px 0px 25px",
                }}
              >
                {post.data.box3header}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontStyle: "italic",
                  fontSize: " 19.5px",
                  fontWeight: 400,
                  lineHeight: "36.08px",
                  textAlign: "justify",
                  padding: "24px 25px 0px 25px",
                }}
              >
                {post.data.box3content}
              </Typography>
            </Box>
            <Box
              style={{
                width: "746px",
                height: "auto",
                background: "rgba(255, 255, 255, 1)",

                // padding: "85.33px 40.23px 85.33px 40.23px",
                paddingBottom: "85.33px",
                borderRadius: "19.5px",
                boxShadow: "0px 32.91px 29.26px 0px #28626D33",
                marginTop: "17.61px",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  fontSize: " 29.26px",
                  fontWeight: 600,
                  lineHeight: "36.72px",
                  textAlign: "center",
                  paddingLeft: "60px",
                  paddingRight: "60px",
                  paddingTop: "85.33px",
                  padding: "24px 25px 0px 25px",
                }}
              >
                {post.data.box4header}
              </Typography>
              <Typography
                style={{
                  fontFamily: "Mulish",
                  fontStyle: "italic",
                  fontSize: " 19.5px",
                  fontWeight: 400,
                  lineHeight: "36.08px",
                  textAlign: "justify",
                  padding: "24px 25px 0px 25px",
                }}
              >
                {post.data.box4content}
              </Typography>
            </Box>
          </div>
        </>
      ))}

      <Grid container>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            marginTop: "100px",
          }}
        >
          <div
            style={{
              color: "#0A1411",
              fontSize: "64px",
              fontWeight: 700,
            }}
          >
            {posts[0]?.data.heading}
          </div>
          <div
            style={{
              color: "#4D5053",
              fontSize: "22px",
              fontWeight: 400,
              padding: "20px 200px 0px 200px",
            }}
          >
            {posts[0]?.data.description}
          </div>
        </Grid>
        <Grid item lg={12} style={{ marginTop: "100px" }}>
          <div
            style={{
              textAlign: "center",
              color: "#292F36",
              fontSize: "50px",
              fontWeight: 400,
            }}
          >
            {posts[0]?.data.title1}
          </div>
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
            <Grid
              item
              lg={5}
              style={{
                marginTop: "50px",
                height: "430px",
                overflowY: "auto",
                scrollbarWidth: "thin",
              }}
            >
              {faqs.slice(0, 3).map((faq, index) => (
                <div key={index}>
                  <Accordion
                    style={{
                      backgroundColor: "transparent",
                      boxShadow: "none",
                    }}
                  >
                    <AccordionSummary expandIcon={<KeyboardArrowUpIcon />}>
                      <Typography
                        onClick={() => handleColor(index)}
                        style={{
                          color: clicked === index ? "#3D8C6E" : "#292F36",
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
            <Grid item lg={5}>
              {posts[0]?.data.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={posts[0]?.data.image.url || undefined}
                  alt={posts[0]?.data.image.alt || "Image"}
                  width={500}
                  height={500}
                />
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          style={{
            marginTop: "100px",
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
            {posts[0]?.data.title2}
          </div>
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
                  width="500"
                  height="500"
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
                marginTop: "100px",
                height: "350px",
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
            width: "875.5px",
            height: "440px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "209.87px",
            flexDirection: "column",
          }}
        >
          {posts.map((post: any) => (
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
                  {post.data.quote_text}
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
                  {post.data.name}
                </Typography>
              </div>
            </>
          ))}
        </div>
      </Box>
      {/* <div style={{}}>
        {posts.map((post: any, postIndex: number) => (
          <>
            <div
              style={{
                paddingLeft: "350px",
                paddingRight: "200px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  color: "rgba(10, 20, 17, 1)",
                  fontWeight: 700,
                  fontSize: "64px",
                  lineHeight: "80.32px",
                }}
              >
                {post.data.doctorheader}
              </Typography>
            </div>
            <Grid container spacing={1}>
              <Grid
                item
                lg={12}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "180px",
                  paddingTop: "91.29px",
                }}
              >
                <Grid item lg={5}>
                  <img
                    src={post.data.doctorimage?.url || ""}
                    alt={post.data.homeldoctorimageogo?.alt || "icon"}
                    style={{
                      height: "623px",
                      width: "835px",
                    }}
                  />
                </Grid>
                <Grid item lg={5}>
                  <Typography
                    style={{
                      fontFamily: "Mulish, sans-serif",
                      color: "rgba(36, 83, 92, 1)",
                      fontWeight: 400,
                      fontSize: "40px",
                      lineHeight: "50.2px",
                      paddingTop: "54.5px",
                      paddingLeft: "92.11px",
                      paddingRight: "",
                    }}
                  >
                    {post.data.doctorcontent}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </>
        ))}
      </div> */}

      <div
        style={{
          fontSize: "64px",
          fontWeight: 700,
          lineHeight: "80px",
          textAlign: "center",
          padding: "50px 100px",
        }}
      >
        {posts[0]?.data.footer_title}
      </div>

      <Grid
        item
        lg={12}
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          padding: "50px 200px",
        }}
      >
        <Grid item lg={8}>
          {" "}
          {posts[0]?.data.footer_image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={posts[0]?.data.footer_image.url || undefined}
              alt={posts[0]?.data.footer_image.alt || "Image"}
              width="500px"
              height="auto"
            />
          )}
        </Grid>
        <Grid
          item
          lg={4}
          style={{
            alignContent: "center",
            fontSize: "30px",
            fontWeight: 400,
            paddingLeft: "100px",
            textAlign: "left",
            color: "#24535C",
          }}
        >
          {posts[0]?.data.footer_description}
        </Grid>
      </Grid>
      <Liberez />
      <Footer />
    </Box>
  );
};

export default ManagePerLaCare;
