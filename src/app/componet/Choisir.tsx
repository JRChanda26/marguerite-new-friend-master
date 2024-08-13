"use client";

import React, { useEffect, useState } from 'react';
import { client } from '../../../prismic-configuration';
import { Box, Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';


const Choisir: React.FC = () => {
    const [posts, setPosts] = useState<[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response: any = await client.getAllByType('choisir');
            setPosts(response);
        };

        fetchPosts();
    }, []);

    return (
        <Box sx={{ background: '#BBDDD999' }}>
            <div style={{display:'flex',justifyContent:'center'}}>
                {posts.map((post: any, postIndex: number) => (
                    <div style={{
                       
                    }}>
                        <div>
                        <Typography

                            style={{
                                fontFamily: 'Mulish, sans-serif',
                                color: '#0A1411',
                                fontWeight: 700,
                                fontSize: '64px',
                                lineHeight: '80.32px',
                                paddingTop: '99.7px',


                            }}
                        >
                            {post.data.heading}
                        </Typography>
                        </div>
                        <div style={{}}>
                        {post.data.content?.split('\n').map((line: any, index: any) => (

                            <Typography
                                key={index}
                                style={{
                                    fontFamily: 'Mulish, sans-serif',
                                    color: '#565656',
                                    fontWeight: 400,
                                    fontSize: '24px',
                                    lineHeight: '38.4px',
                                    paddingTop: '41.11px',
                                    width:'1217.08px'
                                }}
                            >
                                {line}
                            </Typography>
                        ))}
                        </div>

                    </div>
                ))}
            </div>


            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', gap: '51.85px', paddingTop: '69.53px',paddingBottom:'113.83px' }}>
                <div style={{ height: '476px', width: '402px', borderRadius: '16px', background: 'linear-gradient(180.79deg, #FFFFFF 7.81%, rgba(187, 221, 217, 0.6) 205.96%)',marginTop:'40px'}}>
                    {posts.map((post: any, postIndex: number) => (

                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <div>
                                <img
                                    src={post.data.homelogo?.url || ''}
                                    alt={post.data.homelogo?.alt || 'icon'}
                                    style={{ height: '56.12px', width: '63.13px', paddingTop: '75.06px', paddingBottom: '62.83px', }}
                                />
                            </div>
                            <div>
                                {post.data.homeheader?.split('\n').map((line: any, index: any) => (

                                    <Typography
                                        key={index}
                                        style={{
                                            fontFamily: 'Mulish, sans-serif',
                                            color: '#1E1E1E',
                                            fontWeight: 400,
                                            fontSize: '24px',
                                            lineHeight: '38.4px',
                                            

                                        }}
                                    >
                                        {line}
                                    </Typography>
                                ))}

                            </div>
                            <div style={{paddingTop:'21px'}}>

                                {post.data.homecontent?.split('\n').map((line: any, index: any) => (

                                    <Typography
                                        key={index}
                                        style={{
                                            fontFamily: 'Mulish, sans-serif',
                                            color: '#1E1E1E',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '29.6px',

                                        }}
                                    >
                                        {line}
                                    </Typography>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>


                <div style={{ height: '575.83px', width: '486.31px', borderRadius: '16px', background: 'linear-gradient(180.23deg, #FFFFFF 7.39%, #FFFFFF 45.36%, #FFB699 193.52%)', }}>
                    {posts.map((post: any, postIndex: number) => (
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <div>
                                <img
                                    src={post.data.editlogo?.url || ''}
                                    alt={post.data.editlogo?.alt || 'icon'}
                                    style={{ height: '111.78px', width: '77.04px', paddingTop: '75.06px', paddingBottom: '58.84px', }}
                                />
                            </div>
                            <div>
                                {post.data.editlogoheader?.split('\n').map((line: any, index: any) => (

                                    <Typography
                                        key={index}
                                        style={{
                                            fontFamily: 'Mulish, sans-serif',
                                            color: '#1E1E1E',
                                            fontWeight: 600,
                                            fontSize: '29.03px',
                                            lineHeight: '36.44px',

                                        }}
                                    >
                                        {line}
                                    </Typography>
                                ))}

                            </div>
                            <div style={{paddingTop:'44.76px'}}>

                                {post.data.editlogocontent?.split('\n').map((line: any, index: any) => (

                                    <Typography
                                        key={index}
                                        style={{
                                            fontFamily: 'Mulish, sans-serif',
                                            color: '#1E1E1E',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '29.6px',

                                        }}
                                    >
                                        {line}
                                    </Typography>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>


                <div style={{ height: '476px', width: '402px', borderRadius: '16px', background: 'linear-gradient(180.79deg, #FFFFFF 7.81%, rgba(187, 221, 217, 0.6) 205.96%)', marginTop:'40px'}}>
                    {posts.map((post: any, postIndex: number) => (
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                            <div>
                                <img
                                    src={post.data.calenderlogo?.url || ''}
                                    alt={post.data.calenderlogo?.alt || 'icon'}
                                    style={{ height: '80.18px', width: '80.18px', paddingTop: '75.06px', paddingBottom: '43.59px', }}
                                />
                            </div>
                            <div>
                                {post.data.calenderheader?.split('\n').map((line: any, index: any) => (

                                    <Typography
                                        key={index}
                                        style={{
                                            fontFamily: 'Mulish, sans-serif',
                                            color: '#565656',
                                            fontWeight: 400,
                                            fontSize: '24px',
                                            lineHeight: '38.4px',

                                        }}
                                    >
                                        {line}
                                    </Typography>
                                ))}

                            </div>
                            <div style={{paddingTop:'17px'}}>

                                {post.data.calendercontent?.split('\n').map((line: any, index: any) => (

                                    <Typography
                                        key={index}
                                        style={{
                                            fontFamily: 'Mulish, sans-serif',
                                            color: '#1E1E1E',
                                            fontWeight: 400,
                                            fontSize: '16px',
                                            lineHeight: '29.6px',

                                        }}
                                    >
                                        {line}
                                    </Typography>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </Grid>
        </Box>
    )
};

export default Choisir;
