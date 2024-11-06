"use client";

import React, { useEffect, useState } from 'react';
import { client } from '../../../prismic-configuration';
import { Box, Button, Grid, Typography } from '@mui/material';
import Link from 'next/link';


const Expertsinsocialintervention: React.FC = () => {
  const [posts, setPosts] = useState<[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType('header');
      setPosts(response);
    };

    fetchPosts();
  }, []);

  return (
    <Box>

      <div>
        {posts.map((post: any) => (
          <Grid container spacing={0} key={post.id} style={{
            position: 'fixed',
            top: 52, zIndex: 1,
            display: 'flex',
            flexDirection: 'row',
            boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
            background: '#FFF',
            // background:'rgba(255, 255, 255, 0.6)',
            // padding: '21.97px 0px 21.94px 69.25px',
            padding: '5px',
            left: 60,
            right: 0,
            // width:'100%',
            width: 'calc(100% - 123px)',
            borderRadius: '10px',
            justifyContent:'space-evenly'
          }}>
            <Grid item lg={4}>
              <img src={post.data.logo.url || ''} alt={post.data.logo.alt || 'logo'} style={{height:'67.1px',width:'57.56px'}} />
            </Grid>
            <Grid item lg={7} style={{ display: 'flex', flexDirection: 'row', gap: '60px' ,justifyContent:'flex-end'}}>
              <Typography style={{ color: '#24535C', fontSize: '26.49px', fontWeight: 400,paddingTop:'13px' }}>
                {post.data.title1}
              </Typography>
              <Typography style={{ color: '#24535C', fontSize: '26.49px', fontWeight: 400, paddingTop:'13px'}}>
                {post.data.title2}
              </Typography>
              <Typography style={{ color: '#24535C', fontSize: '26.49px', fontWeight: 400, paddingTop:'13px'}}>
                {post.data.title3}
              </Typography>
              <img src={post.data.contact.url || ''} alt={post.data.contact.alt || 'icon'} style={{height:'50px',width:'50px',paddingTop:'10px'}} />
            </Grid>
          </Grid>
        ))}
        </div>




        <div>
        {posts.map((post: any) => (
          <Grid container spacing={0} key={post.id}>

            <Grid item lg={6} style={{paddingLeft: '30px', background: '#F6C09E' }}>
                {posts.map((post: any) => (
                  // eslint-disable-next-line react/jsx-key
                  <Typography style={{ fontFamily: 'Jenna Sue',fontWeight: 400, fontSize: '48px', paddingTop: '283.5px', lineHeight: '57.6px', color: '#24535C' }}>{post.data.leftcontent1}</Typography>
                ))
                }
                  <Typography style={{ fontFamily: 'Mulish',color: '#24535C', fontWeight: 700, fontSize: '64px' ,lineHeight:'76.8px',paddingRight:'61.79px'}}>
                    {post.data.leftcontent2}
                  </Typography>
                <div style={{paddingTop:'68.14px',paddingBottom:'159.85px'}}>
                {posts.map((post: any) => (
                  // eslint-disable-next-line react/jsx-key
                  <Link href="/Footer" style={{textDecoration:'none'}}>
                  <Button style={{display:'flex',flexDirection:'row',background:'#24535C',padding:'16px 24px 16px 24px',gap:'18px',borderRadius:'82px'}}>
                    <Typography style={{ fontWeight: 400, fontSize: '15.2px', lineHeight: '18.24px', color: '#FFFFFF' }}>{post.data.buttontext}</Typography>
                    <img src={post.data.buttonimage.url || ''} alt={post.data.buttonimage} style={{}} />
                  </Button>
                  </Link>
                ))
                }
              </div>
            </Grid>


            <Grid item lg={6}>
              <img src={post.data.contentright.url || ''} alt={post.data.contentright} style={{height:'996px',width:'49vw'}} />
            </Grid>


          </Grid>
        ))}
      </div>


    </Box>
  );
};

export default Expertsinsocialintervention;
