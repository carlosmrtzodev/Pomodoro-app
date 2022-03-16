import React from "react";
import { Content, Text, Title } from "./src/styles/Styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  return (
    <>
      <Content>
        <Title>404: This page could not be found</Title>

        <Text>
          Go back <FontAwesomeIcon icon={faArrowRight} />
        </Text>
      </Content>
    </>
  );
};

export default NotFound;
