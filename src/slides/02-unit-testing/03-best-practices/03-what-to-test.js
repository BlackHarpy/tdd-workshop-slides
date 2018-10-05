import React from "react";

import { Text, S, Appear, Slide, List, ListItem } from "spectacle";
import { CustomHeading } from "../../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>¿Qué se tiene que probar en un test?</CustomHeading>
      <Appear>
        <Text textColor="secondary" textAlign="left">
          Los tests unitarios deberían probar la{" "}
          <S type="bold">interfaz pública</S> del código.
        </Text>
      </Appear>
      <Appear>
        <Text textColor="secondary" textAlign="left">
          Un test no debería probar:
        </Text>
      </Appear>
      <List>
        <Appear>
          <div>
            <ListItem>Métodos privados</ListItem>
            <ListItem>Funcionamiento de librerías externas</ListItem>
            <ListItem>Funcionamientos triviales</ListItem>
            <ListItem>Código "no testeable"</ListItem>
          </div>
        </Appear>
      </List>
    </Slide>
  );
};
