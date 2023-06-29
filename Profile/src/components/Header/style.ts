import styled from "styled-components";

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.BLACK_200};
  z-index: +9999;
`;

export const Nav = styled.nav`
  height: 4.5rem;
  width: 80rem;
  max-width: 80rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.5rem;

  img {
    width: 9rem;
    max-width: 100%;
    height: auto;
  }

  > ul {
    display: none;
    opacity: 0;
    visibility: hidden;
  }

  &:has(> #input-checkout:checked) + .menu {
    top: 4.5rem;
    transform: translateY(0);
  }
  @media ${({ theme }) => theme.DEVICE.laptop} {
    height: 6rem;
    > ul {
      list-style: none;
      display: flex;
      opacity: 1;
      visibility: visible;
      align-items: center;
      justify-content: center;
      gap: 4rem;

      a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
      }
    }
  }
`;

export const Mobile = styled.nav`
  position: absolute;
  top: 4.5rem;
  left: 0;
  width: 100vw;
  background-color: red;
  transform: translateY(-500px);

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      padding: 2rem 2.5rem;

      a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
      }
    }
  }
`;
