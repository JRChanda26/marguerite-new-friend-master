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
import Liberez from "../mainpage/Liberez";
import Footer from "../mainpage/Footer";
import Header from "../mainpage/Header";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useRouter } from "next/navigation";

const OurCareManagementSolutions: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType(
        "ourcaremanagementsolutions" as any
      );
      setPosts(response);
    };

    fetchPosts();
  }, []);
  const backgroundImage = posts[0]?.data?.headerbackground?.url || "";

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
  const lastbackground = posts1[0]?.data?.lastbackground?.url || "";

  const [videoPost, setVideoPost] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType(
        "managementbycare" as any
      );
      setVideoPost(response);
    };

    fetchPosts();
  }, []);

  console.log(videoPost);

  const faqs = [
    {
      question: videoPost[0]?.data.question1,
      answer: videoPost[0]?.data.answer1,
    },
    {
      question: videoPost[0]?.data.question2,
      answer: videoPost[0]?.data.answer2,
    },
    {
      question: videoPost[0]?.data.question3,
      answer: videoPost[0]?.data.answer3,
    },
    {
      question: videoPost[0]?.data.question4,
      answer: videoPost[0]?.data.answer4,
    },
    {
      question: videoPost[0]?.data.question5,
      answer: videoPost[0]?.data.answer5,
    },
    {
      question: videoPost[0]?.data.question6,
      answer: videoPost[0]?.data.answer6,
    },
  ];

  const videoUrl = videoPost[0]?.data.video?.url;

  const [clicked1, setClicked1] = useState<number | null>(null);
  const handleColor1 = (index: number) => {
    setClicked1(index);
  };

  const points = [
    {
      heading: posts[0]?.data.heading1,
      background: "#F6C09E",
      points: [posts[0]?.data.heading1_point1, posts[0]?.data.heading1_point2],
    },
    {
      heading: posts[0]?.data.heading2,
      background: "#BBDDD9",
      points: [posts[0]?.data.heading2_point1, posts[0]?.data.heading2_point2],
    },
    {
      heading: posts[0]?.data.heading3,
      background: "#EE8A74",
      points: [posts[0]?.data.heading3_point1, posts[0]?.data.heading3_point2],
    },
    {
      heading: posts[0]?.data.heading4,
      background: "#82C5BE",
      points: [posts[0]?.data.heading4_point1, posts[0]?.data.heading4_point2],
    },
    {
      heading: posts[0]?.data.heading5,
      background: "#F6C09E",
      points: [
        posts[0]?.data.heading5_point1,
        posts[0]?.data.heading5_point2,
        posts[0]?.data.heading5_point3,
      ],
    },
    {
      heading: posts[0]?.data.heading6,
      background: "#BBDDD9",
      points: [posts[0]?.data.heading6_point1, posts[0]?.data.heading6_point2],
    },
    {
      heading: posts[0]?.data.heading7,
      background: "#EE8A74",
      points: [posts[0]?.data.heading7_point1, posts[0]?.data.heading7_point2],
    },
    {
      heading: posts[0]?.data.heading8,
      background: "#82C5BE",
      points: [posts[0]?.data.heading8_point1, posts[0]?.data.heading8_point2],
    },
  ];

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/contact");
  };

  return (
    <Box>
      <Header />
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          // width: "100%",
          // height: "auto",
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
                paddingTop: "250.67px",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  textAlign: "center",
                  borderRadius: "37px 37px 0px 0px",
                  // padding: "41px 152px 42px 152px",
                  padding: "2% 5%",
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

      <div style={{ padding: "3%" }}>
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
                {posts.map((post: any) => (
                  <Typography
                    key={post}
                    sx={{
                      fontFamily: "Mulish, sans-serif",
                      fontWeight: 700,
                      // fontSize: "50px",
                      // lineHeight: "62.5px",
                      fontSize: { xs: "30px", sm: "40px", lg: "50px" },
                      lineHeight: { xs: "40px", sm: "48px", lg: "62.5px" },
                      color: "#292F36",
                      letterSpacing: "2%",
                    }}
                  >
                    {post.data.leftheader}
                  </Typography>
                ))}
                <Typography
                  sx={{
                    fontFamily: "Mulish, sans-serif",
                    color: "#4D5053",
                    fontWeight: 400,
                    // fontSize: "22px",
                    // lineHeight: "33px",
                    fontSize: { xs: "12px", sm: "18px", lg: "22px" },
                    lineHeight: { xs: "20px", sm: "28px", lg: "33px" },
                    letterSpacing: "1%",
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
                      onClick={handleNavigation}
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
                      {post?.data.buttonimage && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post?.data.buttonimage.url || undefined}
                          alt={post?.data.buttonimage.alt || "Image"}
                          style={{
                            background: "#82C5BE",
                            borderRadius: "15.9px",
                            padding: "7.29px",
                            width: "9.27px",
                            height: "9.27px",
                          }}
                        />
                      )}
                    </Button>
                  ))}
                </div>
              </Grid>

              <Grid item lg={5}>
                {post?.data.rightimage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post?.data.rightimage.url || undefined}
                    alt={post?.data.rightimage.alt || "Image"}
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
      </div>

      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{padding: "0 20px",}}
      >
        <Grid item xs={12}>
          <div
            style={{
              textAlign: "center",
              color: "#292F36",
              fontSize: "2.5rem",
              fontWeight: 400,
            }}
          >
            {videoPost[0]?.data.title2}
          </div>
        </Grid>

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
            {posts[0]?.data.title2}
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
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              lg={5}
              sx={{ marginTop: { xs: "0px", sm: "60px", lg: "0px" } }}
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
              style={{
                // marginTop: "100px",
                height: "300px",
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
      </Grid>

      <Grid container spacing={3} style={{ padding: "10% 5%" }}>
        {points.map((item, index) => (
          <Grid
            key={index}
            item
            lg={3}
            md={6}
            sm={12}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                background: item.background,
                borderRadius: "30px",
                padding: "30px",
                width: "70%",
                textAlign: "center",
              }}
            >
              {item.heading}
            </div>
            <ul>
              {item.points.map((point, idx) => (
                <li key={idx}>
                  <span style={{ color: "#4D5053" }}>{point}</span>
                </li>
              ))}
            </ul>
          </Grid>
        ))}
      </Grid>
      <Liberez />
      <Footer />
    </Box>
  );
};

export default OurCareManagementSolutions;
