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
                                        fontFamily: 'Jost, sans-serif',
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



            <div
                style={{
                    backgroundImage: `url(${contentbackground})`,
                    backgroundSize: "cover",
                    width: "875.5px",
                    height: "428px",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: '345px',
                    marginTop: '209.87px',
                    flexDirection: 'column'

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
                                    fontStyle: 'italic'
                                }}
                            >
                                {post.data.comma}
                            </Typography>
                        </div>
                        <div>
                            <Typography
                                style={{
                                    fontFamily: 'Jenna Sue, sans-serif',
                                    color: "#0A1411",
                                    fontWeight: 400,
                                    fontSize: "48px",
                                    lineHeight: "60px",
                                    textAlign: "center",
                                    padding: '0px 80px 0px 80px',

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
            <div style={{paddingTop:'209.87px'}}>
            {posts.map((post: any, postIndex: number) => (
                <Grid container spacing={2} >
                    <Grid item lg={12} style={{display:'flex',flexDirection:'row',justifyContent:'center',gap:'10px'}}>
                    <Grid item lg={4}>
                    <Typography style={{
                        fontSize:'50px',
                        fontWeight:600,
                        lineHeight:'62.5px'
                    }}>
                        {post.data.leftheader}
                    </Typography>
                    <Typography style={{
                        fontSize:'22px',
                        fontWeight:400,
                        lineHeight:'33px',
                        paddingTop:'23px'
                    }}>
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


        </Box>
    );
};

export default Soinschezmarguerite;
