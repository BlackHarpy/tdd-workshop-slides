import React from "react";

import { Text, S, Appear, Slide, Code } from "spectacle";
import { CustomHeading } from "../../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Spies</CustomHeading>
      <Appear>
        <Text textColor="secondary">
          A veces se necesita información sobre si las llamadas que se hacen en
          un método que se está probando reciben los parámetros correctos.
        </Text>
      </Appear>
      <Appear>
        <Text textColor="secondary">
          Los mocks creados con Jest son también spies, así que poseen
          información sobre sus llamadas.
        </Text>
      </Appear>
    </Slide>
  );
};
