import styled from "styled-components";

export const Container = styled.input`
  display: none;

  &:checked + label span {
    background: transparent;
  }
  &:checked + label span:after {
    top: -39px;
    transform: rotate(-135deg);
  }

  &:checked + label span:before {
    top: -15px;
    transform: rotate(135deg);
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 4rem;
  height: 4rem;

  border: none;
  border-radius: 50%;
  cursor: pointer;

  & span:before,
  span:after,
  span {
    background-color: ${({ theme }) => theme.COLORS.ORANGE};
    width: 2rem;
    height: 3px;
    border-radius: 2px;
    transition: 0.2s;
  }
  & span:before,
  span:after {
    content: "";
    position: relative;
    display: inline-block;
  }

  & span:before {
    top: -23px;
  }
  & span:after {
    top: -32px;
  }
`;
