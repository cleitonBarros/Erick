import { useContext, useEffect } from "react";

import { ThemeContext } from "../../context/useContext";
import { UseWindowSize } from "../../hooks/useWidthSize";
import { Button } from "../Button/Default";
import * as S from "./style";

interface propsSideBar {
  className: string;
}

export function SideBar({ className }: propsSideBar) {
  const path = window.location.pathname.split("/")[1];
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
              <a href={path === "videos" ? "/" : "#Inicio"}>Inicio</a>
            </li>
            <li onClick={hadleClick}>
              <a href={path === "videos" ? "/" : "#Service"}>Serviços</a>
            </li>
            <li onClick={hadleClick}>
              <a href={path === "videos" ? "/" : "#Galeria"}>Galeria</a>
            </li>
          </ul>

          <Button
            onClick={hadleClick}
            href="#Contact"
            title="Entre em contato"
            variant="primary"
          />
        </S.Content>
      </S.Container>
    </>
  );
}
