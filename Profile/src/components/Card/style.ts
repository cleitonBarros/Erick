import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.WHITE_200};
  padding: 2rem 1.5rem;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.08);
  border-bottom: 0.35rem solid ${({ theme }) => theme.COLORS.ORANGE};
  border-radius: 0.25rem 0.25rem 0 0;
  text-align: center;
  height: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  flex-grow: 1;
  flex-basis: 350px;

  transition: 0.5s ease-in-out;
  cursor: pointer;

  h3 {
    font-size: 2rem;
  }

  &:hover {
    transform: translateY(-15px);
  }

  @media ${({ theme }) => theme.DEVICE.laptop} {
    &:hover {
      transform: translateY(-50px);
    }
  }
`;
