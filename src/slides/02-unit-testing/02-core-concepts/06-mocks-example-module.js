import React from "react";

import { Text, S, Appear, Slide, CodePane } from "spectacle";
import { CustomHeading } from "../../../custom-style";

import { moduleMockExample } from "./code-examples/06-module-mock-example";

export default () => {
  return (
    <Slide>
      <CustomHeading>Mocks</CustomHeading>
      <Appear>
        <div>
          <Text textAlign="left" textColor="quartenary" textSize={20}>
            <S type="italic">En Jest - Mock de un módulo</S>
          </Text>
          <CodePane
            textSize={30}
            lang="javascript"
            source={moduleMockExample}
          />
        </div>
      </Appear>
    </Slide>
  );
};
