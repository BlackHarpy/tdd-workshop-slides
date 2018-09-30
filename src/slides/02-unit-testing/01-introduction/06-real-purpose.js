import React from "react";

import { Appear, Slide, Text } from "spectacle";
import { CustomHeading } from "../../../custom-style";

import {
  functionCode,
  classCode,
  moduleCode
} from "./code-examples/03-function-example";

export default () => {
  return (
    <Slide>
      <CustomHeading margin="0 0 40px 0" fit>
        Ok... ¿para qué sirven entonces?
      </CustomHeading>
      <Appear>
        <Text textColor="secondary">
          Los tests unitarios son una forma de asegurar que nuestras unidades de
          código funcionan correctamente, no sirven para examinar la integración
          de estas unidades.
        </Text>
      </Appear>
      <Appear>
        <Text textColor="secondary">
          Sin embargo, ayudan a asegurar la robustez de los componentes de
          software que diseñamos.
        </Text>
      </Appear>
    </Slide>
  );
};
