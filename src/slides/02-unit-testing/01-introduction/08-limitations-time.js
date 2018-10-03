import React from "react";

import { Appear, Slide, S, Text, List, ListItem } from "spectacle";
import { CustomHeading } from "../../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Limitaciones</CustomHeading>
      <Text textColor="quartenary">"no hay tiempo"</Text>
      <List>
        <Appear>
          <ListItem>
            Hacer tests <S type="italic">quizás</S> aumenta el tiempo de
            desarrollo
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>Pero asegurar calidad temprana minimiza riesgos</ListItem>
        </Appear>
        <Appear>
          <ListItem>Menor riesgo = Menos posibles bugs</ListItem>
        </Appear>
        <Appear>
          <ListItem>Los tests unitarios son una inversión a futuro </ListItem>
        </Appear>
      </List>
    </Slide>
  );
};
