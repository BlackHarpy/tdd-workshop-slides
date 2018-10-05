import React from "react";

import { Text, S, Appear, Slide, List, ListItem } from "spectacle";
import { CustomHeading } from "../../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Señales de código "no testeable"</CustomHeading>
      <List>
        <Appear>
          <div>
            <ListItem>
              <S type="bold">Factores no deterministas:</S> Funciones
              aleatorias, basadas en horas y fechas.
            </ListItem>
            <ListItem>
              <S type="bold">Alto acoplamiento:</S> Grupos de
              código/clases/módulos muy dependiente de otros.
            </ListItem>
            <ListItem>
              <S type="bold">Efectos Secundarios:</S> Mutaciones de estados
              externos al scope de la unidad de código a probar.
            </ListItem>
            <ListItem>
              <S type="bold">Estados globales:</S> Funcionamiento dependiente de
              condiciones externas al scope.
            </ListItem>
          </div>
        </Appear>
      </List>
    </Slide>
  );
};
