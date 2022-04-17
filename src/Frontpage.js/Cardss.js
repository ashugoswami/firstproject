import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function Cardss(props) {
  const [mouse, setmouse] = useState({
    raised: false,
    shadow: 1,
  });

  return (
    <Card
      sx={{ maxWidth: 200 }}
      onMouseOver={() => setmouse({ raised: true, shadow: 8 })}
      onMouseOut={() => setmouse({ raised: false, shadow: 1 })}
      raised={mouse.raised}
      zdepth={mouse.shadow}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.head}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
