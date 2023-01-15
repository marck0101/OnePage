import { Card, Grid, Tooltip } from "@mui/material";
import React from "react";

export default function CardInitial() {
  const imgBackgroung = {
    width: "100%" || "1280px",
    height: "400px",
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item alt="imagem" style={imgBackgroung}>
          <h1> Sou </h1>
          <a
            href="#section2"
            style={{ color: "#FFF633", textDecoration: "none" }}
          >
            proximo
          </a>
          <Grid
            container
            style={{
              display: "flex",
              flexDirection: "row-reverse",
              flexWrap: "nowrap",
            }}
          >
            <Grid item>
              <Card style={{ height: 300, width: 300 }}>
                <Tooltip title="Quem sou">
                  <img
                    src="./imagem/anta.jpg"
                    style={{ height: 300, width: 300 }}
                    alt="quem sou"
                  ></img>
                </Tooltip>
              </Card>
            </Grid>
            <Grid item style={{padding: 5}}>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p><br/>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy.
                Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose (injected humour and the like).
              </p>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
