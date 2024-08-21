"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { Button, Grid } from "@mui/material";
import { PrismicRichText } from "@prismicio/react";
import EastIcon from "@mui/icons-material/East";
import WestIcon from "@mui/icons-material/West";

export default function SoinChez() {
  const [settings, setSettings] = useState<any>(null);
  const [page, setPage] = useState(0);
  const fixedRowsPerPage = 3;

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const data = await client.getSingle("soin_chez");
      setSettings(data);
    }
    fetchData();
  });

  if (!settings) {
    return; // Render a loading state while fetching data
  }

  const videoUrl = settings.data.video?.url;
  const subTitle = settings.data.sub_title;

  const items = Array.from({ length: 5 });
  
  const totalPages = Math.ceil(items.length / fixedRowsPerPage);

  const handleBackButtonClick = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextButtonClick = () => {
    setPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          color: "#0A1411",
          fontSize: "64px",
          fontWeight: 700,
          lineHeight: "80.32px",
        }}
      >
        <PrismicRichText field={settings.data.title} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "20px",
        }}
      >
        <Button
          onClick={handleBackButtonClick}
          disabled={page === 0}
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
          disabled={page >= totalPages - 1}
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
      </div>
      <Grid container>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            marginTop: "20px",
          }}
        >
          {items
            .slice(
              page * fixedRowsPerPage,
              page * fixedRowsPerPage + fixedRowsPerPage
            )
            .map((_, index) => (
              <Grid
                item
                lg={3}
                key={index}
                style={{
                  background: "#FFFFFF",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
                  padding: "20px",
                  borderRadius: "20px",
                }}
              >
                {videoUrl ? (
                  <video
                    width="300"
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
                    fontSize: "32.02px",
                    fontWeight: 700,
                  }}
                >
                  {page * fixedRowsPerPage + index + 1}. {subTitle}
                </div>
              </Grid>
            ))}
        </Grid>
        <p
          style={{
            padding: "50px",
            color: "#000000",
            fontSize: "32px",
            fontWeight: 300,
            lineHeight: "40.16px",
          }}
        >
          {settings.data.description}
        </p>
      </Grid>
    </div>
  );
}
