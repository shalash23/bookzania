import { createContext, useState } from "react";

export const cityContext = createContext();
export const categoryContext = createContext();

export function APIContext({ children }) {
  const [cityState, setCityState] = useState("");

  const [categoryState, setCategoryState] = useState("");
  console.log(cityState, categoryState);
  return (
    <cityContext.Provider value={[cityState, setCityState]}>
      <categoryContext.Provider value={[categoryState, setCategoryState]}>
        {children}
      </categoryContext.Provider>
    </cityContext.Provider>
  );
}
