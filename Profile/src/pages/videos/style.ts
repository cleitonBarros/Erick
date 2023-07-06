import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin-top: 2.5rem;
  @media ${({ theme }) => theme.DEVICE.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const Box = styled.div`
  position: relative;
  filter: grayscale(1);
  width: 100%;
  height: 100vh;
  margin-bottom: 3rem;
  cursor: pointer;

  &:hover {
    filter: grayscale(0);
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    height: 100vh;

    video {
      padding: 2rem;
    }
  }
  @media ${({ theme }) => theme.DEVICE.laptop} {
    width: 50%;
    margin-bottom: 0;

    video {
      padding: 1rem 0;
    }
  }
`;
