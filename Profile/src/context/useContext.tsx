/* eslint-disable react-hooks/rules-of-hooks */
import { ReactNode, createContext, useState } from "react";

type siderBarContextType = {
  sideBar: boolean | null;
  setSideBar: React.Dispatch<React.SetStateAction<boolean | null>>;
  showSideBar(): void;
};
interface contextProps {
  children: ReactNode;
}

export const ThemeContext = createContext<siderBarContextType | null>(null);

export function SiderBarContext({ children }: contextProps) {
  const [sideBar, setSideBar] = useState<boolean | null>(false);

  function showSideBar() {
    setSideBar(!sideBar);
  }

  return (
    <ThemeContext.Provider value={{ sideBar, setSideBar, showSideBar }}>
      {children}
    </ThemeContext.Provider>
  );
}
