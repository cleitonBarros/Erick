import { Button } from "../../components/Button/Default";
import { Card } from "../../components/Card";
import { Container } from "../../components/HTMLElement/Container/style";
import { Section } from "../../components/HTMLElement/Section/style";
import { Slider } from "../../components/Slider";

import profilePhoto from "../../assets/picture/gallery/perfil.jpg";
import startAos from "../../lib/Aos";
import { Photos } from "../../utils";
import * as S from "./style";

import { Desktop, PaintBrush, ScribbleLoop } from "@phosphor-icons/react";

window.onload = () => {
  window.scrollTo(0, 0);
};

startAos();
export function Home() {
  return (
    <>
      <Slider />
      <Container>
        <S.Container>
          <Section id="Bio">
            <S.Biography data-aos="fade-up" data-aos-delay="100">
              <div>
                <h2>Sobre mim</h2>
                <p>
                  Me chamo Erick, tenho 28 anos e sou de Osasco, SP. Sou
                  apaixonado por arte, fascinado por ilustrações, desenhos e
                  designer. Comecei a desenhar muito novo e de lá para cá
                  nãoparei mais.
                </p>
                <p>
                  Grande parte de meus desenhos fazem a moda antiga, a mão,
                  lápis, lápis de cor, marcadores e tudo que puder adicionar,
                  mas também faço ilustrações digitais, pinturas, é o que eu
                  utilizo é tinta guache.
                </p>
                <p>Minha especialidade são os animais.</p>
              </div>
              <div>
                <img src={profilePhoto} alt="foto de perfil" />
              </div>
            </S.Biography>
          </Section>

          <Section id="Service">
            <S.Services data-aos="fade-up" data-aos-delay="400">
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

          <Section id="Galeria">
            <S.gallery>
              {Photos.map((photo) => {
                return (
                  <img
                    key={photo.id}
                    data-aos="fade-up"
                    data-aos-delay="300"
                    src={photo.src}
                    alt={photo.alt}
                  />
                );
              })}
            </S.gallery>
            <Button href="/videos" variant="primary" title="Ver mais" />
          </Section>
        </S.Container>
      </Container>
    </>
  );
}
