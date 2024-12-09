"use client";
import { createClient } from "@/prismicio";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useRouter } from "next/navigation";
import { client } from "../../../prismic-configuration";

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

  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          xs={12}
          sm={12}
          lg={12}
          xl={12}
          sx={{
            display: "flex",
            // flexDirection: "row",
            flexDirection: { xs: "column", sm: "row", lg: "row", xl: "row" },
            justifyContent: "space-between",
            margin: { lg: "100px 50px 51px 0px", xl: "164px 132px 51px 0px" },
          }}
        >
          <Grid item lg={6}>
            <Typography
              sx={{
                color: "#14292D",
                // fontSize: "64px",
                fontWeight: 700,
                fontFamily: "Mulish",
                // lineHeight: "76.8px",
                fontSize: { xs: "28px", md: "45px", lg: "64px", xl: "64px" },
                lineHeight: { xs: "30px", md: "50px", lg: "120%", xl: "120%" },
                margin: {
                  xs: "0% 0% 0% 10%",
                  sm: "0% 0% 0% 12%",
                  lg: "0px 30px 0px 176px",
                  xl: "0px 150px 0px 176px",
                },
              }}
            >
              {questionPage[0]?.data.heading}
            </Typography>
            <Typography
              sx={{
                color: "#565656",
                // fontSize: "34px",
                fontWeight: 400,
                fontFamily: "Mulish",
                // lineHeight: "36.8px",
                fontSize: { xs: "12px", md: "20px", lg: "24px", xl: "24px" },
                lineHeight: { xs: "20px", md: "20px", lg: "160%", xl: "160%" },
                margin: {
                  xs: "1% 0% 0% 10%",
                  sm: "3% 0% 0% 12%",
                  lg: "63px 0px 0px 176px",
                  xl: "63px 0px 0px 176px",
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
                // padding: "15px 25px",
                padding: { xs: "1% 3%", sm: "2% 5%", lg: "2% 5%", xl: "2% 5%" },
                borderRadius: "10px",
                // marginLeft: "20%",
                // marginTop: "10%",
                margin: {
                  xs: "5% 0% 0% 10%",
                  sm: "5% 0% 0% 12%",
                  lg: "63px 0px 0px 176px",
                  xl: "63px 0px 0px 176px",
                },
                // fontFamily: "Mulish, sans-serif",
                // lineHeight: "26px",
                // fontSize: "21.67px",
                fontSize: { xs: "12px", md: "20px", lg: "25px", xl: "25px" },
                lineHeight: {
                  xs: "20px",
                  md: "20px",
                  lg: "38.4px",
                  xl: "38.4px",
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
                  width: "100%",
                  height: "auto",
                  marginTop: "100px",
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
              paddingRight: { xs: "0%", sm: "0%", lg: "30px", xl: "50px" },
              paddingLeft: { xs: "0%", sm: "0%", lg: "50px", xl: "310px" },
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
                      fontWeight: 700,
                      fontFamily: "Mulish",
                      fontSize: {
                        xs: "14px",
                        md: "14px",
                        lg: "18px",
                        xl: "18px",
                      },
                      lineHeight: {
                        xs: "20px",
                        md: "20px",
                        lg: "120%",
                        xl: "120%",
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
                      fontWeight: 400,
                      fontFamily: "Mulish",
                      fontSize: {
                        xs: "14px",
                        md: "14px",
                        lg: "16px",
                        xl: "16px",
                      },
                      lineHeight: {
                        xs: "20px",
                        md: "20px",
                        lg: "180%",
                        xl: "180%",
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
