import styled from "styled-components";
export const Container = styled.div`
  gap: 1rem;
  width: 25%;
  height: auto;
  padding: 2rem;
  display: flex;
  border-radius: 1rem;
  flex-direction: column;
  backdrop-filter: blur(0rem);
  background: rgba(239, 35, 60, 0.3);
  -webkit-backdrop-filter: blur(0rem);
  border: 0.1rem solid rgba(217, 4, 41, 0.18);

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    width: 50%;
  }
`;

export const TitleContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  color: #edf2f4;
  font-size: 3.2rem;
`;

export const Text = styled.h1`
  color: #edf2f4;
  font-weight: 300;
  font-size: 1.6rem;
`;

export const PomodoroContainer = styled(TitleContainer)`
  color: #edf2f4;
  font-weight: 700;
  font-size: 6.4rem;
`;

export const CounterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InfoContainer = styled(CounterContainer)`
  gap: 2rem;
  left: 2rem;
  bottom: 2rem;
  position: absolute;
`;

export const TextAlt = styled(Title)`
  font-size: 2rem;
`;
