"use client"
import { createClient } from "@/prismicio";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
} from "@mui/material";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Questions() {
  const client = createClient();
  // const settings = await client.getSingle("questions");

  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const data = await client.getSingle("questions" as any);
      setSettings(data);
    }
    fetchData();
  });

  const faqs = [
    {
      question: settings?.data.question,
      answer: settings?.data.answer,
    },
    {
      question: settings?.data.question2,
      answer: settings?.data.answer2,
    },
    {
      question: settings?.data.question3,
      answer: settings?.data.answer3,
    },
    {
      question: settings?.data.question4,
      answer: settings?.data.answer4,
    }
  ];

  const [clicked, setClicked] = useState<{ [key: number]: boolean }>({ 1: true });

  const handleClicked = (index:any) => {
    setClicked((prev:any) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Grid item lg={6}>
            <div
              style={{
                color: "#14292D",
                fontSize: "64px",
                fontWeight: 700,
                fontFamily:'Mulish',
                lineHeight:'76.8px',
                marginLeft:'50px'
              }}
            >
              <PrismicRichText field={settings?.data.heading} />
            </div>
            <PrismicNextLink
              field={settings?.data.button_link}
              style={{
                textDecoration: "none",
                border: "1px solid #24535C",
                color: "#24535C",
                padding: "15px 25px",
                borderRadius: "10px",
                marginLeft:'50px',
                fontFamily:'Mulish',
                lineHeight:'26px',
                fontSize:'21.67px'
              }}
            >
              {settings?.data.button_text}
            </PrismicNextLink>
            {settings?.data.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={settings?.data.image.url || undefined}
                alt={settings?.data.image.alt || "Image"}
                style={{
                  width: "100%",
                  height: "auto",
                  marginTop:'100px'
                }}
              />
            )}
          </Grid>
          <Grid item lg={6}>
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
                <AccordionSummary expandIcon={clicked[index] ? <RemoveIcon /> : <AddIcon />} >
                  <Typography
                    style={{
                      color: "#161C2D",
                      fontSize: "18px",
                      fontWeight: 700,
                      lineHeight:'21.6px',
                      fontFamily:'Mulish'
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
                      lineHeight:'28.8px',
                      fontFamily:'Mulish'
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
