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
      <CustomHeading>Behaviour Driven Development</CustomHeading>
      <Appear>
        <div>
          <Text textColor="secondary" textAlign="left">
            El BDD presenta un framework que complementa el proceso de TDD con
            ideas del Desarrollo Guíado por Diseño (DDD).
          </Text>
          <Text textColor="secondary" textAlign="left">
            La idea principal es llevar el foco de los tests a lo que la
            aplicación debería hacer, y solo luego pensar en cómo hacerlo.
          </Text>
        </div>
      </Appear>
    </Slide>
  );
};
