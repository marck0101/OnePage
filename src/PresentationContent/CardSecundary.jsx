import { Grid } from "@mui/material";
import React from "react";

export default function CardSecundary() {
  const imgBackgroung = {
    width: "100%" || "1280px",
    height: "400px",
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item alt="imagem" style={imgBackgroung}>
          <h1> Projeto Simples </h1>
          <a href="#section3" style={{ color: "#FFF633", textDecoration:"none"  }}>
            proximo
          </a>
        </Grid>
      </Grid>
    </>
  );
}
