import React from "react";

import { Text, S, Appear, Slide, CodePane } from "spectacle";
import { CustomHeading } from "../../../custom-style";

import { mockExample } from "./code-examples/05-mocks-examples";

export default () => {
  return (
    <Slide>
      <CustomHeading>Mocks</CustomHeading>
      <Appear>
        <div>
          <Text textAlign="left" textColor="quartenary" textSize={25}>
            <S type="italic">En Jest - Mocks de funciones</S>
          </Text>
          <CodePane textSize={30} lang="javascript" source={mockExample} />
        </div>
      </Appear>
    </Slide>
  );
};
