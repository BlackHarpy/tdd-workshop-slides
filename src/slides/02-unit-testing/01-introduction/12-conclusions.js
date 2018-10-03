import React from "react";

import { Heading, Appear, Slide } from "spectacle";
import { CustomHeading } from "../../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading fit>En conclusión...</CustomHeading>
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
