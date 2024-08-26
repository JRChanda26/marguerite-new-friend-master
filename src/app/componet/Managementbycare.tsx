"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

const Managementbycare: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("managementbycare");
      setPosts(response);
    };

    fetchPosts();
  }, []);
  const backgroundImage = posts[0]?.data?.headerbackground?.url || "";
  const boxbackground = posts[0]?.data?.boxbackground?.url || "";

  const [posts1, setPosts1] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("soinschezmarguerite");
      setPosts1(response);
    };

    fetchPosts();
  }, []);
  const contentbackground = posts1[0]?.data?.contentbackground?.url || "";
  return (
    <Box sx={{}}>
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          width: "100%",
          height: "auto",
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
      <div style={{}}>
        {posts.map((post: any, postIndex: number) => (
          <>
            <Grid container spacing={1}>
              <Grid
                item
                lg={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "123px",
                }}
              >
                <Grid item lg={4}>
                  <Typography
                    style={{
                      paddingLeft: "40px",
                      paddingRight: "40px",
                      fontFamily: "Mulish",
                      fontWeight: 700,
                      fontSize: "48px",
                      lineHeight: "60.24px",
                      color: "#24535C",
                    }}
                  >
                    {post.data.leftparagraph1}
                  </Typography>
                </Grid>
                <Grid item lg={5}>
                  <Typography
                    style={{
                      padding: "0px",
                      fontFamily: "Mulish",
                      fontWeight: 400,
                      fontSize: "24px",
                      lineHeight: "30.12px",
                      color: "#237D6C",
                    }}
                  >
                    {post.data.rightparagraph1}
                  </Typography>
                  <div style={{ paddingTop: "51px" }}>
                    <Button
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        background: "#24535C",
                        padding: "16px 24px 16px 24px",
                        gap: "18px",
                        borderRadius: "82px",
                      }}
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
                      <img
                        src={post.data.buttonimage.url || ""}
                        alt={post.data.buttonimage}
                        style={{
                          background: "#82C5BE",
                          borderRadius: "15.9px",
                          padding: "7.29px",
                          width: "9.27px",
                          height: "9.27px",
                        }}
                      />
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </>
        ))}
      </div>

      <div style={{}}>
        {posts.map((post: any, postIndex: number) => (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#24535C",
                fontFamily: "Mulish",
                fontWeight: 600,
                fontSize: "40px",
                lineHeight: "50.2px",
                paddingTop: "281.26px",
              }}
            >
              {post.data.boxtopheader}
            </div>
            <Grid container spacing={1}>
              <Grid
                item
                lg={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundImage: `url(${boxbackground})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  width: "100%",
                  height: "auto",
                  paddingTop: "111.74px",
                }}
              >
                <Grid item lg={4.5}>
                  <div
                    style={{
                      width: "490.06px",
                      height: "auto",
                      background:
                        "linear-gradient(180.79deg, #FFFFFF 7.81%, rgba(187, 221, 217, 0.6) 205.96%)",
                      padding: "85.33px 40.23px 85.33px 40.23px",
                      borderRadius: "19.5px",
                      boxShadow: "0px 32.91px 29.26px 0px #28626D33",
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Mulish",
                        fontSize: " 29.26px",
                        fontWeight: 600,
                        lineHeight: "36.72px",
                        textAlign: "center",
                        paddingTop: "85.33px",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                      }}
                    >
                      {post.data.box1header}
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Mulish",
                        fontStyle: "italic",
                        fontSize: " 19.5px",
                        fontWeight: 400,
                        lineHeight: "36.08px",
                        textAlign: "justify",
                        paddingLeft: "60px",
                        paddingRight: "60px",
                        paddingTop: "20.72px",
                      }}
                    >
                      {post.data.box1content}
                    </Typography>
                  </div>
                  <div
                    style={{
                      width: "490.06px",
                      height: "auto",
                      background:
                        "linear-gradient(180.79deg, #FFFFFF 7.81%, rgba(187, 221, 217, 0.6) 205.96%)",
                      padding: "85.33px 40.23px 85.33px 40.23px",
                      borderRadius: "19.5px",
                      boxShadow: "0px 32.91px 29.26px 0px #28626D33",
                      marginTop: "1.34px",
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Mulish",
                        fontSize: " 29.26px",
                        fontWeight: 600,
                        lineHeight: "36.72px",
                        textAlign: "center",
                        paddingTop: "85.33px",
                      }}
                    >
                      {post.data.box2header}
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Mulish",
                        fontStyle: "italic",
                        fontSize: " 19.5px",
                        fontWeight: 400,
                        lineHeight: "36.08px",
                        textAlign: "justify",
                        paddingLeft: "60px",
                        paddingRight: "60px",
                        paddingTop: "20.72px",
                      }}
                    >
                      {post.data.box2content}
                    </Typography>
                  </div>
                </Grid>
                <Grid item lg={4.5}>
                  <div
                    style={{
                      width: "490.06px",
                      height: "auto",
                      background:
                        "linear-gradient(180.79deg, #FFFFFF 7.81%, rgba(187, 221, 217, 0.6) 205.96%)",
                      padding: "85.33px 40.23px 85.33px 40.23px",
                      borderRadius: "19.5px",
                      boxShadow: "0px 32.91px 29.26px 0px #28626D33",
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Mulish",
                        fontSize: " 29.26px",
                        fontWeight: 600,
                        lineHeight: "36.72px",
                        textAlign: "center",
                        paddingLeft: "40px",
                        paddingRight: "40px",
                        paddingTop: "85.33px",
                      }}
                    >
                      {post.data.box3header}
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Mulish",
                        fontStyle: "italic",
                        fontSize: " 19.5px",
                        fontWeight: 400,
                        lineHeight: "36.08px",
                        textAlign: "justify",
                        paddingLeft: "60px",
                        paddingRight: "60px",
                        paddingTop: "20.72px",
                      }}
                    >
                      {post.data.box3content}
                    </Typography>
                  </div>
                  <div
                    style={{
                      width: "490px",
                      height: "auto",
                      background:
                        "linear-gradient(178.46deg, #FFFFFF 8.34%, rgba(255, 167, 123, 0.6) 257.47%)",

                      padding: "85.33px 40.23px 85.33px 40.23px",
                      borderRadius: "19.5px",
                      boxShadow: "0px 32.91px 29.26px 0px #28626D33",
                      marginTop: "17.61px",
                    }}
                  >
                    <Typography
                      style={{
                        fontFamily: "Mulish",
                        fontSize: " 29.26px",
                        fontWeight: 600,
                        lineHeight: "36.72px",
                        textAlign: "center",
                        paddingLeft: "60px",
                        paddingRight: "60px",
                        paddingTop: "85.33px",
                      }}
                    >
                      {post.data.box4header}
                    </Typography>
                    <Typography
                      style={{
                        fontFamily: "Mulish",
                        fontStyle: "italic",
                        fontSize: " 19.5px",
                        fontWeight: 400,
                        lineHeight: "36.08px",
                        textAlign: "justify",
                        paddingLeft: "65px",
                        paddingRight: "65px",
                        paddingTop: "20.72px",
                      }}
                    >
                      {post.data.box4content}
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </>
        ))}
      </div>

      <div
        style={{
          backgroundImage: `url(${contentbackground})`,
          backgroundSize: "cover",
          width: "875.5px",
          height: "428px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "345px",
          marginTop: "209.87px",
          flexDirection: "column",
        }}
      >
        {posts1.map((post: any, postIndex: number) => (
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

      <div style={{}}>
        {posts.map((post: any, postIndex: number) => (
          <>
            <div
              style={{
              paddingLeft:'350px',
               paddingRight:'200px',
               display:'flex',
               justifyContent:'center',
               alignItems:'center'
               
              }}
            >
              <Typography
                style={{
                  fontFamily: "Mulish",
                  color: "rgba(10, 20, 17, 1)",
                  fontWeight: 700,
                  fontSize: "64px",
                  lineHeight: "80.32px",
                }}
              >
                {post.data.doctorheader}
              </Typography>
            </div>
            <Grid container spacing={1}>
              <Grid
                item
                lg={12}
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  gap: "80px",
                  paddingTop:'91.29px'
                }}
              >
                <Grid item lg={5}>
                  <img
                    src={post.data.doctorimage?.url || ""}
                    alt={post.data.homeldoctorimageogo?.alt || "icon"}
                    style={{
                      height: "623px",
                      width: "835px",
                    }}
                  />
                </Grid>
                <Grid item lg={5}>
                  <Typography
                    style={{
                      fontFamily: "Mulish",
                      color: "rgba(36, 83, 92, 1)",
                      fontWeight: 400,
                      fontSize: "40px",
                      lineHeight: "50.2px",
                      paddingTop: "54.5px",
                      paddingLeft: "92.11px",
                      paddingRight: "",
                    }}
                  >
                    {post.data.doctorcontent}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </>
        ))}
      </div>
    </Box>
  );
};

export default Managementbycare;
