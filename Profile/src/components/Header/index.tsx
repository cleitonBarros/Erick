/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react";

import Logo from "../../assets/ErickArt.svg";
import { ThemeContext } from "../../context/useContext";
import { UseWindowSize } from "../../hooks/useWidthSize";
import { Button } from "../Button/Default";
import { Hamburger } from "../Button/Hamburguer";
import { SideBar } from "../SideBar";
import * as S from "./style";

import { CaretCircleLeft } from "@phosphor-icons/react";

export const change = (sideBar: any, setSideBar: any, width: number) => {
  const chk: any = document?.getElementById("input-checkout");
  if (sideBar && width >= 1130) {
    setSideBar(!sideBar);
    chk.checked = false;
  }
};

export function Header() {
  const path = window.location.pathname.split("/")[1];

  const UseContext = useContext(ThemeContext);

  const [width] = UseWindowSize();
  change(UseContext?.sideBar, UseContext?.setSideBar, width);
  return (
    <S.Pai>
      <S.Container>
        <S.Nav>
          {path === "videos" ? (
            <>
              <a href="/">
                <CaretCircleLeft className="voltar" color="#FB8351" size={48} />
              </a>
              <a href="#">
                <img src={Logo} alt="imagem da logo" />
              </a>
            </>
          ) : (
            <>
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
            </>
          )}

          <Hamburger onClick={UseContext?.showSideBar} />
          <Button href="#Contact" title="Entre em contato" variant="primary" />
        </S.Nav>
      </S.Container>
      <SideBar className={UseContext?.sideBar ? "show" : "hidden"} />
    </S.Pai>
  );
}
