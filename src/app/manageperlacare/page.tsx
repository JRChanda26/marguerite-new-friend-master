"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Grid,
  Typography,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Liberez from "../mainpage/Liberez";
import Footer from "../mainpage/Footer";
import Header from "../mainpage/Header";
import { useRouter } from "next/navigation";

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

  const styles: {
    container: React.CSSProperties;
    card: React.CSSProperties;
    topLeft: React.CSSProperties;
    topRight: React.CSSProperties;
    bottomLeft: React.CSSProperties;
    bottomRight: React.CSSProperties;
  } = {
    container: {
      position: "relative",
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    card: {
      position: "absolute",
      // width: "200px",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
      // textAlign: "center",
    },
    topLeft: {
      top: "2%",
      left: "5%",
      transform: "rotate(0deg)",
      width: "40%",
    },
    topRight: {
      top: "28%",
      right: "5%",
      transform: "rotate(0deg)",
      width: "40%",
    },
    bottomLeft: {
      top: "55%",
      left: "5%",
      transform: "rotate(0deg)",
      width: "40%",
    },
    bottomRight: {
      top: "75%",
      right: "5%",
      transform: "rotate(0deg)",
      width: "40%",
    },
  };

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setHoveredCard(index);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const getCardStyle = (baseStyle: React.CSSProperties, index: number) => {
    return {
      ...baseStyle,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      transform: hoveredCard === index ? "scale(1.05)" : "scale(1)", // Zoom effect
      boxShadow:
        hoveredCard === index
          ? "0px 8px 20px rgba(0, 0, 0, 0.2)" // Enhance shadow on hover
          : "0px 4px 12px rgba(0, 0, 0, 0.1)", // Default shadow
    };
  };

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/contact");
  };

  return (
    <Box sx={{}}>
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
                  alignItems: "center",
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
                    fontSize: { xs: "25px", sm: "40px", lg: "50px" },
                    // lineHeight: "62.5px",
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
                    fontSize: { xs: "12px", sm: "18px", lg: "22px" },
                    // lineHeight: "33px",
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

      <div style={{ padding: "7%" }}>
        {posts.map((post: any) => (
          <Grid container spacing={0} key={post.id}>
            <Grid
              item
              lg={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                // flexDirection: "row",
                flexDirection: { xs: "column", sm: "row", lg: "row" },
                gap: "20px",
              }}
            >
              <Grid item lg={6}>
                {posts.map((post: any, index: any) => (
                  <Typography
                    sx={{
                      fontFamily: "Mulish",
                      fontWeight: 700,
                      // fontSize: "50px",
                      fontSize: { xs: "30px", sm: "40px", lg: "50px" },
                      // lineHeight: "62.5px",
                      lineHeight: { xs: "35px", sm: "48px", lg: "62.5px" },
                      color: "rgba(41, 47, 54, 1)",
                      letterSpacing: "2%",
                    }}
                    key={index}
                  >
                    {post.data.leftheader}
                  </Typography>
                ))}
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    color: "rgba(35, 125, 108, 1)",
                    fontWeight: 700,
                    // fontSize: "24px",
                    fontSize: { xs: "12px", sm: "18px", lg: "24px" },
                    // lineHeight: "30.12px",
                    lineHeight: { xs: "18px", sm: "25px", lg: "30.12px" },
                    paddingTop: "33px",
                  }}
                >
                  {post.data.leftcontentheader}
                </Typography>
                <div style={{ paddingTop: "50px" }}>
                  {posts.map((post: any) => (
                    <Button
                      key={post}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        background: "#24535C",
                        padding: "2% 3%",
                        gap: "18px",
                        borderRadius: "82px",
                      }}
                      onClick={handleNavigation}
                    >
                      <Typography
                        sx={{
                          fontWeight: 400,
                          // fontSize: "15.2px",
                          fontSize: { xs: "10px", sm: "13px", lg: "15.2px" },
                          lineHeight: "18.24px",
                          color: "#FFFFFF",
                        }}
                      >
                        {post.data.buttontext}
                      </Typography>
                      {post?.data.buttonimage && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.data.buttonimage.url || undefined}
                          alt={post.data.buttonimage.alt || "Twitter"}
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

              <Grid item lg={5} xs={12} sm={12} md={12}>
                {post?.data.rightimage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.rightimage.url || undefined}
                    alt={post.data.rightimage.alt || "image"}
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "18px",
                    }}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>

      {posts.map((post: any, postIndex: number) => (
        <>
          <Typography
            sx={{
              color: "rgba(36, 83, 92, 1)",
              fontFamily: "Mulish",
              fontWeight: 800,
              // fontSize: "64px",
              fontSize: { xs: "30px", sm: "50px", lg: "64px" },
              // lineHeight: "80.32px",
              lineHeight: { xs: "50px", sm: "65px", lg: "80.32px" },
              // padding: "100px",
              padding: "8%",
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
            }}
          >
            {post.data.boxtopheader}
          </Typography>

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
            <div style={styles.container}>
              <Card
                // style={{ ...styles.card, ...styles.topLeft }}
                style={getCardStyle({ ...styles.card, ...styles.topLeft }, 0)}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
              >
                <Typography
                  sx={{ fontSize: { xs: "16px", sm: "20px", lg: "25px" } }}
                  component="div"
                >
                  {post.data.box1header}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "10px", sm: "14px", lg: "16px" } }}
                  color="textSecondary"
                >
                  {post.data.box1content}
                </Typography>
              </Card>
              <Card
                // style={{ ...styles.card, ...styles.topRight }}
                style={getCardStyle({ ...styles.card, ...styles.topRight }, 1)}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <Typography
                  sx={{ fontSize: { xs: "16px", sm: "20px", lg: "25px" } }}
                  component="div"
                >
                  {post.data.box2header}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "10px", sm: "14px", lg: "16px" } }}
                  color="textSecondary"
                >
                  {post.data.box2content}
                </Typography>
              </Card>
              <Card
                // style={{ ...styles.card, ...styles.bottomLeft }}
                style={getCardStyle(
                  { ...styles.card, ...styles.bottomLeft },
                  2
                )}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <Typography
                  sx={{ fontSize: { xs: "16px", sm: "20px", lg: "25px" } }}
                  component="div"
                >
                  {post.data.box3header}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "10px", sm: "14px", lg: "16px" } }}
                  color="textSecondary"
                >
                  {post.data.box3content}
                </Typography>
              </Card>
              <Card
                // style={{ ...styles.card, ...styles.bottomRight }}
                style={getCardStyle(
                  { ...styles.card, ...styles.bottomRight },
                  3
                )}
                onMouseEnter={() => handleMouseEnter(3)}
                onMouseLeave={handleMouseLeave}
              >
                <Typography
                  sx={{ fontSize: { xs: "16px", sm: "20px", lg: "25px" } }}
                  component="div"
                >
                  {post.data.box4header}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "10px", sm: "14px", lg: "16px" } }}
                  color="textSecondary"
                >
                  {post.data.box4content}
                </Typography>
              </Card>
            </div>
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
          <Typography
            sx={{
              color: "#0A1411",
              // fontSize: "64px",
              fontSize: { xs: "45px", sm: "60px", lg: "64px" },
              fontWeight: 700,
            }}
          >
            {posts[0]?.data.heading}
          </Typography>
        </Grid>
        <Grid item lg={12} style={{ marginTop: "70px" }}>
          <Typography
            sx={{
              textAlign: "center",
              color: "#292F36",
              // fontSize: "50px",
              fontSize: { xs: "30px", sm: "40px", lg: "50px" },
              fontWeight: 400,
            }}
          >
            {posts[0]?.data.title1}
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
              lg={5}
              sx={{
                // marginTop: "20px",
                marginTop: { xs: "20px", sm: "40px", lg: "150px" },
                // height: "400px",
                height: { xs: "300px", sm: "300px", lg: "400px" },
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
                        sx={{
                          color: clicked === index ? "#3D8C6E" : "#292F36",
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
            <Grid item xs={12} sm={12} lg={5}>
              {posts[0]?.data.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={posts[0]?.data.image.url || undefined}
                  alt={posts[0]?.data.image.alt || "Image"}
                  width="100%"
                  height="auto"
                />
              )}
            </Grid>
          </Grid>
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
                  sx={{
                    fontFamily: "Jenna Sue, sans-serif",
                    color: "#0A1411",
                    fontWeight: 400,
                    // fontSize: "48px",
                    fontSize: { xs: "28px", sm: "38px", lg: "48px" },
                    // lineHeight: "60px",
                    lineHeight: { xs: "30px", sm: "45px", lg: "60px" },
                    textAlign: "center",
                    // padding: "20% 15%",
                    padding: { xs: "3% 15%", sm: "20% 12%", lg: "21% 18%" },
                  }}
                >
                  {post.data.quote_text}
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
                  {post.data.name}
                </Typography>
              </div>
            </>
          ))}
        </div>
      </Box>
      <Typography
        sx={{
          // fontSize: "64px",
          fontSize: { xs: "38px", sm: "50px", lg: "64px" },
          fontWeight: 700,
          // lineHeight: "80px",
          lineHeight: { xs: "45px", sm: "60px", lg: "80px" },
          textAlign: "center",
          padding: "10% 10% 0% 10%",
        }}
      >
        {posts[0]?.data.footer_title}
      </Typography>

      <Grid
        item
        lg={12}
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: { xs: "column", sm: "row", lg: "row" },
          textAlign: "center",
          padding: "5%",
          gap: "50px",
        }}
      >
        <Grid item lg={7} xs={12} sm={12}>
          {" "}
          {posts[0]?.data.footer_image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={posts[0]?.data.footer_image.url || undefined}
              alt={posts[0]?.data.footer_image.alt || "Image"}
              width="100%"
              height="auto"
            />
          )}
        </Grid>
        <Grid
          item
          lg={4}
          sx={{
            alignContent: "center",
            // fontSize: "30px",
            fontSize: { xs: "16px", sm: "22px", lg: "30px" },
            fontWeight: 400,
            // paddingLeft: "100px",
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
