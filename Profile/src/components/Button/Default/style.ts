import styled from "styled-components";

import { ButtonProps } from ".";

type ContainerProps = Pick<ButtonProps, "variant">;

export const Container = styled.a<ContainerProps>`
  padding: 1rem 2rem;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  border: none;
  border-radius: 10px;
  text-decoration: none;

  color: ${({ theme, variant }) =>
    variant === "primary" ? theme.COLORS.BLACK_300 : theme.COLORS.WHITE_200};
  font-size: 1rem;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
export const Label = styled.label``;
