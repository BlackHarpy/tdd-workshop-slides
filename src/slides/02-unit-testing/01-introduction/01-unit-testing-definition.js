// Import React
import React from "react";

// Import Spectacle Core tags
import { Slide, Appear, BlockQuote, Quote, Cite } from "spectacle";
import { CustomHeading } from "../../../custom-style";

export default () => {
  return (
    <Slide>
      <CustomHeading>Definición de Prueba Unitaria</CustomHeading>
      <Appear>
        <BlockQuote>
          <Quote textSize={30} textColor="secondary">
            Es un método de pruebas de software en el cual unidades individuales
            de código, conjuntos de uno o más módulos unidos con controles de
            datos asociados, procedimientos de uso, y procedimientos
            operacionales son probados para determinar si son apropiados para su
            uso.
          </Quote>
          <Cite textColor="quartenary">
            Adam Kolawa y Dorota Huizinga (2007). Automated Defect Prevention:
            Best Practices in Software Managemeny. Obtenido de Wikipedia
          </Cite>
        </BlockQuote>
      </Appear>
      <Appear>
        <BlockQuote>
          <Quote textSize={30} textColor="secondary">
            "Una prueba unitario es una pieza automatizada de software que
            invoca una unidad de trabajo en el sistema y luego comprueba una
            única suposición sobre el comportamiento de esa unidad de trabajo"
          </Quote>
          <Cite textColor="quartenary">Roy Osherove</Cite>
        </BlockQuote>
      </Appear>
    </Slide>
  );
};
