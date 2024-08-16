"use client";

import React, { useEffect, useState } from 'react';
import { client } from '../../../prismic-configuration';
import { Box, Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';


const Pricing: React.FC = () => {
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response: any = await client.getAllByType('pricing');
            setPosts(response);
        };

        fetchPosts();
    }, []);
    const backgroundImage = posts[0]?.data?.image?.url || '';
    return (
        <Box>
            <div style={{
                backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',
                width: '100%',
                height: '603.67px'
            }}>
                {posts.map((post: any, postIndex: number) => (
                    <>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', paddingTop: '425.67px' }}>
                            <div style={{ background: '#fff', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', borderRadius: '37px 37px 0px 0px', padding: '41px 152px 41px 152px', }}>
                                <Typography

                                    style={{
                                        fontFamily: 'Mulish, sans-serif',
                                        color: '#0A1411',
                                        fontWeight: 700,
                                        fontSize: '64px',
                                        lineHeight: '80.32px',
                                    }}
                                >
                                    {post.data.headertext}
                                </Typography>
                                <Typography
                                    style={{
                                        fontFamily: 'Mulish, sans-serif',
                                        color: '#565656',
                                        fontWeight: 400,
                                        fontSize: '24px',
                                        lineHeight: '38.4px',
                                    }}
                                >
                                    {post.data.content}
                                </Typography>
                            </div>
                        </div>
                    </>
                ))}
            </div>


            <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', gap: '62.74px', paddingTop: '192.33px', paddingBottom: '113.83px' }}>
                <div style={{
                    height: 'auto',
                    maxHeight: '942.69px',
                    width: '402px', borderRadius: '16px', background: '#BBDDD959', paddingBottom: '34px'
                }}>
                    {posts.map((post: any, postIndex: number) => (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>

                                <div>


                                    <Typography
                                        style={{
                                            fontFamily: 'Mulish, sans-serif',
                                            fontWeight: 400,
                                            fontSize: '32.68px',
                                            lineHeight: '49.02px',
                                            paddingTop: '83.66px'


                                        }}
                                    >
                                        {post.data.basic_care}
                                    </Typography>

                                </div>
                                <div style={{}}>

                                    {post.data.basicprice?.split('\n').map((line: any, index: any) => (

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

                                <div style={{}}>

                                    {post.data.basiccontent?.split('\n').map((line: any, index: any) => (

                                        <Typography
                                            key={index}
                                            style={{
                                                fontFamily: 'Mulish, sans-serif',
                                                color: '#1E1E1E',
                                                fontWeight: 400,
                                                fontSize: '16px',
                                                lineHeight: '29.6px',
                                                paddingTop: '7px'

                                            }}
                                        >
                                            {line}
                                        </Typography>
                                    ))}
                                </div>


                            </div>
                            <div style={{ padding: '33.99px 62.74px 33.99px 62.74px' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '33.99px 62.74px 33.99px 62.74px', borderRadius: '23.53px', background: '#EA875C' }}>
                                    <Typography style={{ color: '#FFFFFF', fontWeight: 400, fontSize: '14px', lineHeight: '25.9px', paddingRight: '12px' }}>
                                        {post.data.buttontext}
                                    </Typography>
                                    <img
                                        src={post.data.buttonicon?.url || ''}
                                        alt={post.data.buttonicon?.alt || 'icon'}
                                        style={{ width: '19.79px', height: '17.22px' }}
                                    />
                                </div>
                            </div>
                        </>
                    ))}
                </div>


                <div style={{
                    width: '568.16px',
                    height: '1049.55px',
                    borderRadius: '16px', background: '#BBDDD959',
                }}>
                    {posts.map((post: any, postIndex: number) => (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>

                                <div>

                                    <Typography
                                        style={{
                                            fontFamily: 'Mulish, sans-serif',
                                            fontWeight: 400,
                                            fontSize: '32.68px',
                                            lineHeight: '49.02px',
                                            paddingTop: '84.96px'

                                        }}
                                    >
                                        {post.data.soins_complets}
                                    </Typography>

                                </div>
                                <div style={{ paddingTop: '44.76px' }}>

                                    {post.data.moderateprice?.split('\n').map((line: any, index: any) => (

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

                                <div style={{}}>

                                    {post.data.moderatecontent?.split('\n').map((line: any, index: any) => (

                                        <Typography
                                            key={index}
                                            style={{
                                                fontFamily: 'Mulish, sans-serif',
                                                color: '#1E1E1E',
                                                fontWeight: 400,
                                                fontSize: '16px',
                                                lineHeight: '29.6px',
                                                paddingTop: '7px'


                                            }}
                                        >
                                            {line}
                                        </Typography>
                                    ))}
                                </div>


                            </div>
                            <div style={{ padding: '33.99px 62.74px 33.99px 62.74px' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '33.99px 62.74px 33.99px 62.74px', borderRadius: '23.53px', background: '#292F36' }}>
                                    <Typography style={{ color: '#FFFFFF', fontWeight: 400, fontSize: '14px', lineHeight: '25.9px', paddingRight: '12px' }}>
                                        {post.data.buttontext}
                                    </Typography>
                                    <img
                                        src={post.data.orangearrow?.url || ''}
                                        alt={post.data.orangearrow?.alt || 'icon'}
                                        style={{ width: '19.79px', height: '17.22px' }}
                                    />
                                </div>
                            </div>
                        </>
                    ))}
                </div>


                <div style={{
                    width: '481.02px',
                    height: 'auto',
                    maxHeight: '942.69px',
                    borderRadius: '16px', background: '#BBDDD959', paddingBottom: '34px'
                }}>
                    {posts.map((post: any, postIndex: number) => (
                        <>
                            <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>

                                <div>

                                    <Typography
                                        style={{
                                            fontFamily: 'Mulish, sans-serif',
                                            fontWeight: 400,
                                            fontSize: '32.68px',
                                            lineHeight: '49.02px',
                                            paddingTop: '83.66px'

                                        }}
                                    >
                                        {post.data.soins_premium}
                                    </Typography>

                                </div>
                                <div style={{ paddingTop: '17px' }}>

                                    {post.data.premium?.split('\n').map((line: any, index: any) => (

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

                                <div style={{}}>

                                    {post.data.premiumcontent?.split('\n').map((line: any, index: any) => (

                                        <Typography
                                            key={index}
                                            style={{
                                                fontFamily: 'Mulish, sans-serif',
                                                color: '#1E1E1E',
                                                fontWeight: 400,
                                                fontSize: '16px',
                                                lineHeight: '29.6px',
                                                paddingTop: '7px'


                                            }}
                                        >
                                            {line}
                                        </Typography>
                                    ))}
                                </div>

                            </div>
                            <div style={{ padding: '33.99px 62.74px 33.99px 62.74px' }}>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', padding: '33.99px 62.74px 33.99px 62.74px', borderRadius: '23.53px', background: '#EA875C' }}>
                                    <Typography style={{ color: '#FFFFFF', fontWeight: 400, fontSize: '14px', lineHeight: '25.9px', paddingRight: '12px' }}>
                                        {post.data.buttontext}
                                    </Typography>
                                    <img
                                        src={post.data.buttonicon?.url || ''}
                                        alt={post.data.buttonicon?.alt || 'icon'}
                                        style={{ width: '19.79px', height: '17.22px' }}
                                    />
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </Grid>
        </Box>
    )
};

export default Pricing;
