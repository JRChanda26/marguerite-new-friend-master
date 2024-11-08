// "use client";

// import React, { useEffect, useState } from "react";
// import { client } from "../../../prismic-configuration";
// import { Box, Button, Grid, Typography } from "@mui/material";
// import Link from "next/link";

// const Motsdenotreclient: React.FC = () => {
//   const [posts, setPosts] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response: any = await client.getAllByType("motsdenotreclient");
//       setPosts(response);
//     };

//     fetchPosts();
//   }, []);
//   const backgroundImage = posts[0]?.data?.backgroundimage?.url || "";
//   return (
//     <Box
//       sx={{
//         backgroundImage: `url(${backgroundImage})`,
//         backgroundSize: "cover",
//         width: "100%",
//         height: "1105.57px",
//       }}
//     >
//       <div>
//         {posts.map((post: any, postIndex: number) => (
//           <>
//             <div style={{ display: "flex", justifyContent: "center" }}>
//               <Typography
//                 style={{
//                   fontFamily: "Mulish, sans-serif",
//                   color: "#FFFFFF",
//                   fontWeight: 700,
//                   fontSize: "66.25px",
//                   lineHeight: "79.51px",
//                   paddingTop: "250px",
//                 }}
//               >
//                 {post.data.headertext}
//                 <span
//                   style={{
//                     fontFamily: "Jenna Sue, sans-serif",
//                     color: "#FFFFFF",
//                     fontWeight: 400,
//                     fontSize: "96px",
//                     lineHeight: "115.2px",
//                     paddingLeft: "7px",
//                     paddingRight: "7px",
//                     textAlign: "center",
//                   }}
//                 >
//                   {post.data.notre}
//                 </span>
//                 {post.data.client}
//               </Typography>
//             </div>

//             <Grid container spacing={3} sx={{padding:'80px'}} >
//               <Grid item lg={3} >
//                 <Box sx={{background:'#FFFFFF',borderRadius:'22.08px'}}>
//                 <div>
//                   <Typography style={{padding:'33.13px 22.08px 49.69px 22.08px'}}>{post.data.box1content}</Typography>
//                 </div>
//                 <div style={{display:'flex',flexDirection:'row'}}>
//                     <div style={{padding:'0px 3.39px 36.52px 22.08px'}}>
//                     <img
//                                         src={post.data.box1personimage?.url || ''}
//                                         alt={post.data.box1personimage?.alt || 'icon'}
//                                         style={{ height:'55.21px',width:'55.21px'}}
//                                     />
//                     </div>
//                     <div style={{display:'flex',flexDirection:'column'}}>
//                         <Typography>
//                             {post.data.box1personname}
//                         </Typography>
//                         <Typography>
//                         {post.data.box1date}
//                         </Typography>
//                     </div>
//                 </div>
//                 </Box>
//               </Grid>
//               <Grid item lg={3} >
//               <Box sx={{background:'#FFFFFF',borderRadius:'22.08px'}}>
//                 <div>
//                   <Typography style={{padding:'33.13px 22.08px 49.69px 22.08px'}}>{post.data.box2content}</Typography>
//                 </div>
//                 <div style={{display:'flex',flexDirection:'row'}}>
//                     <div style={{padding:'0px 3.39px 36.52px 22.08px'}}>
//                     <img
//                                         src={post.data.box2personimage?.url || ''}
//                                         alt={post.data.box2personimage?.alt || 'icon'}
//                                         style={{ height:'55.21px',width:'55.21px'}}
//                                     />
//                     </div>
//                     <div style={{display:'flex',flexDirection:'column'}}>
//                         <Typography>
//                             {post.data.box2personname}
//                         </Typography>
//                         <Typography>
//                         {post.data.box2date}
//                         </Typography>
//                     </div>
//                 </div>
//                 </Box>
//               </Grid>
//               <Grid item lg={3} >
//               <Box sx={{background:'#FFFFFF',borderRadius:'22.08px'}}>
//                 <div>
//                   <Typography style={{padding:'33.13px 22.08px 49.69px 22.08px'}}>{post.data.box3content}</Typography>
//                 </div>
//                 <div style={{display:'flex',flexDirection:'row'}}>
//                     <div style={{padding:'0px 3.39px 36.52px 22.08px'}}>
//                     <img
//                                         src={post.data.box3personimage?.url || ''}
//                                         alt={post.data.box3personimage?.alt || 'icon'}
//                                         style={{ height:'55.21px',width:'55.21px'}}
//                                     />
//                     </div>
//                     <div style={{display:'flex',flexDirection:'column'}}>
//                         <Typography>
//                             {post.data.box3personname}
//                         </Typography>
//                         <Typography>
//                         {post.data.box3date}
//                         </Typography>
//                     </div>
//                 </div>
//                 </Box>
//               </Grid>
//               <Grid item lg={3} >
//               <Box sx={{background:'#FFFFFF',borderRadius:'22.08px'}}>
//                 <div>
//                   <Typography style={{padding:'33.13px 22.08px 49.69px 22.08px'}}>{post.data.box4content}</Typography>
//                 </div>
//                 <div style={{display:'flex',flexDirection:'row'}}>
//                     <div style={{padding:'0px 3.39px 36.52px 22.08px'}}>
//                     <img
//                                         src={post.data.box4personimage?.url || ''}
//                                         alt={post.data.box4personimage?.alt || 'icon'}
//                                         style={{ height:'55.21px',width:'55.21px'}}
//                                     />
//                     </div>
//                     <div style={{display:'flex',flexDirection:'column'}}>
//                         <Typography>
//                             {post.data.box4personname}
//                         </Typography>
//                         <Typography>
//                         {post.data.box4date}
//                         </Typography>
//                     </div>
//                 </div>
//                 </Box>
//               </Grid>
//             </Grid>
//           </>
//         ))}
//       </div>
//     </Box>
//   );
// };

// export default Motsdenotreclient;
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

  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        width: "100%",
        height: "1105.57px",
      }}
    >
      <div>
        {posts.map((post: any, postIndex: number) => (
          <div key={postIndex}>
            {/* Header Section */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography
                style={{
                  fontFamily: "Mulish, sans-serif",
                  color: "#FFFFFF",
                  fontWeight: 700,
                  fontSize: "66.25px",
                  lineHeight: "79.51px",
                  paddingTop: "250px",
                }}
              >
                {post.data.headertext}
                <span
                  style={{
                    fontFamily: "Jenna Sue, sans-serif",
                    color: "#FFFFFF",
                    fontWeight: 400,
                    fontSize: "96px",
                    lineHeight: "115.2px",
                    paddingLeft: "7px",
                    paddingRight: "7px",
                    textAlign: "center",
                  }}
                >
                  {post.data.notre}
                </span>
                {post.data.client}
              </Typography>
            </div>

            {/* Automatic Slide */}
            <Grid container spacing={3} sx={{ padding: "20px" }}>
              <Grid item lg={12} sx={{}}>
                <div
                  style={{
                    display: "flex",
                    overflow: "hidden",
                    width: "100%",
                    
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      animation: "slide 10s infinite linear", // Slide animation applied here
                      gap:'20px'
                    }}
                  >
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} style={{ flex: "0 0 auto", width: "25%" }}>
                        <Box sx={{ background: "#FFFFFF", borderRadius: "22.08px" }}>
                          <div>
                            <Typography
                              style={{
                                padding: "33.13px 22.08px 49.69px 22.08px",
                              }}
                            >
                              {post.data[`box${i}content`]}
                            </Typography>
                          </div>
                          <div style={{ display: "flex", flexDirection: "row" }}>
                            <div style={{ padding: "0px 3.39px 36.52px 22.08px" }}>
                              <img
                                src={post.data[`box${i}personimage`]?.url || ""}
                                alt={post.data[`box${i}personimage`]?.alt || "icon"}
                                style={{ height: "55.21px", width: "55.21px" }}
                              />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column" }}>
                              <Typography>{post.data[`box${i}personname`]}</Typography>
                              <Typography>{post.data[`box${i}date`]}</Typography>
                            </div>
                          </div>
                        </Box>
                      </div>
                    ))}
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        ))}
      </div>

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
