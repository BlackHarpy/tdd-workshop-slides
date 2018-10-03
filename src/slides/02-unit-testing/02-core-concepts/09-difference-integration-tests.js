import React from "react";

import { Text, Appear, Slide } from "spectacle";
import { CustomHeading } from "../../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Tests unitarios y otros tipos de pruebas</CustomHeading>
      <Appear>
        <Text textColor="secondary">
          Los tests unitarios prueban código en aislamiento. Así que no son
          útiles para probar interacciones entre módulos, bases de datos,
          sistemas de archivos y otros elementos que formen parte del
          funcionamiento de la aplicación.
        </Text>
      </Appear>
      <Appear>
        <Text textColor="secondary">
          Para åestos comportamientos de más alto nivel existen otros tipos de
          pruebas distintas a los tests unitarios.
        </Text>
      </Appear>
    </Slide>
  );
};
