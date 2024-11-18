"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { Button, Grid } from "@mui/material";
import { PrismicRichText } from "@prismicio/react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

export default function SoinChez() {
  const [settings, setSettings] = useState<any>(null);
  const [currentIndex, setCurrentIndex] = useState(1);
  const fixedRowsPerPage = 3;

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const data = await client.getSingle("soin_chez" as any);
      setSettings(data);
    }
    fetchData();
  });

  if (!settings) {
    return;
  }

  const videoUrl = settings.data.video?.url;
  const subTitle = settings.data.sub_title;
  const description = settings.data.description;

  const highlightWords = [
    "Marguerite Services,",
    "Responsabilité Sociétale des Entreprises (RSE)",
  ] as const;

  type HighlightWord = (typeof highlightWords)[number];

  const fontMap: Record<HighlightWord, { fontFamily: string }> = {
    "Marguerite Services,": { fontFamily: "Jenna Sue" },
    "Responsabilité Sociétale des Entreprises (RSE)": { fontFamily: "Arial" },
  };

  const escapeRegExp = (string: string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  const formatText = (text: string) => {
    return text
      .split(new RegExp(`(${highlightWords.map(escapeRegExp).join("|")})`, "g"))
      .map((part, index) =>
        highlightWords.includes(part as HighlightWord) ? (
          <span
            key={index}
            style={{
              fontFamily: fontMap[part as HighlightWord].fontFamily,
              fontWeight: 400,
              fontSize: "44px",
              lineHeight: "44px",
              color: "#24535C",
            }}
          >
            {part}
          </span>
        ) : (
          part
        )
      );
  };

  // const items = Array.from({ length: 10 });
  const items = Array.from({ length: 16 }, (_, i) => ({
    id: i + 1,
    subTitle,
    videoUrl,
  }));

  // const totalPages = Math.ceil(items.length / fixedRowsPerPage);

  // const handleBackButtonClick = () => {
  //   setPage((prevPage) => Math.max(prevPage - 1, 0));
  // };

  // const handleNextButtonClick = () => {
  //   setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  // };
  const handleBackButtonClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextButtonClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - 1));
  };

  const totalPages = Math.ceil(items.length / fixedRowsPerPage) - 1;
  const currentPage = Math.floor(currentIndex / fixedRowsPerPage) + 1;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {/* <div
        style={{
          color: "#0A1411",
          fontSize: "64px",
          fontWeight: 700,
          lineHeight: "80.32px",
          fontFamily:'Mulish'
        }}
      >
        <PrismicRichText field={settings.data.title} />
      </div>
      <Grid
        item
        lg={12}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "20px",
        }}
      >
        <Button
          onClick={handleBackButtonClick}
          // disabled={page === 0}
          disabled={currentIndex ===0}
          aria-label="previous page"
          sx={{
            fontSize: "16px",
            color: "#000000",
            background: "#FFFFFF",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            padding: "7px",
            "&:hover": {
              background: "inherit",
            },
          }}
        >
          <WestIcon />
        </Button>
        <Button
          onClick={handleNextButtonClick}
          // disabled={page >= totalPages - 1}
          disabled={currentIndex >= items.length - fixedRowsPerPage}
          aria-label="next page"
          sx={{
            fontSize: "16px",
            color: "#000000",
            background: "#FFFFFF",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            padding: "7px",
            "&:hover": {
              background: "inherit",
            },
          }}
        >
          <EastIcon />
        </Button>
      </Grid> */}
      <Grid container alignItems="center" justifyContent="center" gap="20px">
        <div
          style={{
            color: "#0A1411",
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: "80.32px",
            fontFamily: "Mulish",
          }}
        >
          <PrismicRichText field={settings.data.title} />
        </div>
        <Grid
          item
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "20px",
          }}
        >
          <Button
            onClick={handleBackButtonClick}
            disabled={currentIndex === 0}
            aria-label="previous page"
            sx={{
              fontSize: "16px",
              color: "#000000",
              background: "#FFFFFF",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "7px",
              "&:hover": {
                background: "inherit",
              },
            }}
          >
            <WestIcon />
          </Button>
          <Button
            onClick={handleNextButtonClick}
            disabled={currentIndex >= items.length - fixedRowsPerPage}
            aria-label="next page"
            sx={{
              fontSize: "16px",
              color: "#000000",
              background: "#FFFFFF",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "7px",
              "&:hover": {
                background: "inherit",
              },
            }}
          >
            <EastIcon />
          </Button>
        </Grid>
      </Grid>

      <Grid item lg={12}>
        <p
          style={{
            padding: "50px",
            color: "#000000",
            fontSize: "32px",
            fontWeight: 300,
            lineHeight: "40.16px",
            fontFamily: "Mulish",
          }}
        >
          {formatText(description)}
        </p>
      </Grid>

      <Grid container spacing={2}>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            marginBottom: "50px",
            animation: "slide 50s linear infinite",
          }}
        >
          {items
            .slice(
              Math.max(currentIndex - 1, 0),
              Math.min(currentIndex + 2, items.length)
            )
            .map((item) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3.5}
                key={item.id}
                style={{
                  background:
                    currentIndex === item.id - 1 ? "#fdf2e9" : "#FFFFFF",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                  padding: "20px",
                  borderRadius: "20px",
                  transform:
                    currentIndex === item.id - 1 ? "scale(1.1)" : "scale(1)",
                  transition: "transform 0.3s ease",
                  margin: currentIndex === item.id - 1 ? "10px 20px" : "10px",
                }}
              >
                {videoUrl ? (
                  <video
                    width="100%"
                    controls
                    style={{
                      borderRadius: "12px",
                    }}
                  >
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                ) : (
                  <p>Video not available</p>
                )}
                <div
                  style={{
                    color: "#000000",
                    fontSize: "22.02px",
                    fontWeight: 700,
                    // fontFamily:'Mulish',
                    lineHeight: "25.74px",
                    textAlign: "center",
                    padding: "10px 20px",
                  }}
                >
                  {/* {page * fixedRowsPerPage + index + 1}. {subTitle} */}
                  {item.id}. {item.subTitle}
                </div>
              </Grid>
            ))}
        </Grid>
        {/* <Grid
          item
          xs={12}
          lg={12}
          md={12}
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
          }}
        >
           {Array.from({ length: totalPages }).map((_, index) => (
          <Box
            key={index}
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              margin: "0 8px",
              backgroundColor: currentPage === index + 1 ? "#24535C" : "#BBDDD999",
              cursor: "pointer",
              transition: "background-color 0.3s ease",
            }}
          />
        ))}
        </Grid> */}
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
      </Grid>
    </div>
  );
}
