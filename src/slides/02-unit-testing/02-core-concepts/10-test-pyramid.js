import React from "react";

import { Image, S, Appear, Slide, CodePane } from "spectacle";
import { CustomHeading } from "../../../custom-style";

const image = require("./images/test-pyramid.png");
export default () => {
  return (
    <Slide>
      <CustomHeading>Pirámide de Pruebas</CustomHeading>
      <Appear>
        <Image src={image} />
      </Appear>
    </Slide>
  );
};
