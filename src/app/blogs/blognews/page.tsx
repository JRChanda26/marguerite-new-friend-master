"use client";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import Liberez from "@/app/mainpage/NeManquez";
import Footer from "@/app/mainpage/Footer";
import Header from "@/app/mainpage/Header";
import { PrismicNextLink } from "@prismicio/next";
import { client } from "../../../../lib/prismic-configuration";
import { useRouter } from "next/navigation";

export default function BlogsNews() {
  const [blogNewsPage, setBlogNewsPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("blogs_news" as any);
      setBlogNewsPage(response);
    };

    fetchData();
  }, []);

  const [contactPage, setContactPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("contact" as any);
      setContactPage(response);
    };
    fetchData();
  }, []);

  const searchInputStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#BBDDD91A",
    borderRadius: "20px",
  };

  const tabs = [
    blogNewsPage[0]?.data.tags_tab1,
    blogNewsPage[0]?.data.tags_tab2,
  ];

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
    // fontSize: "25px",
    // fontWeight: 400,
    fontWeight: 300,
    fontFamily: "var(--font-mulish)",
    lineHeight: "1.1em",
    letterSpacing: "2%",
  };

  const list: React.CSSProperties = {
    color: "#292F36",
    // fontSize: "20px",
    // fontWeight: 400,
    fontWeight: 500,
    fontFamily: "var(--font-mulish)",
    // lineHeight: "125%",
    lineHeight: "1.1em",
    letterSpacing: "2%",
  };

  const [searchInputValue, setSearchInputValue] = useState("");

  const squareBrackets =
    blogNewsPage[0]?.data?.square_brackets_background?.url || "";

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

  const isMax8 = useMediaQuery("(min-width:200px)");
  const isMax7 = useMediaQuery("(min-width:750px)");
  const isMax6 = useMediaQuery("(min-width:1200px)");
  const isMax5 = useMediaQuery("(min-width:1370px)");
  const isMax = useMediaQuery("(min-width:1930px)");
  const isMax1 = useMediaQuery("(min-width:2050px)");
  const isMax2 = useMediaQuery("(min-width:2570px)");
  const isMax3 = useMediaQuery("(min-width:2890px)");
  const isMax4 = useMediaQuery("(min-width:3210px)");

  const isTabScreen = useMediaQuery("(width:768px)");
  // const isBigTabScreen = useMediaQuery("(width:800px)");
  const isBigTabScreen = useMediaQuery("(width: 800px), (width: 820px), (width: 853px)");

  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Header />
      <div
        style={{
          // padding: isMax ? "0px 200px" : "0px 0px",
          padding: isMax4
            ? "0px 450px"
            : isMax3
              ? "0px 320px"
              : isMax2
                ? "0px 250px"
                : isMax1
                  ? "0px 200px"
                  : isMax
                    ? "0px 140px"
                    : isMax5
                      ? "0px 110px"
                      : isMax6
                        ? "0px 65px"
                        : isMax7
                          ? "0px 50px"
                          : isMax8
                            ? "0px 20px"
                            : "0px 0px",
        }}
      >
        <Grid
          sx={{
            backgroundImage: `url(${blogNewsPage[0]?.data?.header_background?.url || ""})`,
            backgroundSize: {
              xs: "cover",
              sm: "cover",
              lg: "cover",
              xl: "cover",
            },
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: {
              xs: "180px",
              sm: "350px",
              lg: "400px",
              // md: "350px",
              xl: "450px",
            },
          }}
        />
        <div
          style={{
            // padding: isMax ? "0px 150px" : "0px 0px",
            padding: isMax4
              ? "0px 300px"
              : isMax3
                ? "0px 280px"
                : isMax2
                  ? "0px 200px"
                  : isMax1
                    ? "0px 150px"
                    : isMax
                      ? "0px 0px"
                      : "0px 0px",
          }}
        >
          <Grid container>
            <Grid
              item
              lg={12}
              sx={{
                display: "flex",
                flexDirection: {
                  xs: "column",
                  sm: isTabScreen||isBigTabScreen ? "column" : "row",
                  // md: "row",
                  lg: "row",
                  xl: "row",
                },
                justifyContent: "space-evenly",
                margin: {
                  xs: "5%",
                  sm: "30px 0px 0px 0px",
                  lg: "50px 0px 0px 0px", //"50px 80px 0px 80px",
                  xl: isMax
                    ? "100px 100px 50px 60px"
                    : "100px 100px 50px 100px",
                },
              }}
            >
              <Grid item lg={7} md={7}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: "20px",
                      sm: "30px",
                      lg: "34px",
                      // xl: "50px",
                      xl: "34px",
                    },
                    lineHeight: {
                      xs: "125%",
                      sm: "125%",
                      lg: "125%",
                      // xl: "125%",
                      xl: "1.5em",
                    },
                    fontWeight: 600,
                    letterSpacing: "2%",
                    fontFamily: "var(--font-mulish)",
                    color: "#292F36",
                    paddingRight: { xl: isMax ? "0px" : "0px" },
                  }}
                >
                  {blogNewsPage[0]?.data.top_heading}
                </Typography>
                <div style={{ paddingTop: "20px" }}>
                  {blogNewsPage[0]?.data.top_image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={blogNewsPage[0]?.data.top_image.url || undefined}
                      alt={blogNewsPage[0]?.data.top_image.alt || "Image"}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  )}
                </div>
                <Grid
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    gap: "50px",
                    padding: {
                      xs: "20px 0px",
                      sm: "20px 0px",
                      lg: "46px 0px",
                      xl: "46px 0px",
                    },
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
                </Grid>
                <Grid
                  sx={{
                    fontSize: "16px",
                    fontWeight: 400,
                    display: "flex",
                    flexDirection: {
                      xs: "column",
                      sm: "row",
                      lg: "row",
                      xl: "row",
                    },
                    gap: "20px",
                    justifyContent: "space-between",
                    color: "#4D5053",
                    padding: "0px 0px",
                  }}
                >
                  <Typography
                    // variant=""
                    sx={{
                      fontSize: {
                        xs: "13px",
                        sm: "17px",
                        lg: "18px",
                        xl: "18px",
                      },
                      lineHeight: {
                        xs: "16px",
                        sm: "20px",
                        lg: "150%",
                        xl: "150%",
                      },
                      color: "#4D5053",
                      letterSpacing: "1%",
                      fontFamily: "var(--font-mulish)",
                    }}
                  >
                    {blogNewsPage[0]?.data.date_text}
                  </Typography>
                  <Typography
                    // variant=""
                    sx={{
                      fontSize: {
                        xs: "13px",
                        sm: "17px",
                        lg: "18px",
                        xl: "18px",
                      },
                      lineHeight: {
                        xs: "16px",
                        sm: "20px",
                        lg: "150%",
                        xl: "150%",
                      },
                      color: "#4D5053",
                      letterSpacing: "1%",
                      fontFamily: "var(--font-mulish)",
                    }}
                  >
                    {blogNewsPage[0]?.data.about}
                  </Typography>
                </Grid>
                <Typography
                  // variant=""
                  sx={{
                    fontSize: {
                      xs: "13px",
                      sm: "17px",
                      lg: "18px",
                      // xl: "22px",
                      xl: "18px",
                    },
                    fontWeight: 500,
                    lineHeight: {
                      xs: "16px",
                      sm: "20px",
                      lg: "150%",
                      // xl: "150%",
                      xl: "1.9em",
                    },
                    color: "#4D5053",
                    letterSpacing: "1%",
                    fontFamily: "var(--font-mulish)",
                    whiteSpace: "pre-line",
                    padding: {
                      xs: "20px 0px",
                      sm: "30px 0px",
                      lg: "50px 0px 50px 0px",
                      xl: "50px 0px 50px 0px",
                    },
                    textAlign: "justify",
                  }}
                >
                  {blogNewsPage[0]?.data.top_description}
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
                        xl: "contain",
                      },
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      width: "100%",
                      height: "auto",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // margin: { sm: "0%" },
                      flexDirection: "column",
                    }}
                  >
                    <>
                      <Grid
                        sx={{
                          padding: {
                            xs: "20px 0px 30px 0px",
                            sm: "50px 153px 27px 153px",
                            lg: "70px 153px 27px 153px",
                            xl: "70px 153px 27px 153px",
                          },
                        }}
                      >
                        {blogNewsPage[0]?.data.quote_image && (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={
                              blogNewsPage[0]?.data.quote_image.url || undefined
                            }
                            alt={
                              blogNewsPage[0]?.data.quote_image.alt || "Image"
                            }
                            width="50%"
                            height="auto"
                          />
                        )}
                      </Grid>
                      <div>
                        <Typography
                          variant="h2"
                          sx={{
                            fontFamily: "Jenna Sue",
                            color: "#24535C",
                            // fontWeight: 400,
                            fontWeight: 300,
                            fontSize: {
                              xs: "20px",
                              sm: "30px",
                              lg: "34px",
                              // xl: "48px",
                              xl: "34px",
                            },
                            lineHeight: {
                              xs: "1.5em",
                              sm: "45px",
                              lg: "60px",
                              // xl: "60px",
                              xl: "1.5em",
                            },
                            textAlign: "center",
                            letterSpacing: "2%",
                            padding: {
                              xs: "0px 20px 50px 20px",
                              sm: "0px 150px 67px 150px",
                              lg: "2px 150px 67px 150px",
                              xl: isMax
                                ? "2px 300px 67px 300px"
                                : "2px 280px 67px 280px",
                            },
                          }}
                        >
                          {blogNewsPage[0]?.data.quote_text}
                        </Typography>
                      </div>
                    </>
                  </Grid>
                </Box>
              </Grid>
              <Grid
                item
                lg={3.5}
                sm={isTabScreen||isBigTabScreen ? 12 : 3}
                xl={isMax ? 2.5 : 3}
                style={{
                  margin: isSmallScreen || isTabScreen||isBigTabScreen ? "30px 0px" : "0px",
                }}
              >
                <div>
                  <TextField
                    value={searchInputValue}
                    onChange={(e) => setSearchInputValue(e.target.value)}
                    placeholder="Search"
                    variant="outlined"
                    sx={{
                      ...searchInputStyle,
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "transparent",
                        },
                        "&:hover fieldset": {
                          borderColor: "transparent",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "transparent",
                        },
                        "& .MuiInputBase-input::placeholder": {
                          fontSize: {
                            xs: "13px",
                            sm: "17px",
                            lg: "18px",
                            xl: "18px",
                          },
                          fontFamily: "var(--font-mulish)",
                        },
                      },
                      height: { lg: "70px", xl: "70px" },
                      width: { lg: "100%", xl: "100%" },
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
                <Grid
                  sx={{
                    background: "#FFF4EF",
                    padding: {
                      xs: "30px 40px",
                      sm: "20px",
                      // md: "15px",
                      lg: "20px 50px",
                      xl: "20px 50px",
                    },
                    borderRadius: "20px",
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      // md: "25px",
                      lg: "25px",
                      xl: "30px",
                    },
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontSize: {
                        xs: "18px",
                        sm: "24px",
                        // md: "28px",
                        lg: "28px",
                        // xl: "35px",
                        xl: "28px",
                      },
                      ...heading,
                      marginBottom: "0px",
                    }}
                  >
                    {blogNewsPage[0]?.data.card_heading}
                  </Typography>
                  {Array(3)
                    .fill(null)
                    .map((_, index) => (
                      <div key={index}>
                        <Grid
                          sx={{
                            padding: {
                              xs: "20px 0px",
                              sm: "20px 0px",
                              // md: "17px 0px",
                              lg: "13px 0px",
                              xl: "22px 5px",
                            },
                          }}
                        >
                          <Typography
                            variant="h4"
                            sx={{
                              fontSize: {
                                xs: "15px",
                                sm: "20px",
                                // md: "21px",
                                lg: "21px",
                                // xl: "30px",
                                xl: "21px",
                              },
                              ...list,
                            }}
                          >
                            {blogNewsPage[0]?.data.card_title_lists}
                          </Typography>
                          <Typography
                            // variant=""
                            sx={{
                              float: "right",
                              fontSize: {
                                xs: "13px",
                                sm: "17px",
                                // md: "18px",
                                lg: "18px",
                                // xl: "20px",
                                xl: "18px",
                              },
                              // fontWeight: 400,
                              fontWeight: 500,
                              fontFamily: "var(--font-mulish)",
                              // lineHeight: "150%",
                              lineHeight: "1.1em",
                              letterSpacing: "1%",
                              color: "#4D5053",
                              marginTop: { xs: "10px" },
                            }}
                          >
                            {blogNewsPage[0]?.data.card_date_lists}
                          </Typography>
                        </Grid>
                        <hr style={{ border: "1px solid #24535C" }} />
                      </div>
                    ))}
                </Grid>
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
              xl={6}
              lg={7}
              // md={6}
              xs={12}
              sm={isTabScreen||isBigTabScreen ? 12 : 7}
              sx={{
                margin: {
                  xs: "0% 7% 3% 7%",
                  sm: isTabScreen||isBigTabScreen ? "20px 0px 0px 0px" : "20px 0px 0px 50px",
                  lg: "50px 0px 50px 50px", //"50px 0px 50px 120px"
                  // md: "50px 0px 50px 50px",
                  xl: "50px 0px 0px 180px",
                },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: "20px", sm: "30px", lg: "34px", xl: "34px" }, //xl: "50px"
                  lineHeight: {
                    xs: "1.5em",
                    sm: "40px",
                    lg: "125%",
                    // xl: "125%",
                    xl: "1.5em",
                  },
                  fontFamily: "var(--font-mulish)",
                  fontWeight: 600,
                  letterSpacing: "2%",
                  color: "#292F36",
                  paddingRight: { sm: "0px", lg: "100px", xl: "300px" },
                }}
              >
                {blogNewsPage[0]?.data.bottom_heading}
              </Typography>
              <Typography
                // variant=""
                sx={{
                  fontSize: { xs: "13px", sm: "17px", lg: "18px", xl: "18px" }, //xl: "22px"
                  lineHeight: {
                    xs: "150%",
                    sm: "30px",
                    lg: "150%",
                    // xl: "150%",
                    xl: "1.9em",
                  },
                  padding: {
                    xs: "20px 0px",
                    sm: "30px 0px",
                    lg: "50px 0px",
                    xl: "50px 0px",
                  },
                  color: "#4D5053",
                  fontFamily: "var(--font-mulish)",
                  letterSpacing: "1%",
                  textAlign: "justify",
                  fontWeight: 500,
                }}
              >
                {blogNewsPage[0]?.data.bottom_description1}
              </Typography>
              <div>
                {Array(3)
                  .fill(null)
                  .map((_, index) => (
                    <div key={index}>
                      <Typography
                        // variant=""
                        sx={{
                          fontSize: {
                            xs: "13px",
                            sm: "17px",
                            lg: "18px",
                            // xl: "22px",
                            xl: "18px",
                          },
                          lineHeight: {
                            xs: "150%",
                            sm: "30px",
                            lg: "150%",
                            // xl: "150%",
                            xl: "1.9em",
                          },
                          padding: "10px 0px 0px 0px",
                          color: "#4D5053",
                          fontFamily: "var(--font-mulish)",
                          letterSpacing: "1%",
                          paddingRight: { lg: "0px", xl: "0px" },
                          textAlign: "justify",
                          fontWeight: 500,
                        }}
                      >
                        {index + 1}.{blogNewsPage[0]?.data.bottom_points}
                      </Typography>
                    </div>
                  ))}
              </div>
              <div style={{ margin: "50px 0px 40px 0px" }}>
                {blogNewsPage[0]?.data.bottom_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={blogNewsPage[0]?.data.bottom_image.url || undefined}
                    alt={blogNewsPage[0]?.data.bottom_image.alt || "Image"}
                    style={{
                      width: "100%",
                      height: "auto",
                    }}
                  />
                )}
              </div>
              <Typography
                // variant=""
                sx={{
                  fontSize: { xs: "13px", sm: "18px", lg: "18px", xl: "18px" }, //xl: "22px"
                  lineHeight: {
                    xs: "150%",
                    sm: "30px",
                    lg: "150%",
                    // xl: "150%",
                    xl: "1.9em",
                  },
                  color: "#4D5053",
                  fontFamily: "var(--font-mulish)",
                  letterSpacing: "1%",
                  textAlign: "justify",
                  fontWeight: 500,
                }}
              >
                {blogNewsPage[0]?.data.bottom_description2}
              </Typography>
              <div
                style={{
                  margin: "50px 0px 50px 0px",
                }}
              >
                <Button
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    background: "#24535C",
                    borderRadius: "82px",
                    marginTop: {
                      xs: "20px",
                      sm: "20px",
                      lg: "45px",
                      xl: "0px",
                    },
                    justifyContent: "space-around",
                    width: {
                      xs: "160px",
                      sm: "250px",
                      lg: "250px",
                      xl: "250px",
                    },
                    height: {
                      xs: "auto",
                      sm: "60px",
                      lg: "70px",
                      xl: "70px",
                    },
                    "&:focus": {
                      background: "#24535C",
                    },
                    "&:hover": {
                      background: "#24535C",
                    },
                  }}
                  // onClick={handleNavigation}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: 400,
                      fontFamily: "var(--font-mulish)",
                      fontSize: {
                        xs: "13px",
                        sm: "20px",
                        lg: "21px",
                        // md: "21px",
                        xl: "21px",
                      },
                      lineHeight: {
                        xs: "8px",
                        sm: "12px",
                        lg: "18.24px",
                        xl: "18.24px",
                      },
                      color: "#FFFFFF",
                    }}
                  >
                    {blogNewsPage[0]?.data.button_text}
                  </Typography>
                  {blogNewsPage[0]?.data.button_icon && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={blogNewsPage[0]?.data.button_icon.url || undefined}
                      alt={blogNewsPage[0]?.data.button_icon.alt || "Image"}
                      style={{
                        width: "20%",
                        height: "auto",
                      }}
                    />
                  )}
                </Button>
              </div>
              <Typography
                variant="h3"
                sx={{
                  fontSize: { xs: "18px", sm: "24px", lg: "28px", xl: "28px" }, //xl: "30px"
                  lineHeight: {
                    xs: "1.1em",
                    sm: "40px",
                    lg: "150%",
                    // xl: "150%",
                    xl: "1.1em",
                  },
                  marginBottom: "62px",
                  color: "#4D5053",
                  fontFamily: "var(--font-mulish)",
                  letterSpacing: "1%",
                  fontWeight: 300,
                }}
              >
                {blogNewsPage[0]?.data.bottom_title}
              </Typography>
              <hr style={{ border: "1px solid #E5E5E5" }} />
              <Grid
                sx={{
                  display: "flex",
                  flexDirection: {
                    xs: "column",
                    sm: "row",
                    lg: "row",
                    xl: "row",
                  },
                  padding: {
                    xs: "3% 0%",
                    sm: "20px 0px",
                    lg: "44px 0px",
                    xl: "44px 0px",
                  },
                  textAlign: "center",
                }}
              >
                <Typography
                  // variant=""
                  sx={{
                    padding: "2% 3%",
                    fontSize: {
                      xs: "13px",
                      sm: "17px",
                      lg: "18px",
                      xl: "18px",
                    },
                    fontWeight: 400,
                    color: "#000000",
                    fontFamily: "var(--font-mulish)",
                    lineHeight: "125%",
                    letterSpacing: "0%",
                  }}
                >
                  {blogNewsPage[0]?.data.tags}
                </Typography>
                {tabs.slice(0, 5).map((label: string, index: number) => (
                  // <Button
                  //   key={index}
                  //   sx={{
                  //     fontWeight: 400,
                  //     fontFamily: "var(--font-mulish)",
                  //     fontSize: {
                  //       xs: "13px",
                  //       sm: "17px",
                  //       lg: "18px",
                  //       xl: "18px",
                  //     },
                  //     lineHeight: {
                  //       xs: "8px",
                  //       sm: "12px",
                  //       lg: "125%",
                  //       xl: "125%",
                  //     },
                  //     letterSpacing: "2%",
                  //     backgroundColor:
                  //       selectedTab === index ? "#292F36" : "#BBDDD91A",
                  //     color: selectedTab === index ? "#FFFFFF" : "#000000",
                  //     ...buttonText,
                  //     "&:hover": {
                  //       backgroundColor:
                  //         selectedTab === index ? "#292F36" : "transparent",
                  //     },
                  //   }}
                  //   onClick={() => handleButtonClick(index)}
                  // >
                  //   {label}
                  // </Button>
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
                    <Typography
                      // variant=""
                      sx={{
                        fontWeight: 400,
                        fontFamily: "var(--font-mulish)",
                        fontSize: {
                          xs: "13px",
                          sm: "17px",
                          lg: "18px",
                          xl: "18px",
                        },
                        lineHeight: {
                          xs: "8px",
                          sm: "12px",
                          lg: "125%",
                          xl: "125%",
                        },
                        letterSpacing: "2%",
                      }}
                    >
                      {label}
                    </Typography>
                  </Button>
                ))}
              </Grid>
              <hr style={{ border: "1px solid #E5E5E5" }} />
            </Grid>
          </Grid>
        </div>
      </div>
      <Liberez />
      <Footer />
    </div>
  );
}
