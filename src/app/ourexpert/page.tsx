"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import {
  Box,
  Button,
  Card,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { useRouter } from "next/navigation";
import { PrismicNextLink } from "@prismicio/next";
import Header from "../mainpage/Header";
import Footer from "../mainpage/Footer";
import Liberez from "../mainpage/NeManquez";
const OurExperts: React.FC = () => {
  const [leCarePage, setLeCarePage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("le_care_chez" as any);
      setLeCarePage(response);
    };

    fetchData();
  }, []);

  const [modulesPage, setModulesPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType(
        "interactive_learning_modules" as any
      );
      setModulesPage(response);
    };
    fetchData();
  }, []);

  const personCards = [
    {
      id: 1,
      profile: leCarePage[0]?.data?.profile_picture1?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook1,
      twitterLink: leCarePage[0]?.data.profile_twitter1,
      linkedinLink: leCarePage[0]?.data.profile_linkedin1,
      instagramLink: leCarePage[0]?.data.profile_instagram1,
    },
    {
      id: 2,
      profile: leCarePage[0]?.data?.profile_picture2?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook2,
      twitterLink: leCarePage[0]?.data.profile_twitter2,
      linkedinLink: leCarePage[0]?.data.profile_linkedin2,
      instagramLink: leCarePage[0]?.data.profile_instagram2,
    },
    {
      id: 3,
      profile: leCarePage[0]?.data?.profile_picture3?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook3,
      twitterLink: leCarePage[0]?.data.profile_twitter3,
      linkedinLink: leCarePage[0]?.data.profile_linkedin3,
      instagramLink: leCarePage[0]?.data.profile_instagram3,
    },
    {
      id: 4,
      profile: leCarePage[0]?.data?.profile_picture4?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook4,
      twitterLink: leCarePage[0]?.data.profile_twitter4,
      linkedinLink: leCarePage[0]?.data.profile_linkedin4,
      instagramLink: leCarePage[0]?.data.profile_instagram4,
    },
    {
      id: 5,
      profile: leCarePage[0]?.data?.profile_picture5?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook5,
      twitterLink: leCarePage[0]?.data.profile_twitter5,
      linkedinLink: leCarePage[0]?.data.profile_linkedin5,
      instagramLink: leCarePage[0]?.data.profile_instagram5,
    },
    {
      id: 6,
      profile: leCarePage[0]?.data?.profile_picture6?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook6,
      twitterLink: leCarePage[0]?.data.profile_twitter6,
      linkedinLink: leCarePage[0]?.data.profile_linkedin6,
      instagramLink: leCarePage[0]?.data.profile_instagram6,
    },
    {
      id: 7,
      profile: leCarePage[0]?.data?.profile_picture7?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook7,
      twitterLink: leCarePage[0]?.data.profile_twitter7,
      linkedinLink: leCarePage[0]?.data.profile_linkedin7,
      instagramLink: leCarePage[0]?.data.profile_instagram7,
    },
    {
      id: 8,
      profile: leCarePage[0]?.data?.profile_picture8?.url || "",
      name: leCarePage[0]?.data.profile_name1,
      details: leCarePage[0]?.data.profile_details1,
      phone: leCarePage[0]?.data.profile_phone1,
      email: leCarePage[0]?.data.profile_email1,
      facebookLink: leCarePage[0]?.data.profile_facebook8,
      twitterLink: leCarePage[0]?.data.profile_twitter8,
      linkedinLink: leCarePage[0]?.data.profile_linkedin8,
      instagramLink: leCarePage[0]?.data.profile_instagram8,
    },
  ];

  const [flippedStates, setFlippedStates] = useState(
    Array(personCards.length).fill(false)
  );

  const handleFlipCard = (index: any) => {
    setFlippedStates((prevStates) =>
      prevStates.map((flipped, i) => (i === index ? !flipped : flipped))
    );
  };

  const middleBackground = leCarePage[0]?.data?.middle_background?.url || "";

  const designerNameStyle: React.CSSProperties = {
    fontFamily: "DM Serif Display",
    fontWeight: 400,
    lineHeight: "37.5px",
    letterSpacing: "1%",
    textAlign: "center",
    color: "#292F36",
  };

  const designerDetailsStyle: React.CSSProperties = {
    fontFamily: "Jost",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "1%",
    textAlign: "center",
    color: "#4D5053",
  };

  const isXl = useMediaQuery("(max-width:1920px)");
  const isLg = useMediaQuery("(max-width:1360px)");
  const isMd = useMediaQuery("(max-width:992px)");
  const isSm = useMediaQuery("(max-width:768px)");
  const isXs = useMediaQuery("(max-width:576px)");

  const getDimensions = () => {
    if (isXs) return { width: "150px", height: "250px" };
    if (isSm) return { width: "200px", height: "320px" };
    if (isMd) return { width: "250px", height: "400px" };
    if (isLg) return { width: "220px", height: "333px" };
    if (isXl) return { width: "283.55px", height: "433px" };
    return { width: "283.55px", height: "433px" };
  };

  const dimensions = getDimensions();

  const getRightImageHeight = () => {
    if (isXs) return { height: "100%" };
    if (isSm) return { height: "48%" };
    if (isLg) return { height: "51%" };
    if (isXl) return { height: "62%" };
  };

  const getMiddleImageHeight = () => {
    if (isXs) return { height: "100%" };
    if (isSm) return { height: "90%" };
    if (isLg) return { height: "88%" };
    if (isXl) return { height: "auto" };
  };

  const profileNameFontSize = {
    fontSize: isXs ? "20px" : "25px",
  };

  const profileDetailsFontSize = {
    fontSize: isXs ? "12px" : "18px",
  };

  const isMax = useMediaQuery("(min-width:1930px)");

  return (
    <Box sx={{}}>
      <Header />
      <div style={{
        padding: isMax ? "0px 350px" : "0px 0px",
      }}>
      <div
        style={{
          backgroundImage: `url(${middleBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "100%",
          height: "auto",
          marginTop: "4%",
        }}
      >
        {leCarePage.map((post: any, postIndex: number) => (
          <React.Fragment key={postIndex}>
            <div>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  fontSize: { xs: "28px", sm: "42px",md:"42px", lg: "58px", xl: "84px" },
                  fontWeight: 700,
                  lineHeight: {
                    xs: "30px",
                    sm: "65px",
                    lg: "auto",
                    xl: "auto",
                  },
                  textAlign: "center",
                  color: "#0A1411",
                  padding: {
                    xs: "5% 0% 0% 0%",
                    sm: "8% 10% 0% 10%",
                    lg: "100px 100px 40px 100px",
                    md: "50px 20px 0px 20px",
                    xl: "157px 100px 40px 100px",
                  },
                }}
              >
                {post.data.profile_title}
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Mulish",
                  fontSize: {
                    xs: "14px",
                    sm: "18px",
                    md: "18px",
                    lg: "22px",
                    xl: "28px",
                  },
                  fontWeight: 400,
                  lineHeight: {
                    xs: "16px",
                    sm: "25px",
                    lg: "33px",
                    xl: "33px",
                  },
                  textAlign: "center",
                  color: "#4D5053",
                  padding: {
                    xs: "2% 5%",
                    sm: "2% 10%",
                    lg: "0px 100px 30px 100px",
                    xl: "0px 180px 50px 180px",
                  },
                }}
              >
                {post.data.profile_description}
              </Typography>
            </div>
            <Grid container spacing={2}>
              <Grid
                item
                xl={12}
                lg={12}
                xs={12}
                sm={12}
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    sm: "repeat(3, 1fr)",
                    md: "repeat(3, 1fr)",
                    lg: "repeat(4, 1fr)",
                    xl: "repeat(4, 1fr)",
                  },
                  textAlign: "center",
                  gap: "3%",
                  margin: {
                    xs: "0% 0% 30% 0%",
                    sm: "0%",
                    lg: "0px 150px",
                    md: "0px 80px 80px 80px",
                    xl: "0px 250px 150px 250px",
                  },
                }}
              >
                {personCards.map((person, index) => (
                  <Grid
                    key={person.id}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    {flippedStates[index] ? (
                      <Grid
                        sx={{
                          background: "#FFFFFF",
                          width: dimensions.width,
                          height: dimensions.height,
                          borderRadius: "25px",
                        }}
                        onClick={() => handleFlipCard(index)}
                      >
                        <div>
                          <Typography
                            sx={{
                              ...designerNameStyle,
                              fontSize: profileNameFontSize.fontSize,
                              paddingTop: {
                                xs: "50px",
                                sm: "70px",
                                lg: "70px",
                                xl: "70px",
                              },
                            }}
                          >
                            {person.name}
                          </Typography>
                          <Typography
                            sx={{
                              ...designerDetailsStyle,
                              fontSize: profileDetailsFontSize.fontSize,
                            }}
                          >
                            {person.details}
                          </Typography>
                          <Grid
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              paddingTop: {
                                xs: "20px",
                                sm: "30px",
                                lg: "65px",
                                xl: "65px",
                              },
                              justifyContent: "space-evenly",
                            }}
                          >
                            <PrismicNextLink field={person.facebookLink}>
                              {leCarePage[0]?.data.facebook_icon && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={
                                    leCarePage[0]?.data.facebook_icon.url ||
                                    undefined
                                  }
                                  alt={
                                    leCarePage[0]?.data.facebook_icon.alt ||
                                    "Image"
                                  }
                                />
                              )}
                            </PrismicNextLink>
                            <PrismicNextLink field={person.twitterLink}>
                              {leCarePage[0]?.data.twitter_icon && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={
                                    leCarePage[0]?.data.twitter_icon.url ||
                                    undefined
                                  }
                                  alt={
                                    leCarePage[0]?.data.twitter_icon.alt ||
                                    "Image"
                                  }
                                />
                              )}
                            </PrismicNextLink>
                            <PrismicNextLink field={person.linkedinLink}>
                              {leCarePage[0]?.data.linkedin_icon && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={
                                    leCarePage[0]?.data.linkedin_icon.url ||
                                    undefined
                                  }
                                  alt={
                                    leCarePage[0]?.data.linkedin_icon.alt ||
                                    "Image"
                                  }
                                />
                              )}
                            </PrismicNextLink>
                            <PrismicNextLink field={person.instagramLink}>
                              {leCarePage[0]?.data.instagram_icon && (
                                // eslint-disable-next-line @next/next/no-img-element
                                <img
                                  src={
                                    leCarePage[0]?.data.instagram_icon.url ||
                                    undefined
                                  }
                                  alt={
                                    leCarePage[0]?.data.instagram_icon.alt ||
                                    "Image"
                                  }
                                />
                              )}
                            </PrismicNextLink>
                          </Grid>
                          <Typography
                            sx={{
                              ...designerDetailsStyle,
                              fontSize: profileDetailsFontSize.fontSize,
                              paddingTop: {
                                xs: "20px",
                                sm: "30px",
                                lg: "65px",
                                xl: "65px",
                              },
                            }}
                          >
                            {person.phone}
                          </Typography>
                          <Typography
                            sx={{
                              ...designerDetailsStyle,
                              fontSize: profileDetailsFontSize.fontSize,
                            }}
                          >
                            {person.email}
                          </Typography>
                        </div>
                      </Grid>
                    ) : (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={person.profile || undefined}
                        alt={person.name || "Image"}
                        style={{
                          width: dimensions.width,
                          height: dimensions.height,
                        }}
                        onClick={() => handleFlipCard(index)}
                      />
                    )}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </React.Fragment>
        ))}
      </div>
      </div>
      <Liberez />
      <Footer />
    </Box>
  );
};

export default OurExperts;
