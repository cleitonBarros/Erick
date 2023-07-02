import { Card } from "../components/Card";
import { Section } from "../components/HTMLElement/Section/style";

import profilePhoto from "../assets/perfil.jpg";
import * as S from "./style";

import { Desktop, PaintBrush, ScribbleLoop } from "@phosphor-icons/react";

export function Main() {
  return (
    <>
      <S.Container>
        <Section>
          <S.Biography>
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
            <div>
              <img src={profilePhoto} alt="foto de perfil" />
            </div>
          </S.Biography>
        </Section>

        <Section id="Service">
          <S.Services>
            <Card
              icon={<ScribbleLoop size={130} />}
              title="Á mão"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, voluptatum culpa eius dignissimos qui neque! Perferendis enim, nisi deserunt consectetur quibusdam, aut nesciunt id, dolorum atque quasi maiores laudantium voluptas!"
            />

            <Card
              icon={<Desktop size={130} />}
              title="Digital"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, voluptatum culpa eius dignissimos qui neque! Perferendis enim, nisi deserunt consectetur quibusdam, aut nesciunt id, dolorum atque quasi maiores laudantium voluptas!"
            />
            <Card
              icon={<PaintBrush size={130} />}
              title="Pintura"
              text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, voluptatum culpa eius dignissimos qui neque! Perferendis enim, nisi deserunt consectetur quibusdam, aut nesciunt id, dolorum atque quasi maiores laudantium voluptas!"
            />
          </S.Services>
        </Section>
      </S.Container>
    </>
  );
}
