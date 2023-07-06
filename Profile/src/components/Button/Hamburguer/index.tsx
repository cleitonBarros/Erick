import { HTMLAttributes } from "react";

import * as S from "./style";

interface HamburgerProps {
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}
export function Hamburger({ onClick }: HamburgerProps) {
  return (
    <>
      <S.Container type="checkbox" id="input-checkout"></S.Container>

      <S.Label onClick={onClick} htmlFor="input-checkout">
        <span></span>
      </S.Label>
    </>
  );
}
