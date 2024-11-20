"use client";
import { createClient } from "@/prismicio";
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { PrismicRichText } from "@prismicio/react";
import Liberez from "@/app/mainpage/Liberez";
import Footer from "@/app/mainpage/Footer";
import Header from "@/app/mainpage/Header";

export default function Blogs() {
  const [settings, setSettings] = useState<any>(null);
  const [liberez, setLiberez] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const [blogsData, liberezData] = await Promise.all([
        client.getSingle("blogs" as any),
        client.getSingle("liberez" as any),
      ]);
      setSettings(blogsData);
      setLiberez(liberezData);
    }
    fetchData().catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [page, setPage] = useState(0);
  const fixedRowsPerPage = 1;

  const items = Array.from({ length: 5 });

  const totalPages = Math.ceil(items.length / fixedRowsPerPage);

  const handleBackButtonClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextButtonClick = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const buttonStyle: React.CSSProperties = {
    background: "#BEDFDB",
    color: "#FFFFFF",
    height: "30px",
    width: "30px",
    borderRadius: "100%",
  };

  const title: React.CSSProperties = {
    color: "#161C2D",
    fontSize: "21.27px",
    fontWeight: 700,
  };

  const description: React.CSSProperties = {
    color: "#161C2DB8",
    fontSize: "18.61px",
    fontWeight: 400,
  };

  const profileStyle: React.CSSProperties = {
    fontSize: "18.61px",
    fontWeight: 700,
    color: "#161C2D",
  };

  const dateStyle: React.CSSProperties = {
    fontSize: "18.61px",
    fontWeight: 400,
    color: "#161C2DB8",
  };

  // const articleItems = Array.from({ length: 30 });

  const articleItems = [
    {
      image: settings?.data.image1,
      subTitle: settings?.data.sub_title2,
      description: settings?.data.description2,
    },
    {
      image: settings?.data.image2,
      subTitle: settings?.data.sub_title3,
      description: settings?.data.description3,
    },
    {
      image: settings?.data.image3,
      subTitle: settings?.data.sub_title4,
      description: settings?.data.description4,
    },
  ];

  const repeatedArticleItems = Array.from(
    { length: 27 },
    (_, index) => articleItems[index % articleItems.length]
  );

  const fixedRowsPerArticlePage = 9;

  const [articlePage, setArticlePage] = useState(0);

  const totalArticlePages = Math.ceil(
    repeatedArticleItems.length / fixedRowsPerArticlePage
  );

  const handleArticleBackButtonClick = () => {
    setArticlePage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleArticleNextButtonClick = () => {
    setArticlePage((prevPage) => Math.min(prevPage + 1, totalArticlePages - 1));
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

  const [mouseHover, setMouseHover] = useState<number | null>(null);

  const handleMouseEnter = (index: number) => {
    setMouseHover(index);
  };

  const handleMouseLeave = () => {
    setMouseHover(null);
  };

  const getHoverStyle = (baseStyle: React.CSSProperties, index: number) => {
    return {
      ...baseStyle,
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      transform: mouseHover === index ? "scale(1.10)" : "scale(1)",
      boxShadow:
        mouseHover === index
          ? "0px 8px 10px rgba(0, 0, 0, 0.3)"
          : "0px 4px 12px rgba(0, 0, 0, 0.1)",
    };
  };

  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${settings?.data?.banner?.url || ""})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            paddingTop: "250.67px",
          }}
        >
          <div
            style={{
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: "37px 37px 0px 0px",
              // padding: "41px 152px 41px 152px",
              padding: "2% 5%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Mulish, sans-serif",
                color: "#0A1411",
                fontWeight: 400,
                // fontSize: "64px",
                // lineHeight: "80.32px",
                fontSize: { xs: "25px", sm: "40px", lg: "50px" },
                lineHeight: { xs: "40px", sm: "48px", lg: "62.5px" },
              }}
            >
              {settings?.data.heading}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Mulish, sans-serif",
                color: "#565656",
                fontWeight: 400,
                // fontSize: "24px",
                // lineHeight: "38.4px",
                fontSize: { xs: "12px", sm: "18px", lg: "22px" },
                lineHeight: { xs: "20px", sm: "28px", lg: "33px" },
              }}
            >
              {settings?.data.sub_heading}
            </Typography>
          </div>
        </div>
      </div>
      <Grid
        container
        style={{
          background: "#e1f5f2",
        }}
      >
        <Grid item xs={12} sm={12} lg={12}>
          <Typography
            sx={{
              color: "#292F36",
              // fontSize: "50px",
              fontSize: { xs: "25px", sm: "40px", lg: "50px" },
              lineHeight: { xs: "40px", sm: "48px", lg: "62.5px" },
              fontWeight: 700,
              textAlign: "center",
              marginTop: "70px",
            }}
          >
            {settings?.data.title1}
          </Typography>
          <Grid
            sx={{
              borderRadius: "62px",
              border: "1px solid #E7E7E7",
              margin: "5% 10%",
            }}
          >
            {items
              .slice(
                page * fixedRowsPerPage,
                page * fixedRowsPerPage + fixedRowsPerPage
              )
              .map((_, index) => (
                <Grid
                  sx={{
                    display: "flex",
                    // flexDirection: "row",
                    flexDirection: { xs: "column", sm: "row", lg: "row" },
                    padding: "22px",
                    gap: "50px",
                  }}
                  key={index}
                >
                  {settings?.data.post_image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={settings?.data.post_image.url || undefined}
                      alt={settings?.data.post_image.alt || "Image"}
                      style={{
                        height: "auto",
                        width: "100%",
                      }}
                    />
                  )}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                    }}
                  >
                    <div
                      style={{
                        color: "#292F36",
                        fontSize: "25px",
                        fontWeight: 700,
                      }}
                    >
                      {page * fixedRowsPerPage + index + 1}.
                      {settings?.data.sub_title1}
                    </div>
                    <div
                      style={{
                        color: "#4D5053",
                        fontSize: "22px",
                        fontWeight: 400,
                      }}
                    >
                      {settings?.data.description1}
                    </div>
                    <div
                      style={{
                        color: "#4D5053",
                        fontSize: "16px",
                        fontWeight: 400,
                      }}
                    >
                      {settings?.data.date}
                    </div>
                  </div>
                </Grid>
              ))}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: "20px",
                paddingRight: "50px",
                paddingBottom: "10px",
              }}
            >
              <IconButton
                onClick={handleBackButtonClick}
                disabled={page === 0}
                aria-label="previous page"
                sx={{
                  // ...buttonStyle,
                  ...getHoverStyle({ ...buttonStyle }, 1),
                  "&:hover": {
                    background: "#BEDFDB",
                  },
                }}
                onMouseEnter={() => handleMouseEnter(1)}
                onMouseLeave={handleMouseLeave}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>
              <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= totalPages - 1}
                aria-label="next page"
                sx={{
                  // ...buttonStyle,
                  ...getHoverStyle({ ...buttonStyle }, 2),
                  "&:hover": {
                    background: "#BEDFDB",
                  },
                }}
                onMouseEnter={() => handleMouseEnter(2)}
                onMouseLeave={handleMouseLeave}
              >
                <KeyboardArrowRightIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#e1f5f2",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "25px", sm: "40px", lg: "50px" },
            lineHeight: { xs: "40px", sm: "48px", lg: "62.5px" },
            fontWeight: 700,
            color: "#000000",
            textAlign: "center",
            margin: "50px 0px",
          }}
        >
          {settings?.data.title2}
        </Typography>

        {/* {articleItems
          .slice(
            articlePage * fixedRowsPerArticlePage,
            articlePage * fixedRowsPerArticlePage + fixedRowsPerArticlePage
          )
          .map((_, index) => (
            <Grid
              item
              lg={12}
              xs={12}
              sm={12}
              key={index}
              sx={{
                display: "flex",
                // flexDirection: "row",
                flexDirection: { xs: "column", sm: "column", lg: "row" },
                justifyContent: "space-evenly",
                marginTop: "50px",
                gap: "50px",
              }}
            >
               [{articlePage * fixedRowsPerArticlePage + index + 1}] 
              <Grid
                item
                lg={3.5}
                style={{
                  background: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  padding: "21px",
                  borderRadius: "20px",
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                {settings?.data.image1 && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={settings?.data.image1.url || undefined}
                    alt={settings?.data.image1.alt || "Image"}
                    style={{
                      height: "auto",
                      width: "100%",
                    }}
                  />
                )}
                <p style={title}>{settings?.data.sub_title2}</p>
                <p style={description}>{settings?.data.description2}</p>
              </Grid>
              <Grid
                item
                lg={3.5}
                style={{
                  background: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  borderRadius: "20px",
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                {settings?.data.image2 && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={settings?.data.image2.url || undefined}
                    alt={settings?.data.image2.alt || "Image"}
                    style={{
                      height: "auto",
                      width: "100%",
                    }}
                  />
                )}
                <p style={title}>{settings?.data.sub_title3}</p>
                <p style={description}>{settings?.data.description3}</p>
              </Grid>
              <Grid
                item
                lg={3.5}
                style={{
                  background: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  borderRadius: "20px",
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                }}
              >
                {settings?.data.image3 && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={settings?.data.image3.url || undefined}
                    alt={settings?.data.image3.alt || "Image"}
                    style={{
                      height: "auto",
                      width: "100%",
                    }}
                  />
                )}
                <p style={title}>{settings?.data.sub_title4}</p>
                <p style={description}>{settings?.data.description4}</p>
              </Grid>
            </Grid>
          ))} */}
        <Grid
          item
          lg={12}
          xs={12}
          sm={12}
          sx={{
            display: "grid",
            // gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: "50px",
            justifyContent: "center",
            padding: "50px",
          }}
        >
          {repeatedArticleItems
            .slice(
              articlePage * fixedRowsPerArticlePage,
              articlePage * fixedRowsPerArticlePage + fixedRowsPerArticlePage
            )
            .map((item, index) => (
              <Grid
                item
                lg={12}
                xs={12}
                sm={12}
                key={index}
                sx={{
                  background: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  borderRadius: "20px",
                  boxShadow: "0 5px 10px rgba(0, 0, 0, 0.5)",
                  gap: "10px",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {item.image && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.image.url || undefined}
                    alt={item.image.alt || "Image"}
                    style={{
                      height: "auto",
                      width: "100%",
                    }}
                  />
                )}
                <p style={title}>{item.subTitle}</p>
                <p style={description}>{item.description}</p>
              </Grid>
            ))}
        </Grid>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "20px",
            paddingRight: "50px",
            paddingBottom: "10px",
            marginTop: "50px",
          }}
        >
          <IconButton
            onClick={handleArticleBackButtonClick}
            disabled={articlePage === 0}
            aria-label="previous page"
            sx={{
              ...buttonStyle,
              "&:hover": {
                background: "#BEDFDB",
              },
            }}
          >
            <KeyboardArrowLeftIcon />
          </IconButton>
          {[
            ...Array(
              Math.ceil(repeatedArticleItems.length / fixedRowsPerArticlePage)
            ).keys(),
          ].map((pageNumber) => {
            const startPage = Math.max(0, articlePage - 1);
            const endPage = Math.min(
              Math.ceil(repeatedArticleItems.length / fixedRowsPerArticlePage) -
                1,
              startPage + 2
            );

            if (
              pageNumber >= startPage &&
              pageNumber <= endPage &&
              pageNumber < 9
            ) {
              return (
                <span
                  key={pageNumber}
                  style={{
                    alignSelf: "center",
                    margin: "0 8px",
                    color: "#292F36",
                    border:
                      articlePage === pageNumber
                        ? "0px solid #BBDDD9"
                        : "1px solid #24535C",
                    fontSize: "16px",
                    padding: "5px",
                    borderRadius: "20px",
                    background:
                      articlePage === pageNumber ? "#BBDDD9" : "inherit",
                  }}
                  onClick={() => setArticlePage(pageNumber)}
                >
                  0{pageNumber + 1}
                </span>
              );
            } else if (pageNumber >= startPage && pageNumber <= endPage) {
              return (
                <span
                  key={pageNumber}
                  style={{
                    alignSelf: "center",
                    margin: "0 8px",
                    color: "#292F36",
                    border:
                      articlePage === pageNumber
                        ? "0px solid #BBDDD9"
                        : "1px solid #24535C",
                    fontSize: "16px",
                    padding: "5px 7px",
                    borderRadius: "20px",
                    background:
                      articlePage === pageNumber ? "#BBDDD9" : "inherit",
                  }}
                  onClick={() => setArticlePage(pageNumber)}
                >
                  {pageNumber + 1}
                </span>
              );
            }
            return null;
          })}
          <IconButton
            onClick={handleArticleNextButtonClick}
            disabled={articlePage >= totalArticlePages - 1}
            aria-label="next page"
            sx={{
              ...buttonStyle,
              "&:hover": {
                background: "#BEDFDB",
              },
            }}
          >
            <KeyboardArrowRightIcon />
          </IconButton>
        </div>
      </Grid>
      <Liberez />
      <Footer />
    </div>
  );
}
