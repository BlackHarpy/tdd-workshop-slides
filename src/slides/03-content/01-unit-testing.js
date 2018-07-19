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

export const UnitTestingContent = () => {
  return (
    <Slide>
      <Heading size={3} textColor="secondary">
      Contenido
      </Heading>
      <Heading size={5} textColor="tertiary">
        Parte I
      </Heading>
      <Text size={6} textColor="tertiary">
        Pruebas Unitarias
      </Text>
      <List>
        <ListItem>¿En qué consisten?</ListItem>
        <ListItem>Propósito y Beneficios</ListItem>
        <ListItem>Mocks y Spies</ListItem>
        <ListItem>Buenas prácticas</ListItem>
        <ListItem>Liberías para pruebas unitarias</ListItem>
      </List>
    </Slide>
  )
};
