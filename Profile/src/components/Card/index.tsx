import { HTMLAttributes } from "react";

import * as S from "./style";

export interface cardProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  title: string;
  icon?: JSX.Element;
}
export function Card({ text, title, icon }: cardProps) {
  return (
    <>
      <S.Container>
        {icon}
        <h3>{title}</h3>
        <p>{text}</p>
      </S.Container>
    </>
  );
}
