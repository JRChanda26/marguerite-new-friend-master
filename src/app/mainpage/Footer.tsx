// "use client";

// import React, { useEffect, useState } from "react";
// import { client } from "../../../lib/prismic-configuration";
// import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
// import { PrismicNextLink } from "@prismicio/next";
// import Link from "next/link";

// const Footer: React.FC = () => {
//   const [footerPage, setFooterPage] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response: any = await client.getAllByType("footer" as any);
//       setFooterPage(response);
//     };

//     fetchData();
//   }, []);

//   const [socialLinkPage, setSocialLinkPage] = useState<any[]>([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response: any = await client.getAllByType("contact" as any);
//       setSocialLinkPage(response);
//     };
//     fetchData();
//   }, []);

//   const allLinkText = [
//     footerPage[0]?.data.link_text1,
//     footerPage[0]?.data.link_text2,
//     footerPage[0]?.data.link_text3,
//     footerPage[0]?.data.link_text4,
//     footerPage[0]?.data.link_text5,
//     footerPage[0]?.data.link_text6,
//     footerPage[0]?.data.link_text7,
//   ];

//   const isMax = useMediaQuery("(min-width:1930px)");
//   const isMax1 = useMediaQuery("(min-width:2050px)");
//   const isMax2 = useMediaQuery("(min-width:2570px)");
//   const isMax3 = useMediaQuery("(min-width:2890px)");
//   const isMax4 = useMediaQuery("(min-width:3210px)");

//   return (
//     <div>
//       <Box
//         sx={{
//           backgroundColor: "#24535C",
//           padding: {
//             xs: "5%",
//             sm: "5%",
//             lg: "120px 80px 100px 80px",
//             xl: isMax ? "80px 152px 80px 181px" : "167px 152px 164px 121px",
//           },
//           // mt: 4,
//         }}
//       >
//         <div
//           style={{
//             // padding: isMax ? "0px 250px 0px 350px" : "0px 0px",
//             padding: isMax4
//               ? "0px 650px"
//               : isMax3
//                 ? "0px 350px 0px 550px"
//                 : isMax2
//                   ? "0px 250px 0px 450px"
//                   : isMax1
//                     ? "0px 250px 0px 350px"
//                     : isMax
//                       ? "0px 120px"
//                       : "0px 0px",
//           }}
//         >
//           <Grid
//             container
//             spacing={2}
//             justifyContent="space-between"
//             alignItems="flex-start"
//             sx={{ margin: "1 auto" }}
//           >
//             <Grid
//               item
//               xs={12}
//               sm={5}
//               lg={4}
//               xl={
//                 isMax4
//                   ? 3.5
//                   : isMax3
//                     ? 3.5
//                     : isMax2
//                       ? 3.5
//                       : isMax1
//                         ? 3.5
//                         : isMax
//                           ? 3.5
//                           : 4.1
//               }
//               textAlign={{ xs: "center", sm: "left" }}
//             >
//               {footerPage.map((post, postIndex) => (
//                 <div key={postIndex}>
//                   {post?.data.marguerite_logo && (
//                     // eslint-disable-next-line @next/next/no-img-element
//                     <img
//                       src={post.data.marguerite_logo.url || undefined}
//                       alt={post.data.marguerite_logo.alt || "Logo"}
//                       style={{
//                         height: "auto",
//                         width: "147px",
//                       }}
//                     />
//                   )}
//                   <Typography
//                     sx={{
//                       fontFamily: "var(--font-mulish)",
//                       color: "#FFFFFF",
//                       fontWeight: 400,
//                       fontSize: {
//                         xs: "16px",
//                         sm: "14px",
//                         lg: "16px",
//                         xl: "19.84px",
//                       },
//                       lineHeight: "auto",
//                       paddingTop: "10px",
//                       textAlign: { xs: "center", sm: "left" },
//                     }}
//                   >
//                     {post?.data.description}
//                   </Typography>
//                   <Box
//                     sx={{
//                       display: "flex",
//                       justifyContent: { xs: "center", sm: "flex-start" },
//                       marginTop: "10px",
//                       gap: "20px",
//                     }}
//                   >
//                     <PrismicNextLink
//                       field={socialLinkPage[0]?.data.linkedin_link}
//                     >
//                       {post?.data.linkedin_icon && (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={post.data.linkedin_icon.url || undefined}
//                           alt={post.data.linkedin_icon.alt || "LinkedIn"}
//                           style={{ width: "24px", height: "24px" }}
//                         />
//                       )}
//                     </PrismicNextLink>
//                     <PrismicNextLink
//                       field={socialLinkPage[0]?.data.twitter_link}
//                     >
//                       {post?.data.twitter_icon && (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img
//                           src={post.data.twitter_icon.url || undefined}
//                           alt={post.data.twitter_icon.alt || "Twitter"}
//                           style={{ width: "24px", height: "24px" }}
//                         />
//                       )}
//                     </PrismicNextLink>
//                   </Box>
//                 </div>
//               ))}
//             </Grid>
//             <Grid item xs={12} sm={3} lg={3} xl={3}>
//               {allLinkText.slice(0, 4).map((text: any, index: number) => (
//                 <Typography
//                   key={index}
//                   sx={{
//                     fontFamily: "var(--font-mulish)",
//                     color: "#D3DDDE",
//                     fontWeight: 400,
//                     fontSize: {
//                       xs: "18px",
//                       sm: "18px",
//                       lg: "20px",
//                       xl: "24.8px",
//                     },
//                     lineHeight: "auto",
//                     paddingBottom: "19.84px",
//                     textAlign: { xs: "center", sm: "left" },
//                   }}
//                 >
//                   {text}
//                 </Typography>
//               ))}
//             </Grid>
//             <Grid item xs={12} sm={3} lg={3} xl={3}>
//               {allLinkText.slice(4).map((text: any, index: number) => (
//                 <Typography
//                   key={index}
//                   sx={{
//                     fontFamily: "var(--font-mulish)",
//                     color: "#D3DDDE",
//                     fontWeight: 400,
//                     fontSize: {
//                       xs: "18px",
//                       sm: "18px",
//                       lg: "20px",
//                       xl: "24.8px",
//                     },
//                     lineHeight: "auto",
//                     paddingBottom: "19.84px",
//                     textAlign: { xs: "center", sm: "left" },
//                   }}
//                 >
//                   {text}
//                 </Typography>
//               ))}
//             </Grid>
//             {/* <Grid item xs={12} sm={3} lg={3} xl={3}>
//           {allLinkText.slice(4).map((text: any, index: number) => (
//             <React.Fragment key={index}>
//               {index === 1 ? (
//                 <Link
//                   href={"/blogs/blog"}
//                   style={{
//                     display: "flex",
//                     flexDirection: "row",
//                     textDecoration: "none",
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontFamily: "var(--font-mulish)",
//                       color: "#D3DDDE",
//                       fontWeight: 400,
//                       fontSize: {
//                         xs: "18px",
//                         sm: "18px",
//                         lg: "24.8px",
//                         xl: "24.8px",
//                       },
//                       lineHeight: "auto",
//                       paddingBottom: "19.84px",
//                       textAlign: { xs: "center", sm: "left" },
//                     }}
//                   >
//                     {text}
//                   </Typography>
//                 </Link>
//               ) : index === 2 ? (
//                 <Link
//                   href={"/contact"}
//                   style={{
//                     textDecoration: "none",
//                     width: "100%",
//                   }}
//                 >
//                   <Typography
//                     sx={{
//                       fontFamily: "var(--font-mulish)",
//                       color: "#D3DDDE",
//                       fontWeight: 400,
//                       fontSize: {
//                         xs: "18px",
//                         sm: "18px",
//                         lg: "24.8px",
//                         xl: "24.8px",
//                       },
//                       lineHeight: "auto",
//                       paddingBottom: "19.84px",
//                       textAlign: { xs: "center", sm: "left" },
//                     }}
//                   >
//                     {text}
//                   </Typography>
//                 </Link>
//               ) : (
//                 <Typography
//                   sx={{
//                     fontFamily: "var(--font-mulish)",
//                     color: "#D3DDDE",
//                     fontWeight: 400,
//                     fontSize: {
//                       xs: "18px",
//                       sm: "18px",
//                       lg: "24.8px",
//                       xl: "24.8px",
//                     },
//                     lineHeight: "auto",
//                     paddingBottom: "19.84px",
//                     textAlign: { xs: "center", sm: "left" },
//                   }}
//                 >
//                   {text}
//                 </Typography>
//               )}
//             </React.Fragment>
//           ))}
//         </Grid> */}
//           </Grid>
//         </div>
//       </Box>
//     </div>
//   );
// };

// export default Footer;
"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

const Footer: React.FC = () => {
  const [footerPage, setFooterPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("footer" as any);
      setFooterPage(response);
    };

    fetchData();
  }, []);

  const [socialLinkPage, setSocialLinkPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("contact" as any);
      setSocialLinkPage(response);
    };
    fetchData();
  }, []);

  const allLinkText = [
    footerPage[0]?.data.link_text1,
    footerPage[0]?.data.link_text2,
    footerPage[0]?.data.link_text3,
    footerPage[0]?.data.link_text4,
    footerPage[0]?.data.link_text5,
    footerPage[0]?.data.link_text6,
    footerPage[0]?.data.link_text7,
  ];

  const isMax5 = useMediaQuery("(min-width:1370px)");
  const isMax = useMediaQuery("(min-width:1930px)");
  const isMax1 = useMediaQuery("(min-width:2050px)");
  const isMax2 = useMediaQuery("(min-width:2570px)");
  const isMax3 = useMediaQuery("(min-width:2890px)");
  const isMax4 = useMediaQuery("(min-width:3210px)");

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isTabScreen = useMediaQuery("(width:768px)");
  // const isBigTabScreen = useMediaQuery("(width:800px)");
  const isBigTabScreen = useMediaQuery("(width: 800px), (width: 820px), (width: 853px),(width: 912px)");

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#24535C",
          padding: {
            xs: "5%",
            sm: "5%",
            lg: "80px 50px 80px 120px",
            xl: isMax ? "80px 152px 80px 181px" : "80px 0px 80px 200px",
          },
          // mt: 4,
        }}
      >
        <div
          style={{
            // padding: isMax ? "0px 250px 0px 350px" : "0px 0px",
            padding: isMax4
              ? "0px 650px"
              : isMax3
                ? "0px 350px 0px 550px"
                : isMax2
                  ? "0px 250px 0px 450px"
                  : isMax1
                    ? "0px 250px 0px 350px"
                    : isMax
                      ? "0px 120px"
                      : "0px 0px",
          }}
        >
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ margin: "1 auto" }}
          >
            <Grid
              item
              xs={12}
              sm={5}
              lg={4}
              xl={
                isMax4
                  ? 3.5
                  : isMax3
                    ? 3.5
                    : isMax2
                      ? 3.5
                      : isMax1
                        ? 3.5
                        : isMax
                          ? 3.5
                          : 3
              }
              textAlign={{ xs: "left", sm: "left" }}
            >
              {footerPage.map((post, postIndex) => (
                <div key={postIndex}>
                  {post?.data.marguerite_logo && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.data.marguerite_logo.url || undefined}
                      alt={post.data.marguerite_logo.alt || "Logo"}
                      style={{
                        height: "auto",
                        width: "147px",
                      }}
                    />
                  )}
                  <Typography
                    // variant=""
                    sx={{
                      fontFamily: "var(--font-mulish)",
                      color: "#FFFFFF",
                      fontWeight: 400,
                      fontSize: {
                        // xs: "16px",
                        // sm: "14px",
                        // lg: "16px",
                        // xl: "19.84px",
                        xs: "13px",
                        sm: "17px",
                        lg: "18px",
                        xl: "18px",
                      },
                      lineHeight: "auto",
                      paddingTop: "10px",
                      textAlign: { xs: "left", sm: "left" },
                    }}
                  >
                    {post?.data.description}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: { xs: "flex-start", sm: "flex-start" },
                      marginTop: "10px",
                      gap: "20px",
                    }}
                  >
                    <PrismicNextLink
                      field={socialLinkPage[0]?.data.linkedin_link}
                    >
                      {post?.data.linkedin_icon && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.data.linkedin_icon.url || undefined}
                          alt={post.data.linkedin_icon.alt || "LinkedIn"}
                          style={{ width: "24px", height: "24px" }}
                        />
                      )}
                    </PrismicNextLink>
                    <PrismicNextLink
                      field={socialLinkPage[0]?.data.twitter_link}
                    >
                      {post?.data.twitter_icon && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.data.twitter_icon.url || undefined}
                          alt={post.data.twitter_icon.alt || "Twitter"}
                          style={{ width: "24px", height: "24px" }}
                        />
                      )}
                    </PrismicNextLink>
                  </Box>
                </div>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              lg={3}
              xl={3}
              mt={isTabScreen || isBigTabScreen ? 3 : 0}
            >
              {allLinkText.slice(0, 4).map((text: any, index: number) => (
                <Typography
                  // variant=""
                  key={index}
                  sx={{
                    fontFamily: "var(--font-mulish)",
                    color: "#D3DDDE",
                    fontWeight: 400,
                    fontSize: {
                      // xs: "18px",
                      // sm: "18px",
                      // lg: "20px",
                      // xl: "24.8px",
                      xs: "13px",
                      sm: "17px",
                      lg: "18px",
                      xl: "18px",
                    },
                    lineHeight: "auto",
                    paddingBottom: isSmallScreen ? "10px" : "19.84px",
                    paddingLeft: isMax5 ? "80px" : "0px",
                    textAlign: { xs: "left", sm: "left" },
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Grid>
            <Grid
              item
              xs={12}
              sm={3}
              lg={3}
              xl={3}
              mt={isTabScreen || isBigTabScreen ? 3 : isSmallScreen ? -2 : 0}
            >
              {allLinkText.slice(4).map((text: any, index: number) => (
                <Typography
                  // variant=""
                  key={index}
                  sx={{
                    fontFamily: "var(--font-mulish)",
                    color: "#D3DDDE",
                    fontWeight: 400,
                    fontSize: {
                      xs: "13px",
                      sm: "17px",
                      lg: "18px",
                      xl: "18px",
                    },
                    lineHeight: "auto",
                    paddingBottom: isSmallScreen ? "10px" : "19.84px",
                    textAlign: { xs: "left", sm: "left" },
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Grid>
            {/* <Grid item xs={12} sm={3} lg={3} xl={3}>
          {allLinkText.slice(4).map((text: any, index: number) => (
            <React.Fragment key={index}>
              {index === 1 ? (
                <Link
                  href={"/blogs/blog"}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--font-mulish)",
                      color: "#D3DDDE",
                      fontWeight: 400,
                      fontSize: {
                        xs: "18px",
                        sm: "18px",
                        lg: "24.8px",
                        xl: "24.8px",
                      },
                      lineHeight: "auto",
                      paddingBottom: "19.84px",
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    {text}
                  </Typography>
                </Link>
              ) : index === 2 ? (
                <Link
                  href={"/contact"}
                  style={{
                    textDecoration: "none",
                    width: "100%",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "var(--font-mulish)",
                      color: "#D3DDDE",
                      fontWeight: 400,
                      fontSize: {
                        xs: "18px",
                        sm: "18px",
                        lg: "24.8px",
                        xl: "24.8px",
                      },
                      lineHeight: "auto",
                      paddingBottom: "19.84px",
                      textAlign: { xs: "center", sm: "left" },
                    }}
                  >
                    {text}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  sx={{
                    fontFamily: "var(--font-mulish)",
                    color: "#D3DDDE",
                    fontWeight: 400,
                    fontSize: {
                      xs: "18px",
                      sm: "18px",
                      lg: "24.8px",
                      xl: "24.8px",
                    },
                    lineHeight: "auto",
                    paddingBottom: "19.84px",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  {text}
                </Typography>
              )}
            </React.Fragment>
          ))}
        </Grid> */}
          </Grid>
        </div>
      </Box>
    </div>
  );
};

export default Footer;
