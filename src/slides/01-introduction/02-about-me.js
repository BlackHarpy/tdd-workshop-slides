// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Text, List, ListItem } from "spectacle";
import { CustomHeading } from "../../custom-style";

export const AboutMe = () => {
  return (
    <Slide>
      <CustomHeading>Sobre mí</CustomHeading>
      <List>
        <ListItem> Web UI Developer - Globant</ListItem>
        <ListItem>I {"<"}3 JS</ListItem>
        <ListItem>I {"<"}3 Agile</ListItem>
      </List>
    </Slide>
  );
};
