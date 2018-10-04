import React from "react";

import { Text, S, Appear, Slide, List, ListItem } from "spectacle";
import { CustomHeading } from "../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Escribiendo código apto para tests</CustomHeading>
      <Appear>
        <Text textColor="secondary" textAlign="left">
          Encontrar código no testeable son señales de problemas de diseño que
          se necesita reconstruir o refactorizar. Algunas técnicas generales
          para escribir código apto para tests son:
        </Text>
      </Appear>
      <List>
        <Appear>
          <div>
            <ListItem>
              Usar wrappers para funcionalidades no deterministas.
            </ListItem>
            <ListItem>Evitar uso de estados globales.</ListItem>
            <ListItem>Preferir funciones puras.</ListItem>
            <ListItem>Diseñar con bajo acoplamiento.</ListItem>
            <ListItem>
              Cumplir principios de diseño: SOLID, DRY, KISS, etc.
            </ListItem>
          </div>
        </Appear>
      </List>
    </Slide>
  );
};
