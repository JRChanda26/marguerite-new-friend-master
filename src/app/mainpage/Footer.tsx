"use client";

import React, { useEffect, useState } from 'react';
import { client } from '../../../prismic-configuration';
import { Box, Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';


const Footer: React.FC = () => {
    const [posts, setPosts] = useState<[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const response: any = await client.getAllByType('footer');
            setPosts(response);
        };

        fetchPosts();
    }, []);

    return (
        <Box sx={{ background: '#24535C',display:'flex',justifyContent:'space-evenly',paddingTop:'148.98px',paddingBottom:'220.97px'}}>
            <div>
            {posts.map((post: any, postIndex: number) => (
                <div key={postIndex}>
                    <img
                        src={post.data.footerlogo?.url || ''}
                        alt={post.data.footerlogo?.alt || 'icon'}
                        style={{ height: '67.1px', width: '56.26px' , paddingBottom:'36.49px'}}
                    />
                    {post.data.lefttext?.split('\n').map((line: any, index: any) => (
                        <Typography
                            key={index}
                            style={{
                                fontFamily: 'Mulish, sans-serif',
                                color: '#FFFFFF',
                                fontWeight: 400,
                                fontSize: '19.84px',
                                lineHeight: '24.9px',
                                paddingTop:'10px'
                               
                            }}
                        >
                            {line}
                        </Typography>
                    ))}
                     <div style={{display:'flex',gap:'23.56px',paddingTop:'30.82px'}}>
                        <Link href={'www.linkedin.com'}>
                     <img
                        src={post.data.linkedin?.url || ''}
                        alt={post.data.linkedin?.alt || 'icon'}
                        style={{ height: '44.65px', width: '44.65px' }}
                        
                    />
                    </Link>
                    <Link href={'www.twitter.com'}>
                    <img
                        src={post.data.twitter?.url || ''}
                        alt={post.data.twitter?.alt || 'icon'}
                        style={{ height: '44.65px', width: '44.65px' }}
                       
                    />
                    </Link>
                </div>
                </div>
               
            ))}
            </div>
            <div>
            {posts.map((post: any, postIndex: number) => (
                <div key={postIndex}>
                    {post.data.middletext?.split('\n').map((line: any, index: any) => (
                        <Typography
                            key={index}
                            style={{
                                fontFamily: 'Mulish, sans-serif',
                                color: '#D3DDDE',
                                fontWeight: 400,
                                fontSize: '24.8px',
                                lineHeight: '31.13px',
                                paddingBottom:'19.84px'
                            }}
                        >
                            {line}
                        </Typography>
                    ))}
                  
                </div>

                
               
            ))}
            </div>

            <div>
            {posts.map((post: any, postIndex: number) => (
                <div key={postIndex}>
                    {post.data.righttext?.split('\n').map((line: any, index: any) => (
                        <Typography
                            key={index}
                            style={{
                                fontFamily: 'Mulish, sans-serif',
                                color: '#D3DDDE',
                                fontWeight: 400,
                                fontSize: '24.8px',
                                lineHeight: '31.13px',
                                 paddingBottom:'19.84px'
                            }}
                        >
                            {line}
                        </Typography>
                    ))}
                  
                </div>

                
               
            ))}
            </div>
        </Box>
    )
};

export default Footer;
