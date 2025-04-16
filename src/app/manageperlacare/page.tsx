"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Liberez from "../mainpage/NeManquez";
import Footer from "../mainpage/Footer";
import Header from "../mainpage/Header";
import { useRouter } from "next/navigation";

const ManagePerLaCare: React.FC = () => {
  const [managePage, setManagePage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("manage_per_la" as any);
      setManagePage(response);
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

  const headerBackground = managePage[0]?.data?.header_background?.url || "";
  const cardsBackground = managePage[0]?.data?.middle_background?.url || "";
  const contentbackground =
    managePage[0]?.data?.square_brackets_background?.url || "";

  const videoUrl = modulesPage[0]?.data.video?.url;

  const [clicked, setClicked] = useState<number | null>(1);
  const handleColor = (index: number) => {
    setClicked(index);
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

  const isMax8 = useMediaQuery("(min-width:200px)");
  const isMax7 = useMediaQuery("(min-width:750px)");
  const isMax6 = useMediaQuery("(min-width:1200px)");
  const isMax5 = useMediaQuery("(min-width:1370px)");
  const isMax = useMediaQuery("(min-width:1930px)");
  const isMax1 = useMediaQuery("(min-width:2050px)");
  const isMax2 = useMediaQuery("(min-width:2570px)");
  const isMax3 = useMediaQuery("(min-width:2890px)");
  const isMax4 = useMediaQuery("(min-width:3210px)");

  const isMin = useMediaQuery("(max-width:800px)");

  const theme = useTheme();

  // Media queries for breakpoints
  const isExtraSmall = useMediaQuery(theme.breakpoints.only("xs")); // 'xs' (0px - 600px)
  const isSmall = useMediaQuery(theme.breakpoints.only("sm")); // 'sm' (600px - 960px)
  const isMedium = useMediaQuery(theme.breakpoints.only("md")); // 'md' (960px - 1280px)
  const isLarge = useMediaQuery(theme.breakpoints.only("lg")); // 'lg' (1280px - 1920px)
  const isExtraLarge = useMediaQuery(theme.breakpoints.up("xl")); // 'xl' (1920px and above)

  // Define responsive styles
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
      padding: isMin ? "8px" : "25px",
      borderRadius: "8px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
    },
    topLeft: {
      top: isExtraSmall
        ? "5%"
        : isSmall
          ? "8%" //10
          : isMedium
            ? "2%"
            : isLarge
              ? "0%"
              : isExtraLarge
                ? "0%"
                : "0%",
      left: isExtraSmall
        ? "3%"
        : isSmall
          ? "10%"
          : isMedium
            ? "5%"
            : isLarge
              ? "0%"
              : isExtraLarge
                ? "0%"
                : "0%",
      width: isExtraSmall
        ? "80%"
        : isSmall
          ? "50%"
          : isMedium
            ? "45%"
            : isLarge
              ? "50%"
              : isExtraLarge
                ? "50%"
                : "50%",
    },
    topRight: {
      top: isExtraSmall
        ? "32%"
        : isSmall
          ? "32%" //33
          : isMedium
            ? "30%"
            : isLarge
              ? "32%"
              : isExtraLarge
                ? isMax
                  ? "25%"
                  : "28%"
                : "35%",
      right: isExtraSmall
        ? "3%"
        : isSmall
          ? "10%"
          : isMedium
            ? "5%"
            : isLarge
              ? "0%"
              : isExtraLarge
                ? "5%"
                : "5%",
      width: isExtraSmall
        ? "80%"
        : isSmall
          ? "50%"
          : isMedium
            ? "45%"
            : isLarge
              ? "50%"
              : isExtraLarge
                ? "50%"
                : "65%",
    },
    bottomLeft: {
      top: isExtraSmall
        ? "53%"
        : isSmall
          ? "53%" //50
          : isMedium
            ? "55%"
            : isLarge
              ? "60%"
              : isExtraLarge
                ? isMax
                  ? "50%"
                  : "52%"
                : "65%",
      left: isExtraSmall
        ? "3%"
        : isSmall
          ? "10%"
          : isMedium
            ? "5%"
            : isLarge
              ? "0%"
              : isExtraLarge
                ? "0%"
                : "0%",
      width: isExtraSmall
        ? "80%"
        : isSmall
          ? "50%"
          : isMedium
            ? "45%"
            : isLarge
              ? "50%"
              : isExtraLarge
                ? "50%"
                : "65%",
    },
    bottomRight: {
      top: isExtraSmall
        ? "78%"
        : isSmall
          ? "74%" //70
          : isMedium
            ? "80%"
            : isLarge
              ? "90%"
              : isExtraLarge
                ? isMax
                  ? "75%"
                  : "80%"
                : "100%",
      right: isExtraSmall
        ? "3%"
        : isSmall
          ? "10%"
          : isMedium
            ? "5%"
            : isLarge
              ? "0%"
              : isExtraLarge
                ? "5%"
                : "5%",
      width: isExtraSmall
        ? "80%"
        : isSmall
          ? "50%"
          : isMedium
            ? "45%"
            : isLarge
              ? "50%"
              : isExtraLarge
                ? "50%"
                : "65%",
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
      transform: hoveredCard === index ? "scale(1.05)" : "scale(1)",
      boxShadow:
        hoveredCard === index
          ? "0px 8px 20px rgba(35, 107, 121, 0.2)"
          : "0px 4px 12px rgba(35, 107, 121, 0.1)",
    };
  };

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/contact");
  };

  const description = managePage[0]?.data.top_left_description;

  const highlightWords = ["UN BESOIN D'AIDE ACCRU-"] as const;

  type HighlightWord = (typeof highlightWords)[number];

  const fontMap: Record<
    HighlightWord,
    { fontWeight: number; marginBottom: string }
  > = {
    "UN BESOIN D'AIDE ACCRU-": { fontWeight: 700, marginBottom: "0px" },
  };

  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const formatText = (text: string) => {
    return text
      .split(new RegExp(`(${highlightWords.map(escapeRegExp).join("|")})`, "g"))
      .map((part, index) =>
        highlightWords.includes(part as HighlightWord) ? (
          <span
            key={index}
            style={{
              display: "block",
              fontWeight: fontMap[part as HighlightWord].fontWeight,
              marginBottom: fontMap[part as HighlightWord].marginBottom,
            }}
          >
            {part}
          </span>
        ) : (
          part
        )
      );
  };

  return (
    <div>
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
          {managePage.map((post: any) => (
            <>
              <Grid
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: {
                    xs: "70px 50px 0px 50px",
                    sm: "150.67px 150px 0px 150px",
                    lg: "350px 150px 0px 150px",
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
                      lg: "41px 152px 74px 152px",
                      xl: "21px 82px 21px 82px",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      // fontFamily: "DM Serif Display",
                      fontFamily: "Mulish",
                      color: "#292F36",
                      // fontWeight: 700,
                      fontWeight: 700,
                      fontSize: {
                        xs: "16px",
                        sm: "40px",
                        lg: "34px", 
                        // xl: "50px",
                        xl: "59px",
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
                    sx={{
                      // fontFamily: "Jost",
                      fontFamily: "Mulish",
                      color: "#4D5053",
                      fontWeight: 400,
                      fontSize: {
                        xs: "10px",
                        sm: "18px",
                        lg: "18px",
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
            padding: {
              xs: "5%",
              sm: "5%",
              lg: "50px",
              xl: "50px 100px", //80px
            },
          }}
        >
          {managePage.map((post: any) => (
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
                  gap: { xs: "20px", sm: "20px", lg: "50px", xl: "80px" },
                }}
              >
                <Grid item xl={7} lg={7} xs={12} sm={7}>
                  {managePage.map((post: any, index: any) => (
                    <Typography
                      key={index}
                      sx={{
                        fontFamily: "Mulish",
                        // fontWeight: 700,
                        fontWeight: 600,
                        fontSize: {
                          xs: "30px",
                          sm: "40px",
                          lg: "40px",
                          // xl: "50px",
                          xl: "55px",
                        },
                        lineHeight: {
                          xs: "35px",
                          sm: "48px",
                          lg: "1.5em",
                          // xl: "125%",
                          xl: "1.5em",
                        },
                        color: "#292F36",
                        letterSpacing: "2%",
                        paddingRight: { xl: "100px" },
                      }}
                    >
                      {post.data.top_left_title}
                    </Typography>
                  ))}
                  <Typography
                    sx={{
                      fontFamily: "Mulish",
                      color: "#237D6C",
                      // fontWeight: 700,
                      fontWeight: 500,
                      fontSize: {
                        xs: "12px",
                        sm: "18px",
                        lg: "18px",
                        // xl: "24px",
                        xl: "21px",
                      },
                      lineHeight: {
                        xs: "18px",
                        sm: "25px",
                        lg: "1.5em",
                        // xl: "1.5",
                        xl: "1.5em",
                      },
                      paddingTop: "30px",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {/* {post.data.top_left_description} */}
                    {formatText(description)}
                  </Typography>
                  <Grid sx={{ paddingTop: { lg: "20px", xl: "0px" } }}>
                    {managePage.map((post: any) => (
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
                            md: "220.47px",
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
                  </Grid>
                </Grid>

                <Grid
                  item
                  xl={5}
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
          {managePage.map((post: any) => (
            <Grid
              key={post}
              sx={{
                margin: {
                  xs: "0px",
                  sm: "0px",
                  lg: "0px 200px 107px 200px",
                  xl: "0px 270px 80px 270px",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#24535C",
                  fontFamily: "Mulish",
                  // fontWeight: 800,
                  fontWeight: 600,
                  fontSize: { xs: "30px", sm: "32px", lg: "32px", xl: "32px" }, //xl: "64px"
                  lineHeight: {
                    xs: "50px",
                    sm: "50px",
                    lg: "1.5em",
                    // xl: "80.32px",
                    xl: "1.5em",
                  },
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
                  backgroundImage: `url(${cardsBackground})`,
                  height: "auto",
                  width: "100%",
                  backgroundPosition: "center",
                  backgroundSize: {
                    xs: "contain",
                    sm: "contain",
                    lg: "contain",
                    xl: "contain",
                  },
                  backgroundRepeat: "no-repeat",
                  marginTop: { xs: "0px", sm: "0px", lg: "50px", xl: "80px" },
                }}
              >
                <div style={styles.container}>
                  <Card
                    style={getCardStyle(
                      { ...styles.card, ...styles.topLeft },
                      0
                    )}
                    onMouseEnter={() => handleMouseEnter(0)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Mulish",
                        opacity: "90%",
                        color: "#1E1E1E",
                        fontWeight: 500,
                        // lineHeight: "auto",
                        lineHeight: "1.5em",
                        letterSpacing: "0%",
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          lg: "16px",
                          md: "16px",
                          // xl: "32px",
                          xl: "21px",
                        },
                      }}
                      component="div"
                    >
                      {post.data.card_title1}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Mulish",
                        opacity: "80%",
                        color: "#1E1E1E",
                        fontWeight: 500,
                        // lineHeight: "185%",
                        lineHeight: "1.9em",
                        letterSpacing: "-4%",
                        fontStyle: "italic",
                        marginTop: {
                          xs: "0px",
                          sm: "8px",
                          lg: "24px",
                          xl: "24px",
                        },
                        fontSize: {
                          xs: "10px",
                          sm: "10px",
                          lg: "10px",
                          md: "10px",
                          // xl: "19.5px",
                          xl: "17px",
                        },
                      }}
                      color="textSecondary"
                    >
                      {post.data.card_description1}
                    </Typography>
                  </Card>
                  <Card
                    style={getCardStyle(
                      { ...styles.card, ...styles.topRight },
                      1
                    )}
                    onMouseEnter={() => handleMouseEnter(1)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Mulish",
                        opacity: "90%",
                        color: "#1E1E1E",
                        fontWeight: 500,
                        // lineHeight: "auto",
                        lineHeight: "1.5em",
                        letterSpacing: "0%",
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          lg: "16px",
                          md: "16px",
                          // xl: "32px",
                          xl: "21px",
                        },
                      }}
                      component="div"
                    >
                      {post.data.card_title2}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Mulish",
                        opacity: "80%",
                        color: "#1E1E1E",
                        fontWeight: 500,
                        // lineHeight: "185%",
                        lineHeight: "1.9em",
                        letterSpacing: "-4%",
                        fontStyle: "italic",
                        marginTop: {
                          xs: "0px",
                          sm: "8px",
                          lg: "24px",
                          xl: "24px",
                        },
                        fontSize: {
                          xs: "10px",
                          sm: "10px",
                          lg: "10px",
                          md: "10px",
                          // xl: "19.5px",
                          xl: "17px",
                        },
                      }}
                      color="textSecondary"
                    >
                      {post.data.card_description2}
                    </Typography>
                  </Card>
                  <Card
                    style={getCardStyle(
                      { ...styles.card, ...styles.bottomLeft },
                      2
                    )}
                    onMouseEnter={() => handleMouseEnter(2)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Mulish",
                        opacity: "90%",
                        color: "#1E1E1E",
                        fontWeight: 500,
                        // lineHeight: "auto",
                        lineHeight: "1.5em",
                        letterSpacing: "0%",
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          lg: "16px",
                          md: "16px",
                          // xl: "32px",
                          xl: "21px",
                        },
                      }}
                      component="div"
                    >
                      {post.data.card_title3}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Mulish",
                        opacity: "80%",
                        color: "#1E1E1E",
                        fontWeight: 500,
                        // lineHeight: "185%",
                        lineHeight: "1.9em",
                        letterSpacing: "-4%",
                        fontStyle: "italic",
                        marginTop: {
                          xs: "0px",
                          sm: "8px",
                          lg: "24px",
                          xl: "24px",
                        },
                        fontSize: {
                          xs: "10px",
                          sm: "10px",
                          lg: "10px",
                          md: "10px",
                          // xl: "19.5px",
                          xl: "17px",
                        },
                      }}
                      color="textSecondary"
                    >
                      {post.data.card_description3}
                    </Typography>
                  </Card>
                  <Card
                    style={getCardStyle(
                      { ...styles.card, ...styles.bottomRight },
                      3
                    )}
                    onMouseEnter={() => handleMouseEnter(3)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Mulish",
                        opacity: "90%",
                        color: "#1E1E1E",
                        fontWeight: 500,
                        // lineHeight: "auto",
                        lineHeight: "1.5em",
                        letterSpacing: "0%",
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          lg: "16px",
                          md: "16px",
                          // xl: "32px",
                          xl: "21px",
                        },
                      }}
                      component="div"
                    >
                      {post.data.card_title4}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "Mulish",
                        opacity: "80%",
                        color: "#1E1E1E",
                        fontWeight: 500,
                        // lineHeight: "185%",
                        lineHeight: "1.9em",
                        letterSpacing: "-4%",
                        fontStyle: "italic",
                        marginTop: {
                          xs: "0px",
                          sm: "8px",
                          lg: "24px",
                          xl: "24px",
                        },
                        fontSize: {
                          xs: "10px",
                          sm: "10px",
                          lg: "10px",
                          md: "10px",
                          // xl: "19.5px",
                          xl: "17px",
                        },
                      }}
                      color="textSecondary"
                    >
                      {post.data.card_description4}
                    </Typography>
                  </Card>
                </div>
              </Grid>
            </Grid>
          ))}

          <Grid container>
            <Grid
              sx={{
                margin: {
                  xs: "100px 0px 0px 0px",
                  sm: "0px",
                  lg: "50px 100px 50px 100px",
                  md: "280px 50px 153px 50px",
                  xl: isMax
                    ? "0px 200px 50px 200px"
                    : "0px 200px 50px 200px",
                },
              }}
            >
              <Grid
                item
                lg={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Typography
                  sx={{
                    color: "#0A1411",
                    fontFamily: "Mulish",
                    fontSize: {
                      xs: "32px",
                      sm: "32px",
                      lg: "32px",
                      // xl: "64px",
                      xl: "32px",
                    },
                    // fontWeight: 700,
                    fontWeight: 600,
                    lineHeight: "1.5em",
                  }}
                >
                  {modulesPage[0]?.data.heading}
                </Typography>
              </Grid>
              <Grid
                item
                lg={12}
                sx={{
                  marginTop: {
                    xs: "30px",
                    sm: "30px",
                    lg: "50px",
                    xl: isMax ? "50px" : "50px",
                  },
                }}
              >
                <Typography
                  sx={{
                    textAlign: "center",
                    color: "#292F36",
                    fontSize: {
                      xs: "30px",
                      sm: "34px",
                      lg: "34px",
                      // xl: "50px",
                      xl: "34px",
                    },
                    // fontWeight: 400,
                    fontWeight: 600,
                    letterSpacing: "1%",
                    fontFamily: "Mulish",
                    // lineHeight: "150%",
                    lineHeight: "1.5em",
                  }}
                >
                  {modulesPage[0]?.data.image_title}
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
                    gap: { lg: "60px", xl: "70px" },
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    sm={5}
                    lg={6}
                    xl={5}
                    sx={{
                      height: {
                        xs: "0px",
                        sm: "390px",
                        md: "400px",
                        lg: "490px",
                        // xl: "600px",
                      },
                      overflowY: "auto",
                      scrollbarWidth: "thin",
                    }}
                  >
                    {faqs.slice(0, 3).map((faq, index) => (
                      <div key={index}>
                        <Accordion
                          expanded={clicked === index}
                          style={{
                            backgroundColor: "transparent",
                            boxShadow: "none",
                          }}
                        >
                          <AccordionSummary
                            expandIcon={
                              <KeyboardArrowUpIcon
                                onClick={() => handleColor(index)}
                                sx={{
                                  color:
                                    clicked === index ? "#3D8C6E" : "#292F36",
                                }}
                              />
                            }
                          >
                            <Typography
                              onClick={() => handleColor(index)}
                              sx={{
                                color:
                                  clicked === index ? "#3D8C6E" : "#292F36",
                                // lineHeight: "150%",
                                lineHeight: "1.5em",
                                fontSize: {
                                  xs: "18px",
                                  sm: "14px",
                                  lg: "21px",
                                  md: "14px",
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
                              sx={{
                                color: "#4D5053",
                                fontSize: {
                                  xs: "14px",
                                  sm: "12px",
                                  lg: "17px",
                                  md: "12px",
                                  // xl: "28px",
                                  xl: "17px",
                                },
                                // fontWeight: 400,
                                fontWeight: 500,
                                fontFamily: "Mulish",
                                // lineHeight: "150%",
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
                  <Grid item xs={12} sm={5} lg={6} xl={5}>
                    {modulesPage[0]?.data.image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={modulesPage[0]?.data.image.url || undefined}
                        alt={modulesPage[0]?.data.image.alt || "Image"}
                        width={isMax ? "90%" : isMax8 ? "100%" : "90%"}
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
                    fontSize: {
                      xs: "34px",
                      sm: "34px",
                      lg: "34px",
                      // xl: "50px",
                      xl: "34px",
                    },
                    // fontWeight: 400,
                    fontWeight: 600,
                    marginTop: {
                      xs: "50px",
                      sm: "50px",
                      lg: "50px",
                      xl: isMax ? "50px" : "50px",
                    },
                    letterSpacing: "1%",
                    fontFamily: "Mulish",
                    // lineHeight: "150%",
                    lineHeight: "1.5em",
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
                  <Grid item xs={12} sm={5} lg={6} xl={5}>
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
                    xl={5}
                    sx={{
                      height: {
                        xs: "0px",
                        sm: "400px",
                        md: "400px",
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
                              sx={{
                                color:
                                  clicked1 === index ? "#3D8C6E" : "#292F36",
                                lineHeight: "150%",
                                fontSize: {
                                  xs: "18px",
                                  sm: "14px",
                                  lg: "21px",
                                  md: "14px",
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
                              sx={{
                                color: "#4D5053",
                                fontSize: {
                                  xs: "14px",
                                  sm: "12px",
                                  lg: "17px",
                                  md: "12px",
                                  // xl: "28px",
                                  xl: "17px",
                                },
                                // fontWeight: 400,
                                fontWeight: 500,
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
                backgroundSize: {
                  xs: "contain",
                  sm: "contain",
                  lg: "contain",
                  md: "contain",
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
                  lg: "50px 522px",
                  md: "107px 220px",
                  xl: isMax3
                    ? "50px 622px"
                    : isMax
                      ? "50px 522px"
                      : "0px 522px",
                },
                flexDirection: "column",
              }}
            >
              {managePage.map((post: any) => (
                <>
                  <Grid
                    sx={{
                      padding: {
                        xs: "0px 0px 27px 0px",
                        sm: "20px 0px 27px 0px",
                        lg: "100px 0px 27px 0px",
                        xl: "67px 0px 27px 0px",
                      },
                    }}
                  >
                    {managePage[0]?.data.quote_image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={managePage[0]?.data.quote_image.url || undefined}
                        alt={managePage[0]?.data.quote_image.alt || "Image"}
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
                        // fontWeight: 400,
                        fontWeight: 300,
                        fontSize: {
                          xs: "28px",
                          sm: "35px",
                          lg: "35px",
                          // xl: "48px",
                          xl: "35px",
                        },
                        lineHeight: {
                          xs: "30px",
                          sm: "45px",
                          lg: "125%",
                          // xl: "125%",
                          xl: "1.5em",
                        },
                        textAlign: "center",
                        padding: {
                          xs: "0px 20px 0px 20px",
                          sm: "0px 82px 34px 82px",
                          lg: "0px 82px 34px 82px",
                          xl: "0px 82px 34px 82px",
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
                        // fontFamily: "Jost",
                        fontFamily: "Mulish",
                        color: "#4D5053",
                        // fontWeight: 400,
                        fontWeight: 700,
                        fontSize: {
                          xs: "14px",
                          sm: "17px",
                          lg: "17px",
                          // xl: "25px",
                          xl: "17px",
                        },
                        lineHeight: {
                          xs: "18px",
                          sm: "25px",
                          lg: "150%",
                          // xl: "150%",
                          xl: "1.9em",
                        },
                        textAlign: "center",
                        letterSpacing: "1%",
                        padding: {
                          lg: "0px 303px 78px 303px",
                          xl: isMax
                            ? "0px 200px 78px 200px"
                            : "0px 100px 100px 100px",
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
          <Typography
            sx={{
              fontFamily: "Mulish",
              fontSize: { xs: "32px", sm: "32px", lg: "32px", xl: "32px" }, //xl: "64px"
              // fontWeight: 700,
              fontWeight: 600,
              lineHeight: { xs: "45px", sm: "60px", lg: "auto", xl: "1.5em" }, //xl: "auto"
              textAlign: "center",
              padding: {
                xs: "10% 10% 0% 10%",
                sm: "10% 10% 0% 10%",
                lg: "0px 100px 0px 100px",
                xl: "50px 350px 0px 350px",
              },
              color: "#0A1411",
            }}
          >
            {managePage[0]?.data.bottom_title}
          </Typography>

          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              flexDirection: { xs: "column", sm: "row", lg: "row", xl: "row" },
              textAlign: "center",
              margin: {
                lg: "50px 0px",
                xl: isMax ? "50px 0px 50px 0px" : "50px 0px 50px 0px",
              },
            }}
          >
            <Grid item xl={5} lg={5} xs={12} sm={6}>
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
              xl={5}
              lg={5}
              xs={12}
              sm={4}
              sx={{
                alignContent: "center",
                fontSize: { xs: "18px", sm: "18px", lg: "18px", xl: "32px" }, //xl: "35px"
                lineHeight: {
                  xs: "20px",
                  sm: "30px",
                  lg: "1.5em",
                  xl: "1.5em",
                }, //xl: "40px"
                // fontWeight: 400,
                fontWeight: 500,
                textAlign: "justify",
                color: "#24535C",
                fontFamily: "Mulish",
              }}
            >
              {managePage[0]?.data.bottom_description}
            </Grid>
          </Grid>
        </div>
      </div>
      <Liberez />
      <Footer />
    </div>
  );
};

export default ManagePerLaCare;
