// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text,
  List,
  ListItem
} from 'spectacle';

export const AboutMe = () => {
  return (
    <Slide>
      <Heading size={3} textColor="secondary">
      Sobre mí
      </Heading>
      <List>
        <ListItem> Web UI Developer - Globant</ListItem>
        <ListItem>I {"<"}3 JS</ListItem>
        <ListItem>I {"<"}3 Agile</ListItem>
      </List>
    </Slide>
  )
};
