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
      <CustomHeading>Definición de TDD</CustomHeading>
      <Appear>
        <Text textColor="secondary" textAlign="left">
          Es un proceso de desarrollo de software, centrado por dos reglas
          básicas:
        </Text>
      </Appear>
      <Appear>
        <BlockQuote>
          <Quote textSize={30} textColor="secondary">
            <List ordered>
              <ListItem>
                No escribir código al menos que haya un test automatizado que
                falle.
              </ListItem>
              <ListItem>Eliminar duplicación</ListItem>
            </List>
          </Quote>
          <Cite textColor="quartenary">
            Kent Beck (2002). Test-Driven Development: By Example
          </Cite>
        </BlockQuote>
      </Appear>
    </Slide>
  );
};
