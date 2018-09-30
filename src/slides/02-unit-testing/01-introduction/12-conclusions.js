import React from "react";

import { Heading, Appear, Slide } from "spectacle";
import { CustomHeading } from "../../../custom-style";

import {
  functionCode,
  classCode,
  moduleCode
} from "./code-examples/03-function-example";

export default () => {
  return (
    <Slide>
      <CustomHeading margin="0 0 50px 0" fit>
        En conclusión...
      </CustomHeading>
      <Appear>
        <div>
          <Heading textColor="secondary" fit>
            Los tests ayudan a hacer software
          </Heading>
          <Heading textColor="secondary">de calidad</Heading>
        </div>
      </Appear>
      <Appear>
        <Heading textColor="quartenary" fit>
          (Y no hay excusa para no entregar software de calidad)
        </Heading>
      </Appear>
    </Slide>
  );
};
