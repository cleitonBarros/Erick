import Flag from "../../assets/Emoji.svg";
import Logo from "../../assets/ErickArt.svg";
import * as S from "./style";

export function Footer() {
  return (
    <>
      <S.Container>
        <S.Footer>
          <a href="#">
            <img src={Logo} alt="Logo" />
          </a>
          <div className="divider"></div>
          <p>Copyright ©2023 Erick Alves - Todos os direitos reservados.</p>
          <span>
            Feito por <img src={Flag} alt="bandiera lgbt" />
            <a
              href="https://github.com/cleitonBarros"
              target="_blank"
              rel="noreferrer"
            >
              Cleiton Barros
            </a>
          </span>
        </S.Footer>
      </S.Container>
    </>
  );
}
