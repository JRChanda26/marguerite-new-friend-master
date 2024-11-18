"use client";
import { createClient } from "@/prismicio";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { PrismicRichText } from "@prismicio/react";
import Liberez from "@/app/mainpage/Liberez";
import Footer from "@/app/mainpage/Footer";
import Header from "@/app/mainpage/Header";
import { PrismicNextLink } from "@prismicio/next";
import { client } from "../../../../prismic-configuration";
import { useRouter } from "next/navigation";

export default function BlogsNews() {
  const [blogs, setBlogs] = useState<any>(null);
  const [liberez, setLiberez] = useState<any>(null);
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("contact" as any);
      setPosts(response);
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const [blogsData, liberezData] = await Promise.all([
        client.getSingle("blogs_news" as any),
        client.getSingle("liberez" as any),
      ]);
      setBlogs(blogsData);
      setLiberez(liberezData);
    }
    fetchData().catch((error) => console.error("Error fetching data:", error));
  }, []);

  const searchInputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#BBDDD91A",
    borderRadius: "20px",
  };

  const tabs = [
    blogs?.data.tags_tab1,
    blogs?.data.tags_tab2,
    blogs?.data.tags_tab3,
    blogs?.data.tags_tab4,
    blogs?.data.tags_tab5,
    blogs?.data.tags_tab6,
  ];

  const [selectedTab, setSelectedTab] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedTab(index);
  };

  const categories = [
    blogs?.data.categories_list1,
    blogs?.data.categories_list2,
    blogs?.data.categories_list3,
    blogs?.data.categories_list4,
  ];

  const title: React.CSSProperties = {
    color: "#292F36",
    fontSize: "50px",
    fontWeight: 400,
  };

  const description: React.CSSProperties = {
    color: "#4D5053",
    fontSize: "22px",
    fontWeight: 400,
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

  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "60px",
    background: "linear-gradient(to right, #F6C09E 60%, #24535C 40%)",
    margin: "auto",
  };

  const leftSectionStyle: React.CSSProperties = {
    flex: 1,
    color: "#161C2D",
    padding: "10px",
  };

  const rightSectionStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: "50px",
  };

  const titleStyle: React.CSSProperties = {
    color: "#24535C",
    fontSize: "41.81px",
    fontWeight: 700,
    lineHeight: "52.47px",
  };

  const descriptionStyle: React.CSSProperties = {
    color: "#24535C",
    fontSize: "23.52px",
    fontWeight: 400,
    lineHeight: "37.63px",
  };

  const [inputValue, setInputValue] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");

  const [posts1, setPosts1] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType(
        "managementbycare" as any
      );
      setPosts1(response);
    };

    fetchPosts();
  }, []);

  const contentbackground = blogs?.data?.box_image?.url || "";

  const router = useRouter();

  const handleNavigation = () => {
    router.push("/contact");
  };

  const socialLinks = [
    {
      platform: "facebook",
      link: posts[0]?.data.facebook_link,
      icon: posts[0]?.data.facebook,
    },
    {
      platform: "twitter",
      link: posts[0]?.data.twitter_link,
      icon: posts[0]?.data.twitter,
    },
    {
      platform: "linkedin",
      link: posts[0]?.data.linked_in_link,
      icon: posts[0]?.data.linked_in,
    },
    {
      platform: "instagram",
      link: posts[0]?.data.instagram_link,
      icon: posts[0]?.data.instagram,
    },
  ];

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${blogs?.data?.banner?.url || ""})`,
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
            marginTop: "50px",
          }}
        >
          <Grid item lg={7}>
            <Typography
              sx={{
                fontSize: { xs: "25px", sm: "40px", lg: "50px" },
                lineHeight: { xs: "30px", sm: "40px", lg: "62.5px" },
              }}
            >
              {blogs?.data.title1}
            </Typography>
            <div style={{ paddingTop: "21px" }}>
              {blogs?.data.image1 && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={blogs?.data.image1.url || undefined}
                  alt={blogs?.data.image1.alt || "Image"}
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
                {blogs?.data.date_text}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "12px", sm: "16px", lg: "22px" },
                  lineHeight: { xs: "16px", sm: "20px", lg: "28px" },
                  color: "#4D5053",
                }}
              >
                {blogs?.data.about}
              </Typography>
            </Grid>
            <Typography
              sx={{
                fontSize: { xs: "12px", sm: "16px", lg: "22px" },
                lineHeight: { xs: "16px", sm: "20px", lg: "28px" },
                color: "#4D5053",
                padding: "2%",
              }}
            >
              {blogs?.data.description1}
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
              <div
                style={{
                  backgroundImage: `url(${contentbackground})`,
                  backgroundSize: "cover",
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
                    {blogs?.data.quote_image && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={blogs?.data.quote_image.url || undefined}
                        alt={blogs?.data.quote_image.alt || "Image"}
                        width="100%"
                        height="auto"
                      />
                    )}
                  </div>
                  <div>
                    <Typography
                      sx={{
                        fontFamily: "Jenna Sue, sans-serif",
                        color: "#0A1411",
                        fontWeight: 400,
                        // fontSize: "48px",
                        fontSize: { xs: "28px", sm: "38px", lg: "48px" },
                        // lineHeight: "60px",
                        lineHeight: { xs: "30px", sm: "45px", lg: "60px" },
                        textAlign: "center",
                        // padding: "20% 15%",
                        padding: { xs: "12% 10%", sm: "39% 10%", lg: "19% 18%" },
                      }}
                    >
                      {blogs?.data.quote_text}
                    </Typography>
                  </div>
                </>
              </div>
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
                {blogs?.data.latest_news}
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
                      <div style={list}>{blogs?.data.news_lists}</div>
                      <div style={{ float: "right" }}>
                        {blogs?.data.date_lists}
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
            padding: "2%",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "28px", sm: "40px", lg: "50px" },
              lineHeight: { xs: "30px", sm: "40px", lg: "62.5px" },
            }}
          >
            {blogs?.data.title2}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", sm: "20px", lg: "25px" },
              lineHeight: { xs: "25px", sm: "30px", lg: "40px" },
              padding: "10px 0px 10px 0px",
              color: "#4D5053",
            }}
          >
            {blogs?.data.description2}
          </Typography>
          <div>
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div key={index}>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", sm: "16px", lg: "18px" },
                      lineHeight: { xs: "15px", sm: "20px", lg: "30px" },
                      padding: "10px 0px 10px 0px",
                      color: "#4D5053",
                    }}
                  >
                    {index + 1}. {blogs?.data.points}
                  </Typography>
                </div>
              ))}
          </div>
          <div style={{ margin: "40px 0px 40px 0px" }}>
            {blogs?.data.image2 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={blogs?.data.image2.url || undefined}
                alt={blogs?.data.image2.alt || "Image"}
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
            {blogs?.data.description3}
          </Typography>
          <div style={{ margin: "30px 0px" }}>
            {posts1.map((post: any) => (
              <Button
                key={post}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  background: "#24535C",
                  padding: "16px 24px 16px 24px",
                  gap: "18px",
                  borderRadius: "82px",
                }}
                onClick={handleNavigation}
              >
                <Typography
                  style={{
                    fontWeight: 400,
                    fontSize: "15.2px",
                    lineHeight: "18.24px",
                    color: "#FFFFFF",
                  }}
                >
                  {post.data.buttontext}
                </Typography>
                {post?.data.buttonimage && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post?.data.buttonimage.url || undefined}
                    alt={post?.data.buttonimage.alt || "Image"}
                    style={{
                      background: "#82C5BE",
                      borderRadius: "15.9px",
                      padding: "7.29px",
                      width: "9.27px",
                      height: "9.27px",
                    }}
                  />
                )}
              </Button>
            ))}
          </div>
          <Typography
            sx={{
              fontSize: { xs: "24px", sm: "30px", lg: "40px" },
              lineHeight: { xs: "30px", sm: "40px", lg: "50px" },
              marginBottom: "60px",
            }}
          >
            {blogs?.data.last_heading}
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
              {blogs?.data.tags}
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
                      selectedTab === index ? "#24535C" : "transparent",
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
