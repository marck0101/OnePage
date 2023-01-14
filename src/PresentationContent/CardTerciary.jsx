import { Grid } from "@mui/material";
import React from "react";
// import Image01 from "./imagem/imagem-01.jpg";

export default function CardTerciary() {
  const imgBackgroung = {
    // backgroundImage: "url(./imagem/imagem-01.jpg)",
    // backgroundColor: "#83FF33",  
    width: "100%" || "1280px",
    height: "400px",
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item alt="imagem" style={imgBackgroung}>
          <h1> CardTerciary </h1>
          <a href="#menu" style={{ color: "#FFF633" }}>
          inicial
          </a>
          {/* <img src="logo192.png" /> */}
        </Grid>
      </Grid>
    </>
  );
}
