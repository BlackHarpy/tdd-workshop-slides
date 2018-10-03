// Import React
import React from "react";

// Import Spectacle Core tags
import { S, Slide, Text, List, ListItem } from "spectacle";
import { CustomHeading } from "../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Herramientas a usar</CustomHeading>
      <List>
        <ListItem>
          <S type="bold">React</S> + <S type="bold">NodeJS</S> (Express)
        </ListItem>
        <ListItem>
          <S type="bold">Jest</S> - Test Runner y Assertions
        </ListItem>
        <ListItem>
          <S type="bold">Enzyme</S> - Testing Utilities
        </ListItem>
        <ListItem>
          <S type="bold">Chai</S> + <S type="bold">Chai HTTP</S> - Server
          Assertions
        </ListItem>
      </List>
    </Slide>
  );
};
