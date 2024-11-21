"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { Button, Grid, Typography } from "@mui/material";

export default function Paroles() {
  const [parolesPage, setParolesPage] = useState<any>(null);
  const [isCardHovered, setIsCardHovered] = useState<number | null>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [playingVideoId, setPlayingVideoId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCards = 3;

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const data = await client.getSingle("paroles" as any);
      setParolesPage(data);
    }
    fetchData();
  });

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

  const items = Array.from({ length: 5 }, (_, i) => ({
    id: i + 1,
    title,
    videoUrl,
  }));

  const handleBackButtonClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextButtonClick = () => {
    setCurrentIndex((prevIndex) =>
      Math.min(prevIndex + 1, items.length - visibleCards)
    );
  };

  const handleVideoPlay = (id: any) => {
    setIsVideoPlaying(true);
    setPlayingVideoId(id);
  };

  const handleVideoPause = () => {
    setIsVideoPlaying(false);
    setPlayingVideoId(null);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Grid container alignItems="center" justifyContent="center" gap="20px">
        <Typography
          style={{
            color: "#0A1411",
            fontSize: "64px",
            fontWeight: 700,
            lineHeight: "80.32px",
            fontFamily: "Mulish",
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
            onClick={handleNextButtonClick}
            disabled={currentIndex >= items.length - visibleCards}
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
        lg={12}
        style={{
          // flex: "0 0 auto",
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "space-evenly",
          padding: "5%",
          gap: "50px",
          animation: isVideoPlaying ? "none" : "slide 50s linear infinite",
        }}
      >
        {items.slice(currentIndex, currentIndex + visibleCards).map((item) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3.5}
            key={item.id}
            style={{
              background:
                isCardHovered === item.id || playingVideoId === item.id
                  ? "linear-gradient(0deg, #FFFFFF 5.39%, #FFB699 123.52%)"
                  : "#FFFFFF",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
              padding: "20px",
              borderRadius: "20px",
              transform:
                isCardHovered === item.id || playingVideoId === item.id
                  ? "scale(1.1)"
                  : "scale(1)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={() => setIsCardHovered(item.id)}
            onMouseLeave={() => setIsCardHovered(null)}
          >
            {videoUrl ? (
              <video
                width="100%"
                controls
                style={{
                  borderRadius: "12px",
                }}
                onPlay={() => handleVideoPlay(item.id)}
                onPause={handleVideoPause}
                onEnded={handleVideoPause}
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
                fontFamily: "Mulish",
                lineHeight: "25.74px",
                textAlign: "center",
                padding: "10px 20px",
              }}
            >
              {item.id}. {item.title}
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
