import React from "react";

import {
  S,
  BlockQuote,
  Quote,
  Cite,
  Appear,
  Slide,
  List,
  ListItem
} from "spectacle";
import { CustomHeading } from "../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>TDD y Código Legacy</CustomHeading>
      <List>
        <Appear>
          <ListItem>
            Recordar que el código legacy, en sentido general, es código que{" "}
            <S type="italic">funciona</S>.
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Introducir tests unitarios debe ser un proceso gradual.
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Para nuevas funcionalidades, exigir tests acompañados del código.
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Aprovechar las oportunidades de refactor al revisitar
            funcionalidades.
          </ListItem>
        </Appear>
      </List>
    </Slide>
  );
};
