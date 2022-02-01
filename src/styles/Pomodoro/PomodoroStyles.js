import styled from "styled-components";

const sharedStyle = `
  display: flex;
  font-size: 3rem;
  text-align: center;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.div`
  ${sharedStyle}
  margin-bottom: 4rem;
`;
export const Message = styled.div`
  min-height: 2rem;
`;
export const Content = styled.div`
  width: 30rem;
  ${sharedStyle}
  height: 30rem;
  border-radius: 100%;
  flex-direction: column;
  background-color: #457b9d;
  border: solid 0.2rem #a8dadc;
`;
export const Timer = styled.div`
  font-size: 3rem;
  font-weight: 700;
`;
