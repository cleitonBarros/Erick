import { HTMLAttributes } from "react";

import * as S from "./style";

export interface ButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  title: string;
  variant: "primary" | "secondary";
}
export function Button({ title, variant, ...props }: ButtonProps) {
  return (
    <>
      <label>
        <S.Container variant={variant} {...props}>
          {title}
        </S.Container>
      </label>
    </>
  );
}
