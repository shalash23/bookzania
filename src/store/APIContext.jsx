import { createContext, useState } from "react";

export const cityContext = createContext();
export const categoryContext = createContext();
export const radiusContext = createContext();

export function APIContext({ children }) {
  const [cityState, setCityState] = useState("");
  const [radiusState, setRadiusState] = useState("");
  const [categoryState, setCategoryState] = useState("");
  console.log(cityState, categoryState);
  return (
    <cityContext.Provider value={[cityState, setCityState]}>
      <categoryContext.Provider value={[categoryState, setCategoryState]}>
        <radiusContext.Provider value={[radiusState, setRadiusState]}>
          {children}
        </radiusContext.Provider>
      </categoryContext.Provider>
    </cityContext.Provider>
  );
}
