import { useEffect } from "react";

import { Container } from "../../components/HTMLElement/Container/style";
import { Section } from "../../components/HTMLElement/Section/style";

import startAos from "../../lib/Aos";
import { videos } from "../../utils";
import * as S from "./style";

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

  return (
    <Container>
      <Section>
        <S.Container>
          {videos.map((video, index) => {
            return (
              <S.Box key={index}>
                <video
                  src={video.src}
                  data-aos="flip-left"
                  data-aos-delay="500"
                  loop
                  muted
                ></video>
              </S.Box>
            );
          })}
        </S.Container>
      </Section>
    </Container>
  );
}
