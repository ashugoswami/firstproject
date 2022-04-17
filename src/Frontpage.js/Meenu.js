import React from "react";
import cofte from "../images/menubk1.jpg";
import menu1 from "../images/cofee3.jpeg";
import capa from "../images/capachino.webp";
import moch from "../images/mocha.webp";
import iris from "../images/irish.webp";
import long from "../images/longblack.webp";
import vin from "../images/vinnea.webp";
import Cardss from "./Cardss";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Meenu() {
  return (
    <>
      <div
        className="container-fluid"
        style={{
          backgroundImage: `url(${cofte})`,
          height: "102vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          backgroundAttachment: "fixed",
        }}
      >
        <div
          className="container"
          style={{ position: "relative", top: "12%", left: "40%" }}
        >
          <Box sx={{ width: "55%" }}>
            <Grid
              container
              rowSpacing={4}
              columnSpacing={{ xs: 4, sm: 2, md: 3 }}
            >
              <Grid item xs={4}>
                <Item>
                  <Cardss img={menu1} head="Flat White" />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Cardss img={iris} head="Irish" />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Cardss img={long} head="Long Black" />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Cardss img={capa} head="Cappuccino" />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Cardss img={vin} head="Vienna Moc" />
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item>
                  <Cardss img={moch} head="Mocha" />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </>
  );
}
