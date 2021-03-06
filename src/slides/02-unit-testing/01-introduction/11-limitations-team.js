import React from "react";

import { Appear, Slide, Text, List, ListItem } from "spectacle";
import { CustomHeading } from "../../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Limitaciones</CustomHeading>
      <Text textColor="quartenary">"...mis compañeros no hacen tests"</Text>
      <List>
        <Appear>
          <ListItem>
            Hay (malos) líderes técnicos que no priorizan los tests, por lo
            tanto no forma parte de la cultura del equipo.
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Hacer tests en medio de un ambiente que no incentiva testing no se
            siente productivo.
          </ListItem>
        </Appear>
        <Appear>
          <ListItem>
            Independientemente de estos factores externos, un buen desarrollador
            siempre busca mejorar la forma de entregar código de calidad.
          </ListItem>
        </Appear>
      </List>
    </Slide>
  );
};
