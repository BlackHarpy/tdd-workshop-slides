// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Heading,
  Slide,
  Text,
} from 'spectacle';

export const Title = () => {
  return (
    <Slide bgColor="primary" >
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
  )
};
