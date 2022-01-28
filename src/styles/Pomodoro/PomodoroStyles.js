import styled from "styled-components";

const sharedStyle = `
  display: flex;
  font-size: 1.5em;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  ${sharedStyle}
  margin-bottom: .5em;
`;
export const Content = styled.div`
  width: 300px;
  ${sharedStyle}
  height: 300px;
  border-radius: 100%;
  flex-direction: column;
  background-color: #457b9d;
  border: solid 0.5rem #a8dadc;
`;

export const Message = styled.div`
  min-height: 1.3em;
  margin-bottom: 0.5em;
`;

export const Timer = styled.div`
  font-size: 2em;
  font-weight: 700;
`;
