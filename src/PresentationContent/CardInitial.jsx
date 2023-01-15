import { Card, Grid, Tooltip } from "@mui/material";
import React from "react";

export default function CardInitial() {
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
              <Card /* style={{ height: 300, width: 300, backgroundSize: "100%" }}*/
              >
                <Tooltip title="Quem sou">
                  <img
                    src="https://scontent.fpoa45-1.fna.fbcdn.net/v/t39.30808-6/271967888_4759122334202224_3978129601568375969_n.jpg?_nc_cat=103&amp;ccb=1-7&amp;_nc_sid=09cbfe&amp;_nc_eui2=AeEXN52Ssi9CoKUf2qYL0P-RlinLpiwtDu2WKcumLC0O7WkU3QMxWjl5QVAEXga4TrdhUAunhYSfhw9T5FbaCvT3&amp;_nc_ohc=ul4nyFdZZFEAX_Ipwq_&amp;_nc_ht=scontent.fpoa45-1.fna&amp;oh=00_AfCRqUgSc5i_wwl-hOAZWmLz8M7AxQkzWz6pdc4dTKJCRQ&amp;oe=63C872DA"
                    /* src="./imagem/anta.jpg" */
                    /* style={{width: 1024, height: 681}} */
                    /* style={{backgroundSize: "100%" }} */
                    style={{ width: 400, height: 300, background: "cover" }}
                    alt="quem sou"
                  />
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
      </Grid>
    </>
  );
}
