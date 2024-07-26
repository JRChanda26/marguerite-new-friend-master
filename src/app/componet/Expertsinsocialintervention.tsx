"use client";

import React, { useEffect, useState } from 'react';
import { client } from '../../../prismic-configuration';
import { Box, Grid, Typography } from '@mui/material';

interface Post {
  id: string;
  data: {
    content: String;
    title: string;
    logo: {
      url: string;
      alt: string;
    };
    services: string;
    tarifs: string;
    icon: {
      url: string;
      alt: string;
    };
    contentleft: string;
    leftcontent2: string;
    contentright: {
      url: string;
    };
  };
}

const Expertsinsocialintervention: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType('homepage');
      setPosts(response);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Box sx={{}}>
        {posts.map((post: Post) => (
          <Grid container spacing={0} key={post.id} style={{ position: 'fixed',
           top: 40, zIndex: 1,
            display: 'flex', 
           flexDirection: 'row', 
           boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.2)',
            background: '#FFF', 
            padding: '20px 50px 20px 50px',
            left: 20,
            right: 0,
            // width:'100%',
            width: 'calc(100% - 40px)',
            borderRadius: '10px' }}>
               <Grid item lg={8}>
              <img src={post.data.logo.url || ''} alt={post.data.logo.alt || 'logo'} style={{ height: '25px', width: '25px' }} />
              </Grid>
               <Grid item lg={4} style={{ display: 'flex', flexDirection: 'row', gap: '50px' }}>
                <Typography style={{ color: '#000', fontSize: '15px' }}>
                  {post.data.title}
                 </Typography>
                <Typography style={{ color: '#000', fontSize: '15px' }}>
                  {post.data.services}
                </Typography>
               <Typography style={{ color: '#000', fontSize: '15px' }}>
                {post.data.tarifs}
              </Typography>
              <img src={post.data.icon.url || ''} alt={post.data.icon.alt || 'icon'} style={{ height: '25px', width: '25px' }} />
              </Grid>
          </Grid>
        ))}
      </Box>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', }}>
        {posts.map((post: Post) => (
          <Grid container spacing={0} key={post.id}>
            <Grid item lg={6}>
              <div style={{ paddingLeft: '30px', background: '#F6C09E',paddingTop:'135px' }}>
                {posts.map((post: Post) => (
                  <Typography style={{ fontSize: '25px', fontFamily: 'fantasy', paddingTop: '200px' }}>{post.data.content}</Typography>
                ))
                }
                {post.data.contentleft.split('\n').map((line, index) => (
                  <Typography key={index} style={{ color: '#000', fontSize: '40px', fontFamily: '', width: '100%', }}>
                    {line}
                  </Typography>
                ))}
              </div>
            </Grid>
            <Grid item lg={6} style={{}}>
              <img src={post.data.contentright.url || ''} alt={post.data.title} style={{background:''}} />
            </Grid>
          </Grid>
        ))}



       

      </div>
    </div>
  );
};

export default Expertsinsocialintervention;
