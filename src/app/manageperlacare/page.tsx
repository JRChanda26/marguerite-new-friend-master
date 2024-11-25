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
  const [managePage, setManagePage] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("manage_per_la" as any);
      setManagePage(response);
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

  const backgroundImage = managePage[0]?.data?.header_background?.url || "";
  const boxbackground = managePage[0]?.data?.middle_background?.url || "";

  const contentbackground =
    managePage[0]?.data?.square_brackets_background?.url || "";

  const videoUrl = modulesPage[0]?.data.video?.url;

  const [clicked, setClicked] = useState<number | null>(null);
  const handleColor = (index: number) => {
    setClicked(index);
  };

  const [clicked1, setClicked1] = useState<number | null>(null);
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
          ? "0px 8px 20px rgba(35, 107, 121, 0.2)" // Enhance shadow on hover with #236B79 color
          : "0px 4px 12px rgba(35, 107, 121, 0.1)", // Default shadow with #236B79 color
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
        {managePage.map((post: any, postIndex: number) => (
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
                  {post.data.heading}
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
                  {post.data.sub_heading}
                </Typography>
              </div>
            </div>
          </>
        ))}
      </div>

      <div style={{ padding: "5%" }}>
        {managePage.map((post: any) => (
          <Grid container spacing={0} key={post.id}>
            <Grid
              item
              lg={12}
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: { xs: "column", sm: "row", lg: "row" },
                gap: "20px",
              }}
            >
              <Grid item lg={7} xs={12} sm={7}>
                {managePage.map((post: any, index: any) => (
                  <Typography
                    key={index}
                    sx={{
                      fontFamily: "Mulish",
                      fontWeight: 700,
                      fontSize: { xs: "30px", sm: "40px", lg: "50px" },
                      lineHeight: { xs: "35px", sm: "48px", lg: "62.5px" },
                      color: "#292F36",
                      letterSpacing: "2%",
                    }}
                  >
                    {post.data.top_left_title}
                  </Typography>
                ))}
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    color: "rgba(35, 125, 108, 1)",
                    fontWeight: 700,
                    fontSize: { xs: "12px", sm: "18px", lg: "24px" },
                    lineHeight: { xs: "18px", sm: "25px", lg: "30.12px" },
                    paddingTop: "33px",
                    whiteSpace: "pre-line",
                  }}
                >
                  {post.data.top_left_description}
                </Typography>
                <div style={{ paddingTop: "50px" }}>
                  {managePage.map((post: any) => (
                    <Button
                      key={post}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        background: "#24535C",
                        borderRadius: "82px",
                        marginTop: "20px",
                        justifyContent: "space-around",
                      }}
                      // onClick={handleNavigation}
                    >
                      <Typography
                        sx={{
                          fontWeight: 400,
                          fontSize: { xs: "12px", sm: "18px", lg: "20px" },
                          lineHeight: { xs: "8px", sm: "12px", lg: "18.24px" },
                          color: "#FFFFFF",
                        }}
                      >
                        {post.data.button_text}
                      </Typography>
                      {post?.data.button_icon && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.data.button_icon.url || undefined}
                          alt={post.data.button_icon.alt || "Twitter"}
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
                item
                lg={5}
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
                    src={post.data.top_right_image.url || undefined}
                    alt={post.data.top_right_image.alt || "image"}
                    style={{
                      height: "auto",
                      width: "100%",
                      borderRadius: "20px",
                    }}
                  />
                )}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>

      {managePage.map((post: any) => (
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
              whiteSpace: "pre-line",
            }}
          >
            {post.data.middle_title}
          </Typography>

          <Grid
            sx={{
              backgroundImage: `url(${boxbackground})`,
              height: "auto",
              width: "100%",
              backgroundPosition: "center",
              // backgroundSize: "cover",
              backgroundSize: { xs: "contain", sm: "contain", lg: "contain" },
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
                  {post.data.card_title1}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "10px", sm: "14px", lg: "16px" } }}
                  color="textSecondary"
                >
                  {post.data.card_description1}
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
                  {post.data.card_title2}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "10px", sm: "14px", lg: "16px" } }}
                  color="textSecondary"
                >
                  {post.data.card_description2}
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
                  {post.data.card_title3}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "10px", sm: "14px", lg: "16px" } }}
                  color="textSecondary"
                >
                  {post.data.card_description3}
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
                  {post.data.card_title4}
                </Typography>
                <Typography
                  sx={{ fontSize: { xs: "10px", sm: "14px", lg: "16px" } }}
                  color="textSecondary"
                >
                  {post.data.card_description4}
                </Typography>
              </Card>
            </div>
          </Grid>
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
            {modulesPage[0]?.data.heading}
          </Typography>
        </Grid>
        <Grid item lg={12} style={{ marginTop: "30px" }}>
          <Typography
            sx={{
              textAlign: "center",
              color: "#292F36",
              // fontSize: "50px",
              fontSize: { xs: "30px", sm: "40px", lg: "50px" },
              fontWeight: 400,
            }}
          >
            {modulesPage[0]?.data.image_title}
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
            }}
          >
            <Grid
              item
              xs={12}
              sm={5}
              lg={4}
              sx={{
                // marginTop: { xs: "20px", sm: "40px", lg: "150px" },
                height: { xs: "0px", sm: "450px", lg: "585px" },
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
                          fontSize: { xs: "18px", sm: "28px", lg: "38px" },
                          fontWeight: 400,
                          fontFamily: "Mulish",
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
            <Grid item xs={12} sm={5} lg={4}>
              {modulesPage[0]?.data.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={modulesPage[0]?.data.image.url || undefined}
                  alt={modulesPage[0]?.data.image.alt || "Image"}
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
            }}
          >
            <Grid
              item
              xs={12}
              sm={5}
              lg={4}
              sx={{ marginTop: { xs: "0px", sm: "80px", lg: "20px" } }}
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
              xs={12}
              sm={5}
              lg={4}
              sx={{
                height: { xs: "0px", sm: "400px", lg: "410px" },
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
                          fontSize: { xs: "18px", sm: "28px", lg: "38px" },
                          fontWeight: 400,
                          fontFamily: "Mulish",
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
        <Grid
          sx={{
            backgroundImage: `url(${contentbackground})`,
            // backgroundSize: "cover",
            backgroundSize: { xs: "contain", sm: "contain", lg: "contain" },
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "100%",
            height: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "10%",
            flexDirection: "column",
          }}
        >
          {managePage.map((post: any) => (
            <>
              <div>
                {managePage[0]?.data.quote_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={managePage[0]?.data.quote_image.url || undefined}
                    alt={managePage[0]?.data.quote_image.alt || "Image"}
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
                    fontSize: { xs: "28px", sm: "38px", lg: "48px" },
                    lineHeight: { xs: "30px", sm: "45px", lg: "60px" },
                    textAlign: "center",
                    padding: { xs: "12%", sm: "12%", lg: "12%" },
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
                    fontSize: { xs: "14px", sm: "18px", lg: "25px" },
                    lineHeight: { xs: "18px", sm: "25px", lg: "37.5px" },
                    textAlign: "center",
                  }}
                >
                  {post.data.writer_name}
                </Typography>
              </div>
            </>
          ))}
        </Grid>
      </Box>
      <Typography
        sx={{
          fontSize: { xs: "38px", sm: "50px", lg: "64px" },
          fontWeight: 700,
          lineHeight: { xs: "45px", sm: "60px", lg: "80px" },
          textAlign: "center",
          padding: "10% 10% 0% 10%",
        }}
      >
        {managePage[0]?.data.bottom_title}
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
        <Grid item lg={6} xs={12} sm={6}>
          {" "}
          {managePage[0]?.data.bottom_left_image && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={managePage[0]?.data.bottom_left_image.url || undefined}
              alt={managePage[0]?.data.bottom_left_image.alt || "Image"}
              width="100%"
              height="auto"
            />
          )}
        </Grid>
        <Grid
          item
          lg={6}
          xs={12}
          sm={6}
          sx={{
            alignContent: "center",
            fontSize: { xs: "18px", sm: "22px", lg: "25px" },
            lineHeight: { xs: "20px", sm: "30px", lg: "40px" },
            fontWeight: 400,
            textAlign: "left",
            color: "#24535C",
          }}
        >
          {managePage[0]?.data.bottom_description}
        </Grid>
      </Grid>
      <Liberez />
      <Footer />
    </Box>
  );
};

export default ManagePerLaCare;
