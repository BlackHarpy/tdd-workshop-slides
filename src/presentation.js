// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide
} from "spectacle";

import { Title } from "./slides/01-introduction/01-title";
import UnitTestingContent from "./slides/01-introduction/05-content-unit-testing";
import TDD from "./slides/01-introduction/06-content-tdd";
import { AboutMe } from "./slides/01-introduction/02-about-me";
import WhyWeDontDoTests from "./slides/01-introduction/03-why-we-dont-do-tests";
import WorkshopGoal from "./slides/01-introduction/04-workshop-goal";
import UnitTestingDefinition from "./slides/02-unit-testing/01-introduction/01-unit-testing-definition";
import DefinitionSimilarites from "./slides/02-unit-testing/01-introduction/02-unit-test-def-similarites";
import UnitCode from "./slides/02-unit-testing/01-introduction/03-code-unit";
import UnitTestPurpose from "./slides/02-unit-testing/01-introduction/04-purpose-title";
import NotBugsDisclaimer from "./slides/02-unit-testing/01-introduction/05-not-bugs";
import RealPurpose from "./slides/02-unit-testing/01-introduction/06-real-purpose";
import UnitTestingBenefits from "./slides/02-unit-testing/01-introduction/07-benefits";
import UnitTestsLimitations from "./slides/02-unit-testing/01-introduction/08-limitations-time";
import UnitTestsLimitationsKnowledge from "./slides/02-unit-testing/01-introduction/09-limitations-knowledge";
import UnitTestsLimitationsDifficulty from "./slides/02-unit-testing/01-introduction/10-limitations-difficulty";
import UnitTestsLimitationsTeam from "./slides/02-unit-testing/01-introduction/11-limitations-team";
import UnitTestIntroConclusions from "./slides/02-unit-testing/01-introduction/12-conclusions";
// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#191A1C",
    secondary: "#71D0CE",
    tertiary: "#19C656",
    quartenary: "#2ea08c"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        theme={theme}
        bgColor="primary"
        progress="bar"
      >
        {Title()}
        {AboutMe()}
        {WhyWeDontDoTests()}
        {WorkshopGoal()}
        {UnitTestingContent()}
        {TDD()}
        {UnitTestingDefinition()}
        {DefinitionSimilarites()}
        {UnitCode()}
        {UnitTestPurpose()}
        {NotBugsDisclaimer()}
        {RealPurpose()}
        {UnitTestingBenefits()}
        {UnitTestsLimitations()}
        {UnitTestsLimitationsKnowledge()}
        {UnitTestsLimitationsDifficulty()}
        {UnitTestsLimitationsTeam()}
        {UnitTestIntroConclusions()}
      </Deck>
    );
  }
}
