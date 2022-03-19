import { Link } from "react-router-dom";
import { Icons, TextLink, Title } from "./styles/Fonts";
import { Container, Content, Flex } from "./styles/Containers";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NotFound = () => {
  return (
    <>
      <Container>
        <Content>
          <Title>404: This page could not be found</Title>

          <Link to="/">
            <TextLink>
              <Flex>
                <Icons>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Icons>
                Go back
              </Flex>
            </TextLink>
          </Link>
        </Content>
      </Container>
    </>
  );
};

export default NotFound;
