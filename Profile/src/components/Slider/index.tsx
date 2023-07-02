import queenbee from "../../assets/queenbee.jpg";
import queenbee2 from "../../assets/queenbeenface.jpg";
import senna from "../../assets/senna.jpg";
import wolf from "../../assets/wolfzin.jpg";
import * as S from "./style";

import { Carousel } from "@trendyol-js/react-carousel";

export function Slider() {
  return (
    <div id="Inicio">
      <S.Container>
        <Carousel
          className="slider"
          responsive={true}
          slide={1}
          useArrowKeys={true}
          swiping={true}
          show={1}
        >
          <img src={wolf} alt="lobo colorido" />
          <img src={queenbee} alt="mulher branca com olhar de brava" />
          <img src={senna} alt="mulhe negra com capuz" />
          <img src={queenbee2} alt="mulher branca" />
        </Carousel>
      </S.Container>
    </div>
  );
}
