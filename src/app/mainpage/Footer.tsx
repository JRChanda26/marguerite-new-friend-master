"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Grid, Typography } from "@mui/material";
import { PrismicNextLink } from "@prismicio/next";

const Footer: React.FC = () => {
  const [footerPage, setFooterPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("footer" as any);
      setFooterPage(response);
    };

    fetchData();
  }, []);

  const [socialLinkPage, setSocialLinkPage] = useState<any[]>([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("contact" as any);
      setSocialLinkPage(response);
    };
    fetchData();
  }, []);

  const allLinkText = [
    footerPage[0]?.data.link_text1,
    footerPage[0]?.data.link_text2,
    footerPage[0]?.data.link_text3,
    footerPage[0]?.data.link_text4,
    footerPage[0]?.data.link_text5,
    footerPage[0]?.data.link_text6,
    footerPage[0]?.data.link_text7,
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#24535C",
        padding: {
          xs: "5%",
          sm: "5%",
          lg: "120px 80px 100px 80px",
          xl: "167px 152px 164px 121px",
        },
        // mt: 4,
      }}
    >
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="flex-start"
        sx={{ margin: "1 auto" }}
      >
        <Grid
          item
          xs={12}
          sm={6}
          lg={4}
          textAlign={{ xs: "center", sm: "left" }}
        >
          {footerPage.map((post, postIndex) => (
            <div key={postIndex}>
              {post?.data.marguerite_logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.data.marguerite_logo.url || undefined}
                  alt={post.data.marguerite_logo.alt || "Logo"}
                  style={{
                    height: "auto",
                    width: "147px",
                  }}
                />
              )}
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  color: "#FFFFFF",
                  fontWeight: 400,
                  fontSize: { xs: "16px", sm: "18px", md: "19.84px" },
                  lineHeight: "auto",
                  paddingTop: "10px",
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                {post?.data.description}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  mt: 2,
                  gap: "20px",
                }}
              >
                <PrismicNextLink field={socialLinkPage[0]?.data.linkedin_link}>
                  {post?.data.linkedin_icon && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.data.linkedin_icon.url || undefined}
                      alt={post.data.linkedin_icon.alt || "LinkedIn"}
                      style={{ width: "24px", height: "24px" }}
                    />
                  )}
                </PrismicNextLink>
                <PrismicNextLink field={socialLinkPage[0]?.data.twitter_link}>
                  {post?.data.twitter_icon && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.data.twitter_icon.url || undefined}
                      alt={post.data.twitter_icon.alt || "Twitter"}
                      style={{ width: "24px", height: "24px" }}
                    />
                  )}
                </PrismicNextLink>
              </Box>
            </div>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          {allLinkText.slice(0, 4).map((text: any, index: number) => (
            <Typography
              key={index}
              sx={{
                fontFamily: "Mulish",
                color: "#D3DDDE",
                fontWeight: 400,
                fontSize: { xs: "18px", md: "24.8px", lg: "24.8px" },
                lineHeight: "auto",
                paddingBottom: "19.84px",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              {text}
            </Typography>
          ))}
        </Grid>
        <Grid item xs={12} sm={6} lg={3}>
          {allLinkText.slice(4).map((text: any, index: number) => (
            <Typography
              key={index}
              sx={{
                fontFamily: "Mulish",
                color: "#D3DDDE",
                fontWeight: 400,
                fontSize: { xs: "18px", md: "24.8px", lg: "24.8px" },
                lineHeight: "auto",
                paddingBottom: "19.84px",
                textAlign: { xs: "center", sm: "left" },
              }}
            >
              {text}
            </Typography>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
