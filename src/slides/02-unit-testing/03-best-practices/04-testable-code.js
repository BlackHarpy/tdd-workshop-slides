import React from "react";

import { Text, S, Appear, Slide, List, ListItem } from "spectacle";
import { CustomHeading } from "../../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Pruebas en código "no testeable"</CustomHeading>
      <Appear>
        <Text textColor="secondary" textAlign="left">
          A veces hay código que simplemente es difícil o imposible de probar
          con tests unitarios.
        </Text>
      </Appear>
      <Appear>
        <Text textColor="secondary" textAlign="left">
          Algunas señales de que se está intentando hacer pruebas para código
          "no testeable"
        </Text>
      </Appear>
      <List>
        <Appear>
          <div>
            <ListItem>Tardar mucho o dificultad en el setup principal</ListItem>
            <ListItem>Conjuntos de mocks muy grandes</ListItem>
            <ListItem>Aserciones muy grandes o poco claras</ListItem>
          </div>
        </Appear>
      </List>
    </Slide>
  );
};
