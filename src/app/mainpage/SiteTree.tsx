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

const SiteTree: React.FC = () => {
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

  const theme = useTheme();

  // Media queries for breakpoints
  const isExtraSmall = useMediaQuery(theme.breakpoints.only("xs")); // 'xs' (0px - 600px)
  const isSmall = useMediaQuery(theme.breakpoints.only("sm")); // 'sm' (600px - 960px)
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
      padding: "25px",
      borderRadius: "8px",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
      backgroundColor: "#fff",
    },
    topLeft: {
      top: isExtraSmall
        ? "5%"
        : isSmall
          ? "10%"
          : isLarge
            ? "0%"
            : isExtraLarge
              ? "0%"
              : "0%",
      left: isExtraSmall
        ? "3%"
        : isSmall
          ? "10%"
          : isLarge
            ? "0%"
            : isExtraLarge
              ? "5%"
              : "5%",
      width: isExtraSmall
        ? "80%"
        : isSmall
          ? "50%"
          : isLarge
            ? "70%"
            : isExtraLarge
              ? "50%"
              : "50%",
    },
    topRight: {
      top: isExtraSmall
        ? "32%"
        : isSmall
          ? "33%"
          : isLarge
            ? "35%"
            : isExtraLarge
              ? "30%"
              : "30%",
      right: isExtraSmall
        ? "3%"
        : isSmall
          ? "10%"
          : isLarge
            ? "0%"
            : isExtraLarge
              ? "5%"
              : "5%",
      width: isExtraSmall
        ? "80%"
        : isSmall
          ? "50%"
          : isLarge
            ? "70%"
            : isExtraLarge
              ? "50%"
              : "50%",
    },
    bottomLeft: {
      top: isExtraSmall
        ? "53%"
        : isSmall
          ? "50%"
          : isLarge
            ? "65%"
            : isExtraLarge
              ? "60%"
              : "60%",
      left: isExtraSmall
        ? "3%"
        : isSmall
          ? "10%"
          : isLarge
            ? "0%"
            : isExtraLarge
              ? "5%"
              : "5%",
      width: isExtraSmall
        ? "80%"
        : isSmall
          ? "50%"
          : isLarge
            ? "70%"
            : isExtraLarge
              ? "50%"
              : "50%",
    },
    bottomRight: {
      top: isExtraSmall
        ? "78%"
        : isSmall
          ? "70%"
          : isLarge
            ? "100%"
            : isExtraLarge
              ? "90%"
              : "90%",
      right: isExtraSmall
        ? "3%"
        : isSmall
          ? "10%"
          : isLarge
            ? "0%"
            : isExtraLarge
              ? "5%"
              : "5%",
      width: isExtraSmall
        ? "80%"
        : isSmall
          ? "50%"
          : isLarge
            ? "70%"
            : isExtraLarge
              ? "50%"
              : "50%",
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
    "UN BESOIN D'AIDE ACCRU-": { fontWeight: 700, marginBottom: "28px" },
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
    <Box sx={{}}>
    
   

   

      {managePage.map((post: any) => (
        <Grid
          key={post}
          sx={{
            margin: {
                xs: "5% 10% 2% 10%",
                sm: "5% 10% 2% 10%",
                lg: "5% 10%",
                xl: "5% 273px 3%px 379px",
            },
          }}
        >
          <Typography
            sx={{
              color: "#24535C",
              fontFamily: "Mulish",
              fontWeight: 800,
              fontSize: { xs: "30px", sm: "50px", lg: "64px", xl: "64px" },
              lineHeight: {
                xs: "50px",
                sm: "65px",
                lg: "80.32px",
                xl: "80.32px",
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
              marginTop: { xs: "0px", sm: "0px", lg: "50px", xl: "107px" },
            }}
          >
            <div style={styles.container}>
              <Card
                style={getCardStyle({ ...styles.card, ...styles.topLeft }, 0)}
                onMouseEnter={() => handleMouseEnter(0)}
                onMouseLeave={handleMouseLeave}
              >
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    opacity: "90%",
                    color: "#1E1E1E",
                    lineHeight: "auto",
                    letterSpacing: "0%",
                    fontSize: {
                      xs: "16px",
                      sm: "20px",
                      lg: "32px",
                      xl: "32px",
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
                    lineHeight: "185%",
                    letterSpacing: "-4%",
                    fontStyle: "italic",
                    marginTop: { xs: "0px", sm: "8px", lg: "24px", xl: "24px" },
                    fontSize: {
                      xs: "10px",
                      sm: "14px",
                      lg: "19.5px",
                      xl: "19.5px",
                    },
                  }}
                  color="textSecondary"
                >
                  {post.data.card_description1}
                </Typography>
              </Card>
              <Card
                style={getCardStyle({ ...styles.card, ...styles.topRight }, 1)}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <Typography
                  sx={{
                    fontFamily: "Mulish",
                    opacity: "90%",
                    color: "#1E1E1E",
                    lineHeight: "auto",
                    letterSpacing: "0%",
                    fontSize: {
                      xs: "16px",
                      sm: "20px",
                      lg: "32px",
                      xl: "32px",
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
                    lineHeight: "185%",
                    letterSpacing: "-4%",
                    fontStyle: "italic",
                    marginTop: { xs: "0px", sm: "8px", lg: "24px", xl: "24px" },
                    fontSize: {
                      xs: "10px",
                      sm: "14px",
                      lg: "19.5px",
                      xl: "19.5px",
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
                    lineHeight: "auto",
                    letterSpacing: "0%",
                    fontSize: {
                      xs: "16px",
                      sm: "20px",
                      lg: "32px",
                      xl: "32px",
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
                    lineHeight: "185%",
                    letterSpacing: "-4%",
                    fontStyle: "italic",
                    marginTop: { xs: "0px", sm: "8px", lg: "24px", xl: "24px" },
                    fontSize: {
                      xs: "10px",
                      sm: "14px",
                      lg: "19.5px",
                      xl: "19.5px",
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
                    lineHeight: "auto",
                    letterSpacing: "0%",
                    fontSize: {
                      xs: "16px",
                      sm: "20px",
                      lg: "32px",
                      xl: "32px",
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
                    lineHeight: "185%",
                    letterSpacing: "-4%",
                    fontStyle: "italic",
                    marginTop: { xs: "0px", sm: "8px", lg: "24px", xl: "24px" },
                    fontSize: {
                      xs: "10px",
                      sm: "14px",
                      lg: "19.5px",
                      xl: "19.5px",
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

  
   
     

      
    
    </Box>
  );
};

export default SiteTree;
