"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@/prismicio";
import { Box, Button, Grid, Typography, useMediaQuery } from "@mui/material";

export default function Paroles() {
  const [parolesPage, setParolesPage] = useState<any>(null);
  const [isCardHovered, setIsCardHovered] = useState<number | null>(null);
  const [isAnimationPlaying, setIsAnimationPlaying] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState<number | null>(0);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const data = await client.getSingle("paroles" as any);
      setParolesPage(data);
    }
    fetchData();
  }, []);

    const isMax5 = useMediaQuery("(min-width:1370px)");
    const isMax = useMediaQuery("(min-width:1930px)");
    const isMax1 = useMediaQuery("(min-width:2050px)");
    const isMax2 = useMediaQuery("(min-width:2570px)");
    const isMax3 = useMediaQuery("(min-width:2890px)");
    const isMax4 = useMediaQuery("(min-width:3210px)");

  const isXl = useMediaQuery("(max-width:1920px)");
  const isLg = useMediaQuery("(max-width:1360px)");
  const isMd = useMediaQuery("(max-width:992px)");
  const isSm = useMediaQuery("(max-width:768px)");
  const isXs = useMediaQuery("(max-width:576px)");

  const getFontSize = () => {
    if (isXs) return { fontSize: "20px" };
    if (isSm) return { fontSize: "28px" };
    if (isMd) return { fontSize: "32px" };
    if (isLg) return { fontSize: "38px" };
    if (isXl) return { fontSize: "28px" }; //44px
    return { fontSize: "44px" };
  };

  const fontSize = getFontSize();

  if (!parolesPage) {
    return;
  }

  const videoUrl = parolesPage?.data.video?.url;
  const title = parolesPage?.data.title;
  const description = parolesPage?.data.description;

  const highlightWords = [
    "Marguerite Services,",
    "Responsabilité Sociétale des Entreprises (RSE)",
  ] as const;

  type HighlightWord = (typeof highlightWords)[number];

  // const fontMap: Record<HighlightWord, { fontFamily: string }> = {
  //   "Marguerite Services,": { fontFamily: "Jenna Sue" },
  //   "Responsabilité Sociétale des Entreprises (RSE)": { fontFamily: "Arial" },
  // };
  const fontMap: Record<HighlightWord, { fontFamily: string }> = {
    "Marguerite Services,": {fontFamily: "Jenna Sue" }, //fontFamily: "Helvetica"
    "Responsabilité Sociétale des Entreprises (RSE)": {
      fontFamily: "Mulish"
      // fontFamily: "Helvetica",
    },
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
              fontSize: fontSize.fontSize,
              lineHeight: "auto",
              letterSpacing: "0%",
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

  const items = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    title,
    videoUrl,
  }));

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex !== null && prevIndex + 1 < items.length ? prevIndex + 1 : 0
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex !== null && prevIndex - 1 >= 0
        ? prevIndex - 1
        : items.length - 1
    );
  };

  const handleVideoPlay = (id: any) => {
    // Pause previous video
    videoRefs.current.forEach((video, idx) => {
      if (idx !== id && video) {
        video.pause();
      }
    });

    setPlayingVideoId(id);
    setIsAnimationPlaying(true);
    setCurrentIndex(null);
  };

  const handleVideoPause = () => {
    if (playingVideoId !== null) {
      setPlayingVideoId(playingVideoId);
      setIsAnimationPlaying(true);
    } else {
      setPlayingVideoId(null);
      setIsAnimationPlaying(false);
    }
  };

  const handleVideoEnd = () => {
    setPlayingVideoId(null);
    setIsAnimationPlaying(false);
  };

  return (
    <div
      style={{
        // padding: isMax ? "0px 350px" : "0px 0px",
        padding : isMax4 ? "0px 500px" 
        : isMax3 ? "0px 320px" 
        : isMax2 ? "0px 280px" 
        : isMax1 ? "0px 220px" 
        : isMax ? "0px 140px" 
        :isMax5?"0px 110px"
        : "0px 0px",
      }} 
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <Grid container alignItems="center" justifyContent="center" gap="20px">
          <Typography
            sx={{
              color: "#0A1411",
              // fontWeight: 700,
              fontWeight: 600,
              fontSize: { xs: "28px", sm: "45px", lg: "64px", xl: "32px" }, //xl: "64px"
              lineHeight: { xs: "30px", sm: "50px", lg: "auto", xl: "1.5em" }, //xl: "auto"
              padding: {
                xs: "2% 0%",
                sm: "5% 0%",
                lg: "100px",
                xl: isMax ? "0px 194px 50px 194px" : "0px 194px 100px 194px",
              },
              fontFamily: "Mulish",
              // fontFamily: "Helvetica, sans-serif",
              letterSpacing: "0%",
              display: "flex",
              flexDirection: {
                xs: "colum",
                sm: "row",
                md: "row",
                lg: "row",
                xl: "row",
              },
              gap: {
                xs: "30px",
                sm: "80px",
                md: "80px",
                lg: "80px",
                xl: "80px",
              },
            }}
          >
            {parolesPage?.data.heading}
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "30px",
                paddingLeft: "30px",
              }}
            >
              {" "}
              <Button
                onClick={handlePrevious}
                aria-label="previous page"
                sx={{
                  fontSize: "16px",
                  color: "#000000",
                  background: "#FFFFFF",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  "&:hover": {
                    background: "inherit",
                  },
                }}
              >
                {parolesPage?.data.left_arrow_icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={parolesPage.data.left_arrow_icon.url || ""}
                    alt={parolesPage.data.left_arrow_icon}
                    style={{
                      width: "30px",
                      height: "auto",
                    }}
                  />
                )}
              </Button>
              <Button
                onClick={handleNext}
                aria-label="next page"
                sx={{
                  fontSize: "16px",
                  color: "#000000",
                  background: "#FFFFFF",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  padding: "20px",
                  "&:hover": {
                    background: "inherit",
                  },
                }}
              >
                {parolesPage?.data.right_arrow_icon && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={parolesPage.data.right_arrow_icon.url || ""}
                    alt={parolesPage.data.right_arrow_icon}
                    style={{
                      width: "30px",
                      height: "auto",
                    }}
                  />
                )}
              </Button>
            </div>
          </Typography>
          {/* <Grid
          item
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            gap: "20px",
            paddingTop: { lg: "30px", xl: "30px" },
          }}
        >
          <Button
            onClick={handlePrevious}
            aria-label="previous page"
            sx={{
              fontSize: "16px",
              color: "#000000",
              background: "#FFFFFF",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              "&:hover": {
                background: "inherit",
              },
            }}
          >
            {parolesPage?.data.left_arrow_icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={parolesPage.data.left_arrow_icon.url || ""}
                alt={parolesPage.data.left_arrow_icon}
                style={{
                  width: "30px",
                  height: "auto",
                }}
              />
            )}
          </Button>
          <Button
            onClick={handleNext}
            aria-label="next page"
            sx={{
              fontSize: "16px",
              color: "#000000",
              background: "#FFFFFF",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              padding: "20px",
              "&:hover": {
                background: "inherit",
              },
            }}
          >
            {parolesPage?.data.right_arrow_icon && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={parolesPage.data.right_arrow_icon.url || ""}
                alt={parolesPage.data.right_arrow_icon}
                style={{
                  width: "30px",
                  height: "auto",
                }}
              />
            )}
          </Button>
        </Grid> */}
        </Grid>

        <Grid item lg={12}>
          <Typography
            sx={{
              color: "#000000",
              // fontWeight: 400,
              fontWeight: 500,
              fontFamily: "Mulish",
              // fontFamily: "Helvetica, sans-serif",
              letterSpacing: "0%",
              fontSize: { xs: "14px", sm: "16px", lg: "25px", xl: "18px" }, //xl: "25px"
              lineHeight: {
                xs: "25px",
                sm: "30px",
                lg: "38.4px",
                // xl: "38.4px",
                xl:"1.9em"
              },
              padding: {
                xs: "5%",
                sm: "2%",
                lg: "0px 70px 0px 70px",
                xl: "0px 300px 0px 300px",
              },
            }}
          >
            {formatText(description)}
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          sx={{
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Cards Scrolling Section */}
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

          <Grid
            container
            item
            xs={12}
            sx={{
              overflow: "hidden",
              display: "flex",
              justifyContent: "center",
              padding: {
                xs: "20px",
                sm: "40px 0",
                lg: "117px 0px 128px 0px",
                xl: "117px 0px 50px 0px",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                gap: "50px",
                animation: isAnimationPlaying
                  ? "none"
                  : "slide 40s linear infinite",
                width: "100%",
                maxWidth: "100vw",
              }}
            >
              {items.map((item) => (
                <Box
                  key={item.id}
                  sx={{
                    borderRadius: "22.08px",
                    padding: "20px",
                    minWidth: {
                      xs: "200px",
                      sm: "300px",
                      lg: "450px",
                      xl: "529px",
                    },
                    background:
                      isCardHovered === item.id ||
                      playingVideoId === item.id ||
                      currentIndex === item.id
                        ? "linear-gradient(0deg, #FFFFFF 5.39%, #FFB699 123.52%)"
                        : "#FFFFFF",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                    transform:
                      isCardHovered === item.id ||
                      playingVideoId === item.id ||
                      currentIndex === item.id
                        ? "scale(1.1)"
                        : "scale(1)",
                    transition:
                      "transform 0.3s ease, background-color 0.3s ease",
                  }}
                  onMouseEnter={() => setIsCardHovered(item.id)}
                  onMouseLeave={() => setIsCardHovered(null)}
                >
                  {videoUrl ? (
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[item.id] = el;
                      }}
                      width="100%"
                      controls
                      style={{
                        borderRadius: "12px",
                      }}
                      onPlay={() => handleVideoPlay(item.id)}
                      onPause={handleVideoPause}
                      onEnded={handleVideoEnd}
                    >
                      <source src={videoUrl} type="video/mp4" />
                    </video>
                  ) : (
                    <p>Video not available</p>
                  )}
                  <Typography
                    sx={{
                      color: "#000000",
                      // fontWeight: 700,
                      fontWeight: 500,
                      fontFamily: "Mulish",
                      // fontFamily: "Helvetica, sans-serif",
                      textAlign: "center",
                      padding: {
                        xs: "0px",
                        sm: "0px",
                        lg: "10px 20px",
                        xl: "10px 20px",
                      },
                      fontSize: {
                        xs: "12px",
                        sm: "16px",
                        lg: "28px",
                        // xl: "30.2px",
                        xl: "28px",
                      },
                      lineHeight: {
                        xs: "20px",
                        sm: "20px",
                        lg: "25px",
                        // xl: "25px",
                        xl: "1.3em",
                      },
                    }}
                  >
                    {item.id}.{item.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
