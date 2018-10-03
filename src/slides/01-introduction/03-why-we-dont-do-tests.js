import React from "react";

import { Slide, Text, Appear } from "spectacle";
import { CustomHeading } from "../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>¿Por qué no hacemos tests?</CustomHeading>
      <Appear>
        <Text textColor="secondary" textAlign="left">
          "...no hay tiempo"
        </Text>
      </Appear>
      <Appear>
        <Text textColor="secondary" textAlign="left">
          "...no sé cómo"
        </Text>
      </Appear>
      <Appear>
        <Text textColor="secondary" textAlign="left">
          "...es difícil/fastidioso"
        </Text>
      </Appear>
      <Appear>
        <Text textColor="secondary" textAlign="left">
          "...mis compañeros no hacen tests"
        </Text>
      </Appear>
    </Slide>
  );
};
