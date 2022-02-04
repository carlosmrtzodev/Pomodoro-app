import styled from "styled-components";
export const TitleContainer = styled.div`
  width: 100%;
`;

export const ButtonContainer = styled(TitleContainer)`
  width: 20%;
`;
export const Title = styled.div`
  font-size: 3.2rem;
  text-align: center;
  margin-bottom: 2rem;
`;

export const SubTitle = styled(Title)`
  font-size: 2.4rem;
`;
export const Label = styled.div`
  margin: 0;
  overflow: hidden;
  position: relative;

  &:before {
    left: 0;
    bottom: 0;
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
  }
`;
export const HoverEffect = styled.span`
  top: 0;
  left: -5%;
  z-index: 1;
  content: "";
  width: 120%;
  height: 100%;
  display: block;
  position: absolute;
  background-color: #457b9d;
  transition: transform 0.3s ease-out;
  transform: translateX(-100%) skew(-10deg);
  transition: -webkit-transform 0.3s ease-out;
`;
export const LabelText = styled.span`
  z-index: 1;
  display: block;
  font-size: 3.2rem;
  position: relative;
  padding: 1.5rem 4rem;
  background-color: transparent;

  &:after {
    right: 0;
    bottom: 0;
    content: "";
    width: 0.6rem;
    height: 0.6rem;
    display: block;
    position: absolute;
    background-color: #1d3557;
    transition: background-color 0.2s ease-in;
  }
`;
export const Button = styled.button`
  border: 0;
  color: #f1faee;
  width: 100%;
  display: block;
  cursor: pointer;
  padding: 0.5rem;
  font-weight: 400;
  font-size: 2.5rem;
  position: relative;
  text-transform: uppercase;
  background-color: transparent;

  &:after,
  &:before {
    left: 0;
    width: 99.4%;
    content: "";
    display: block;
    position: absolute;
    height: calc(50% - 0.4rem);
    background-color: transparent;
    border: 0.1rem solid #a8dadc;
  }

  &:before {
    top: 0;
    border-bottom: 0;
  }

  &:after {
    bottom: 0;
    border-top: 0;
  }

  &:hover .hover-effect {
    transform: translateX(0) skew(-10deg);
  }

  &:hover .label-text:after {
    background-color: #ece8e1;
  }
`;
export const Counter = styled.div``;
