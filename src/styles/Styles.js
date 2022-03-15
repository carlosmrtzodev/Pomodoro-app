import styled, { keyframes } from "styled-components";
import fadeIn from "react-animations/lib/fade-in";

const fadeInAnimation = keyframes`${fadeIn}`;
export const Container = styled.div`
  gap: 4rem;
  width: 75%;
  margin: auto;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  animation: 3s ${fadeInAnimation};
`;

export const Content = styled.div`
  gap: 2rem;
  display: flex;
  padding: 4rem;
  border-radius: 2.5rem;
  flex-direction: column;
  background-color: #333333;
  box-shadow: -10px 3px 50px -2px rgba(0, 0, 0, 0.47);

  @media screen and (max-width: 480px) {
    gap: 1.5rem;
  }
`;

export const Flex = styled.div`
  gap: 1rem;
  display: flex;
  align-items: center;
`;

export const Center = styled(Flex)`
  justify-content: center;
`;

export const Title = styled.h1`
  color: #fcfaf9;
  font-size: 3.2rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 2.8rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2.4rem;
  }
`;

export const Timer = styled.h2`
  color: #fcfaf9;
  font-size: 2.8rem;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 2.4rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Text = styled.p`
  color: #fcfaf9;
  font-size: 2.4rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Small = styled(Text)`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

export const Link = styled.a`
  color: #fcfaf9;
  transition: all ease 0.3s;

  &:hover {
    color: #48e5c2;
  }
`;
export const Icons = styled.div`
  color: #48e5c2;
  font-size: 2.4rem;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

export const Credits = styled.div`
  left: 4rem;
  bottom: 4rem;
  position: fixed;

  @media screen and (max-width: 768px) {
    position: static;
  }
`;
