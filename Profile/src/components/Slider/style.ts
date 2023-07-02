import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding-top: 4.5rem;

  img {
    width: 100%;
    height: auto;
  }

  @media ${({ theme }) => theme.DEVICE.laptop} {
    padding-top: 6rem;
  }
`;
