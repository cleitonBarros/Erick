import Logo from "../../assets/ErickArt.svg";
import { Button } from "../Button/Default";
import { Hamburger } from "../Button/Hamburguer";
import * as S from "./style";

export function Header() {
  return (
    <>
      <S.Container>
        <S.Nav>
          <a href="#">
            <img src={Logo} alt="imagem da logo" />
          </a>
          {/* <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Serviços</a>
          </li>
          <li>
            <a href="#">Galeria</a>
          </li>
        </ul> */}
          <Hamburger />
          {/* <Button title="Entre em contato" variant="primary" /> */}
        </S.Nav>
      </S.Container>
    </>
  );
}
