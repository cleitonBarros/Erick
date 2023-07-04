import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  max-width: 90rem;
  min-height: 100vh;
  display: block;
  margin: 0 auto;
  padding: 0 1.5rem;

  @media ${({ theme }) => theme.DEVICE.laptop} {
    padding: 0 5rem;
  }
`;

export const Biography = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 2.5rem;

  > div:has(img, h2) {
    max-width: 32rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;

    img {
      width: 100%;
      height: auto;
      z-index: 2;
    }

    h2 {
      letter-spacing: 3px;
      font-weight: 700;
      line-height: 2rem;
    }
    p {
      font-weight: 500;
      line-height: 1.5rem;
    }
  }

  @media ${({ theme }) => theme.DEVICE.laptop} {
    position: relative;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 68.5rem;

    > div:has(img) {
      width: 32rem;
      height: 32rem;

      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 20%;
        background-color: ${({ theme }) => theme.COLORS.ORANGE};
      }
      &::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 10%;
        background-color: ${({ theme }) => theme.COLORS.BLACK_200};
      }
    }
    > div:has(h2) {
      width: 20rem;

      h2 {
        font-size: 2.5rem;
        line-height: 1;
      }
    }
  }
`;

export const Services = styled.div`
  padding-top: 4rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  @media ${({ theme }) => theme.DEVICE.desktop} {
    gap: 2rem;
  }
`;

export const gallery = styled.div`
  column-count: 1;
  column-gap: 0.875rem;

  img {
    width: 100%;
    margin-bottom: 0.875rem;
    transition: 0.5s;

    &:hover {
      transform: scale(1.05);
    }
  }
  @media ${({ theme }) => theme.DEVICE.min} {
    column-count: 2;
  }
  @media ${({ theme }) => theme.DEVICE.mobile} {
    column-count: 3;
  }
  @media ${({ theme }) => theme.DEVICE.laptop} {
    column-count: 4;
    column-gap: 1rem;
  }
`;
