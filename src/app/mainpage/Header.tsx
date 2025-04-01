"use client";

import React, { useEffect, useRef, useState } from "react";
import { client } from "../../../lib/prismic-configuration";
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import MenuIcon from "@mui/icons-material/Menu";
import useMediaQuery from "@mui/material/useMediaQuery";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";

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
  //
  const [dropdownVisible1, setDropdownVisible1] = useState(false);
  const [dropdownVisible2, setDropdownVisible2] = useState(false);

  const dropdownRef1 = useRef<HTMLDivElement>(null);
  const dropdownRef2 = useRef<HTMLDivElement>(null);

  const toggleDropdown1 = () => {
    setDropdownVisible2(false);
    setDropdownVisible1(!dropdownVisible1);
  };
  const toggleDropdown2 = () => {
    setDropdownVisible1(false);
    setDropdownVisible2(!dropdownVisible2);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef1.current &&
      !dropdownRef1.current.contains(event.target as Node)
    ) {
      setDropdownVisible1(false);
    }
    if (
      dropdownRef2.current &&
      !dropdownRef2.current.contains(event.target as Node)
    ) {
      setDropdownVisible2(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const missionLinks = [
    { href: "/nossolutionsde", text: headerPage[0]?.data.mission1 },
    { href: "/ourexpert", text: headerPage[0]?.data.mission2 },
    { href: "/benifits", text: headerPage[0]?.data.mission3 },
  ];

  const advantageLinks = [
    { href: "", text: headerPage[0]?.data.advantages1 },
    { href: "", text: headerPage[0]?.data.advantages2 },
    { href: "", text: headerPage[0]?.data.advantages3 },
    { href: "", text: headerPage[0]?.data.advantages4 },
  ];

  const menustyle = {
    fontFamily: "Sans Serif Collection",
    fontSize: "18px",
    fontWeight: 400,
    lineHeight: "44.26px",
    color: "#111111",
    "@media (max-width:600px)": {
      fontSize: "12px",
      lineHeight: "30px",
    },
  };

  const isMax = useMediaQuery("(min-width:1930px)");

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
                    // onClick={toggleDrawer(false)}
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
                              fontFamily: "Helvetica, sans-serif",
                              color: "#24535C",
                              fontSize: "18px",
                              fontWeight: 400,
                            }}
                          />
                        </Link>
                      </ListItem>
                      <ListItem>
                        <ListItemText
                          primary={post.data.page2}
                          sx={{
                            fontFamily: "Helvetica, sans-serif",
                            color: "#24535C",
                            fontSize: "18px",
                            fontWeight: 400,
                          }}
                        />
                      </ListItem>
                      <ListItem>
                        <Box>
                          <ListItemText
                            // primary={post.data.page3}
                            sx={{
                              fontFamily: "Helvetica, sans-serif",
                              color: "#24535C",
                              fontSize: "18px",
                              fontWeight: 400,
                            }}
                            onClick={toggleDropdown1}
                          >
                            {post.data.page3}
                            {dropdownVisible1 ? (
                              <KeyboardArrowUpSharpIcon
                                sx={{ fontSize: "inherit" }}
                              />
                            ) : (
                              <KeyboardArrowDownSharpIcon
                                sx={{ fontSize: "inherit" }}
                              />
                            )}
                          </ListItemText>
                          {dropdownVisible1 && (
                            <Box
                              ref={dropdownRef1}
                              sx={{
                                marginTop: "5px",
                                background: "#fff",
                                // border: "1px solid #ddd",
                                borderRadius: "8px",
                                width: "218px",
                                height: "auto",
                                boxShadow: "0px 0px 51.7px 0px #24535C1A",
                                zIndex: 1000,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "10px 0px",
                              }}
                            >
                              {missionLinks.map((link, index) => (
                                <Link
                                  key={index}
                                  href={link.href}
                                  style={{ textDecoration: "none" }}
                                >
                                  <Typography sx={menustyle}>
                                    {link.text}
                                  </Typography>
                                </Link>
                              ))}
                            </Box>
                          )}
                        </Box>{" "}
                      </ListItem>
                      <ListItem>
                        <Box>
                          <ListItemText
                            // primary={post.data.page4}
                            sx={{
                              fontFamily: "Helvetica, sans-serif",
                              color: "#24535C",
                              fontSize: "18px",
                              fontWeight: 400,
                            }}
                            onClick={toggleDropdown2}
                          >
                            {post.data.page4}
                            {dropdownVisible2 ? (
                              <KeyboardArrowUpSharpIcon
                                sx={{ fontSize: "inherit" }}
                              />
                            ) : (
                              <KeyboardArrowDownSharpIcon
                                sx={{ fontSize: "inherit" }}
                              />
                            )}
                          </ListItemText>
                          {dropdownVisible2 && (
                            <Box
                              ref={dropdownRef2}
                              sx={{
                                marginTop: "5px",
                                background: "#fff",
                                // border: "1px solid #ddd",
                                borderRadius: "8px",
                                width: "218px",
                                height: "auto",
                                boxShadow: "0px 0px 51.7px 0px #24535C1A",
                                zIndex: 1000,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: "10px 0px",
                              }}
                            >
                              {advantageLinks.map((link, index) => (
                                <Link
                                  key={index}
                                  href={link.href}
                                  style={{ textDecoration: "none" }}
                                >
                                  <Typography sx={menustyle}>
                                    {link.text}
                                  </Typography>
                                </Link>
                              ))}
                            </Box>
                          )}
                        </Box>
                      </ListItem>
                      <ListItem>
                        <Link
                          href={"/blogs/blognews"}
                          style={{ textDecoration: "none", width: "100%" }}
                        >
                          <ListItemText
                            primary={post.data.page5}
                            sx={{
                              fontFamily: "Helvetica, sans-serif",
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
                  gap: { sm: "80px" },
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
                    gap: "35px",
                    flexWrap: "nowrap",
                    marginLeft: isMax? "500px":"0px"
                  }}
                >
                  <Link
                    href={"/manageperlacare"}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Helvetica, sans-serif",
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
                          sm: "20px",
                          lg: "33px",
                          xl: "33px",
                        },
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {post.data.page1}
                    </Typography>
                  </Link>
                  <Typography
                    sx={{
                      fontFamily: "Helvetica, sans-serif",
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
                        sm: "20px",
                        lg: "33px",
                        xl: "33px",
                      },
                      whiteSpace: "nowrap",
                      // overflow: "hidden",
                      // textOverflow: "ellipsis",
                    }}
                  >
                    {post.data.page2}
                  </Typography>
                  <Box sx={{ position: "relative", cursor: "pointer" }}>
                    <Typography
                      sx={{
                        fontFamily: "Helvetica, sans-serif",
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
                          sm: "20px",
                          lg: "33px",
                          xl: "33px",
                        },
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                      }}
                      onClick={toggleDropdown1}
                    >
                      {post.data.page3}
                      {dropdownVisible1 ? (
                        <KeyboardArrowUpSharpIcon
                          sx={{ fontSize: "inherit" }}
                        />
                      ) : (
                        <KeyboardArrowDownSharpIcon
                          sx={{ fontSize: "inherit" }}
                        />
                      )}
                    </Typography>
                    {dropdownVisible1 && (
                      <Box
                        ref={dropdownRef1}
                        sx={{
                          position: "absolute",
                          top: "70px",
                          marginTop: "5px",
                          background: "#fff",
                          // border: "1px solid #ddd",
                          borderRadius: "8px",
                          width: "218px",
                          height: "auto",
                          boxShadow: "0px 0px 51.7px 0px #24535C1A",
                          zIndex: 1000,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          padding: "20px 0px 20px 40px",
                        }}
                      >
                        {missionLinks.map((link, index) => (
                          <Link
                            key={index}
                            href={link.href}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography sx={menustyle}>{link.text}</Typography>
                          </Link>
                        ))}
                      </Box>
                    )}
                  </Box>{" "}
                  <Box sx={{ position: "relative",cursor: "pointer"}}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Helvetica, sans-serif",
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
                          sm: "20px",
                          lg: "33px",
                          xl: "33px",
                        },
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                      }}
                      onClick={toggleDropdown2}
                    >
                      {post.data.page4}
                      {dropdownVisible2 ? (
                        <KeyboardArrowUpSharpIcon
                          sx={{ fontSize: "inherit" }}
                        />
                      ) : (
                        <KeyboardArrowDownSharpIcon
                          sx={{ fontSize: "inherit" }}
                        />
                      )}
                    </Typography>
                    {dropdownVisible2 && (
                      <Box
                        ref={dropdownRef2}
                        sx={{
                          position: "absolute",
                          top: "70px",
                          marginTop: "5px",
                          background: "#fff",
                          // border: "1px solid #ddd",
                          borderRadius: "8px",
                          width: "218px",
                          height: "auto",
                          boxShadow: "0px 0px 51.7px 0px #24535C1A",
                          zIndex: 1000,
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          padding: "20px 0px 20px 40px",
                        }}
                      >
                        {advantageLinks.map((link, index) => (
                          <Link
                            key={index}
                            href={link.href}
                            style={{ textDecoration: "none" }}
                          >
                            <Typography sx={menustyle}>{link.text}</Typography>
                          </Link>
                        ))}
                      </Box>
                    )}
                  </Box>
                  <Link
                    style={{ textDecoration: "none" }}
                    href={"/blogs/blognews"}
                  >
                    <Typography
                      sx={{
                        fontFamily: "Helvetica, sans-serif",
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
                          sm: "20px",
                          lg: "33px",
                          xl: "33px",
                        },
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {post.data.page5}
                    </Typography>
                  </Link>
                </Grid>
                <MailOutlineIcon
                  sx={{
                    background: "#236B79",
                    color: "#FFFFFF",
                    padding: "10px",
                    borderRadius: "30px",
                    cursor: "pointer",
                  }}
                  onClick={handleContactNavigation}
                />
              </Grid>
            )}
          </Grid>
        ))}
      </div>
    </Box>
  );
};

export default Header;
