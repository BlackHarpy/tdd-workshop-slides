// Import React
import React from "react";

// Import Spectacle Core tags
import { Slide, Appear, Text, List, ListItem } from "spectacle";
import { CustomHeading } from "../../../custom-style";

export default () => {
  return (
    <Slide align="flex-start center">
      <CustomHeading>Definición de Prueba Unitaria</CustomHeading>
      <List>
        <ListItem textSize={40}>De bajo nivel</ListItem>
        <ListItem textSize={40}>
          Escritas por los mismos desarrolladores
        </ListItem>
        <ListItem textSize={40}>
          Más rápidos que otros tipos de pruebas
        </ListItem>
      </List>
      <Appear>
        <Text textColor="quartenary">...falta algo importante</Text>
      </Appear>
    </Slide>
  );
};
