"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@/prismicio";
import { Box, Button, Grid, Typography } from "@mui/material";

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
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        paddingTop: "5%",
      }}
    >
      <Grid container alignItems="center" justifyContent="center" gap="20px">
        <Typography
          sx={{
            color: "#0A1411",
            fontWeight: 700,
            fontSize: { xs: "28px", sm: "45px", lg: "65px" },
            lineHeight: { xs: "30px", sm: "50px", lg: "80px" },
            padding: { xs: "2% 0%", sm: "5% 0%", lg: "5% 0%" },
            fontFamily: "sans-serif",
          }}
        >
          {parolesPage?.data.heading}
        </Typography>
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
            onClick={handlePrevious}
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
              padding: "7px",
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
        </Grid>
      </Grid>

      <Grid item lg={12}>
        <Typography
          sx={{
            color: "#000000",
            fontWeight: 400,
            fontFamily: "sans-serif",
            fontSize: { xs: "12px", sm: "16px", lg: "25px" },
            lineHeight: { xs: "20px", sm: "20px", lg: "38.4px" },
            padding: { xs: "2% 3%", sm: "2% 8%", lg: "2% 15%" },
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
            padding: { xs: "20px", sm: "40px 0" },
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
                  minWidth: { xs: "250px", sm: "300px", lg: "350px" },
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
                  transition: "transform 0.3s ease, background-color 0.3s ease",
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
                    fontWeight: 700,
                    fontFamily: "sans-serif",
                    textAlign: "center",
                    padding: { xs: "0px", sm: "0px", lg: "10px 20px" },
                    fontSize: { xs: "12px", sm: "16px", lg: "22px" },
                    lineHeight: { xs: "20px", sm: "20px", lg: "25px" },
                  }}
                >
                  {item.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
