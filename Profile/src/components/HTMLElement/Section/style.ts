import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  max-width: 80rem;
  min-height: 100vh;
  padding: 2.5rem 1.5rem;

  @media ${({ theme }) => theme.DEVICE.laptop} {
    display: flex;
    align-items: center;
    padding: 3.75rem 2.5rem;
  }
`;
