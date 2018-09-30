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
      <Text textColor="quartenary">"es difícil/fastidioso"</Text>
      <List>
        <Appear>
          <ListItem>
            No todo el código de una aplicación es "testeable"
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Los casos de tests no pueden estar muy claros al principio
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            A medida que se va consiguiendo conocimiento sobre el negocio y las
            herramientas, será más fácil realizar tests
          </ListItem>
        </Appear>
      </List>
    </Slide>
  );
};
