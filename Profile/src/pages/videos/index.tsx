import { useEffect } from "react";

import { Container } from "../../components/HTMLElement/Container/style";
import { Section } from "../../components/HTMLElement/Section/style";

import video1 from "../../assets/video/video1.mp4";
import video2 from "../../assets/video/video2.mp4";
import video3 from "../../assets/video/video3.mp4";
import video4 from "../../assets/video/video4.mp4";
import startAos from "../../lib/Aos";
import { ASSETS_QUERY } from "../../lib/dato-cms/dato-cms";
import * as S from "./style";

import { useQuery } from "graphql-hooks";

export function Videos() {
  startAos();
  useEffect(() => {
    const clips = document?.querySelectorAll("video");

    if (clips) {
      for (let i = 0; i < clips.length; i++) {
        clips[i].addEventListener("mouseenter", () => {
          clips[i].play();
        });
      }

      for (let i = 0; i < clips.length; i++) {
        clips[i].addEventListener("mouseout", () => {
          clips[i].pause();
        });
      }
    }
  }, []);
  const { data } = useQuery(ASSETS_QUERY, {
    variables: {
      limit: 10
    }
  });

  return (
    <Container>
      <Section>
        <S.Container>
          <S.Box>
            <video
              src={video1}
              data-aos="flip-left"
              data-aos-delay="500"
              loop
            ></video>
          </S.Box>
          <S.Box>
            <video
              src={video2}
              data-aos="flip-right"
              data-aos-delay="500"
              loop
            ></video>
          </S.Box>
          <S.Box>
            <video
              src={video3}
              data-aos="flip-left"
              data-aos-delay="500"
              loop
            ></video>
          </S.Box>
          <S.Box>
            <video
              src={video4}
              data-aos="flip-right"
              data-aos-delay="500"
              loop
            ></video>
          </S.Box>
        </S.Container>
      </Section>
    </Container>
  );
}
