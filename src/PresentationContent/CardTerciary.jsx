import { Grid } from "@mui/material";
import React from "react";

export default function CardTerciary() {
  const imgBackgroung = {
    width: "100%" || "1280px",
    height: "400px",
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item alt="imagem" style={imgBackgroung}>
          <h1> Projetos Premium </h1>
          <a href="#menu" style={{ color: "#FFF633", textDecoration: "none" }}>
            inicial
          </a>
        </Grid>
      </Grid>
    </>
  );
}
