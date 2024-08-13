import { createClient } from "@/prismicio";
import { Grid } from "@mui/material";
import { PrismicRichText } from "@prismicio/react";
import React from "react";

export default async function NosActes() {
  const client = createClient();
  const settings = await client.getSingle("nos_actes");

  const title: React.CSSProperties = {
    color:'#161C2D',
    fontSize: "21.27px",
    fontWeight: 700,
    lineHeight: "25.52px",
  };

  const description: React.CSSProperties = {
    color:'#161C2DB8',
    fontSize: "18.61px",
    fontWeight: 400,
    lineHeight: "29.78px",
  };

  return (
    <div>
      <Grid
        container
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#BBDDD9",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "58px",
            color: "#000000",
          }}
        >
          <PrismicRichText field={settings.data.title} />
        </h1>
        <Grid
          item
          lg={12}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent:'space-evenly',
            marginBottom:'50px'
          }}
        >
          <Grid
            item
            lg={3}
            style={{
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              padding: "21px",
              borderRadius: "20px",
            }}
          >
            {settings.data.image1 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={settings.data.image1.url || undefined}
                alt={settings.data.image1.alt || "Image"}
              />
            )}
            <p style={title}>{settings.data.title1}</p>
            <p style={description}>{settings.data.description1}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                 gap:'20px'
              }}
            >
              {settings.data.sub_image1 && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={settings.data.sub_image1.url || undefined}
                  alt={settings.data.sub_image1.alt || "Image"}
                  style={{
                    width: "100px",
                  }}
                />
              )}
              <div>
                <h5>{settings.data.sub_title1}</h5>
                <p>{settings.data.sub_description1}</p>
              </div>
            </div>
          </Grid>
          <Grid
            item
            lg={3}
            style={{
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            {settings.data.image2 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={settings.data.image2.url || undefined}
                alt={settings.data.image2.alt || "Image"}
              />
            )}
            <p style={title}>{settings.data.title2}</p>
            <p style={description}>{settings.data.description2}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                 gap:'20px'
              }}
            >
              {settings.data.sub_image2 && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={settings.data.sub_image2.url || undefined}
                  alt={settings.data.sub_image2.alt || "Image"}
                  style={{
                    width: "100px",
                  }}
                />
              )}
              <div>
                <h5>{settings.data.sub_title2}</h5>
                <p>{settings.data.sub_description2}</p>
              </div>
            </div>
          </Grid>
          <Grid
            item
            lg={3}
            style={{
              background: "#FFFFFF",
              display: "flex",
              flexDirection: "column",
              padding: "20px",
              borderRadius: "20px",
            }}
          >
            {settings.data.image3 && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={settings.data.image3.url || undefined}
                alt={settings.data.image3.alt || "Image"}
              />
            )}
            <p style={title}>{settings.data.title3}</p>
            <p style={description}>{settings.data.description3}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                gap:'20px'
              }}
            >
              {settings.data.sub_image3 && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={settings.data.sub_image3.url || undefined}
                  alt={settings.data.sub_image3.alt || "Image"}
                  style={{
                    width: "100px",
                  }}
                />
              )}
              <div>
                <h5>{settings.data.sub_title3}</h5>
                <p>{settings.data.sub_description3}</p>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
