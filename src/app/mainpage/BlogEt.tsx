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
    fontWeight: 700,
    textAlign: "left",
    paddingTop: "31.9px",
    fontFamily: "Mulish",
  };

  const description: React.CSSProperties = {
    color: "#161C2DB8",
    fontWeight: 400,
    textAlign: "left",
    paddingTop: "21.27px",
    fontFamily: "Mulish",
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
          // padding: "20px",
          // marginTop: "10px",
        }}
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: {
                xs: "28px",
                sm: "45px",
                lg: "47.85px",
                xl: "47.85px",
              },
              lineHeight: { xs: "30px", sm: "50px", lg: "120%", xl: "120%" },
              color: "#161C2D",
              // padding: "5%",
              fontFamily: "Mulish",
              padding: {
                lg: "100px 448px 79px 448px",
                xl: "159px 448px 79px 448px",
              },
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
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: { lg: "20px", xl: "90px" },
            margin: { lg: "", xl: "0px 161px 79px 161px" },
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
              xl={3.5}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              style={{
                background: "#FFFFFF",
                borderRadius: "21.27px",
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
              <Typography
                sx={{
                  ...title,
                  fontSize: {
                    xs: "14px",
                    sm: "18px",
                    lg: "21.27px",
                    xl: "21.27px",
                  },
                  lineHeight: {
                    xs: "20px",
                    sm: "22px",
                    lg: "120%",
                    xl: "120%",
                  },
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  ...description,
                  fontSize: {
                    xs: "12px",
                    sm: "14px",
                    lg: "18.61px",
                    xl: "18.61px",
                  },
                  lineHeight: {
                    xs: "15px",
                    sm: "25px",
                    lg: "160%",
                    xl: "160%",
                  },
                }}
              >
                {item.description}
              </Typography>
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
        <Link href="/blogs/blog" style={{ textDecoration: "none" }}>
          <Typography
            sx={{
              // fontFamily: "Jenna Sue",
              fontFamily: "Mulish",
              color: "#FFFFFF",
              fontSize: { xs: "20px", sm: "25px", lg: "30px", xl: "30px" },
              textAlign: "center",
              // textDecoration: "underline",
              borderRadius: "12px",
              padding: "8px 15px",
              background: "#24535C",
              margin: { lg: "50px 0px  100px 0px", xl: "0px 0px  159px 0px" },
            }}
          >
            {blogPage?.data.footer_text}
          </Typography>
        </Link>
      </Grid>
    </div>
  );
}
