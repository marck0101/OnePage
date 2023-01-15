import { Card, Grid, Tooltip } from "@mui/material";
import React from "react";
import Galery from "../components/Galery";

export default function CardSecundary() {
  const imgBackgroung = {
    width: "100%" || "1280px",
    height: "400px",
  };
  const texto1 =
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).";

  return (
    <>
      <Grid container spacing={2}>
        <Grid item alt="imagem" style={imgBackgroung}>
          <h1> Projeto Simples </h1>
          <a
            href="#section3"
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
              <Card style={{ height: 300, width: 300 }}
              >
                <Tooltip title="Quem sou">
                  <img
                    src="./imagem/anta.jpg"
                    style={{ width: 400, height: 300, background: "cover" }}
                    alt="quem sou"
                  />
                  {/* <Galery /> */}
                </Tooltip>
              </Card>
            </Grid>

            <Grid item xs={12} style={{ padding: 5 }}>
              <div style={{ align: "justify" }}>
                <p style={{ align: "justify", padding: 5 }}>{texto1}</p>
              </div>
            </Grid>
          </Grid>
        </Grid>
        {/* compoente de galeria */}
        {/* <Galery /> */}
      </Grid>
    </>
  );
}
