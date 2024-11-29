"use client";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Liberez from "@/app/mainpage/NeManquez";
import Footer from "@/app/mainpage/Footer";
import Header from "@/app/mainpage/Header";
import { PrismicNextLink } from "@prismicio/next";
import { client } from "../../../../prismic-configuration";
import { useRouter } from "next/navigation";

export default function BlogsNews() {

  const [blogNewsPage, setBlogNewsPage] = useState<any>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getSingle("blogs_news" as any);
      setBlogNewsPage(response);
    };
    fetchPosts();
  }, []);

  const [contactPage, setContactPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("contact" as any);
      setContactPage(response);
    };
    fetchPosts();
  }, []);

  console.log("bbbbbbbb", blogNewsPage);
  const searchInputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#BBDDD91A",
    borderRadius: "20px",
  };

  const tabs = [blogNewsPage?.data.tags_tab1, blogNewsPage?.data.tags_tab2];

  const [selectedTab, setSelectedTab] = useState<number | null>(0);

  const handleButtonClick = (index: number) => {
    setSelectedTab(index);
  };

  const buttonText: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: 400,
    textTransform: "none",
    margin: "5px",
    border: "none",
    boxShadow: "none",
  };

  const heading: React.CSSProperties = {
    color: "#292F36",
    fontSize: "25px",
    fontWeight: 400,
  };

  const list: React.CSSProperties = {
    color: "#4D5053",
    fontSize: "20px",
    fontWeight: 400,
  };

  const [searchInputValue, setSearchInputValue] = useState("");


  const squareBrackets =
    blogNewsPage?.data?.square_brackets_background?.url || "";

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/contact");
  };

  const socialLinks = [
    {
      platform: "facebook",
      link: contactPage[0]?.data.facebook_link,
      icon: contactPage[0]?.data.facebook,
    },
    {
      platform: "twitter",
      link: contactPage[0]?.data.twitter_link,
      icon: contactPage[0]?.data.twitter,
    },
    {
      platform: "linkedin",
      link: contactPage[0]?.data.linkedin_link,
      icon: contactPage[0]?.data.linked_in,
    },
    {
      platform: "instagram",
      link: contactPage[0]?.data.instagram_link,
      icon: contactPage[0]?.data.instagram,
    },
  ];

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${blogNewsPage?.data?.header_background?.url || ""})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "30%",
        }}
      ></div>
      <Grid container>
        <Grid
          item
          lg={12}
          sx={{
            display: "flex",
            // flexDirection: "row",
            flexDirection: { xs: "column", sm: "column", lg: "row" },
            justifyContent: "space-evenly",
            margin: "5%",
          }}
        >
          <Grid item lg={7}>
            <Typography
              sx={{
                fontSize: { xs: "25px", sm: "40px", lg: "50px" },
                lineHeight: { xs: "30px", sm: "40px", lg: "62.5px" },
              }}
            >
              {blogNewsPage?.data.top_heading}
            </Typography>
            <div style={{ paddingTop: "21px" }}>
              {blogNewsPage?.data.top_image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={blogNewsPage?.data.top_image.url || undefined}
                  alt={blogNewsPage?.data.top_image.alt || "Image"}
                  style={{
                    width: "100%",
                    height: "auto",
                  }}
                />
              )}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "row",
                gap: "50px",
                padding: "2%",
              }}
            >
              {socialLinks.map((social: any, index: any) => (
                <PrismicNextLink key={index} field={social.link}>
                  {social.icon && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={social.icon.url || undefined}
                      alt={social.icon.alt || `${social.platform} icon`}
                    />
                  )}
                </PrismicNextLink>
              ))}
            </div>
            <Grid
              sx={{
                fontSize: "16px",
                fontWeight: 400,
                display: "flex",
                // flexDirection: "row",
                flexDirection: { xs: "column", sm: "row", lg: "row" },
                gap: "20px",
                justifyContent: "space-between",
                color: "#4D5053",
                padding: "2%",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "16px", lg: "22px" },
                  lineHeight: { xs: "16px", sm: "20px", lg: "28px" },
                  color: "#4D5053",
                }}
              >
                {blogNewsPage?.data.date_text}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "16px", lg: "22px" },
                  lineHeight: { xs: "16px", sm: "20px", lg: "28px" },
                  color: "#4D5053",
                }}
              >
                {blogNewsPage?.data.about}
              </Typography>
            </Grid>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "16px", lg: "22px" },
                lineHeight: { xs: "16px", sm: "20px", lg: "28px" },
                color: "#4D5053",
                padding: "2%",
                whiteSpace: "pre-line",
              }}
            >
              {blogNewsPage?.data.top_description}
            </Typography>
            {/* <div
              style={{
                background: "#BBDDD91A",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                padding: "40px 100px",
                borderRadius: "50px",
                margin: "30px 0px 20px 0px ",
              }}
            >
              <div>
                {blogs?.data.quote_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={blogs?.data.quote_image.url || undefined}
                    alt={blogs?.data.quote_image.alt || "Image"}
                  />
                )}
              </div>
              <div>
                {blogs?.data.text_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={blogs?.data.text_image.url || undefined}
                    alt={blogs?.data.text_image.alt || "Image"}
                  />
                )}
              </div>
            </div> */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Grid
                sx={{
                  backgroundImage: `url(${squareBrackets})`,
                  // backgroundSize: "cover",
                  backgroundSize: {
                    xs: "contain",
                    sm: "contain",
                    lg: "contain",
                  },
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  width: "100%",
                  height: "auto",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "10%",
                  flexDirection: "column",
                }}
              >
                <>
                  <div>
                    {blogNewsPage?.data.quote_image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={blogNewsPage?.data.quote_image.url || undefined}
                        alt={blogNewsPage?.data.quote_image.alt || "Image"}
                        width="100%"
                        height="auto"
                      />
                    )}
                  </div>
                  <div>
                    <Typography
                      sx={{
                        fontFamily: "Jenna Sue, sans-serif",
                        color: "#24535C",
                        fontWeight: 400,
                        // fontSize: "48px",
                        fontSize: { xs: "28px", sm: "38px", lg: "48px" },
                        // lineHeight: "60px",
                        lineHeight: { xs: "30px", sm: "45px", lg: "60px" },
                        textAlign: "center",
                        // padding: "20% 15%",
                        padding: {
                          xs: "12%",
                          sm: "12%",
                          lg: "12%",
                        },
                      }}
                    >
                      {blogNewsPage?.data.quote_text}
                    </Typography>
                  </div>
                </>
              </Grid>
            </Box>
          </Grid>
          <Grid
            item
            lg={4}
            style={{
              marginTop: "20px",
            }}
          >
            <div>
              <TextField
                // value={blogs?.data.text_field}
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                placeholder="Search"
                variant="outlined"
                sx={{
                  ...searchInputStyle,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent", // Initial border color
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent", // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent", // Focused border color
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: "#24535C" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div
              style={{
                background: "#FFF4EF",
                padding: "30px 60px",
                borderRadius: "20px",
                marginTop: "20px",
              }}
            >
              <Typography style={{ ...heading, marginBottom: "30px" }}>
                {blogNewsPage?.data.card_heading}
              </Typography>
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <div key={index}>
                    <div
                      style={{
                        padding: "30px 0px",
                      }}
                    >
                      <div style={list}>
                        {blogNewsPage?.data.card_title_lists}
                      </div>
                      <div style={{ float: "right" }}>
                        {blogNewsPage?.data.card_date_lists}
                      </div>
                    </div>
                    <hr style={{ border: "1px solid #24535C" }} />
                  </div>
                ))}
            </div>
            {/* <div
              style={{
                background: "#BBDDD91A",
                borderRadius: "20px",
                padding: "27px 32px",
                marginTop: "50px",
              }}
            >
              <div style={heading}>{blogs?.data.categories}</div>
              <div style={{ marginTop: "30px" }}>
                {categories.map((category, index) => (
                  <div key={index} style={list}>
                    {category}
                    {index < categories.length - 1 && (
                      <hr
                        style={{
                          border: "1px solid #24535C",
                          margin: "15px 0px 15px 0px",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div> */}
            {/* <div>
              <div style={{ ...heading, marginTop: "50px" }}>
                {blogs?.data.tags}
              </div>
              <div style={{ marginTop: "20px" }}>
                {tabs.map((label: string, index: number) => (
                  <Button
                    key={index}
                    sx={{
                      backgroundColor:
                        selectedTab === index ? "#292F36" : "#BBDDD91A",
                      color: selectedTab === index ? "#FFFFFF" : "#000000",
                      ...buttonText,
                      "&:hover": {
                        backgroundColor:
                          selectedTab === index ? "#24535C" : "transparent",
                      },
                    }}
                    onClick={() => handleButtonClick(index)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div> */}
          </Grid>
        </Grid>
        <Grid
          item
          lg={8}
          xs={12}
          sm={12}
          style={{
            margin: "0% 5%",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "40px", lg: "50px" },
              lineHeight: { xs: "30px", sm: "40px", lg: "62.5px" },
            }}
          >
            {blogNewsPage?.data.bottom_heading}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "20px", lg: "25px" },
              lineHeight: { xs: "25px", sm: "30px", lg: "40px" },
              padding: "10px 0px 10px 0px",
              color: "#4D5053",
            }}
          >
            {blogNewsPage?.data.bottom_description1}
          </Typography>
          <div>
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div key={index}>
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", sm: "20px", lg: "25px" },
                      lineHeight: { xs: "25px", sm: "30px", lg: "40px" },
                      padding: "10px 0px 10px 0px",
                      color: "#4D5053",
                    }}
                  >
                    {index + 1}.{blogNewsPage?.data.bottom_points}
                  </Typography>
                </div>
              ))}
          </div>
          <div style={{ margin: "40px 0px 40px 0px" }}>
            {blogNewsPage?.data.bottom_image && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={blogNewsPage?.data.bottom_image.url || undefined}
                alt={blogNewsPage?.data.bottom_image.alt || "Image"}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            )}
          </div>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "20px", lg: "25px" },
              lineHeight: { xs: "25px", sm: "30px", lg: "40px" },
              padding: "10px 0px 10px 0px",
              color: "#4D5053",
              marginBottom: "60px",
            }}
          >
            {blogNewsPage?.data.bottom_description2}
          </Typography>
          <div style={{ margin: "30px 0px" }}>
              <Button
                style={{
                  display: "flex",
                  flexDirection: "row",
                  background: "#24535C",
                  borderRadius: "82px",
                  marginTop: "20px",
                  justifyContent: "space-around",
                }}
                // onClick={handleNavigation}
              >
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: "12px", sm: "18px", lg: "20px" },
                    lineHeight: { xs: "8px", sm: "12px", lg: "18.24px" },
                    color: "#FFFFFF",
                  }}
                >
                  {blogNewsPage?.data.button_text}
                </Typography>
                {blogNewsPage?.data.button_icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={blogNewsPage?.data.button_icon.url || undefined}
                    alt={blogNewsPage?.data.button_icon.alt || "Image"}
                    style={{
                      width: "20%",
                      height: "auto",
                    }}
                  />
                )}
              </Button>
          </div>
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "30px", lg: "40px" },
              lineHeight: { xs: "30px", sm: "40px", lg: "50px" },
              marginBottom: "60px",
            }}
          >
            {blogNewsPage?.data.bottom_title}
          </Typography>
          <hr style={{ border: "1px solid #24535C" }} />
          <Grid
            sx={{
              display: "flex",
              // flexDirection: "row",
              flexDirection: { xs: "column", sm: "row", lg: "row" },
              padding: "5% 0%",
              textAlign: "center",
            }}
          >
            <div
              style={{
                padding: "2% 3%",
                fontSize: "20px",
                fontWeight: 400,
                color: "#000000",
              }}
            >
              {blogNewsPage?.data.tags}
            </div>
            {tabs.slice(0, 5).map((label: string, index: number) => (
              <Button
                key={index}
                sx={{
                  backgroundColor:
                    selectedTab === index ? "#292F36" : "#BBDDD91A",
                  color: selectedTab === index ? "#FFFFFF" : "#000000",
                  ...buttonText,
                  "&:hover": {
                    backgroundColor:
                      selectedTab === index ? "#292F36" : "transparent",
                  },
                }}
                onClick={() => handleButtonClick(index)}
              >
                {label}
              </Button>
            ))}
          </Grid>
          <hr style={{ border: "1px solid #24535C" }} />
        </Grid>
      </Grid>
      <Liberez />
      <Footer />
    </div>
  );
}
