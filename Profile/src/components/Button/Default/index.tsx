import { HTMLAttributes } from "react";

import * as S from "./style";

export interface ButtonProps extends HTMLAttributes<HTMLAnchorElement> {
  title: string;
  variant: "primary" | "secondary";
  icon?: JSX.Element;
  href?: string;
  target?: string;
}
export function Button({
  target,
  href,
  icon,
  title,
  variant,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <>
      <S.Label>
        <S.Container
          onClick={onClick}
          target={target}
          href={href}
          variant={variant}
          {...props}
        >
          {icon} {title}
        </S.Container>
      </S.Label>
    </>
  );
}
