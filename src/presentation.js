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
import Tools from "./slides/01-introduction/07-tools";

import PartITitle from "./slides/02-unit-testing/01-title";

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

import CoreConceptsTitle from "./slides/02-unit-testing/02-core-concepts/01-title";
import UnitTestParts from "./slides/02-unit-testing/02-core-concepts/02-unit-test-parts";
import UnitTestPartsDetail from "./slides/02-unit-testing/02-core-concepts/03-unit-test-parts-detail";
import MocksDefinition from "./slides/02-unit-testing/02-core-concepts/04-mocks-definition";
import MocksExamples from "./slides/02-unit-testing/02-core-concepts/05-mocks-examples";
import ModuleMockExample from "./slides/02-unit-testing/02-core-concepts/06-mocks-example-module";
import SpiesDefinition from "./slides/02-unit-testing/02-core-concepts/07-spies-definition";
import SpiesExample from "./slides/02-unit-testing/02-core-concepts/08-spies-example";
import DifferenceWithIntegrationTests from "./slides/02-unit-testing/02-core-concepts/09-difference-integration-tests";
import TestPyramid from "./slides/02-unit-testing/02-core-concepts/10-test-pyramid";

import BestPracticesTitle from "./slides/02-unit-testing/03-best-practices/01-title";
import WhatMakesAGoodTest from "./slides/02-unit-testing/03-best-practices/02-what-is-a-good-unit-test";
import WhatToTest from "./slides/02-unit-testing/03-best-practices/03-what-to-test";
import TestableCode from "./slides/02-unit-testing/03-best-practices/04-testable-code";
import NonTestableCodeSigns from "./slides/02-unit-testing/03-best-practices/05-non-testable-code-signs";
import WritingTestableCode from "./slides/02-unit-testing/03-best-practices/06-writing-testable-code";

import TDDTitle from "./slides/03-test-driven-development/01-title";
import TDDDefinition from "./slides/03-test-driven-development/02-tdd-definition";
import TDDCycle from "./slides/03-test-driven-development/03-tdd-cycle";
import TDDBenefits from "./slides/03-test-driven-development/04-tdd-benefits";
import BDDDefinition from "./slides/03-test-driven-development/05-bdd";
import TDDLegacyCode from "./slides/03-test-driven-development/06-tdd-legacy-code";
import TDDLegacyCodeConsiderations from "./slides/03-test-driven-development/07-tdd-legacy-considerations";
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
        {Tools()}

        {PartITitle()}

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

        {CoreConceptsTitle()}
        {UnitTestParts()}
        {UnitTestPartsDetail()}
        {MocksDefinition()}
        {MocksExamples()}
        {ModuleMockExample()}
        {SpiesDefinition()}
        {SpiesExample()}
        {DifferenceWithIntegrationTests()}
        {TestPyramid()}

        {BestPracticesTitle()}
        {WhatMakesAGoodTest()}
        {WhatToTest()}
        {TestableCode()}
        {NonTestableCodeSigns()}
        {WritingTestableCode()}

        {TDDTitle()}
        {TDDDefinition()}
        {TDDCycle()}
        {TDDBenefits()}
        {BDDDefinition()}
        {TDDLegacyCode()}
        {TDDLegacyCodeConsiderations()}
      </Deck>
    );
  }
}
