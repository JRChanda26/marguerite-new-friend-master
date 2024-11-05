"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";

const Ourcaremanagementsolutions: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType(
        "ourcaremanagementsolutions"
      );
      setPosts(response);
    };

    fetchPosts();
  }, []);
  const backgroundImage = posts[0]?.data?.headerbackground?.url || "";

  const [posts1, setPosts1] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("soinschezmarguerite");
      setPosts1(response);
    };

    fetchPosts();
  }, []);
  const lastbackground = posts1[0]?.data?.lastbackground?.url || "";

  return (
    <Box>
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

      <div style={{ paddingTop: "173px" }}>
        {posts.map((post: any) => (
          <Grid container spacing={0} key={post.id}>
            <Grid
              item
              lg={12}
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                gap: "20px",
              }}
            >
              <Grid item lg={4} style={{}}>
                {posts.map((post: any) => (
                  <Typography
                    style={{
                      fontFamily: "Mulish",
                      fontWeight: 700,
                      fontSize: "50px",
                      lineHeight: "62.5px",
                      color: "#292F36",
                      letterSpacing: "2%",
                    }}
                  >
                    {post.data.leftheader}
                  </Typography>
                ))}
                <Typography
                  style={{
                    fontFamily: "Jost",
                    color: "#4D5053",
                    fontWeight: 400,
                    fontSize: "22px",
                    lineHeight: "33px",
                    letterSpacing: "1%",
                  }}
                >
                  {post.data.leftcontent}
                </Typography>
                <div
                  style={{ paddingTop: "68.14px", paddingBottom: "159.85px" }}
                >
                  {posts.map((post: any) => (
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
                  ))}
                </div>
              </Grid>

              <Grid item lg={4}>
                <img
                  src={post.data.rightimage.url || ""}
                  alt={post.data.rightimage}
                  style={{ height: "700px", width: "653px" }}
                />
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>

      <div
        style={{
          paddingTop: "124px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        {posts.map((post: any, postIndex: number) => (
          <Box
            key={postIndex}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              boxShadow: "0px 16px 32px rgba(0,0,0, 0.1)",
              textAlign: "center",
              borderRadius: "24px",
              height: "176px",
              width: "449px",
              alignItems: "center",
            }}
          >
            <Typography
              style={{
                fontFamily: "Mulish",
                color: "#000000",
                fontWeight: 700,
                fontSize: "19.5px",
                lineHeight: "36.08px",
              }}
            >
              {post.data.leafsectionheader}
            </Typography>
            <Typography
              style={{
                fontFamily: "Mulish",
                color: "#000000",
                fontWeight: 400,
                fontSize: "19.5px",
                lineHeight: "36.08px",
              }}
            >
              {post.data.leafsectioncontent}
            </Typography>
          </Box>
        ))}
      </div>

      <div
        style={{
          paddingTop: "124px",
        }}
      >
        {posts.map((post: any, postIndex: number) => (
          <Grid container spacing={1} key={postIndex} sx={{}}>
            <Grid item lg={3}>
              <Box
                key={postIndex}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  boxShadow: "0px 16px 32px rgba(0,0,0, 0.1)",
                  textAlign: "center",
                  borderRadius: "24px",
                  height: "176px",
                  width: "Fixed (376.38px)",
                  alignItems: "center",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Mulish",
                    color: "#000000",
                    fontWeight: 700,
                    fontSize: "19.5px",
                    lineHeight: "36.08px",
                    textAlign: "center",
                  }}
                >
                  {post.data.leftbox1header}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Mulish",
                    color: "#000000",
                    fontWeight: 400,
                    fontSize: "19.5px",
                    lineHeight: "36.08px",
                    textAlign: "center",
                  }}
                >
                  {post.data.leftbox1content}
                </Typography>
              </Box>
              <Box
                key={postIndex}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  boxShadow: "0px 16px 32px rgba(0,0,0, 0.1)",
                  textAlign: "center",
                  borderRadius: "24px",
                  height: "176px",
                  width: "Fixed (376.38px)",
                  alignItems: "center",
                  marginTop: "280.4px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Mulish",
                    color: "#000000",
                    fontWeight: 700,
                    fontSize: "19.5px",
                    lineHeight: "36.08px",
                    textAlign: "center",
                  }}
                >
                  {post.data.leftbox2header}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Mulish",
                    color: "#000000",
                    fontWeight: 400,
                    fontSize: "19.5px",
                    lineHeight: "36.08px",
                  }}
                >
                  {post.data.leftbox2content}
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={5}>
              <img
                src={post.data.leafimage?.url || ""}
                alt={post.data.leafimage?.alt || "icon"}
                style={{ height: "100%", width: "100%" }}
              />
            </Grid>
            <Grid item lg={3}>
              <Box
                key={postIndex}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  boxShadow: "0px 16px 32px rgba(0,0,0, 0.1)",
                  textAlign: "center",
                  borderRadius: "24px",
                  height: "Hug (212px)",
                  width: "Fixed (376.38px)",
                  alignItems: "center",
                  marginTop: "178.6px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Mulish",
                    color: "#000000",
                    fontWeight: 700,
                    fontSize: "19.5px",
                    lineHeight: "36.08px",
                  }}
                >
                  {post.data.rightbox1header}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Mulish",
                    color: "#000000",
                    fontWeight: 400,
                    fontSize: "19.5px",
                    lineHeight: "36.08px",
                  }}
                >
                  {post.data.rightbox1content}
                </Typography>
              </Box>
              <Box
                key={postIndex}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  boxShadow: "0px 16px 32px rgba(0,0,0, 0.1)",
                  textAlign: "center",
                  borderRadius: "24px",
                  height: "Hug (212px)",
                  width: "Fixed (376.38px)",
                  alignItems: "center",
                  marginTop: "163.4px",
                }}
              >
                <Typography
                  style={{
                    fontFamily: "Mulish",
                    color: "#000000",
                    fontWeight: 700,
                    fontSize: "19.5px",
                    lineHeight: "36.08px",
                  }}
                >
                  {post.data.rightbox2header}
                </Typography>
                <Typography
                  style={{
                    fontFamily: "Mulish",
                    color: "#000000",
                    fontWeight: 400,
                    fontSize: "19.5px",
                    lineHeight: "36.08px",
                  }}
                >
                  {post.data.rightbox2content}
                </Typography>
              </Box>
            </Grid>
          </Grid>
        ))}
      </div>

      <div style={{}}>
        {posts1.map((post: any, postIndex: number) => (
          <>
            <div style={{ paddingTop: "142.8px" }}>
              <Typography
                style={{
                  fontFamily: "Mulish",
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
                  fontFamily: "Mulish",
                  fontSize: "22px",
                  fontWeight: 400,
                  lineHeight: "33px",
                  textAlign: "center",
                  color: "#4D5053",
                  paddingLeft:'190px',
                  paddingRight:'190px'
                }}
              >
                {post.data.lastcontent}
              </Typography>
            </div>
            <div
              style={{
                backgroundImage: `url(${lastbackground})`,
                backgroundSize:'cover',
                height: "100%",
                width: "100%",
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
                          fontFamily: "Mulish",
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
                          fontFamily: "Mulish",
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
                          fontFamily: "Mulish",
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
                          fontFamily: "Mulish",
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
                          fontFamily: "Mulish",
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
                          fontFamily: "Mulish",
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
                          fontFamily: "Mulish",
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
                          fontFamily: "Mulish",
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

export default Ourcaremanagementsolutions;
