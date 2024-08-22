"use client";
import { createClient } from "@/prismicio";
import { Grid, IconButton, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { PrismicRichText } from "@prismicio/react";

export default function Blogs() {

  const [settings, setSettings] = useState<any>(null);
  const [liberez, setLiberez] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const [blogsData, liberezData] = await Promise.all([
        client.getSingle("blogs"),
        client.getSingle("liberez")
      ]);
      setSettings(blogsData);
      setLiberez(liberezData);
    }
    fetchData().catch((error) => console.error('Error fetching data:', error));
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

  const [articlePage, setArticlePage] = useState(0);
  const fixedRowsPerArticlePage = 3;

  const articleItems = Array.from({ length: 30 });

  const totalArticlePages = Math.ceil(
    articleItems.length / fixedRowsPerArticlePage
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

  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${settings?.data?.banner?.url || ""})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
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
              padding: "41px 152px 41px 152px",
            }}
          >
            <Typography
              style={{
                fontFamily: "Mulish, sans-serif",
                color: "#0A1411",
                fontWeight: 700,
                fontSize: "64px",
                lineHeight: "80.32px",
              }}
            >
              {settings?.data.heading}
            </Typography>
            <Typography
              style={{
                fontFamily: "Mulish, sans-serif",
                color: "#565656",
                fontWeight: 400,
                fontSize: "24px",
                lineHeight: "38.4px",
              }}
            >
              {settings?.data.sub_heading}
            </Typography>
          </div>
        </div>
      </div>
      <Grid container>
        <Grid item lg={12}>
          <div
            style={{
              color: "#292F36",
              fontSize: "50px",
              fontWeight: 700,
              textAlign: "center",
              marginTop: "70px",
            }}
          >
            {settings?.data.title1}
          </div>
          <div
            style={{
              borderRadius: "62px",
              border: "1px solid #E7E7E7",
              margin: "50px 100px 0px 100px",
            }}
          >
            {items
              .slice(
                page * fixedRowsPerPage,
                page * fixedRowsPerPage + fixedRowsPerPage
              )
              .map((_, index) => (
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    padding: "22px",
                    gap: "65px",
                  }}
                  key={index}
                >
                  {settings?.data.post_image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={settings.data.post_image.url || undefined}
                      alt={settings.data.post_image.alt || "Image"}
                      style={{
                        height: "300px",
                        width: "400px",
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
                  ...buttonStyle,
                  "&:hover": {
                    background: "#BEDFDB",
                  },
                }}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>
              <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= totalPages - 1}
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
          </div>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "58px",
            color: "#000000",
            marginTop: "50px",
          }}
        >
          {settings?.data.title2}
        </div>
        {articleItems
          .slice(
            articlePage * fixedRowsPerArticlePage,
            articlePage * fixedRowsPerArticlePage + fixedRowsPerArticlePage
          )
          .map((_, index) => (
            <Grid
              item
              lg={12}
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                margin: "50px",
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
                  />
                )}
                <p style={title}>{settings?.data.sub_title2}</p>
                <p style={description}>{settings?.data.description2}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                  }}
                >
                  {settings?.data.profile1 && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={settings?.data.profile1.url || undefined}
                      alt={settings?.data.profile1.alt || "Image"}
                      style={{
                        width: "60px",
                        height: "60px",
                        paddingTop: "20px",
                      }}
                    />
                  )}
                  <div>
                    <p style={profileStyle}>{settings?.data.name1}</p>
                    <p style={dateStyle}>{settings?.data.date1}</p>
                  </div>
                </div>
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
                  />
                )}
                <p style={title}>{settings?.data.sub_title3}</p>
                <p style={description}>{settings?.data.description3}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                  }}
                >
                  {settings?.data.profile2 && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={settings?.data.profile2.url || undefined}
                      alt={settings?.data.profile2.alt || "Image"}
                      style={{
                        width: "60px",
                        height: "60px",
                        paddingTop: "20px",
                      }}
                    />
                  )}
                  <div>
                    <p style={profileStyle}>{settings?.data.name2}</p>
                    <p style={dateStyle}>{settings?.data.date2}</p>
                  </div>
                </div>
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
                  />
                )}
                <p style={title}>{settings?.data.sub_title4}</p>
                <p style={description}>{settings?.data.description4}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "20px",
                  }}
                >
                  {settings?.data.profile3 && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={settings?.data.profile3.url || undefined}
                      alt={settings?.data.profile3.alt || "Image"}
                      style={{
                        width: "60px",
                        height: "60px",
                        paddingTop: "20px",
                      }}
                    />
                  )}
                  <div>
                    <p style={profileStyle}>{settings?.data.name3}</p>
                    <p style={dateStyle}>{settings?.data.date3}</p>
                  </div>
                </div>
              </Grid>
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
              Math.ceil(articleItems.length / fixedRowsPerArticlePage)
            ).keys(),
          ].map((pageNumber) => {
            const startPage = Math.max(0, articlePage - 1);
            const endPage = Math.min(
              Math.ceil(articleItems.length / fixedRowsPerArticlePage) - 1,
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
              value={liberez?.data.text_field} // Pre-populate with existing value or leave empty
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
