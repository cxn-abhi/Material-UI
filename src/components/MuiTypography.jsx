// import React from "react";
import { Typography } from "@mui/material";
export const MuiTypography = () => {
  return (
    <>
      <div>
        <Typography variant="h1">h1 Heading</Typography>
        <Typography variant="h2">h2 Heading</Typography>
        <Typography variant="h3">h3 Heading</Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          h4 Heading
        </Typography>
        <Typography variant="h5">h5 Heading</Typography>
        <Typography variant="h6">h6 Heading</Typography>
      </div>
      <div>
        <Typography variant="subtitle1">Subtitle 1 </Typography>
        <Typography variant="subtitle2">Subtitle 2</Typography>
        <Typography variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil minus
          veniam, soluta ut eaque ipsa porro dicta saepe tempore maxime laborum
          accusantium qui perspiciatis quibusdam aut, ea sapiente mollitia
          maiores.{" "}
        </Typography>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          rerum hic architecto ullam a. Nulla unde omnis possimus optio, officia
          iure ipsum reiciendis facere delectus, minima tenetur itaque
          voluptatibus earum.
        </Typography>
      </div>
    </>
  );
};
