import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const ShortProfileContext = createContext();
const ShortProfileProvider = ({ children }) => {
  const [shortProfile, setShortProfile] = useState(
    "header__myShortProfile--hide"
  );

  return (
    <ShortProfileContext.Provider value={[shortProfile, setShortProfile]}>
      {children}
    </ShortProfileContext.Provider>
  );
};

// custom hook
const useShortProfile = () => useContext(ShortProfileContext);

export { useShortProfile, ShortProfileProvider };
