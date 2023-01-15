import { Card, Grid } from "@mui/material";
import React from "react";
// import Galery from "../components/Galery";
import CardInitial from "../PresentationContent/CardInitial";
import CardSecundary from "../PresentationContent/CardSecundary";
import CardTerciary from "../PresentationContent/CardTerciary";
/* import MyComponent from "../Teste"; */

export default function Home() {
  const imgBackgroung = {
    backgroundColor: "#E0E4DE",
    padding: "20px",
    scrollBehavior: "smooth",
  };
  return (
    <>
      <Grid container spacing={2} style={imgBackgroung}>
        <Grid item xs={12}>
          <Card id="section1" style={{ padding: "20px", display: "flex" }}>
            {/* componente de apresentação */}
            <CardInitial />
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card id="section2" style={{ padding: "20px", display: "flex" }}>
            {/* componente de apresentação2 */}
            <CardSecundary />
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card id="section3" style={{ padding: "20px", display: "flex" }}>
            {/* componente de apresentação2 */}
            <CardTerciary />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
