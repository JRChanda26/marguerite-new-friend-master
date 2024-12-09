"use client";

import React, { useEffect, useState } from "react";
import { client } from "../../../prismic-configuration";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header: React.FC = () => {
  const [headerPage, setHeaderPage] = useState<any[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("header" as any);
      setHeaderPage(response);
    };
    fetchData();
  }, []);

  const router = useRouter();
  const handleNavigation = () => {
    router.push("/");
  };

  const handleContactNavigation = () => {
    router.push("/contact");
  };

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
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
              background: "rgba(255, 255, 255, 0.7)",
              width: "100%",
              borderBottomLeftRadius: "30px",
              borderBottomRightRadius: "30px",
              boxSizing: "border-box",
              justifyContent: "space-between",
              padding: "10px 20px",
              backdropFilter: "blur(58.1px)",
            }}
          >
            {isSmallScreen ? (
              <>
                {post?.data.marguerite_logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.marguerite_logo.url || undefined}
                    alt={post.data.marguerite_logo.alt || "Image"}
                    style={{
                      width: "20%",
                      height: "auto",
                      cursor: "pointer",
                    }}
                    onClick={handleNavigation}
                  />
                )}
                <IconButton
                  onClick={toggleDrawer(true)}
                  sx={{
                    color: "#24535C",
                  }}
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor="right"
                  open={isDrawerOpen}
                  onClose={toggleDrawer(false)}
                >
                  <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                  >
                    <List>
                      <ListItem>
                        <Link
                          href={"/manageperlacare"}
                          style={{ textDecoration: "none", width: "100%" }}
                        >
                          <ListItemText
                            primary={post.data.page1}
                            sx={{
                              fontFamily: "Mulish",
                              color: "#24535C",
                              fontSize: "18px",
                              fontWeight: 400,
                            }}
                          />
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          href={"/lecarechez"}
                          style={{ textDecoration: "none", width: "100%" }}
                        >
                          <ListItemText
                            primary={post.data.page2}
                            sx={{
                              fontFamily: "Mulish",
                              color: "#24535C",
                              fontSize: "18px",
                              fontWeight: 400,
                            }}
                          />
                        </Link>
                      </ListItem>
                      <ListItem>
                        <Link
                          href={"/nossolutionsde"}
                          style={{ textDecoration: "none", width: "100%" }}
                        >
                          <ListItemText
                            primary={post.data.page3}
                            sx={{
                              fontFamily: "Mulish",
                              color: "#24535C",
                              fontSize: "18px",
                              fontWeight: 400,
                            }}
                          />
                        </Link>
                      </ListItem>
                      <ListItem onClick={handleContactNavigation}>
                        <MailOutlineIcon
                          sx={{
                            background: "#236B79",
                            color: "#FFFFFF",
                            padding: "10px",
                            borderRadius: "30px",
                            marginRight: "10px",
                          }}
                        />
                      </ListItem>
                    </List>
                  </Box>
                </Drawer>
              </>
            ) : (
              <Grid
                item
                xs={12}
                sm={12}
                lg={12}
                xl={12}
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                {post?.data.marguerite_logo && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={post.data.marguerite_logo.url || undefined}
                    alt={post.data.marguerite_logo.alt || "Image"}
                    style={{
                      width: "8%",
                      height: "auto",
                      cursor: "pointer",
                    }}
                    onClick={handleNavigation}
                  />
                )}
                <Grid
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "45px",
                  }}
                >
                  <Link
                    href={"/manageperlacare"}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Mulish",
                        color: "#24535C",
                        fontSize: {
                          xs: "12px",
                          sm: "18px",
                          lg: "26.49px",
                          xl: "26.49px",
                        },
                        fontWeight: 400,
                        lineHeight: {
                          xs: "18px",
                          sm: "25px",
                          lg: "33px",
                          xl: "33px",
                        },
                      }}
                    >
                      {post.data.page1}
                    </Typography>
                  </Link>
                  <Link href={"/lecarechez"} style={{ textDecoration: "none" }}>
                    <Typography
                      sx={{
                        fontFamily: "Mulish",
                        color: "#24535C",
                        fontSize: {
                          xs: "12px",
                          sm: "18px",
                          lg: "26.49px",
                          xl: "26.49px",
                        },
                        fontWeight: 400,
                        lineHeight: {
                          xs: "18px",
                          sm: "25px",
                          lg: "33px",
                          xl: "33px",
                        },
                      }}
                    >
                      {post.data.page2}
                    </Typography>
                  </Link>
                  <Link
                    href={"/nossolutionsde"}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Mulish",
                        color: "#24535C",
                        fontSize: {
                          xs: "12px",
                          sm: "18px",
                          lg: "26.49px",
                          xl: "26.49px",
                        },
                        fontWeight: 400,
                        lineHeight: {
                          xs: "18px",
                          sm: "25px",
                          lg: "33px",
                          xl: "33px",
                        },
                      }}
                    >
                      {post.data.page3}
                    </Typography>
                  </Link>
                  <MailOutlineIcon
                    sx={{
                      background: "#236B79",
                      color: "#FFFFFF",
                      padding: "10px",
                      borderRadius: "30px",
                    }}
                    onClick={handleContactNavigation}
                  />
                </Grid>
              </Grid>
            )}
          </Grid>
        ))}
      </div>
    </Box>
  );
};

export default Header;
