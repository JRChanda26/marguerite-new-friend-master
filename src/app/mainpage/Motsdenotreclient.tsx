"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Grid, Typography } from "@mui/material";

const Motsdenotreclient: React.FC = () => {
  const [posts, setPosts] = useState<any[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("motsdenotreclient");
      setPosts(response);
    };

    fetchPosts();
  }, []);

  const backgroundImage = posts[0]?.data?.backgroundimage?.url || "";

  const testimonials = posts
    .flatMap((post) => [post.data.testimonial1, post.data.testimonial2])
    .filter(Boolean);

  const repeatedTestimonials = Array.from(
    { length: 10 },
    () => testimonials
  ).flat();

  return (
    // <Box
    //   sx={{
    //     backgroundImage: `url(${backgroundImage})`,
    //     backgroundSize: "cover",
    //     width: "100%",
    //     height: "auto",
    //     paddingBottom: "100px",
    //   }}
    // >
    //   <div>
    //     {posts.map((post: any, postIndex: number) => (
    //       <div
    //         key={postIndex}
    //         style={{
    //           display: "flex",
    //           flexDirection: "column",
    //           justifyContent: "center",
    //           textAlign: "center",
    //         }}
    //       >
    //         <Typography
    //           style={{
    //             fontFamily: "Mulish, sans-serif",
    //             color: "#FFFFFF",
    //             fontWeight: 700,
    //             fontSize: "66.25px",
    //             lineHeight: "79.51px",
    //             paddingTop: "200px",
    //           }}
    //         >
    //           {post.data.title}
    //         </Typography>
    //         <Typography
    //           style={{
    //             fontFamily: "Mulish, sans-serif",
    //             color: "#FFFFFF",
    //             fontWeight: 400,
    //             fontSize: "24px",
    //             lineHeight: "79.51px",
    //             paddingTop: "20px",
    //           }}
    //         >
    //           {post.data.description}
    //         </Typography>

    //         {/* Automatic Slide */}
    //         <Grid container spacing={3}>
    //           <Grid item lg={12}>
    //             <div
    //               style={{
    //                 display: "flex",
    //                 overflow: "hidden",
    //                 width: "100%",
    //               }}
    //             >
    //               <div
    //                 style={{
    //                   display: "flex",
    //                   animation: "slide 50s infinite linear",
    //                   gap: "20px",
    //                 }}
    //               >
    //                 {repeatedTestimonials.map((testimonial, index) => (
    //                   <div key={index}>
    //                     <Box
    //                       sx={{
    //                         background: "#FFFFFF",
    //                         borderRadius: "22.08px",
    //                         padding: "20px",
    //                         width: "100%",
    //                         height: "auto",
    //                       }}
    //                     >
    //                       <div>
    //                         <Typography>{testimonial}</Typography>
    //                       </div>
    //                     </Box>
    //                   </div>
    //                 ))}
    //               </div>
    //             </div>
    //           </Grid>
    //         </Grid>
    //       </div>
    //     ))}
    //   </div>

    //   <style jsx>{`
    //     @keyframes slide {
    //       0% {
    //         transform: translateX(0);
    //       }
    //       100% {
    //         transform: translateX(-100%);
    //       }
    //     }
    //   `}</style>
    // </Box>
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        width: "100%",
        paddingBottom: "100px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={3}
        sx={{
          // maxWidth: "1200px",
          padding: "40px 20px",
        }}
      >
        {posts.map((post: any, postIndex: number) => (
          <Grid
            item
            xs={12}
            key={postIndex}
            sx={{
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Mulish, sans-serif",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: { xs: "36px", md: "66.25px" },
                lineHeight: { xs: "44px", md: "79.51px" },
                paddingTop: "200px",
              }}
            >
              {post.data.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Mulish, sans-serif",
                color: "#FFFFFF",
                fontWeight: 400,
                fontSize: { xs: "18px", md: "24px" },
                lineHeight: "1.5",
                paddingTop: "20px",
                maxWidth: "800px",
              }}
            >
              {post.data.description}
            </Typography>

            {/* Testimonials Scrolling Section */}
            <Grid
              container
              item
              xs={12}
              sx={{
                overflow: "hidden",
                display: "flex",
                justifyContent: "center",
                padding: { xs: "20px", md: "40px 0" },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  gap: "20px",
                  animation: "slide 50s linear infinite",
                  width: "100%",
                  maxWidth: "100vw",
                }}
              >
                {repeatedTestimonials.map((testimonial, index) => (
                  <Box
                    key={index}
                    sx={{
                      background: "#FFFFFF",
                      borderRadius: "22.08px",
                      padding: "20px",
                      minWidth: { xs: "250px", sm: "300px", md: "350px" },
                    }}
                  >
                    <Typography>{testimonial}</Typography>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </Box>
  );
};

export default Motsdenotreclient;
