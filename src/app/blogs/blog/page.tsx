"use client";
import { Grid, IconButton, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import Liberez from "@/app/mainpage/NeManquez";
import Footer from "@/app/mainpage/Footer";
import Header from "@/app/mainpage/Header";
import { client } from "../../../../lib/prismic-configuration";

export default function Blogs() {
  const [blogPage, setBlogPage] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response: any = await client.getAllByType("blogs" as any);
      setBlogPage(response);
    };

    fetchData();
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
    fontFamily: "Mulish",
    lineHeight: "120%",
    letterSpacing: "0%",
  };

  const description: React.CSSProperties = {
    color: "#161C2D",
    fontSize: "18.61px",
    fontWeight: 400,
    opacity: "72%",
    fontFamily: "Mulish",
    lineHeight: "160%",
    letterSpacing: "0%",
  };

  // const articleItems = Array.from({ length: 30 });

  const articleItems = [
    {
      image: blogPage[0]?.data.card1_image,
      subTitle: blogPage[0]?.data.card1_title,
      description: blogPage[0]?.data.card1_description,
    },
    {
      image: blogPage[0]?.data.card2_image,
      subTitle: blogPage[0]?.data.card2_title,
      description: blogPage[0]?.data.card2_description,
    },
    {
      image: blogPage[0]?.data.card3_image,
      subTitle: blogPage[0]?.data.card3_title,
      description: blogPage[0]?.data.card3_description,
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

  const isXl = useMediaQuery("(max-width:1920px)");
  const isLg = useMediaQuery("(max-width:1360px)");
  const isMd = useMediaQuery("(max-width:992px)");
  const isSm = useMediaQuery("(max-width:768px)");
  const isXs = useMediaQuery("(max-width:576px)");

  const getDimensions = () => {
    if (isXs) return { width: "100%", height: "auto" };
    if (isSm) return { width: "100%", height: "auto" };
    if (isMd) return { width: "100%", height: "auto" };
    if (isLg) return { width: "50%", height: "auto" };
    if (isXl) return { width: "50%", height: "auto" };
    return { width: "50%", height: "auto" }; // Default for larger screens
  };

  const dimensions = getDimensions();

  return (
    <div>
      <Header />
      <Grid
        sx={{
          backgroundImage: `url(${blogPage[0]?.data?.header_background?.url || ""})`,
          // backgroundSize: "cover",
          backgroundSize: {
            xs: "cover",
            sm: "cover",
            lg: "cover",
            xl: "cover",
          },
          backgroundRepeat: "no-repeat",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            padding: {
              xs: "70px 50px 0px 50px",
              sm: "150.67px 150px 0px 150px",
              lg: "250px 150px 0px 150px",
              xl: "352px 441px 0px 441px",
            },
          }}
        >
          <Grid
            sx={{
              background: "#fff",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              borderRadius: {
                xs: "20px 20px 0px 0px",
                sm: "37px 37px 0px 0px",
                lg: "37px 37px 0px 0px",
                xl: "37px 37px 0px 0px",
              },
              // padding: "41px 152px 41px 152px",
              padding: {
                xs: "0% 5% 0% 5%",
                sm: "3% 8%",
                lg: "41px 152px 74px 152px",
                xl: "21px 152px 21px 152px",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: "DM Serif Display",
                color: "#292F36",
                fontWeight: 700,
                // fontSize: "50px",
                fontSize: { xs: "16px", sm: "40px", lg: "50px", xl: "50px" },
                // lineHeight: "62.5px",
                lineHeight: { xs: "40px", sm: "48px", lg: "125%", xl: "125%" },
                letterSpacing: "0%",
              }}
            >
              {blogPage[0]?.data.heading}
            </Typography>
            <Typography
              sx={{
                fontFamily: "Jost",
                color: "#4D5053",
                fontWeight: 400,
                // fontSize: "22px",
                fontSize: { xs: "10px", sm: "18px", lg: "22px", xl: "22px" },
                // lineHeight: "33px",
                lineHeight: { xs: "20px", sm: "28px", lg: "150%", xl: "150%" },
                letterSpacing: "1%",
              }}
            >
              {blogPage[0]?.data.sub_heading}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          background: "#e1f5f2",
        }}
      >
        <Grid item xs={12} sm={12} lg={12} md={12} xl={12}>
          <Typography
            sx={{
              color: "#292F36",
              // fontSize: "50px",
              fontSize: { xs: "25px", sm: "40px", lg: "50px", xl: "50px" },
              lineHeight: { xs: "40px", sm: "48px", lg: "125%", xl: "125%" },
              fontWeight: 700,
              textAlign: "center",
              marginTop: { xs: "50px", sm: "50px", lg: "100px", xl: "233px" },
              fontFamily: "Mulish",
            }}
          >
            {blogPage[0]?.data.title1}
          </Typography>
          <Grid
            sx={{
              borderRadius: "62px",
              border: "1px solid #E7E7E7",
              // margin: "5% 10%",
              margin: {
                xs: "27px 30px 50px 30px",
                sm: "27px 80px 100px 80px",
                lg: "27px 152px 100px 152px",
                xl: "27px 152px 212px 152px",
              },
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
                    flexDirection: {
                      xs: "column",
                      sm: "column",
                      lg: "row",
                      md: "row",
                      xl: "row",
                    },
                    padding: {
                      xs: "22px",
                      sm: "22px",
                      lg: "22px 50px",
                      xl: "22px 130px",
                    },
                    gap: "50px",
                  }}
                  key={index}
                >
                  {blogPage[0]?.data.testimonial_image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={blogPage[0]?.data.testimonial_image.url || undefined}
                      alt={blogPage[0]?.data.testimonial_image.alt || "Image"}
                      style={{
                        height: dimensions.height,
                        width: dimensions.width,
                      }}
                    />
                  )}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      // justifyContent: "space-evenly",
                      gap: "22px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#292F36",
                        fontSize: "25px",
                        fontWeight: 700,
                        fontFamily: "Mulish",
                        lineHeight: "125%",
                        letterSpacing: "2%",
                        padding: { lg: "", xl: "50px 50px 0px 0px" },
                      }}
                    >
                      {/* {page * fixedRowsPerPage + index + 1}. */}
                      {blogPage[0]?.data.testimonial_title}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#4D5053",
                        fontSize: "22px",
                        fontWeight: 400,
                        fontFamily: "Mulish",
                        lineHeight: "150%",
                        letterSpacing: "1%",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {blogPage[0]?.data.testimonial_description}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#4D5053",
                        fontSize: "16px",
                        fontWeight: 400,
                        fontFamily: "Mulish",
                        lineHeight: "150%",
                        letterSpacing: "1%",
                        marginTop: { lg: "41px", xl: "41px" },
                      }}
                    >
                      {blogPage[0]?.data.testimonial_date}
                    </Typography>
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
            fontSize: { xs: "25px", sm: "40px", lg: "50px", xl: "50px" },
            lineHeight: { xs: "40px", sm: "48px", lg: "125%", xl: "125%" },
            fontWeight: 700,
            color: "#292F36",
            textAlign: "center",
            // margin: "50px 0px",
            fontFamily: "Mulish",
            letterSpacing: "2%",
          }}
        >
          {blogPage[0]?.data.title2}
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
          xl={12}
          lg={12}
          xs={12}
          sm={12}
          md={12}
          sx={{
            display: "grid",
            // gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(3, 1fr)",
            },
            gap: {xs: "30px",sm: "30px", lg: "50px", xl: "70px" },
            justifyContent: "center",
            // padding: "3% 8%",
            padding: {
              xs: "3% 5%",
              sm: "3% 5%",
              lg: "78px 50px 200px 50px",
              xl: "78px 100px 350px 100px",
            },
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
                xl={12}
                lg={12}
                xs={12}
                sm={12}
                key={index}
                sx={{
                  background: "#FFFFFF",
                  display: "flex",
                  flexDirection: "column",
                  padding: "20px",
                  borderRadius: "21.27px",
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
                <Typography sx={title}>{item.subTitle}</Typography>
                <Typography sx={description}>{item.description}</Typography>
              </Grid>
            ))}
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "20px",
            paddingRight: {lg:"50px",xl:"50px"},
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
        </Grid>
      </Grid>
      <Liberez />
      <Footer />
    </div>
  );
}
