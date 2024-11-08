"use client";
import { createClient } from "@/prismicio";
import { Grid } from "@mui/material";
import { PrismicRichText } from "@prismicio/react";
import React, { useEffect, useState } from "react";

export default function NosActes() {
  // const client = createClient();
  // const settings = await client.getSingle("nos_actes");

  const [settings, setSettings] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      const client = createClient();
      const data = await client.getSingle("nos_actes" as any);
      setSettings(data);
    }
    fetchData();
  });
  

  const title: React.CSSProperties = {
    color: "#161C2D",
    fontSize: "21.27px",
    fontWeight: 700,
    lineHeight: "25.52px",
  };

  const description: React.CSSProperties = {
    color: "#161C2DB8",
    fontSize: "18.61px",
    fontWeight: 400,
    lineHeight: "29.78px",
  };

  const items = [
    {
      image: settings?.data.image2,
      title: settings?.data.title2,
      description: settings?.data.description2,
    },
  ];

  const repeatItems = Array.from({ length: 3 }, () => items[0]);

  const [isHovered, setIsHovered] = useState(null);
  
  return (
    <div>
      <Grid
        container
        justifyContent="center"
        style={{
          background: "#BBDDD9",
          padding: "20px",
        }}
      >
        <Grid
          item
          xs={12}
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          <div
            style={{
              fontSize: "48px",
              fontWeight: 700,
              lineHeight: "58px",
              color: "#000000",
            }}
          >
            <PrismicRichText field={settings?.data.title} />
          </div>
        </Grid>

        {/* Responsive layout for items */}
        <Grid
          container
          item
          lg={12}
          spacing={2}
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {repeatItems.map((item, index: any) => (
            <Grid
              item
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={3.5}
              onMouseEnter={() => setIsHovered(index)}
              onMouseLeave={() => setIsHovered(null)}
              style={{
                background: "#FFFFFF",
                borderRadius: "12px",
                padding: "20px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                transform: isHovered === index ? "scale(1.05)" : "scale(1)",
                boxShadow:
                  isHovered === index
                    ? "0 8px 16px rgba(0, 0, 0, 0.2)"
                    : "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              {item.image && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={item.image.url || undefined}
                  alt={item.image.alt || "Image"}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    marginBottom: "10px",
                  }}
                />
              )}
              <p style={title}>{item.title}</p>
              <p style={description}>{item.description}</p>
            </Grid>
          ))}
        </Grid>
        <p
          style={{
            fontFamily: "Jenna Sue",
            color: "#24535C",
            fontSize: "44px",
            lineHeight: "44px",
            textAlign: "center",
          }}
        >
          {settings?.data.footer_text}
        </p>
      </Grid>
    </div>
  );
}
