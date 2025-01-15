"use client";
import { Button, Grid, Typography } from "@mui/material";
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
    // fontFamily: "Mulish",
    fontFamily: "Helvetica, sans-serif",
  };

  const description: React.CSSProperties = {
    color: "#161C2DB8",
    fontWeight: 400,
    textAlign: "left",
    paddingTop: "21.27px",
    // fontFamily: "Mulish",
    fontFamily: "Helvetica, sans-serif",
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

  return (
    <div>
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
              fontWeight: 700,
              fontSize: {
                xs: "28px",
                sm: "45px",
                lg: "47.85px",
                xl: "47.85px",
              },
              lineHeight: { xs: "30px", sm: "50px", lg: "120%", xl: "120%" },
              color: "#161C2D",
              // fontFamily: "Mulish",
              fontFamily: "Helvetica, sans-serif",
              padding: {
                xs: "20px 0px",
                sm: "50px 0px",
                lg: "100px 448px 79px 448px",
                xl: "159px 448px 79px 448px",
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
            gap: { xs: "30px", sm: "30px", lg: "20px", xl: "90px" },
            margin: {
              xs: "0px 30px 50px 30px",
              sm: "",
              lg: "",
              xl: "0px 161px 79px 161px",
            },
          }}
        >
          {repeatItems.map((item, index: any) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={5.5}
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
                    sm: "20px",
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
            // fontFamily: "Mulish",
            fontFamily: "Helvetica, sans-serif",
            color: "#FFFFFF",
            fontSize: { xs: "14px", sm: "25px", lg: "30px", xl: "30px" },
            textAlign: "center",
            borderRadius: "12px",
            padding: "8px 15px",
            background: "#24535C",
            margin: {
              xs: "0px 0px  50px 0px",
              sm: "20px 0px  50px 0px",
              lg: "50px 0px  100px 0px",
              xl: "0px 0px  159px 0px",
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
