import styled from "styled-components";

export const Pai = styled.div`
  position: relative;
`;

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.COLORS.BLACK_200};
  z-index: 300;
`;

export const Nav = styled.nav`
  height: 4.5rem;
  width: 80rem;
  max-width: 80rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.5rem;
  z-index: 300;
  .voltar {
    cursor: pointer;
    &:hover {
      filter: brightness(1.2);
    }
  }

  > label:has(a) {
    display: none;
    visibility: hidden;
    opacity: 0;
  }
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
    > label:has(a) {
      display: block;
      visibility: visible;
      opacity: 1;
    }
    > ul {
      list-style: none;
      display: flex;
      opacity: 1;
      visibility: visible;
      align-items: center;
      justify-content: center;
      gap: 4rem;
      margin: 0;
      padding: 0;
      a {
        text-decoration: none;
        font-size: 1rem;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.WHITE_100};
      }
    }
  }
`;

export const Mobile = styled.nav``;
