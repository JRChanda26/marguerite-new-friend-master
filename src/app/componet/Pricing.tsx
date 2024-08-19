"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Button, Grid, Typography } from "@mui/material";
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
                            height: "auto",
                            maxHeight: "500px",
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
                                    {post.data.basic_care}
                                </Typography>


                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "29.6px",
                                    }}
                                >
                                    {post.data.basicprice}
                                </Typography>



                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "29.6px",
                                        paddingTop: "7px",
                                        textAlign: 'center',
                                        padding: '20px'
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
                                            padding: "33.99px 62.74px 33.99px 62.74px",
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
                            height: "550px",
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


                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "29.6px",
                                    }}
                                >
                                    {post.data.moderateprice}
                                </Typography>


                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "29.6px",
                                        paddingTop: "7px",
                                        textAlign: 'center',
                                        padding: '20px'
                                    }}
                                >
                                    {post.data.moderatecontent}
                                </Typography>

                                <div style={{ padding: "33.99px 62.74px 33.99px 62.74px" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            padding: "33.99px 62.74px 33.99px 62.74px",
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
                            height: "auto",
                            maxHeight: "500px",
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


                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "29.6px",
                                    }}
                                >
                                    {post.data.premium}
                                </Typography>


                                <Typography
                                    style={{
                                        fontFamily: "Mulish, sans-serif",
                                        color: "#1E1E1E",
                                        fontWeight: 400,
                                        fontSize: "16px",
                                        lineHeight: "29.6px",
                                        paddingTop: "7px",
                                        textAlign:'center',
                                        padding:'20px'
                                    }}
                                >
                                    {post.data.premiumcontent}
                                </Typography>

                                <div style={{ padding: "33.99px 62.74px 33.99px 62.74px" }}>
                                    <div
                                        style={{
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "center",
                                            padding: "33.99px 62.74px 33.99px 62.74px",
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
