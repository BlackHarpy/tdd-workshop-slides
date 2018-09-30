import React from "react";

import { Appear, Slide, Text, List, ListItem } from "spectacle";
import { CustomHeading } from "../../../custom-style";

import {
  functionCode,
  classCode,
  moduleCode
} from "./code-examples/03-function-example";

export default () => {
  return (
    <Slide>
      <CustomHeading margin="0 0 40px 0">Limitaciones</CustomHeading>
      <Text textColor="quartenary">"no sé como"</Text>
      <List>
        <Appear>
          <ListItem>
            Hacer tests implica aprender herramientas que tienen su propia curva
            de aprendizaje
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            La veracidad de los tests depende de un buen setup inicial
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Implica aprender y revisitar conceptos sobre el diseño de la
            aplicación y las herramientas usadas para desarrollar
          </ListItem>
        </Appear>
      </List>
    </Slide>
  );
};
