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
  height: 100vh;
  gap: 2rem;

  ul {
    height: 300px;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    li {
      margin-bottom: 10px;
      padding: 0.5rem 2rem;
      border: 3px solid white;
      text-align: center;
      border-radius: 10px;
      transition: 0.5s;
      cursor: pointer;
      &:hover {
        transform: scale(1.2);
      }

      a {
        text-decoration: none;
        font-weight: 600;
        font-size: 1.4rem;
        color: white;
      }
    }
  }
  @media ${({ theme }) => theme.DEVICE.tablet} {
  }
`;
