import Carousel from "react-bootstrap/Carousel";

import queenbee from "../../assets/queenbee.jpg";
import queenbee2 from "../../assets/queenbeenface.jpg";
import senna from "../../assets/senna.jpg";
import wolf from "../../assets/wolfzin.jpg";
import * as S from "./style";

//import { Carousel } from "@trendyol-js/react-carousel";

export function Slider() {
  return (
    <div id="Inicio">
      <S.Container>
        <Carousel>
          <Carousel.Item>
            <img className="d-block w-100" src={senna} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={queenbee} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={wolf} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={queenbee2} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </S.Container>
    </div>
  );
}
