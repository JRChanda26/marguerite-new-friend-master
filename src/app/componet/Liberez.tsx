import { createClient } from "@/prismicio";
import { Grid, TextField } from "@mui/material";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

export default async function Liberez() {
  const client = createClient();
  const settings = await client.getSingle("liberez");

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
    color:'#24535C',
    fontSize: "41.81px",
    fontWeight:700,
    lineHeight:'52.47px'
  };

  const descriptionStyle: React.CSSProperties = {
    color:'#24535C',
    fontSize: "23.52px",
    fontWeight:400,
    lineHeight:'37.63px'
  };

  return (
    <div style={{background:'#FFFFFF',padding:'100px'}}>
    <div style={containerStyle}>
      <Grid container spacing={2} style={leftSectionStyle}>
        <Grid item xs={12}>
          <div style={titleStyle}>
            <PrismicRichText field={settings.data.title} />
          </div>
          <div style={descriptionStyle}>
            <PrismicRichText field={settings.data.description} />
          </div>
        </Grid>
      </Grid>
      <div style={rightSectionStyle}>
        {" "}
        <TextField
          value={settings.data.text_field} // Pre-populate with existing value or leave empty
          placeholder="Entrez votre adresse email"
          variant="outlined"
          sx={{
            ...inputStyle,
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'transparent', // Initial border color
              },
              '&:hover fieldset': {
                borderColor: 'transparent', // Hover border color
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent', // Focused border color
              },
            },
          }}
        />
      </div>
    </div>
    </div>
  );
}
