import React from "react";

import { Text, S, Appear, Slide, List, ListItem } from "spectacle";
import { CustomHeading } from "../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Beneficios del TDD</CustomHeading>
      <List>
        <Appear>
          <div>
            <ListItem>
              Requiere pensar en la interfaz antes de la implementación
            </ListItem>
            <ListItem>Desarrollo en iteraciones pequeñas</ListItem>
            <ListItem>
              Produce código más modular, flexible y extensible.
            </ListItem>
            <ListItem>Feedback inmediato.</ListItem>
            <ListItem>Seguridad al refactorizar.</ListItem>
          </div>
        </Appear>
      </List>
    </Slide>
  );
};
