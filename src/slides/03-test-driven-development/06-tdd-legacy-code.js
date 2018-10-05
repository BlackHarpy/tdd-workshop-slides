import React from "react";

import {
  Text,
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
      <Appear>
        <div>
          <Text textColor="secondary" textAlign="left">
            Aunque el Desarrollo Guiado por Pruebas no es un concepto nuevo, es
            recientemente que se le está dando immportancia en el proceso de
            desarrollo de software.
          </Text>
          <Text textColor="secondary" textAlign="left">
            Introducir tests unitarios en una aplicación muy avanzada es
            posible, pero no puede tratarse como implementar tests en una
            aplicación que aún no termina su ciclo principal de desarrollo.
          </Text>
        </div>
      </Appear>
    </Slide>
  );
};
