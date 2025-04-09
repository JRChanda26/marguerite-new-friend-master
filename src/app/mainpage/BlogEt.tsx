"use client";
import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import { useRouter } from "next/navigation";

export default function BlogEt() {
  const [blogPage, setBlogPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("blog_et" as any);
      setBlogPage(response);
    };
    fetchData();
  }, []);

  const title: React.CSSProperties = {
    color: "#161C2D",
    fontWeight: 700,
    textAlign: "left",
    paddingTop: "31.9px",
    fontFamily: "Mulish",
    // fontFamily: "Helvetica, sans-serif",
  };

  const description: React.CSSProperties = {
    color: "#161C2DB8",
    // fontWeight: 400,
    fontWeight: 500,
    textAlign: "left",
    paddingTop: "21.27px",
    fontFamily: "Mulish",
    // fontFamily: "Helvetica, sans-serif",
  };

  const items = [
    {
      image: blogPage[0]?.data.card_image,
      title: blogPage[0]?.data.card_title,
      description: blogPage[0]?.data.card_description,
    },
  ];

  const repeatItems = Array.from({ length: 3 }, () => items[0]);

  const [isHovered, setIsHovered] = useState(null);

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/blogs/blog");
  };


  const isMax = useMediaQuery("(min-width:1930px)");
  const isMax1 = useMediaQuery("(min-width:2050px)");
  const isMax2 = useMediaQuery("(min-width:2570px)");
  const isMax3 = useMediaQuery("(min-width:2890px)");
  const isMax4 = useMediaQuery("(min-width:3210px)");

  return (
    <div
      style={{
        // padding: isMax ? "0px 350px" : "0px 0px",
        padding: isMax4
          ? "0px 650px"
          : isMax3
            ? "0px 550px"
            : isMax2
              ? "0px 450px"
              : isMax1
                ? "0px 350px"
                : isMax
                  ? "0px 140px"
                  : "0px 0px",
        background: isMax ? "#BBDDD9" : "#FFFFFF",
      }}
    >
      <Grid
        container
        justifyContent="center"
        style={{
          background: "#BBDDD9",
        }}
      >
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Typography
            sx={{
              // fontWeight: 700,
              fontWeight: 600,
              fontSize: {
                xs: "28px",
                sm: "45px",
                lg: "32px",
                // xl: "47.85px",
                xl: "32px",
              },
              lineHeight: { xs: "30px", sm: "50px", lg: "120%", xl: "1.5em" }, //xl: "120%"
              color: "#161C2D",
              fontFamily: "Mulish",
              // fontFamily: "Helvetica, sans-serif",
              padding: {
                xs: "20px 0px",
                sm: "50px 0px",
                lg: "79px 200px 79px 200px",
                md: "70px 100px 50px 100px",
                xl: "79px 448px 79px 448px",
              },
            }}
          >
            {blogPage[0]?.data.heading}
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
            gap: { xs: "30px", sm: "30px", lg: "20px", xl: "50px" },
            margin: {
              xs: "0px 30px 50px 30px",
              sm: "",
              lg: "",
              // xl: "0px 161px 79px 161px",
              xl: "0px 100px 79px 100px",
            },
          }}
        >
          {repeatItems.map((item, index: any) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={5.5}
              lg={3.5}
              md={3.5}
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
                    // marginBottom: "10px",
                  }}
                />
              )}
              <Typography
                sx={{
                  ...title,
                  fontSize: {
                    xs: "14px",
                    sm: "18px",
                    lg: "17px",
                    // xl: "21.27px",
                    xl: "20px",
                  },
                  lineHeight: {
                    xs: "20px",
                    sm: "22px",
                    lg: "120%",
                    // xl: "120%",
                    xl: "1.5em",
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
                    lg: "14px",
                    // xl: "18.61px",
                    xl: "17px",
                  },
                  lineHeight: {
                    xs: "15px",
                    sm: "20px",
                    lg: "160%",
                    // xl: "160%",
                    xl: "26px",
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
                    {blogPage[0]?.data.link_text}
                  </Typography>
                  {blogPage[0]?.data.link_icon && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={blogPage[0]?.data.link_icon.url || undefined}
                      alt={blogPage[0]?.data.link_icon.alt || "Image"}
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
        <Button
          sx={{
            fontFamily: "Mulish",
            // fontFamily: "Helvetica, sans-serif",
            color: "#FFFFFF",
            fontSize: { xs: "14px", sm: "25px", lg: "20px", xl: "20px" }, //xl: "30px"
            textAlign: "center",
            borderRadius: "12px",
            padding: "8px 15px",
            background: "#24535C",
            margin: {
              xs: "0px 0px  50px 0px",
              sm: "20px 0px  50px 0px",
              lg: "0px 0px  50px 0px",
              xl: isMax ? "0px 0px  80px 0px" : "0px 0px  79px 0px",
            },
            textTransform: "none",
            "&:focus": {
              background: "#24535C",
            },
            "&:hover": {
              background: "#24535C",
            },
          }}
          onClick={handleNavigation}
        >
          {blogPage[0]?.data.footer_text}
        </Button>
      </Grid>
    </div>
  );
}
