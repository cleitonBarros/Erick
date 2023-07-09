import { useContext, useEffect } from "react";

import { ThemeContext } from "../../context/useContext";
import { UseWindowSize } from "../../hooks/useWidthSize";
import * as S from "./style";

interface propsSideBar {
  className: string;
}

export function SideBar({ className }: propsSideBar) {
  const UseContext = useContext(ThemeContext);
  const [width] = UseWindowSize();

  function hadleClick() {
    const container = document?.querySelector(".show");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chk: any = document?.getElementById("input-checkout");
    if (container?.classList.contains("show")) {
      container.classList.replace("show", "hidden");
      UseContext?.setSideBar(!UseContext?.sideBar);
      chk.checked = false;
    }
  }
  useEffect(() => {
    if (width >= 1130) {
      const container = document?.querySelector(".show");
      if (container?.classList.contains("show")) {
        container.classList.replace("show", "hidden");
      }
    }
  }, [width]);

  return (
    <>
      <S.Container className={className}>
        <S.Content>
          <ul>
            <li onClick={hadleClick}>
              <a href={"#Inicio"}>Inicio</a>
            </li>
            <li onClick={hadleClick}>
              <a href={"#Service"}>Serviços</a>
            </li>
            <li onClick={hadleClick}>
              <a href={"#Galeria"}>Galeria</a>
            </li>
            <li onClick={hadleClick}>
              <a href={"#Contact"}>Entre em contato</a>
            </li>
          </ul>
        </S.Content>
      </S.Container>
    </>
  );
}
