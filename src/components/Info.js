import React from "react";
import { InfoContainer, TextAlt } from "../styles/Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Info() {
  return (
    <InfoContainer>
      <FontAwesomeIcon icon={faGithub} size="5x" spin className="icon" />
      <TextAlt>Created by carlosmrtzo8</TextAlt>
    </InfoContainer>
  );
}

export default Info;
