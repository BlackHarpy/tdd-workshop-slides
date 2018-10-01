import React from "react";

import { Text, S, Appear, Slide, CodePane } from "spectacle";
import { CustomHeading } from "../../../custom-style";

import { simpleModule, simpleTest } from "./code-examples/02-simple-test";

export default () => {
  return (
    <Slide>
      <CustomHeading margin="0 0 40px 0">Partes de un test</CustomHeading>
      <Appear>
        <div>
          <Text textAlign="left" textColor="quartenary" textSize={22}>
            <S type="italic">./sum.js</S>
          </Text>
          <CodePane textSize={30} lang="javascript" source={simpleModule} />
        </div>
      </Appear>
      <Appear>
        <div>
          <Text textAlign="left" textColor="quartenary" textSize={22}>
            <S type="italic">./sum.test.js</S>
          </Text>
          <CodePane textSize={30} lang="javascript" source={simpleTest} />
        </div>
      </Appear>
    </Slide>
  );
};
