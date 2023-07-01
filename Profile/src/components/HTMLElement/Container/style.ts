import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 4.5rem;

  @media ${({ theme }) => theme.DEVICE.laptop} {
    padding-top: 6rem;
  }
`;
