import { Children, createContext, useState } from "react";

export const DialCodeContext = createContext({
  dial: "91",
  updateDial: () => {},
});
function ContextProvider({ children }) {
  const [dial, setDial] = useState("91");
  function updateDial(code) {
    setDial(+code);
  }
  const value = {
    dial: dial,
    updateDial: updateDial,
  };
  return <DialCodeContext.Provider value={value}>{children}</DialCodeContext.Provider>;
}

export default ContextProvider;
