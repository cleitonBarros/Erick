/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";

import Logo from "../../assets/ErickArt.svg";
import { ThemeContext } from "../../context/useContext";
import { UseWindowSize } from "../../hooks/useWidthSize";
import { Button } from "../Button/Default";
import { Hamburger } from "../Button/Hamburguer";
import { SideBar } from "../SideBar";
import * as S from "./style";

export const change = (sideBar: any, setSideBar: any, width: number) => {
  const chk: any = document?.getElementById("input-checkout");
  if (sideBar && width >= 1130) {
    setSideBar(!sideBar);
    chk.checked = false;
  }
};

export function Header() {
  const UseContext = useContext(ThemeContext);

  const [width] = UseWindowSize();
  change(UseContext?.sideBar, UseContext?.setSideBar, width);
  return (
    <S.Pai>
      <S.Container>
        <S.Nav>
          <a href="#">
            <img src={Logo} alt="imagem da logo" />
          </a>
          <ul>
            <li>
              <a href="#Inicio">Inicio</a>
            </li>
            <li>
              <a href="#Service">Serviços</a>
            </li>
            <li>
              <a href="#Galeria">Galeria</a>
            </li>
          </ul>
          <Hamburger onClick={UseContext?.showSideBar} />
          <Button href="#Contact" title="Entre em contato" variant="primary" />
        </S.Nav>
      </S.Container>
      <SideBar className={UseContext?.sideBar ? "show" : "hidden"} />
    </S.Pai>
  );
}
