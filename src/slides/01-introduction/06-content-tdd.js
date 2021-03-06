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
        Parte II
      </Heading>
      <Text size={6} textColor="tertiary">
        Desarrollo Guíado por Pruebas (TDD)
      </Text>
      <List>
        <ListItem>Introducción</ListItem>
        <ListItem>Ciclo del TDD</ListItem>
        <ListItem>Beneficios y Limitaciones</ListItem>
        <ListItem>TDD y BDD</ListItem>
        <ListItem>TDD y Legacy Code</ListItem>
      </List>
    </Slide>
  );
};
