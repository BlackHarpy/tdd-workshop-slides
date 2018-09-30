import React from "react";

import { Slide, Text, Appear } from "spectacle";
import { CustomHeading } from "../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>¿Por qué no hacemos tests?</CustomHeading>
      <Appear>
        <Text textColor="tertiary" textAlign="left">
          "...no hay tiempo"
        </Text>
      </Appear>
      <Appear>
        <Text textColor="tertiary" textAlign="left">
          "...no sé cómo"
        </Text>
      </Appear>
      <Appear>
        <Text textColor="tertiary" textAlign="left">
          "...es difícil/fastidioso"
        </Text>
      </Appear>
      <Appear>
        <Text textColor="tertiary" textAlign="left">
          "...mis compañeros no hacen tests"
        </Text>
      </Appear>
    </Slide>
  );
};
