import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  padding-top: 4.5rem;
  @media ${({ theme }) => theme.DEVICE.laptop} {
    padding-top: 6rem;
  }
`;
