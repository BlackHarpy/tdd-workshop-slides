// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#191A1C',
    secondary: '#19C656',
    tertiary: '#71D0CE',
    quartenary: '#19C656',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['slide']}
        transitionDuration={500}
        theme={theme}
        bgColor="primary"
        progress="bar"
      >
        <Slide bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
          Test Driven Development
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Guía básica para Desarrollo Guíado por Pruebas
          </Text>
          <br />
          <br />
          <br />
          <Text textColor="tertiary" textSize={30}>
            Un workshop por María Castro
          </Text>
         
          <Text textColor="tertiary" textSize={25}>
            @BlackHarpy
          </Text>
        </Slide>
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
        <Slide>
          <Heading size={3} textColor="secondary">
          Contenido
          </Heading>
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
        <Slide transition={['fade']} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>
      </Deck>
    );
  }
}
