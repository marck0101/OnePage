import { Grid } from "@mui/material";
import React from "react";
// import Image01 from "./imagem/imagem-01.jpg";

export default function CardInitial() {
  const imgBackgroung = {
    // backgroundImage: "url(./imagem/imagem-01.jpg)",
    // backgroundColor: "red",
    width: "100%" || "1280px",
    height: "400px",
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item alt="imagem" style={imgBackgroung}>
          <h1> CardInitial </h1>
          <a href="#section2" style={{ color: "#FFF633" }}>
          proximo
          </a>
          {/* <img src="logo192.png" /> */}
        </Grid>
      </Grid>
    </>
  );
}
