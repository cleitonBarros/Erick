import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 80rem;
  padding: 2.5rem 1.5rem;

  @media ${({ theme }) => theme.DEVICE.laptop} {
    display: flex;
    align-items: center;
    padding: 9rem 2.5rem;
  }
`;
