import React from "react";

import { Text, S, Appear, Slide, CodePane } from "spectacle";
import { CustomHeading } from "../../../custom-style";

import { spiesExample } from "./code-examples/08-spies-example";

export default () => {
  return (
    <Slide>
      <CustomHeading>Spies</CustomHeading>
      <Appear>
        <div>
          <Text textAlign="left" textColor="quartenary" textSize={25}>
            <S type="italic">En Jest - Spies de funciones</S>
          </Text>
          <CodePane textSize={30} lang="javascript" source={spiesExample} />
        </div>
      </Appear>
    </Slide>
  );
};
