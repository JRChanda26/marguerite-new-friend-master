"use client";
import { createClient } from "@/prismicio";
import {
  Box,
  Button,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { PrismicRichText } from "@prismicio/react";

export default function BlogsNews() {
  const [blogs, setBlogs] = useState<any>(null);
  const [liberez, setLiberez] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const [blogsData, liberezData] = await Promise.all([
        client.getSingle("blogs_news"),
        client.getSingle("liberez"),
      ]);
      setBlogs(blogsData);
      setLiberez(liberezData);
    }
    fetchData().catch((error) => console.error("Error fetching data:", error));
  }, []);

  const searchInputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#BBDDD91A",
    borderRadius: "20px",
  };

  const tabs = [
    blogs?.data.tags_tab1,
    blogs?.data.tags_tab2,
    blogs?.data.tags_tab3,
    blogs?.data.tags_tab4,
    blogs?.data.tags_tab5,
    blogs?.data.tags_tab6,
  ];

  const [selectedTab, setSelectedTab] = useState<number | null>(null);

  const handleButtonClick = (index: number) => {
    setSelectedTab(index);
  };

  const categories = [
    blogs?.data.categories_list1,
    blogs?.data.categories_list2,
    blogs?.data.categories_list3,
    blogs?.data.categories_list4,
  ];

  const title: React.CSSProperties = {
    color: "#292F36",
    fontSize: "50px",
    fontWeight: 400,
  };

  const description: React.CSSProperties = {
    color: "#4D5053",
    fontSize: "22px",
    fontWeight: 400,
  };

  const buttonText: React.CSSProperties = {
    fontSize: "18px",
    fontWeight: 400,
    textTransform: "none",
    margin: "5px",
    border: "none",
    boxShadow: "none",
  };

  const heading: React.CSSProperties = {
    color: "#292F36",
    fontSize: "25px",
    fontWeight: 400,
  };

  const list: React.CSSProperties = {
    color: "#4D5053",
    fontSize: "20px",
    fontWeight: 400,
  };

  const containerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    borderRadius: "60px",
    background: "linear-gradient(to right, #F6C09E 60%, #24535C 40%)",
    margin: "auto",
  };

  const leftSectionStyle: React.CSSProperties = {
    flex: 1,
    color: "#161C2D",
    padding: "10px",
  };

  const rightSectionStyle: React.CSSProperties = {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: "50px",
  };

  const titleStyle: React.CSSProperties = {
    color: "#24535C",
    fontSize: "41.81px",
    fontWeight: 700,
    lineHeight: "52.47px",
  };

  const descriptionStyle: React.CSSProperties = {
    color: "#24535C",
    fontSize: "23.52px",
    fontWeight: 400,
    lineHeight: "37.63px",
  };

  const [inputValue, setInputValue] = useState("");
  const [searchInputValue, setSearchInputValue] = useState("");

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${blogs?.data?.banner?.url || ""})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          paddingTop: "450.67px",
        }}
      ></div>
      <Grid container>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Grid item lg={7}>
            <div style={title}>{blogs?.data.title1}</div>
            <div style={{ paddingTop: "21px" }}>
              {blogs?.data.image1 && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={blogs?.data.image1.url || undefined}
                  alt={blogs?.data.image1.alt || "Image"}
                  style={{
                    width: "100%",
                  }}
                />
              )}
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: 400,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                color: "#4D5053",
                padding: "20px 0px 20px 0px",
              }}
            >
              <div>{blogs?.data.date_text}</div>
              <div>{blogs?.data.about}</div>
            </div>
            <div style={{ ...description, padding: "30px 0px 30px 0px" }}>
              {blogs?.data.description1}
            </div>
            <div
              style={{
                background: "#BBDDD91A",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
                padding: "40px 100px",
                borderRadius: "50px",
                margin: "30px 0px 20px 0px ",
              }}
            >
              <div>
                {blogs?.data.quote_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={blogs?.data.quote_image.url || undefined}
                    alt={blogs?.data.quote_image.alt || "Image"}
                  />
                )}
              </div>
              <div>
                {blogs?.data.text_image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={blogs?.data.text_image.url || undefined}
                    alt={blogs?.data.text_image.alt || "Image"}
                  />
                )}
              </div>
            </div>
          </Grid>
          <Grid item lg={4}>
            <div>
              <TextField
                // value={blogs?.data.text_field}
                value={searchInputValue}
                onChange={(e) => setSearchInputValue(e.target.value)}
                placeholder="Search"
                variant="outlined"
                sx={{
                  ...searchInputStyle,
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "transparent", // Initial border color
                    },
                    "&:hover fieldset": {
                      borderColor: "transparent", // Hover border color
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "transparent", // Focused border color
                    },
                  },
                }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon style={{ color: "#24535C" }} />
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <div>
              <div style={{ ...heading, marginTop: "50px" }}>
                {blogs?.data.latest_news}
              </div>
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <div key={index}>
                    <div
                      style={{
                        padding: "20px 0px",
                      }}
                    >
                      <div style={list}>{blogs?.data.news_lists}</div>
                      <div style={{ float: "right" }}>
                        {blogs?.data.date_lists}
                      </div>
                    </div>
                    <hr style={{ border: "1px solid #24535C" }} />
                  </div>
                ))}
            </div>
            <div
              style={{
                background: "#BBDDD91A",
                borderRadius: "20px",
                padding: "27px 32px",
                marginTop: "50px",
              }}
            >
              <div style={heading}>{blogs?.data.categories}</div>
              <div style={{ marginTop: "30px" }}>
                {categories.map((category, index) => (
                  <div key={index} style={list}>
                    {category}
                    {index < categories.length - 1 && (
                      <hr
                        style={{
                          border: "1px solid #24535C",
                          margin: "15px 0px 15px 0px",
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ ...heading, marginTop: "50px" }}>
                {blogs?.data.tags}
              </div>
              <div style={{ marginTop: "20px" }}>
                {tabs.map((label: string, index: number) => (
                  <Button
                    key={index}
                    sx={{
                      backgroundColor:
                        selectedTab === index ? "#292F36" : "#BBDDD91A",
                      color: selectedTab === index ? "#FFFFFF" : "#000000",
                      ...buttonText,
                      "&:hover": {
                        backgroundColor:
                          selectedTab === index ? "#24535C" : "transparent",
                      },
                    }}
                    onClick={() => handleButtonClick(index)}
                  >
                    {label}
                  </Button>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
        <Grid
          item
          lg={7}
          style={{
            paddingLeft: "35px",
          }}
        >
          <div style={title}>{blogs?.data.title2}</div>
          <div style={{ ...description, padding: "20px 0px 20px 0px" }}>
            {blogs?.data.description2}
          </div>
          <div>
            {Array(3)
              .fill(null)
              .map((_, index) => (
                <div key={index}>
                  <div style={{ ...description, padding: "10px 0px 10px 0px" }}>
                    {index + 1}. {blogs?.data.points}
                  </div>
                </div>
              ))}
          </div>
          <div style={{ margin: "40px 0px 40px 0px" }}>
            {blogs?.data.image2 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={blogs?.data.image2.url || undefined}
                alt={blogs?.data.image2.alt || "Image"}
                style={{
                  width: "100%",
                }}
              />
            )}
          </div>
          <div style={{ ...description, marginBottom: "60px" }}>
            {blogs?.data.description3}
          </div>
          <hr style={{ border: "1px solid #24535C" }} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "20px 0px 20px 0px",
            }}
          >
            <div
              style={{
                padding: "10px 30px 0px 0px",
                fontSize: "20px",
                fontWeight: 400,
                color: "#000000",
              }}
            >
              {blogs?.data.tags}
            </div>
            {tabs.slice(0, 5).map((label: string, index: number) => (
              <Button
                key={index}
                sx={{
                  backgroundColor:
                    selectedTab === index ? "#292F36" : "#BBDDD91A",
                  color: selectedTab === index ? "#FFFFFF" : "#000000",
                  ...buttonText,
                  "&:hover": {
                    backgroundColor:
                      selectedTab === index ? "#24535C" : "transparent",
                  },
                }}
                onClick={() => handleButtonClick(index)}
              >
                {label}
              </Button>
            ))}
          </div>
          <hr style={{ border: "1px solid #24535C" }} />
        </Grid>
      </Grid>
      <div style={{ background: "#FFFFFF", padding: "100px" }}>
        <div style={containerStyle}>
          <Grid container spacing={2} style={leftSectionStyle}>
            <Grid item xs={12}>
              <div style={titleStyle}>
                <PrismicRichText field={liberez?.data.title} />
              </div>
              <div style={descriptionStyle}>
                <PrismicRichText field={liberez?.data.description} />
              </div>
            </Grid>
          </Grid>
          <div style={rightSectionStyle}>
            {" "}
            <TextField
              // value={liberez?.data.text_field}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Entrez votre adresse email"
              variant="outlined"
              sx={{
                ...inputStyle,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent", // Initial border color
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent", // Hover border color
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "transparent", // Focused border color
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
