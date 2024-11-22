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

export default function Questions() {
  // const client = createClient();
  // const settings = await client.getSingle("questions");

  const [questionPage, setQuestionPage] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const data = await client.getSingle("questions");
      setQuestionPage(data);
    }
    fetchData();
  },[]);

  const faqs = [
    {
      question: questionPage?.data.question1,
      answer: questionPage?.data.answer1,
    },
    {
      question: questionPage?.data.question2,
      answer: questionPage?.data.answer2,
    },
    {
      question: questionPage?.data.question3,
      answer: questionPage?.data.answer3,
    },
    {
      question: questionPage?.data.question4,
      answer: questionPage?.data.answer4,
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
          // md={6}
          lg={12}
          sx={{
            display: "flex",
            // flexDirection: "row",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
          }}
        >
          <Grid item lg={6}>
            <Typography
              style={{
                color: "#14292D",
                fontSize: "64px",
                fontWeight: 700,
                fontFamily: "Mulish",
                lineHeight: "76.8px",
                marginLeft: "50px",
              }}
            >
              {questionPage?.data.heading}
            </Typography>
            <Typography
              style={{
                color: "#161C2DB8",
                fontSize: "34px",
                fontWeight: 400,
                fontFamily: "Mulish",
                lineHeight: "36.8px",
                marginLeft: "50px",
                marginTop:'20px'
              }}
            >
              {questionPage?.data.description}
            </Typography>
            <Button
              style={{
                textDecoration: "none",
                border: "1px solid #24535C",
                color: "#24535C",
                padding: "15px 25px",
                borderRadius: "10px",
                marginLeft: "50px",
                marginTop:'80px',
                fontFamily: "Mulish",
                lineHeight: "26px",
                fontSize: "21.67px",
                textTransform:'none'
              }}
              onClick={handleNavigation}
            >
              {questionPage?.data.button_text}
            </Button>
            {questionPage?.data.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={questionPage?.data.image.url || undefined}
                alt={questionPage?.data.image.alt || "Image"}
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop: "100px",
                }}
              />
            )}
          </Grid>
          <Grid item lg={6} md={6} xs={12} sm={12}>
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
                    style={{
                      color: "#161C2D",
                      fontSize: "18px",
                      fontWeight: 700,
                      lineHeight: "21.6px",
                      fontFamily: "Mulish",
                    }}
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography
                    style={{
                      color: "#161C2DB8",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "28.8px",
                      fontFamily: "Mulish",
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
