import { useEffect } from "react";

import { Container } from "../../components/HTMLElement/Container/style";
import { Section } from "../../components/HTMLElement/Section/style";

import video1 from "../../assets/video/video1.mp4";
import video2 from "../../assets/video/video2.mp4";
import video3 from "../../assets/video/video3.mp4";
import video4 from "../../assets/video/video4.mp4";
import * as S from "./style";

import { useQuery } from "graphql-hooks";

const HOMEPAGE_QUERY = `query {
    allAssets {
      id
      name
      image{
        url(imgixParams: {fm: jpg, fit:crop, w: 300 ,h:300 })
      }
  }`;

export function Videos() {
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
  const { data } = useQuery(HOMEPAGE_QUERY, {
    variables: {
      limit: 10
    }
  });

  return (
    <Container>
      <Section>
        <S.Container>
          <S.Box>
            <video src={video1} loop></video>
          </S.Box>
          <S.Box>
            <video src={video2} loop></video>
          </S.Box>
          <S.Box>
            <video src={video3} loop></video>
          </S.Box>
          <S.Box>
            <video src={video4} loop></video>
          </S.Box>
        </S.Container>
      </Section>
    </Container>
  );
}
