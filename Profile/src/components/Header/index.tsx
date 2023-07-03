import Logo from "../../assets/ErickArt.svg";
import { Button } from "../Button/Default";
import { Hamburger } from "../Button/Hamburguer";
import * as S from "./style";

export function Header() {
  const url = window.location;
  const path = url.pathname.split("/")[1];
  return (
    <>
      <S.Container>
        <S.Nav>
          <a href="#">
            <img src={Logo} alt="imagem da logo" />
          </a>
          <ul>
            <li>
              <a href={path === "videos" ? "/" : "#Inicio"}>Inicio</a>
            </li>
            <li>
              <a href={path === "videos" ? "/" : "#Service"}>Serviços</a>
            </li>
            <li>
              <a href={path === "videos" ? "/" : "#Galeria"}>Galeria</a>
            </li>
          </ul>
          <Hamburger />
          <Button href="#Contact" title="Entre em contato" variant="primary" />
        </S.Nav>
      </S.Container>
    </>
  );
}
