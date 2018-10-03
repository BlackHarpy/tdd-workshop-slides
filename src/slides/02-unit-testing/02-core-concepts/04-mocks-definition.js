import React from "react";

import { Appear, Slide, Text } from "spectacle";
import { CustomHeading } from "../../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Mocks</CustomHeading>
      <Appear>
        <Text textColor="secondary">
          Las unidades de código deberían ser probadas en aislamiento con el
          resto del sistema.
        </Text>
      </Appear>
      <Appear>
        <Text textColor="secondary">
          Los mocks son implementaciones "falsas" de elementos externos que nos
          ayudan a aislar lo que se va a probar.
        </Text>
      </Appear>
    </Slide>
  );
};
