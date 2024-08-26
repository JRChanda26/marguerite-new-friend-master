import { createClient } from "@/prismicio";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

export default async function Questions() {
  const client = createClient();
  const settings = await client.getSingle("questions");

  const faqs = [
    {
      question: settings.data.question,
      answer: settings.data.answer,
    },
    {
      question: settings.data.question,
      answer: settings.data.answer,
    },
    {
      question: settings.data.question,
      answer: settings.data.answer,
    },
    {
      question: settings.data.question,
      answer: settings.data.answer,
    },
  ];

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
          <Grid item lg={5}>
            <h1
              style={{
                color: "#14292D",
                fontSize: "64px",
                fontWeight: 700,
              }}
            >
              <PrismicRichText field={settings.data.heading} />
            </h1>

            <PrismicNextLink
              field={settings.data.button_link}
              style={{
                textDecoration: "none",
                border: "1px solid #24535C",
                color: "#24535C",
                padding: "5px 10px",
                borderRadius: "10px",
              }}
            >
              {settings.data.button_text}
            </PrismicNextLink>
            {settings.data.image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={settings.data.image.url || undefined}
                alt={settings.data.image.alt || "Image"}
                style={{
                  width: "50vw",
                  height: "60vh",
                }}
              />
            )}
          </Grid>
          <Grid item lg={7}>
            {faqs.map((faq, index) => (
              <Accordion
                key={index}
                style={{
                  marginTop: "30px",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                  padding: "10px 20px",
                }}
              >
                <AccordionSummary expandIcon={<AddIcon />}>
                  <Typography
                    style={{
                      color: "#161C2D",
                      fontSize: "18px",
                      fontWeight: 700,
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
