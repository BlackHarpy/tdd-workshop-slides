// Import React
import React from "react";

// Import Spectacle Core tags
import { Appear, Slide, Text, CodePane } from "spectacle";
import { CustomHeading } from "../../../custom-style";

import {
  functionCode,
  classCode,
  moduleCode
} from "./code-examples/03-function-example";

export default () => {
  return (
    <Slide align="center flex-start">
      <CustomHeading>¿Qué es una unidad de código?</CustomHeading>
      <Appear>
        <div>
          <Text textColor="secondary" textAlign="left">
            ¿Una función?
          </Text>
          <CodePane textSize={30} lang="javascript" source={functionCode} />
        </div>
      </Appear>
      <Appear>
        <div>
          <Text textColor="secondary" textAlign="left">
            ¿Una clase?
          </Text>
          <CodePane textSize={30} lang="javascript" source={classCode} />
        </div>
      </Appear>
      <Appear>
        <div>
          <Text textColor="secondary" textAlign="left">
            ¿Un modulo?
          </Text>
          <CodePane textSize={30} lang="javascript" source={moduleCode} />
        </div>
      </Appear>
      <Appear>
        <Text textColor="quartenary" textSize={30}>
          ...al final depende de la situación, lo que haga sentido para el
          equipo y el proyecto a probar
        </Text>
      </Appear>
    </Slide>
  );
};
