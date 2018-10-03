// Import React
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faLaptopCode,
  faAt,
  faGlobeAmericas,
  faFlag,
  faBuilding,
  faBook,
  faLaptop,
  faMinus,
  faServer,
  faPaintBrush,
  faGamepad,
  faShoePrints
} from "@fortawesome/free-solid-svg-icons";

import {
  faAngular,
  faReact,
  faVuejs,
  faNodeJs,
  faPython,
  faPhp
} from "@fortawesome/free-brands-svg-icons";

// Import Spectacle Core tags
import { Slide, S, Text } from "spectacle";
import { CustomHeading } from "../../custom-style";

export const AboutMe = () => {
  return (
    <Slide>
      <CustomHeading>Sobre mí</CustomHeading>
      <Text textColor="secondary" textAlign="left" style={{ marginBottom: 30 }}>
        <FontAwesomeIcon icon={faGlobeAmericas} color="#76e8ff" /> Venezuela
        {"  "}
        <FontAwesomeIcon icon={faFlag} color="#4f87ff" /> Venezolana-Chilena
      </Text>

      <Text textColor="secondary" textAlign="left" style={{ marginBottom: 10 }}>
        <FontAwesomeIcon icon={faLaptopCode} color="#19C656" /> Web UI Developer
        {"  "}
        <FontAwesomeIcon icon={faAt} color="#19C656" />{" "}
        <S type="bold">Globant</S>
      </Text>
      <Text textColor="secondary" textAlign="left" style={{ marginBottom: 30 }}>
        <FontAwesomeIcon icon={faBuilding} color="#19C656" />{" "}
        <S type="bold">SimpliRoute</S> (CH), <S type="bold">Xpectra</S> (VE)
      </Text>
      <Text textColor="secondary" textAlign="left" style={{ marginBottom: 30 }}>
        <FontAwesomeIcon icon={faLaptop} size="md" color="#ffd154" />
        &nbsp;
        <FontAwesomeIcon icon={faMinus} size="sm" color="#71D0CE" /> &nbsp;
        <FontAwesomeIcon icon={faAngular} size="md" color="#f10026" /> &nbsp;
        <FontAwesomeIcon icon={faReact} size="md" color="#00dbff" /> &nbsp;
        <FontAwesomeIcon icon={faVuejs} size="md" color="#00bc7e" />{" "}
        |&nbsp;&nbsp;
        <FontAwesomeIcon icon={faServer} size="md" color="#ffd154" />
        &nbsp;
        <FontAwesomeIcon icon={faMinus} size="sm" color="#71D0CE" /> &nbsp;
        <FontAwesomeIcon icon={faNodeJs} size="md" color="#6dc000" /> &nbsp;
        <FontAwesomeIcon icon={faPython} size="md" color="#ffdb11" /> &nbsp;
        <FontAwesomeIcon icon={faPhp} size="md" color="#687ebc" />
      </Text>
      <Text textColor="secondary" textAlign="left" style={{ marginBottom: 30 }}>
        <FontAwesomeIcon icon={faBook} color="#4073ff" /> Aprendiendo sobre{" "}
        <S type="bold">Metodologías Ágiles</S>
      </Text>
      <Text textColor="secondary" textAlign="left">
        <FontAwesomeIcon icon={faHeart} color="#a530ff" /> &nbsp;
        <FontAwesomeIcon icon={faMinus} size="sm" color="#ff4b9c" /> &nbsp;
        <FontAwesomeIcon icon={faPaintBrush} size="md" color="#6dc000" /> &nbsp;
        <FontAwesomeIcon icon={faGamepad} size="md" color="#687ebc" /> &nbsp;
        <FontAwesomeIcon icon={faShoePrints} size="md" color="#ff9676" />
      </Text>
    </Slide>
  );
};
