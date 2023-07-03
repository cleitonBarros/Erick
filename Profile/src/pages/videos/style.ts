import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  margin-top: 2.5rem;
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
  @media ${({ theme }) => theme.DEVICE.min} {
    video {
      padding: 2rem;
    }
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    height: 100vh;

    video {
      padding: 4rem;
    }
  }
  @media ${({ theme }) => theme.DEVICE.laptop} {
    margin-bottom: 0;
    height: 100vh;

    video {
      padding: 6rem;
    }
  }
`;
