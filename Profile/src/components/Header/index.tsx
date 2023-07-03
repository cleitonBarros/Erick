import Logo from "../../assets/ErickArt.svg";
import { Button } from "../Button/Default";
import { Hamburger } from "../Button/Hamburguer";
import * as S from "./style";

import { CaretCircleLeft } from "@phosphor-icons/react";

export function Header() {
  const url = window.location;
  const path = url.pathname.split("/")[1];
  return (
    <>
      <S.Container>
        <S.Nav>
          {path === "videos" ? (
            <>
              <a href="/">
                <CaretCircleLeft className="voltar" color="#FB8351" size={72} />
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

          <Hamburger />
          <Button href="#Contact" title="Entre em contato" variant="primary" />
        </S.Nav>
      </S.Container>
    </>
  );
}
