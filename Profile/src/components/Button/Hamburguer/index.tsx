import * as S from "./style";

export function Hamburger() {
  return (
    <>
      <S.Container type="checkbox" id="input-checkout"></S.Container>
      <S.Label htmlFor="input-checkout">
        <span></span>
      </S.Label>
    </>
  );
}
