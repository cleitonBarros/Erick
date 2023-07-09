import { useState } from "react";

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

interface TPhoto {
  type: string;
  id: number;
  src: string;
  alt: string;
  cond?: boolean;
}

export function Home() {
  const [file, setFile] = useState<TPhoto | null>(null);

  function closeModal() {
    setFile(null);
  }

  return (
    <>
      <Slider />
      <Container>
        <S.Container>
          <Section id="Bio">
            <S.Biography>
              <div>
                <h2>Sobre mim</h2>
                <p>
                  Me chamo Erick, tenho 28 anos e sou de Osasco, SP. Sou
                  apaixonado por arte, fascinado por ilustrações, desenhos e
                  designer. Comecei a desenhar muito novo e de lá para cá não
                  parei mais.
                </p>
                <p>
                  Grande parte de meus desenhos são feito a moda antiga, a mão,
                  lápis, lápis de cor, marcadores e tudo que puder adicionar,
                  mas também faço ilustrações digitais, pinturas.
                </p>
                <p>Minha especialidade é a ilustraçôes de animais.</p>
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
                text="No meu trabalho, utilizo técnicas de desenho feito a mão para criar ilustrações e representações visuais, capturando detalhes e expressões únicas através de traços e linhas cuidadosamente desenhados. Cada obra é uma expressão artística feita à mão, refletindo meu estilo e criatividade."
              />

              <Card
                icon={<Desktop size={130} />}
                title="Digital"
                text="No meu trabalho, utilizo softwares especializados para criar desenhos digitais precisos e envolventes, explorando uma ampla paleta de cores e efeitos visuais para produzir resultados impactantes e de alta qualidade, posso criar desenhos detalhados e fazer ajustes facilmente"
              />
              <Card
                icon={<PaintBrush size={130} />}
                title="Pintura"
                text="Estudo pintura com guache para criar pinturas coloridas e texturizadas, aplicando tinta opaca com pincéis e esponjas para obter efeitos especiais. Cada pintura em guache é resultado de um processo cuidadoso, combinando habilidade manual e criatividade para transmitir emoções"
              />
            </S.Services>
          </Section>

          <Section id="Galeria">
            <S.gallery>
              {Photos.map((photo) => {
                return (
                  <div key={photo.id}>
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      onClick={() => setFile(photo)}
                    />
                  </div>
                );
              })}
            </S.gallery>
            <S.PopUp
              onClick={closeModal}
              style={{ display: file ? "block" : "none" }}
            >
              <div>
                <span onClick={closeModal}>&times;</span>
                <img src={file?.src} alt={file?.alt} />
              </div>
            </S.PopUp>
          </Section>
        </S.Container>
      </Container>
    </>
  );
}
