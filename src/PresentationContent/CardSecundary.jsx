import { Grid } from "@mui/material";
import React from "react";
// import Image01 from "./imagem/imagem-01.jpg";

export default function CardSecundary() {
  const imgBackgroung = {
    // backgroundImage: "url(./imagem/imagem-01.jpg)",
    // backgroundColor: "blue",
    width: "100%" || "1280px",
    height: "400px",
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item alt="imagem" style={imgBackgroung}>
          <h1> CardSecundary </h1>
          <a href="#section3" style={{ color: "#FFF633" }}>
            proximo
          </a>
          {/* <img src="logo192.png" /> */}
        </Grid>
      </Grid>
    </>
  );
}
