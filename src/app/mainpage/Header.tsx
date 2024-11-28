"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Header: React.FC = () => {
  const [headerPage, setHeaderPage] = useState<[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("header");
      setHeaderPage(response);
    };

    fetchPosts();
  }, []);

  const router = useRouter();
  const handleNavigation = () => {
    router.push("/");
  };

  const handleContactNavigation = () => {
    router.push("/contact");
  };

  return (
    <Box>
      <div>
        {headerPage.map((post: any) => (
          <Grid
            container
            spacing={0}
            key={post.id}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              zIndex: 1,
              display: "flex",
              flexDirection: "row",
              boxShadow: "0px 0px 51.7px 0px rgba(36, 83, 92, 0.1)",
              // backdropFilter: "blur(58.09981155395508px)",
              background: "rgba(255, 255, 255, 0.7)",
              width: "100%",
              borderBottomLeftRadius: "30px",
              borderBottomRightRadius: "30px",
              boxSizing: "border-box",
              // border: "2.32px solid rgba(255, 255, 255, 0.1)",
              justifyContent: "space-evenly",
            }}
          >
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              sx={{
                display: "flex",
                flexDirection: { xs: "row", sm: "row",lg:"row" },
                justifyContent: "space-evenly",
                alignItems: "center",
                padding: "10px",
              }}
            >
              {post?.data.marguerite_logo && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.data.marguerite_logo.url || undefined}
                  alt={post.data.marguerite_logo.alt || "Image"}
                  style={{
                    width: "10%",
                    height: "auto",
                  }}
                  onClick={handleNavigation}
                />
              )}
              <Link
                href={"/manageperlacare"}
                style={{ textDecoration: "none" }}
              >
                <Typography
                  sx={{
                    fontFamily: "Mulish, sans-serif",
                    color: "#24535C",
                    fontSize: { xs: "12px",sm:"18px", lg: "26.49px" },
                    fontWeight: 400,
                    lineHeight: { xs: "18px",sm:"25px", lg: "33px" },
                  }}
                >
                  {post.data.page1}
                </Typography>
              </Link>
              <Link href={"/lecarechez"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontFamily: "Mulish, sans-serif",
                    color: "#24535C",
                    fontSize: { xs: "12px",sm:"18px", lg: "26.49px" },
                    fontWeight: 400,
                    lineHeight: { xs: "18px",sm:"25px", lg: "33px" },
                  }}
                >
                  {post.data.page2}
                </Typography>
              </Link>
              <Link href={"/nossolutionsde"} style={{ textDecoration: "none" }}>
                <Typography
                  sx={{
                    fontFamily: "Mulish, sans-serif",
                    color: "#24535C",
                    fontSize: { xs: "12px",sm:"18px", lg: "26.49px" },
                    fontWeight: 400,
                    lineHeight: { xs: "18px",sm:"25px", lg: "33px" },
                  }}
                >
                  {post.data.page3}
                </Typography>
              </Link>
              {/* {post?.data.contact_icon && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={post.data.contact_icon.url || undefined}
                  alt={post.data.contact_icon.alt || "Image"}
                  style={{
                    width: "30px",
                    height: "auto",
                  }}
                  onClick={handleContactNavigation}
                />
              )} */}
              <MailOutlineIcon
                sx={{
                  background: "#236B79",
                  color: "#FFFFFF",
                  padding: {xs:'5px',sm:'10px',lg:'15px'},
                  borderRadius: "30px",
                }}
                onClick={handleContactNavigation}
              />
            </Grid>
          </Grid>
        ))}
      </div>
    </Box>
  );
};

export default Header;
