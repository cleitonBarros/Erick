import { Section } from "../components/HTMLElement/Section/style";

import profilePhoto from "../assets/perfil.png";
import * as S from "./style";

export function Main() {
  return (
    <>
      <S.Container>
        <Section>
          <S.Biography>
            <div>
              <img src={profilePhoto} alt="foto de perfil" />
            </div>
            <div>
              <h2>Sobre mim</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                consequuntur nobis voluptatum ea dolores incidunt.
              </p>
              <p>
                Suscipit vitae soluta, tempore voluptate ipsam placeat
                voluptatibus nobis nam modi, beatae reiciendis repellat natus!
              </p>
            </div>
          </S.Biography>
        </Section>
      </S.Container>
    </>
  );
}
