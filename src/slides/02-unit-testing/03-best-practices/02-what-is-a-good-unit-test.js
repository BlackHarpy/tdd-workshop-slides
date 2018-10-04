import React from "react";

import { Appear, Slide, List, ListItem } from "spectacle";
import { CustomHeading } from "../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Un buen test es...</CustomHeading>
      <List>
        <Appear>
          <ListItem>Rápido (de escribir y ejecutar)</ListItem>
        </Appear>
        <Appear>
          <ListItem>Independiente</ListItem>
        </Appear>
        <Appear>
          <ListItem>Repetible</ListItem>
        </Appear>
        <Appear>
          <ListItem>Automático</ListItem>
        </Appear>
        <Appear>
          <ListItem>Legible</ListItem>
        </Appear>
      </List>
    </Slide>
  );
};
