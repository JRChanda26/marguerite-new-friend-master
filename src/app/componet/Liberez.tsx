"use client"
import { createClient } from "@/prismicio";
import { Grid, TextField } from "@mui/material";
import { PrismicRichText } from "@prismicio/react";
import React, { useState } from "react";
import { client } from "../../../prismic-configuration";

export default function Liberez() {
  // const client = createClient();
  // const settings = await client.getSingle("liberez");

  const [settings, setSettings] = useState('')
  useState(()=>{
    const fetchPosts = async () => {
      const response: any = await client.getAllByType("liberez");
      setSettings(response);
    };
    fetchPosts();
  })

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

  return (
    <div style={{ background: "#FFFFFF", padding: "100px" }}>
      <div style={containerStyle}>
        <Grid container spacing={2} style={leftSectionStyle}>
          <Grid item xs={12}>
            <div style={titleStyle}>
              <PrismicRichText field={settings[0]?.data.title} />
            </div>
            <div style={descriptionStyle}>
              <PrismicRichText field={settings[0]?.data.description} />
            </div>
          </Grid>
        </Grid>
        <div style={rightSectionStyle}>
          {" "}
          <TextField
            // value={settings?.data.text_field}
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
  );
}
