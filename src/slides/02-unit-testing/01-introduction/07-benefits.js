import React from "react";

import { Appear, Slide, List, ListItem } from "spectacle";
import { CustomHeading } from "../../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Beneficios de los Tests Unitarios</CustomHeading>
      <List>
        <Appear>
          <ListItem>Asegurar calidad del código</ListItem>
        </Appear>
        <Appear>
          <ListItem>Encontrar fallas tempranas</ListItem>
        </Appear>
        <Appear>
          <ListItem>Facilitar cambios y refactors</ListItem>
        </Appear>
        <Appear>
          <ListItem>Proveer documentación</ListItem>
        </Appear>
        <Appear>
          <ListItem>Facilitar el proceso de debugging</ListItem>
        </Appear>
        <Appear>
          <ListItem>Reducir costos en el proceso de desarrollo</ListItem>
        </Appear>
      </List>
    </Slide>
  );
};
