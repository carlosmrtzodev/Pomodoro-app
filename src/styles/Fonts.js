import styled from "styled-components";
export const Title = styled.h1`
  color: #edf2f4;
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
  color: #edf2f4;
  font-size: 2.4rem;
  font-weight: bold;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const Text = styled.p`
  color: #edf2f4;
  font-size: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;
export const TextLink = styled.a`
  color: #edf2f4;
  font-size: 2rem;
  font-weight: bold;
  transition: all ease 0.3s;

  &:hover {
    color: #48e5c2;
  }
`;
export const Icons = styled.div`
  color: #48e5c2;
  font-size: 2rem;

  @media screen and (max-width: 480px) {
    font-size: 1.6rem;
  }
`;
