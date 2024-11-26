"use client";
import { createClient } from "@/prismicio";
import { Grid, Typography } from "@mui/material";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function BlogEt() {
  // const client = createClient();
  // const settings = await client.getSingle("nos_actes");

  const [blogPage, setBlogPage] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const data = await client.getSingle("blog_et" as any);
      setBlogPage(data);
    }
    fetchData();
  }, []);

  const title: React.CSSProperties = {
    color: "#161C2D",
    fontSize: "21.27px",
    fontWeight: 700,
    lineHeight: "25.52px",
    textAlign: "left",
    paddingTop: "2%",
  };

  const description: React.CSSProperties = {
    color: "#161C2DB8",
    fontSize: "18.61px",
    fontWeight: 400,
    lineHeight: "29.78px",
    textAlign: "left",
    paddingTop: "5%",
  };

  const items = [
    {
      image: blogPage?.data.card_image,
      title: blogPage?.data.card_title,
      description: blogPage?.data.card_description,
    },
  ];

  const repeatItems = Array.from({ length: 3 }, () => items[0]);

  const [isHovered, setIsHovered] = useState(null);

  return (
    <div>
      <Grid
        container
        justifyContent="center"
        style={{
          background: "#BBDDD9",
          padding: "20px",
          marginTop: "10px",
        }}
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography
            sx={{
              // fontSize: "48px",
              fontWeight: 700,
              // lineHeight: "58px",
              fontSize: { xs: "28px", md: "45px", lg: "65px" },
              lineHeight: { xs: "30px", md: "50px", lg: "80px" },
              color: "#000000",
              padding: "5%",
            }}
          >
            {blogPage?.data.heading}
          </Typography>
        </Grid>

        {/* Responsive layout for items */}
        <Grid
          container
          item
          lg={12}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {repeatItems.map((item, index: any) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3.5}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              style={{
                background: "#FFFFFF",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: isHovered === index ? "scale(1.05)" : "scale(1)",
                boxShadow:
                  isHovered === index
                    ? "0 8px 16px rgba(0, 0, 0, 0.2)"
                    : "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              {item.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image.url || undefined}
                  alt={item.image.alt || "Image"}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
              )}
              <Typography style={title}>{item.title}</Typography>
              <Typography style={description}>{item.description}</Typography>
              <div
                style={{
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  visibility: isHovered === index ? "visible" : "hidden",
                  opacity: isHovered === index ? 1 : 0,
                  transition: "opacity 0.3s ease, visibility 0.3s ease",
                  paddingTop: "5%",
                }}
              >
                <Link
                  href={"/blogs/blog"}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    style={{
                      textDecoration: "none",
                      color: "#24535C",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "25.9px",
                    }}
                  >
                    {blogPage?.data.link_text}
                  </Typography>
                  {blogPage?.data.link_icon && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={blogPage.data.link_icon.url || undefined}
                      alt={blogPage.data.link_icon.alt || "Image"}
                      style={{
                        width: "48px",
                        height: "24px",
                      }}
                    />
                  )}
                </Link>
              </div>
            </Grid>
          ))}
        </Grid>
        <Typography
          style={{
            fontFamily: "Jenna Sue",
            color: "#24535C",
            fontSize: "44px",
            lineHeight: "44px",
            textAlign: "center",
            textDecoration: "underline",
            paddingTop: "5%",
          }}
        >
          {blogPage?.data.footer_text}
        </Typography>
      </Grid>
    </div>
  );
}
