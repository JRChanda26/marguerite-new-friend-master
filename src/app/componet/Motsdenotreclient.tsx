"use client";

import React, { useEffect, useState } from 'react';
import { client } from '../../../prismic-configuration';
import { Box, Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';


const Motsdenotreclient: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response: any = await client.getAllByType('motsdenotreclient');
            setPosts(response);
        };

        fetchPosts();
    }, []);
    const backgroundImage = posts[0]?.data?.backgroundimage?.url || '';
    return (
        <Box sx={{ backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',        
        width: '100%',               
        height: '1105.57px',     
        }}>
            <div>
                {posts.map((post: any, postIndex: number) => (
                    <>
                        <div style={{display:'flex',justifyContent:'center'}}>
                            <Typography

                                style={{
                                    fontFamily: 'Mulish, sans-serif',
                                    color: '#FFFFFF',
                                    fontWeight: 700,
                                    fontSize: '66.25px',
                                    lineHeight: '79.51px',
                                    paddingTop: '250px',


                                }}
                            >
                                {post.data.headertext}<span style={{
                                    fontFamily: 'Jenna Sue, sans-serif',
                                    color: '#FFFFFF',
                                    fontWeight: 400,
                                    fontSize: '96px',
                                    lineHeight: '115.2px',
                                    paddingLeft: '7px',
                                    paddingRight: '7px',
                                    textAlign: 'center',



                                }}>{post.data.notre}</span>{post.data.client}
                            </Typography>
                        </div>
                        <div>
                        <img
                                        src={post.data.contentimage?.url || ''}
                                        alt={post.data.contentimage?.alt || 'icon'}
                                        style={{  paddingTop: '75.06px', paddingBottom: '62.83px', height:'425.95px',width:'100%'}}
                                    />
                        </div>
                    </>
                ))}
            </div>


        </Box>
    )
};

export default Motsdenotreclient;
