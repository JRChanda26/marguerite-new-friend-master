// "use client"
import React from "react";
import { createClient } from "@/prismicio";
import { PrismicRichText } from "@prismicio/react";
import { Grid } from "@mui/material";
import { PrismicNextLink } from "@prismicio/next";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default async function NotreProcessus() {
  const client = createClient();

  const settings = await client.getSingle("notre_processus");

  const title: React.CSSProperties = {
    color: "#1E1E1E",
    fontSize: "42PX",
    lineHeight: "49.22px",
  };
  
  const subTitle: React.CSSProperties = {
    color: "#24535C",
    textTransform: "uppercase",
    fontSize: "18px",
    fontWeight: 600,
    lineHeight: "22.59px",
    letterSpacing: "17.5%",
  };

  const description: React.CSSProperties = {
    color: "#565656",
    fontSize: "18px",
    fontWeight: 400,
    fontStyle: "italic",
    lineHeight: "33.3px",
  };

  const textLink: React.CSSProperties = {
    color: "#24535C",
    fontSize: "14px",
    fontWeight: 400,
    fontStyle: "italic",
    lineHeight: "25.9px",
    textDecoration: "none",
    display:'flex',
    flexDirection:'row'
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: 700,
              lineHeight: "80.32px",
              color: "#0A1411",
            }}
          >
            <PrismicRichText field={settings.data.title} />
          </h1>
          <div
            style={{
              fontSize: "24px",
              fontWeight: 400,
              lineHeight: "38.04px",
              color: "#565656",
            }}
          >
            <PrismicRichText field={settings.data.description} />
          </div>
        </Grid>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop:'50px',
            gap: "100px",
            justifyContent:'space-evenly',
          }}
        >
          <Grid
            item
            lg={5}
          >
            {settings.data.image1 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={settings.data.image1.url || undefined}
                alt={settings.data.image1.alt || "Image"}
                style={{
                  height:'80vh',
                }}
              />
            )}
          </Grid>
          <Grid
            item
            lg={5}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={subTitle}>{settings.data.sub_title1}</p>
            <h1
              style={title}
            >
              <PrismicRichText field={settings.data.title1} />
            </h1>
            <div
              style={description}
            >
              <PrismicRichText field={settings.data.description1} />
            </div>

            <PrismicNextLink
              field={settings.data.text_link1}
              style={textLink}
            >
              {settings.data.button_text1}
              <ArrowRightAltIcon/>
            </PrismicNextLink>
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent:'space-evenly',
            marginTop:'50px',
          }}
        >
          <Grid
            item
            lg={5}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={subTitle}>{settings.data.sub_title2}</p>
            <h1
              style={title}
            >
              <PrismicRichText field={settings.data.title2} />
            </h1>
            <div
              style={description}
            >
              <PrismicRichText field={settings.data.description2} />
            </div>

            <PrismicNextLink
              field={settings.data.text_link2}
              style={textLink}
            >
              {settings.data.button_text2}
              <ArrowRightAltIcon/>
            </PrismicNextLink>
          </Grid>
          <Grid
            item
            lg={5}
          >
            {settings.data.image2 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={settings.data.image2.url || undefined}
                alt={settings.data.image2.alt || "Image"}
                style={{
                  height:'80vh',
                }}
              />
            )}
          </Grid>
        </Grid>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop:'50px',
            gap: "100px",
            justifyContent:'space-evenly',
          }}
        >
          <Grid
            item
            lg={5}
          >
            {settings.data.image3 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={settings.data.image3.url || undefined}
                alt={settings.data.image3.alt || "Image"}
                style={{
                  height:'80vh',
                }}
              />
            )}
          </Grid>
          <Grid
            item
            lg={5}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p style={subTitle}>{settings.data.sub_title3}</p>
            <h1
              style={title}
            >
              <PrismicRichText field={settings.data.title3} />
            </h1>
            <div
              style={description}
            >
              <PrismicRichText field={settings.data.description3} />
            </div>

            <PrismicNextLink
              field={settings.data.text_link3}
              style={textLink}
            >
              {settings.data.button_text3}
              <ArrowRightAltIcon/>
            </PrismicNextLink>
          </Grid>
        </Grid>
      </Grid> 
    </div>
  );
}
