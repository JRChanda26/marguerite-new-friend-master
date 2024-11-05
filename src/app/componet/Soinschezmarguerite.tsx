"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";

const Soinschezmarguerite: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("soinschezmarguerite");
      setPosts(response);
    };

    fetchPosts();
  }, []);
  const backgroundImage = posts[0]?.data?.headerbackground?.url || "";
  const contentbackground = posts[0]?.data?.contentbackground?.url || "";
  const backgroundpeople = posts[0]?.data?.backgroundpeople?.url || "";
  const lastbackground = posts[0]?.data?.lastbackground?.url || "";

  return (
    <Box>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          width: "100%",
          height: "603.67px",
        }}
      >
        {posts.map((post: any, postIndex: number) => (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: "425.67px",
              }}
            >
              <div
                style={{
                  background: "#fff",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                  borderRadius: "37px 37px 0px 0px",
                  padding: "41px 152px 42px 152px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Mulish, sans-serif",
                    color: "#0A1411",
                    fontWeight: 400,
                    fontSize: "50px",
                    lineHeight: "62.5px",
                  }}
                >
                  {post.data.headertext}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Jost, sans-serif",
                    color: "#4D5053",
                    fontWeight: 400,
                    fontSize: "22px",
                    lineHeight: "33px",
                  }}
                >
                  {post.data.content}
                </Typography>
              </div>
            </div>
          </>
        ))}
      </div>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/*  */}
        <div
          style={{
            backgroundImage: `url(${contentbackground})`,
            backgroundSize: "cover",
            width: "875.5px",
            height: "440px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "209.87px",
            flexDirection: "column",
          }}
        >
          {posts.map((post: any, postIndex: number) => (
            <>
              <div>
                <Typography
                  style={{
                    fontFamily: "Mulish, sans-serif",
                    color: "#0A1411",
                    fontWeight: 400,
                    fontSize: "85px",
                    lineHeight: "106.25px",
                    textAlign: "center",
                    // padding:'67px 67px 0px 67px',
                    fontStyle: "italic",
                  }}
                >
                  {post.data.comma}
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    fontFamily: "Jenna Sue, sans-serif",
                    color: "#0A1411",
                    fontWeight: 400,
                    fontSize: "48px",
                    lineHeight: "60px",
                    textAlign: "center",
                    padding: "0px 80px 0px 80px",
                  }}
                >
                  {post.data.excellence}
                </Typography>
              </div>
              <div>
                <Typography
                  style={{
                    fontFamily: "Mulish, sans-serif",
                    color: "#0A1411",
                    fontWeight: 400,
                    fontSize: "25px",
                    lineHeight: "37.5px",
                    textAlign: "center",
                  }}
                >
                  {post.data.boxcontent}
                </Typography>
              </div>
            </>
          ))}
        </div>
      </Box>
      <div style={{ paddingTop: "209.87px" }}>
        {posts.map((post: any, postIndex: number) => (
          <Grid container spacing={2}>
            <Grid
              item
              lg={12}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Grid item lg={4}>
                <Typography
                  style={{
                    fontSize: "50px",
                    fontWeight: 600,
                    lineHeight: "62.5px",
                  }}
                >
                  {post.data.leftheader}
                </Typography>
                <Typography
                  style={{
                    fontSize: "22px",
                    fontWeight: 400,
                    lineHeight: "33px",
                    paddingTop: "23px",
                  }}
                >
                  {post.data.leftcontent}
                </Typography>
              </Grid>
              <Grid item lg={5}>
                <img
                  src={post.data.bodyrightimage?.url || ""}
                  alt={post.data.bodyrightimage?.alt || "icon"}
                  style={{ width: "659px", height: "377px" }}
                />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>

      <div style={{ paddingTop: "285.26px", paddingBottom: "224px" }}>
        {posts.map((post: any, postIndex: number) => (
          <Grid container spacing={2}>
            <Grid
              item
              lg={12}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: "10px",
              }}
            >
              <Grid item lg={3}>
                <Typography
                  style={{
                    fontFamily: 'Mulish, sans-serif',
                    fontSize: "25px",
                    fontWeight: 700,
                    lineHeight: "31.25px",
                    textAlign: "center",
                    color: "#292F36",
                  }}
                >
                  {post.data.missionheader}
                </Typography>
                <Typography
                  style={{
                    fontFamily: 'Mulish, sans-serif',
                    fontSize: "22px",
                    fontWeight: 400,
                    lineHeight: "33px",
                    textAlign: "center",
                    padding: "20px",
                    color: "#4D5053",
                  }}
                >
                  {post.data.missioncontent}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "52px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      fontFamily: 'Mulish, sans-serif',
                      fontSize: "18px",
                      fontWeight: 600,
                      lineHeight: "22.5px",
                      textAlign: "center",
                      color: "#4D5053",
                      textTransform: "none",
                    }}
                  >
                    {post.data.buttontext}
                  </Button>
                  <img
                    src={post.data.buttonicon?.url || ""}
                    alt={post.data.buttonicon?.alt || "icon"}
                    style={{
                      width: "15.14px",
                      height: "13.18px",
                      paddingLeft: "26.02px",
                    }}
                  />
                </div>
              </Grid>
              <Grid item lg={3}>
                <Typography
                  style={{
                    fontFamily: 'Mulish, sans-serif',
                    fontSize: "25px",
                    fontWeight: 700,
                    lineHeight: "31.25px",
                    textAlign: "center",
                    color: "#292F36",
                  }}
                >
                  {post.data.vissionheader}
                </Typography>
                <Typography
                  style={{
                    fontFamily: 'Mulish, sans-serif',
                    fontSize: "22px",
                    fontWeight: 400,
                    lineHeight: "33px",
                    textAlign: "center",
                    padding: "20px",
                    color: "#4D5053",
                  }}
                >
                  {post.data.vissioncontent}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "52px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      fontFamily: 'Mulish, sans-serif',
                      fontSize: "18px",
                      fontWeight: 600,
                      lineHeight: "22.5px",
                      textAlign: "center",
                      color: "#4D5053",
                      textTransform: "none",
                    }}
                  >
                    {post.data.buttontext}
                  </Button>
                  <img
                    src={post.data.buttonicon?.url || ""}
                    alt={post.data.buttonicon?.alt || "icon"}
                    style={{
                      width: "15.14px",
                      height: "13.18px",
                      paddingLeft: "26.02px",
                    }}
                  />
                </div>
              </Grid>
              <Grid item lg={3}>
                <Typography
                  style={{
                    fontFamily: 'Mulish, sans-serif',
                    fontSize: "25px",
                    fontWeight: 700,
                    lineHeight: "31.25px",
                    textAlign: "center",
                    color: "#292F36",
                  }}
                >
                  {post.data.valeursheader}
                </Typography>
                <Typography
                  style={{
                    fontFamily: 'Mulish, sans-serif',
                    fontSize: "22px",
                    fontWeight: 400,
                    lineHeight: "33px",
                    textAlign: "center",
                    paddingLeft: "150px",
                    paddingRight: "150px",
                    paddingTop: "20px",
                    color: "#4D5053",
                  }}
                >
                  {post.data.valeurscontent}
                </Typography>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    paddingTop: "73px",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    style={{
                      fontFamily: 'Mulish, sans-serif',
                      fontSize: "18px",
                      fontWeight: 600,
                      lineHeight: "22.5px",
                      textAlign: "center",
                      color: "#4D5053",
                      textTransform: "none",
                    }}
                  >
                    {post.data.buttontext}
                  </Button>
                  <img
                    src={post.data.buttonicon?.url || ""}
                    alt={post.data.buttonicon?.alt || "icon"}
                    style={{
                      width: "15.14px",
                      height: "13.18px",
                      paddingLeft: "26.02px",
                    }}
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>

      <div
        style={{
          background: `url(${backgroundpeople})`,
          backgroundSize: "cover",
          width: "auto",
          height: "auto",
          paddingTop: "187.05px",
        }}
      >
        {posts.map((post: any, postIndex: number) => (
          <>
            <div>
              <Typography
                style={{
                  fontFamily: 'Mulish, sans-serif',
                  fontSize: "64px",
                  fontWeight: 700,
                  lineHeight: "80.32px",
                  textAlign: "center",
                  color: "#0A1411",
                }}
              >
                {post.data.peopleheading}
              </Typography>
              <Typography
                style={{
                  fontFamily: 'Mulish, sans-serif',
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: "33px",
                  textAlign: "center",
                  color: "#4D5053",
                  paddingLeft: "120px",
                  paddingRight: "120px",
                }}
              >
                {post.data.peoplecontent}
              </Typography>
            </div>
            <Grid container spacing={1}>
              <Grid
                item
                lg={12}
                style={{
                  display: "flex",
                  padding: "",
                  justifyContent: "center",
                  gap: "60px",
                  paddingBottom: "121.95px",
                  paddingTop: "40px",
                }}
                container
                spacing={1}
              >
                <Grid item lg={2}>
                  <img
                    src={post.data.person1?.url || ""}
                    alt={post.data.person1?.alt || "icon"}
                    style={{ width: "283.55px", height: "433px" }}
                  />
                </Grid>
                <Grid item lg={2}>
                  <img
                    src={post.data.person2?.url || ""}
                    alt={post.data.person2?.alt || "icon"}
                    style={{ width: "283.55px", height: "433px" }}
                  />
                </Grid>
                <Grid item lg={2}>
                  <div
                    style={{
                      background: "#FFFFFF",
                      height: "433px",
                      width: "283.55px",
                      borderRadius: "30px",
                    }}
                  >
                    <div>
                      <Typography
                        style={{
                          fontFamily: "'DM Serif Display', serif",
                          fontWeight: 400,
                          fontSize: "25px",
                          lineHeight: "37.5px",
                          letterSpacing: "1%",
                          textAlign: "center",
                          color: "#292F36",
                          paddingTop: "70px",
                        }}
                      >
                        {post.data.designername}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "27px",
                          letterSpacing: "1%",
                          textAlign: "center",
                          color: "#292F36",
                        }}
                      >
                        {post.data.designercontent}
                      </Typography>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          paddingTop: "65.53px",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          src={post.data.facebook?.url || ""}
                          alt={post.data.facebook?.alt || "icon"}
                          style={{
                            width: "7.9px",
                            height: "21.03px",
                            paddingRight: "36.85px",
                          }}
                        />
                        <img
                          src={post.data.twitter?.url || ""}
                          alt={post.data.twitter?.alt || "icon"}
                          style={{
                            width: "11.84px",
                            height: "21.03px",
                            paddingRight: "33.56px",
                          }}
                        />
                        <img
                          src={post.data.linkedin?.url || ""}
                          alt={post.data.linkedin?.alt || "icon"}
                          style={{
                            width: "10.53px",
                            height: "21.03px",
                            paddingRight: "35.53px",
                          }}
                        />
                        <img
                          src={post.data.instagram?.url || ""}
                          alt={post.data.instagram?.alt || "icon"}
                          style={{ width: "11.19px", height: "21.99px" }}
                        />
                      </div>
                      <Typography
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "27px",
                          letterSpacing: "1%",
                          textAlign: "center",
                          color: "#292F36",
                          paddingTop: "66.01px",
                        }}
                      >
                        {post.data.designercontact}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontWeight: 400,
                          fontSize: "18px",
                          lineHeight: "27px",
                          letterSpacing: "1%",
                          textAlign: "center",
                          color: "#292F36",
                        }}
                      >
                        {post.data.designeremail}
                      </Typography>
                    </div>
                  </div>
                </Grid>
                <Grid item lg={2}>
                  <img
                    src={post.data.person3?.url || ""}
                    alt={post.data.person3?.alt || "icon"}
                    style={{ width: "283.55px", height: "433px" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </>
        ))}
      </div>

      <div
        style={{
          paddingTop: "192.53px",
        }}
      >
        {posts.map((post: any, postIndex: number) => (
          <>
            <div>
              <Typography
                style={{
                  fontFamily: 'Mulish, sans-serif',
                  fontSize: "64px",
                  fontWeight: 700,
                  lineHeight: "80.32px",
                  textAlign: "center",
                  color: "#0A1411",
                }}
              >
                {post.data.lastheader}
              </Typography>
              <Typography
                style={{
                  fontFamily: 'Mulish, sans-serif',
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: "33px",
                  textAlign: "center",
                  color: "#4D5053",
                  paddingLeft: "190px",
                  paddingRight: "190px",
                }}
              >
                {post.data.lastcontent}
              </Typography>
            </div>
            <div
              style={{
                backgroundImage: `url(${lastbackground})`,
                backgroundSize: "cover",
                height: "auto",
                width: "auto",
              }}
            >
              <Grid container spacing={1}>
                <Grid
                  item
                  lg={12}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "20px",
                    padding: "80px",
                  }}
                >
                  <Grid
                    item
                    lg={3}
                    style={{
                      background: "#fff",
                      width: "373px",
                      height: "452px",
                      borderRadius: "24px",
                      marginTop: "144px",
                      boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "61.41px",
                      }}
                    >
                      <img
                        src={post.data.lastlogo1?.url || ""}
                        alt={post.data.lastlogo1?.alt || "icon"}
                        style={{ width: "62.63px", height: "60.49px" }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: 'Mulish, sans-serif',
                          fontSize: "29.26px",
                          fontWeight: 600,
                          lineHeight: "36.72px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "41.5px",
                          padding: "20px",
                        }}
                      >
                        {post.data.box1header}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: 'Mulish, sans-serif',
                          fontStyle: "italic",
                          fontSize: "19.5px",
                          fontWeight: 400,
                          lineHeight: "36.08px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "20.72px",
                          paddingLeft: "60px",
                          paddingRight: "47px",
                        }}
                      >
                        {post.data.box1content}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    style={{
                      background: "#FFFFFF",
                      width: "auto",
                      height: "452px",
                      borderRadius: "24px",
                      boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "83.96px",
                      }}
                    >
                      <img
                        src={post.data.lastlogo2?.url || ""}
                        alt={post.data.lastlogo2?.alt || "icon"}
                        style={{ width: "63.33px", height: "60.26px" }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: 'Mulish, sans-serif',
                          fontSize: "29.26px",
                          fontWeight: 600,
                          lineHeight: "36.72px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "41.5px",
                        }}
                      >
                        {post.data.box2header}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: 'Mulish, sans-serif',
                          fontStyle: "italic",
                          fontSize: "19.5px",
                          fontWeight: 400,
                          lineHeight: "36.08px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "20.72px",
                          paddingLeft: "60px",
                          paddingRight: "47px",
                        }}
                      >
                        {post.data.box2content}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    style={{
                      background: "#FFFFFF",
                      width: "373px",
                      height: "452px",
                      borderRadius: "24px",
                      marginTop: "144px",
                      boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "70.44px",
                      }}
                    >
                      <img
                        src={post.data.lastlogo3?.url || ""}
                        alt={post.data.lastlogo3?.alt || "icon"}
                        style={{ width: "56px", height: "60px" }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: 'Mulish, sans-serif',
                          fontSize: "29.26px",
                          fontWeight: 600,
                          lineHeight: "36.72px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "41.5px",
                        }}
                      >
                        {post.data.box3header}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: 'Mulish, sans-serif',
                          fontStyle: "italic",
                          fontSize: "19.5px",
                          fontWeight: 400,
                          lineHeight: "36.08px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "20.72px",
                          paddingLeft: "60px",
                          paddingRight: "47px",
                        }}
                      >
                        {post.data.box3content}
                      </Typography>
                    </div>
                  </Grid>
                  <Grid
                    item
                    lg={3}
                    style={{
                      background: "#FFFFFF",
                      width: "373px",
                      height: "452px",
                      borderRadius: "24px",
                      boxShadow: "0px 16px 32px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingTop: "104.62px",
                      }}
                    >
                      <img
                        src={post.data.lastlogo4?.url || ""}
                        alt={post.data.lastlogo4?.alt || "icon"}
                        style={{ width: "54.4px", height: "60px" }}
                      />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                      }}
                    >
                      <Typography
                        style={{
                          fontFamily: 'Mulish, sans-serif',
                          fontSize: "29.26px",
                          fontWeight: 600,
                          lineHeight: "36.72px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "41.5px",
                        }}
                      >
                        {post.data.box4header}
                      </Typography>
                      <Typography
                        style={{
                          fontFamily: 'Mulish, sans-serif',
                          fontStyle: "italic",
                          fontSize: "19.5px",
                          fontWeight: 400,
                          lineHeight: "36.08px",
                          textAlign: "center",
                          color: "#1E1E1E",
                          paddingTop: "20.72px",
                          paddingLeft: "60px",
                          paddingRight: "50px",
                        }}
                      >
                        {post.data.box4content}
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </div>
          </>
        ))}
      </div>
    </Box>
  );
};

export default Soinschezmarguerite;
