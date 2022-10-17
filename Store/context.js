import { Children, createContext, useState } from "react";

export const DialCodeContext = createContext({
  dial: "91",
  updateDial: () => {},
  phoneNo:'88888',
  updatePhoneNo: () => {}
});
function ContextProvider({ children }) {
  const [dial, setDial] = useState("91");
  function updateDial(code) {
    setDial(+code);
  }

  const [phoneNo, setPhoneNo] = useState('')
  function updatePhoneNo(no){
    setPhoneNo(no)
   
  }
  console.log(phoneNo)
  const value = {
    dial: dial,
    updateDial: updateDial,
    phoneNo: phoneNo,
    updatePhoneNo: updatePhoneNo
  };
  return <DialCodeContext.Provider value={value}>{children}</DialCodeContext.Provider>;
}

export default ContextProvider;
