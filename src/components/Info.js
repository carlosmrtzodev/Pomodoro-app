import React from "react";
import { InfoContainer, TextAlt } from "../styles/Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Info() {
  return (
    <InfoContainer>
      <FontAwesomeIcon icon={faGithub} size="5x" className="icon" />
      <TextAlt>Created by carlosmrtzodev</TextAlt>
    </InfoContainer>
  );
}

export default Info;
