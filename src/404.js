import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
  Container,
  Content,
  Flex,
  Icons,
  TextLink,
  Title,
} from "./styles/Styles";

const NotFound = () => {
  return (
    <>
      <Container>
        <Content>
          <Title>404: This page could not be found</Title>

          <Link to="/">
            <TextLink>
              <Flex>
                Go back{" "}
                <Icons>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Icons>
              </Flex>
            </TextLink>
          </Link>
        </Content>
      </Container>
    </>
  );
};

export default NotFound;
