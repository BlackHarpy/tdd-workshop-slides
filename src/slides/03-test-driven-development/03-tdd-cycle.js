import React from "react";

import {
  Image,
  S,
  Appear,
  Slide,
  Layout,
  Fill,
  Fit,
  List,
  ListItem
} from "spectacle";
import { CustomHeading } from "../../custom-style";

const image = require("./images/tdd-cycle.png");
export default () => {
  return (
    <Slide>
      <CustomHeading>El Ciclo del TDD</CustomHeading>
      <Layout>
        <Appear>
          <Image src={image} height={400} />
        </Appear>
        <Appear>
          <List
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}
          >
            <ListItem textSize={30}>
              <S type="bold" textColor="#dc0000">
                Red
              </S>
              : Test falla
            </ListItem>
            <ListItem textSize={30}>
              <S type="bold" textColor="#00cb42">
                Green
              </S>
              : Test pasa
            </ListItem>
            <ListItem textSize={30}>
              <S type="bold" textColor="#00b0ff">
                Refactor
              </S>
            </ListItem>
          </List>
        </Appear>
      </Layout>
    </Slide>
  );
};
