import { Center, Credits, Flex, Icons, Link, Small } from "../styles/Styles";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Info() {
  return (
    <>
      <Center>
        <Credits>
          <Flex>
            <Icons>
              <FontAwesomeIcon icon={faGithub} />
            </Icons>

            <Small>
              <Link
                href="https://github.com/carlosmrtzodev"
                target="_blank"
                rel="noopener noreferrer"
              >
                Designed and Built by: carlosmrtzodev
              </Link>
            </Small>
          </Flex>
        </Credits>
      </Center>
    </>
  );
}

export default Info;
