import React from "react";

import { Appear, Slide, List, ListItem, S } from "spectacle";
import { CustomHeading } from "../../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Partes de un test </CustomHeading>
      <CustomHeading>AAA Pattern</CustomHeading>
      <List>
        <Appear>
          <ListItem>
            <S type="bold">Arrange</S>: Configurar las condiciones previas y
            entradas.
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <S type="bold">Act</S>: Ejecutar la unidad a probar.
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            <S type="bold">Assert</S>: Comprobar los resultados
          </ListItem>
        </Appear>
      </List>
    </Slide>
  );
};
