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
        {nosPage.map((post: any, postIndex: number) => (
          <>
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                padding: {
                  xs: "250.67px 0px 0px 0px",
                  sm: "250.67px 150px 0px 150px",
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
                  textAlign: "center",
                  borderRadius: "37px 37px 0px 0px",
                  padding: {
                    xs: "2% 5%",
                    sm: "2% 5%",
                    lg: "41px 82px 42px 82px",
                    xl: "41px 82px 42px 82px",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "DM Serif Display",
                    color: "#292F36",
                    fontWeight: 700,
                    // fontSize: "50px",
                    fontSize: {
                      xs: "25px",
                      sm: "40px",
                      lg: "50px",
                      xl: "50px",
                    },
                    // lineHeight: "62.5px",
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
                    // fontSize: "22px",
                    fontSize: {
                      xs: "12px",
                      sm: "18px",
                      lg: "22px",
                      xl: "22px",
                    },
                    // lineHeight: "33px",
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
      </div>

      <Grid
        sx={{
          padding: {
            xs: "7%",
            sm: "7%",
            lg: "100px",
            xl: "200px 228px 229px 228px",
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
                gap: "191px",
                alignItems: "center",
              }}
            >
              <Grid item xl={5} lg={5} xs={12} sm={7}>
                {nosPage.map((post: any) => (
                  <Typography
                    key={post}
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
                ))}
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
                    fontFamily: "Jost",
                    color: "#4D5053",
                  }}
                >
                  {post.data.top_left_description}
                </Typography>
                <div style={{ paddingTop: "50px" }}>
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
          padding: { lg: "0px 100px 0px 100px", xl: "0px 363px 0px 363px" },
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
            <Grid
              item
              xs={12}
              sm={5}
              lg={6}
              xl={6}
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
                          // fontSize: "22px",
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

      <Grid container sx={{ padding: { lg: "100px 50px",xl: "228px 156px" } }}>
        {points.map((item, index) => (
          <Grid
            key={index}
            item
            xl={3}
            lg={3}
            md={6}
            sm={6}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{
                background: item.background,
                borderRadius: "42.9px",
                padding: "30px",
                width: "70%",
                textAlign: "center",
                fontFamily: "Mulish",
                fontSize: "18.98px",
                lineHeight: "125%",
                letterSpacing: "2%",
                color: "#000000",
              }}
            >
              {item.heading}
            </Typography>
            <ul>
              {item.points.map((point, idx) => (
                <li key={idx}>
                  <span
                    style={{
                      color: "#4D5053",
                      fontFamily: "Mulish",
                      fontSize: "22px",
                      lineHeight: "150%",
                      letterSpacing: "1%",
                    }}
                  >
                    {point}
                  </span>
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

export default NosSolutionsDe;
