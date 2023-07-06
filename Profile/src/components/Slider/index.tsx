import Carousel from "react-bootstrap/Carousel";

import { Slide } from "../../utils";
import * as S from "./style";

export function Slider() {
  return (
    <div id="Inicio">
      <S.Container>
        <Carousel>
          {Slide.map((item, index) => {
            return (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={item.src} alt={item.alt} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </S.Container>
    </div>
  );
}
