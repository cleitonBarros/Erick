import { HTMLAttributes } from "react";

import * as S from "./style";

export interface ButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  title: string;
  variant: "primary" | "secondary";
  icon?: JSX.Element;
  href?: string;
}
export function Button({ href, icon, title, variant, ...props }: ButtonProps) {
  return (
    <>
      <S.Label>
        <S.Container href={href} variant={variant} {...props}>
          {icon} {title}
        </S.Container>
      </S.Label>
    </>
  );
}
