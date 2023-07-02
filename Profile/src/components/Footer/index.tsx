import Flag from "../../assets/Emoji.svg";
import Logo from "../../assets/ErickArt.svg";
import { Button } from "../Button/Default";
import * as S from "./style";

import {
  At,
  InstagramLogo,
  TwitterLogo,
  WhatsappLogo
} from "@phosphor-icons/react";

export function Footer() {
  return (
    <>
      <S.Contact id="Contact">
        <S.Content>
          <div className="wpp">
            <h2>Me contate</h2>
            <p>
              Entre em contato comigo para fazer um orçamento ou para sanar
              algum duvida que apareceu
            </p>
            <Button
              href="https://api.whatsapp.com/send/?phone=5511945638717&text&type=phone_number&app_absent=0"
              title="Entrar em contato"
              variant="secondary"
              icon={<WhatsappLogo size={32} />}
            />
          </div>
          <div className="social">
            <ul>
              <li>
                <a href="mailto:artix.erick2@gmail.com?subject=Gostaria de fazer um orçamento ">
                  <At size={64} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/erick.arti"
                  target="_blank"
                  rel="noreferrer"
                >
                  <InstagramLogo size={64} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/erick_arti"
                  target="_blank"
                  rel="noreferrer"
                >
                  <TwitterLogo size={64} />
                </a>
              </li>
            </ul>
          </div>
        </S.Content>
      </S.Contact>
      <S.Container>
        <S.Footer>
          <a href="#Inicio">
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
