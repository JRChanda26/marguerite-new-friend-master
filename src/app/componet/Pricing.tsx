"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";

const Pricing: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response: any = await client.getAllByType("pricing");
            setPosts(response);
        };

        fetchPosts();
    }, []);
    const backgroundImage = posts[0]?.data?.image?.url || "";
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
                                    padding: "41px 152px 41px 152px",
                                }}
                            >
                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#0A1411",
                                        fontWeight: 700,
                                        fontSize: "64px",
                                        lineHeight: "80.32px",
                                    }}
                                >
                                    {post.data.headertext}
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#565656",
                                        fontWeight: 400,
                                        fontSize: "24px",
                                        lineHeight: "38.4px",
                                    }}
                                >
                                    {post.data.content}
                                </Typography>
                            </div>
                        </div>
                    </>
                ))}
            </div>

            <Grid
                container
                spacing={3}
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "62.74px",
                    paddingTop: "192.33px",
                    paddingBottom: "113.83px",
                }}
            >
                <Grid item lg={12} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Grid item lg={3}
                        style={{
                            width: "auto",
                            height: "900px",
                            borderRadius: "16px",
                            background: "#BBDDD959",
                            textAlign: 'center'
                        }}
                    >
                        {posts.map((post: any, postIndex: number) => (
                            <>

                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "32.68px",
                                        lineHeight: "49.02px",
                                        paddingTop: "83.66px",
                                    }}
                                >
                                    {post.data.basic_care}
                                </Typography>

                                <div style={{display:'flex',textAlign:'center',justifyContent:'center'}}>
                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "32.68px",
                                        lineHeight: "49.02px",
                                        paddingTop:'85px'
                                    }}
                                >
                                    {post.data.pricelogo}
                                </Typography>
                                    <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "111.11px",
                                        lineHeight: "166.66px",
                                    }}
                                >
                                    {post.data.basicprice}
                                </Typography></div>
                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "32.68px",
                                        lineHeight: "49.02px",
                                    }}
                                >
                                    {post.data.month}
                                </Typography>
                                

                                <Divider style={{ backgroundColor: '#EA875C', marginTop: '48.36px', marginBottom: '36px' }} />

                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "29.6px",
                                        paddingTop: "7px",
                                        textAlign: 'center',
                                        padding: '50px'
                                    }}
                                >
                                    {post.data.basiccontent}
                                </Typography>

                                <div style={{ padding: "33.99px 62.74px 33.99px 62.74px" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            padding: "33.99px 0px 33.99px 0px",
                                            borderRadius: "23.53px",
                                            background: "#EA875C",
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                color: "#FFFFFF",
                                                fontWeight: 400,
                                                fontSize: "14px",
                                                lineHeight: "25.9px",
                                                paddingRight: "12px",
                                            }}
                                        >
                                            {post.data.buttontext}
                                        </Typography>
                                        <img
                                            src={post.data.buttonicon?.url || ""}
                                            alt={post.data.buttonicon?.alt || "icon"}
                                            style={{ width: "19.79px", height: "17.22px" }}
                                        />
                                    </div>
                                </div>
                            </>
                        ))}
                    </Grid>

                    <Grid item lg={3}
                        style={{
                            width: "auto",
                            height: "950px",
                            borderRadius: "16px",
                            background: "#BBDDD959",
                            paddingBottom: "34px",
                            textAlign: 'center'

                        }}
                    >
                        {posts.map((post: any, postIndex: number) => (
                            <>

                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "32.68px",
                                        lineHeight: "49.02px",
                                        paddingTop: "83.66px",
                                    }}
                                >
                                    {post.data.soins_complets}
                                </Typography>


                                <div style={{display:'flex',textAlign:'center',justifyContent:'center'}}>
                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "32.68px",
                                        lineHeight: "49.02px",
                                        paddingTop:'85px'
                                    }}
                                >
                                    {post.data.pricelogo}
                                </Typography>
                                    <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#EA875C",
                                        fontWeight: 400,
                                        fontSize: "111.11px",
                                        lineHeight: "166.66px",
                                    }}
                                >
                                    {post.data.price2}
                                </Typography></div>
                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "32.68px",
                                        lineHeight: "49.02px",
                                    }}
                                >
                                    {post.data.month}
                                </Typography>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginTop: '70px',
                                    marginBottom: '36px',
                                    padding:'0px 43.64px 0px 43.49px'
                                }}>
                                    <div style={{ flexGrow: 1, borderTop: '1px solid black' }}></div>
                                    <span style={{  }}>
                                        <Button variant='contained' style={{ 
                                            fontFamily: 'Jost, sans-serif',
                                            textTransform: 'none',
                                             color: '#FFFFFF', 
                                             background: '#292F36', 
                                             fontWeight: 600,
                                              fontSize: '23.53px',
                                               lineHeight: '29.41px',
                                               borderRadius: '23.53px',
                                              }}>{post.data.insidetext}</Button>
                                    </span>
                                    <div style={{ flexGrow: 1, borderTop: '1px solid black' }}></div>
                                </div>
                                {/* <Divider style={{ marginTop: '70px', marginBottom: '36px' }} /> */}

                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "29.6px",
                                        paddingTop: "7px",
                                        textAlign: 'center',
                                        padding: '60px'
                                    }}
                                >
                                    {post.data.moderatecontent}
                                </Typography>

                                <div style={{ padding: "0px 62.74px 33.99px 62.74px" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            padding: "33.99px 0px 33.99px 0px",
                                            borderRadius: "23.53px",
                                            background: "#292F36",
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                color: "#FFFFFF",
                                                fontWeight: 400,
                                                fontSize: "14px",
                                                lineHeight: "25.9px",
                                                paddingRight: "12px",
                                            }}
                                        >
                                            {post.data.buttontext}
                                        </Typography>
                                        <img
                                            src={post.data.orangearrow?.url || ""}
                                            alt={post.data.orangearrow?.alt || "icon"}
                                            style={{ width: "19.79px", height: "17.22px" }}
                                        />
                                    </div>
                                </div>
                            </>
                        ))}
                    </Grid>



                    <Grid item lg={3}
                        style={{
                            width: "auto",
                            height: "900px",
                            borderRadius: "16px",
                            background: "#BBDDD959",
                            paddingBottom: "34px",
                            textAlign: 'center'
                        }}
                    >
                        {posts.map((post: any, postIndex: number) => (
                            <>

                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        fontWeight: 400,
                                        fontSize: "32.68px",
                                        lineHeight: "49.02px",
                                        paddingTop: "83.66px",
                                    }}
                                >
                                    {post.data.soins_premium}
                                </Typography>


                                <div style={{display:'flex',textAlign:'center',justifyContent:'center'}}>
                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "32.68px",
                                        lineHeight: "49.02px",
                                        paddingTop:'85px'
                                    }}
                                >
                                    {post.data.pricelogo}
                                </Typography>
                                    <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "111.11px",
                                        lineHeight: "166.66px",
                                    }}
                                >
                                    {post.data.price3}
                                </Typography></div>
                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "32.68px",
                                        lineHeight: "49.02px",
                                    }}
                                >
                                    {post.data.month}
                                </Typography>

                                <Divider style={{ backgroundColor: '#EA875C', marginTop: '48.36px', marginBottom: '36px' }} />

                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "29.6px",
                                        paddingTop: "7px",
                                        textAlign: 'center',
                                        padding: '50px'
                                    }}
                                >
                                    {post.data.premiumcontent}
                                </Typography>

                                <div style={{ padding: "60px 62.74px 33.99px 62.74px" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            padding: "33.99px 0px 33.99px 0px",
                                            borderRadius: "23.53px",
                                            background: "#EA875C",
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                color: "#FFFFFF",
                                                fontWeight: 400,
                                                fontSize: "14px",
                                                lineHeight: "25.9px",
                                                paddingRight: "12px",
                                            }}
                                        >
                                            {post.data.buttontext}
                                        </Typography>
                                        <img
                                            src={post.data.buttonicon?.url || ""}
                                            alt={post.data.buttonicon?.alt || "icon"}
                                            style={{ width: "19.79px", height: "17.22px" }}
                                        />
                                    </div>
                                </div>
                            </>
                        ))}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Pricing;
