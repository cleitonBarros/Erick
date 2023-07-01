import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  background-color: blue;
  max-width: 90rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 1.5rem;
`;

export const Section = styled.section`
  width: 100%;
  max-width: 80rem;
  background-color: red;
  min-height: 100vh;
  padding: 2.5rem 1.5rem;
`;
export const Biography = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  > div:has(img, h2) {
    max-width: 20rem;
    display: grid;
    gap: 1rem;

    img {
      width: 100%;
      height: auto;
    }

    h2 {
      letter-spacing: 3px;
      font-weight: 700;
      line-height: 2rem;
    }
    p {
      font-weight: 500;
      line-height: 1.5rem;
    }
  }
`;
