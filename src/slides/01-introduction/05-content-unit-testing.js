// Import React
import React from "react";

// Import Spectacle Core tags
import { Heading, Slide, Text, List, ListItem } from "spectacle";
import { CustomHeading } from "../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Contenido</CustomHeading>
      <Heading size={5} textColor="tertiary">
        Parte I
      </Heading>
      <Text size={6} textColor="tertiary">
        Pruebas Unitarias
      </Text>
      <List>
        <ListItem>¿En qué consisten?</ListItem>
        <ListItem>Propósito y Beneficios</ListItem>
        <ListItem>Conceptos Básicos</ListItem>
        <ListItem>Buenas prácticas</ListItem>
        <ListItem>Liberías para pruebas unitarias</ListItem>
      </List>
    </Slide>
  );
};
