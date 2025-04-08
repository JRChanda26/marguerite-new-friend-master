"use client";
import { createClient } from "@/prismicio";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useRouter } from "next/navigation";
import { client } from "../../../lib/prismic-configuration";

export default function Questions() {
  // const client = createClient();
  // const settings = await client.getSingle("questions");

  const [questionPage, setQuestionPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("questions" as any);
      setQuestionPage(response);
    };
    fetchData();
  }, []);

  const faqs = [
    {
      question: questionPage[0]?.data.question1,
      answer: questionPage[0]?.data.answer1,
    },
    {
      question: questionPage[0]?.data.question2,
      answer: questionPage[0]?.data.answer2,
    },
    {
      question: questionPage[0]?.data.question3,
      answer: questionPage[0]?.data.answer3,
    },
    {
      question: questionPage[0]?.data.question4,
      answer: questionPage[0]?.data.answer4,
    },
  ];

  const [clicked, setClicked] = useState<{ [key: number]: boolean }>({
    1: true,
  });

  const handleClicked = (index: any) => {
    setClicked((prev: any) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/contact");
  };

    const isMax5 = useMediaQuery("(min-width:1370px)");
    const isMax = useMediaQuery("(min-width:1930px)");
    const isMax1 = useMediaQuery("(min-width:2050px)");
    const isMax2 = useMediaQuery("(min-width:2570px)");
    const isMax3 = useMediaQuery("(min-width:2890px)");
    const isMax4 = useMediaQuery("(min-width:3210px)");

  return (
    <div
      style={{
        // padding: isMax ? "0px 350px" : "0px 0px",
        padding : isMax4 ? "0px 650px" 
        : isMax3 ? "0px 550px" 
        : isMax2 ? "0px 450px" 
        : isMax1 ? "0px 350px" 
        : isMax ? "0px 140px"  
        : "0px 0px",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          md={12}
          xl={12}
          sx={{
            display: "flex",
            // flexDirection: "row",
            flexDirection: {
              xs: "column",
              sm: "column",
              md: "row",
              lg: "row",
              xl: "row",
            },
            justifyContent: "space-between",
            margin: {
              xs: "30px 0px 30px 0px",
              sm: "50px 0px 50px 0px",
              lg: "100px 50px 51px 0px",
              md: "100px 50px 51px 0px",
              xl: "164px 80px 51px 0px",
            },
          }}
        >
          <Grid item lg={6} md={6}>
            <Typography
              sx={{
                color: "#14292D",
                // fontSize: "64px",
                // fontWeight: 700,
                fontWeight: 600,
                // fontFamily: "Mulish",
                fontFamily: "Helvetica, sans-serif",
                // lineHeight: "76.8px",
                fontSize: {
                  xs: "28px",
                  sm: "45px",
                  md: "45px",
                  lg: "55px",
                  // xl: "64px",
                  xl: "32px",
                },
                lineHeight: {
                  xs: "30px",
                  sm: "50px",
                  md: "120%",
                  lg: "120%",
                  // xl: "120%",
                  xl: "1.5em"
                },
                margin: {
                  xs: "0% 0% 0% 10%",
                  sm: "0% 0% 0% 5%",
                  lg: "0px 30px 0px 100px",
                  md: "0px 30px 0px 80px",
                  xl: isMax ? "0px 130px 0px 0px" : "0px 130px 0px 110px",
                },
              }}
            >
              {questionPage[0]?.data.heading}
            </Typography>
            <Typography
              sx={{
                color: "#565656",
                // fontSize: "34px",
                // fontWeight: 400,
                fontWeight: 500,
                // fontFamily: "Mulish",
                fontFamily: "Helvetica, sans-serif",
                // lineHeight: "36.8px",
                fontSize: {
                  xs: "12px",
                  sm: "20px",
                  md: "20px",
                  lg: "24px",
                  // xl: "24px",
                  xl: "18px" 
                },
                lineHeight: {
                  xs: "20px",
                  sm: "20px",
                  md: "160%",
                  lg: "160%",
                  // xl: "160%",
                  xl: "1.9em",
                },
                margin: {
                  xs: "1% 0% 0% 10%",
                  sm: "3% 0% 0% 5%",
                  lg: "40px 0px 0px 100px",
                  md: "40px 30px 0px 80px",
                  xl: isMax ? "20px 0px 0px 0px" : "20px 0px 0px 110px",
                },
              }}
            >
              {questionPage[0]?.data.description}
            </Typography>
            <Button
              sx={{
                textDecoration: "none",
                border: "1px solid #24535C",
                color: "#24535C",
                fontWeight:500,
                // padding: "15px 25px",
                padding: {
                  xs: "1% 3%",
                  sm: "2% 5%",
                  md: "2% 5%",
                  lg: "2% 5%",
                  xl: "2% 5%",
                },
                borderRadius: "10px",
                // marginLeft: "20%",
                // marginTop: "10%",
                margin: {
                  xs: "5% 0% 0% 10%",
                  sm: "5% 0% 0% 5%",
                  lg: "40px 0px 0px 100px",
                  md: "40px 30px 0px 80px",
                  xl: isMax ? "20px 0px 0px 0px" : "20px 0px 0px 110px",
                },
                // fontFamily: "Mulish, sans-serif",
                // lineHeight: "26px",
                // fontSize: "21.67px",
                fontSize: {
                  xs: "12px",
                  sm: "20px",
                  md: "20px",
                  lg: "25px",
                  // xl: "25px",
                  xl: "20px",
                },
                lineHeight: {
                  xs: "20px",
                  sm: "20px",
                  lg: "38.4px",
                  md: "28.4px",
                  // xl: "38.4px",
                  xl: "1.7em",
                },
                textTransform: "none",
              }}
              onClick={handleNavigation}
            >
              {questionPage[0]?.data.button_text}
            </Button>
            {questionPage[0]?.data.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={questionPage[0]?.data.image.url || undefined}
                alt={questionPage[0]?.data.image.alt || "Image"}
                style={{
                  width: "90%",
                  height: "auto",
                  margin: "100px 0px 0px 110px",
                }}
              />
            )}
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            xs={12}
            sm={12}
            sx={{
              paddingRight: {
                xs: "0%",
                sm: "0%",
                md: "30px",
                lg: "30px",
                xl: "30px",
              },
              paddingLeft: {
                xs: "0%",
                sm: "0%",
                md: "20px",
                lg: "50px",
                xl: "100px",
              },
            }}
          >
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                expanded={!!clicked[index]}
                style={{
                  marginTop: "30px",
                  borderRadius: "15px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                  padding: "20px",
                }}
                onChange={() => handleClicked(index)}
              >
                <AccordionSummary
                  expandIcon={clicked[index] ? <RemoveIcon /> : <AddIcon />}
                >
                  <Typography
                    sx={{
                      color: "#161C2D",
                      // fontWeight: 700,
                      fontWeight: 500,
                      // fontFamily: "Mulish",
                      fontFamily: "Helvetica, sans-serif",
                      fontSize: {
                        xs: "14px",
                        sm: "18px",
                        lg: "18px",
                        md: "14px",
                        // xl: "18px",
                        xl: "21px",
                      },
                      lineHeight: {
                        xs: "20px",
                        md: "20px",
                        lg: "120%",
                        // xl: "120%",
                        xl: "1.5em",
                      },
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    sx={{
                      color: "#161C2D",
                      opacity: "72%",
                      // fontWeight: 400,
                      fontWeight: 500,
                      // fontFamily: "Mulish",
                      fontFamily: "Helvetica, sans-serif",
                      fontSize: {
                        xs: "14px",
                        sm: "16px",
                        lg: "16px",
                        md: "12px",
                        // xl: "16px",
                        xl: "17px",
                      },
                      lineHeight: {
                        xs: "20px",
                        md: "20px",
                        lg: "180%",
                        // xl: "180%",
                        xl: "1.9em",
                      },
                    }}
                  >
                    {faq.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
