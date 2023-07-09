import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4.5rem;
  background-color: #333;
  position: fixed;
  height: 900px;
  min-height: 100vh;
  top: 0px;
  left: 0px;
  width: 100%;
  transform: translateY(-100%);
  transition: transform 0.8s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;

  &.show {
    transform: translateY(0);
  }
  &.hidden {
    transform: translateY(100%);
  }

  @media ${({ theme }) => theme.DEVICE.laptop} {
    display: none;
    visibility: hidDen;
    opacity: 0;
  }
`;

export const Content = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 90vh;
  gap: 2rem;

  ul {
    height: 300px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    li {
      transition: 0.5s;
      cursor: pointer;

      a {
        text-decoration: none;
        font-weight: bold;
        font-size: clamp(1.2rem, 1.6rem, 2rem);
        color: white;
        position: relative;

        &:after {
          position: absolute;
          content: "";
          display: block;
          border-radius: 10px;
          width: 0;
          bottom: -5px;
          height: 6px;
          background-color: ${({ theme }) => theme.COLORS.ORANGE};
          transition: width 0.2s ease-in;
        }
        &.active:hover:after,
        &:hover:after {
          width: 100%;
        }
      }
    }
  }
  @media ${({ theme }) => theme.DEVICE.tablet} {
  }
`;
