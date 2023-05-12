import { useState, useEffect, useContext, createContext } from "react";
import axios from "axios";

const TagsContext = createContext();
const TagsProvider = ({ children }) => {
  const [tags, setTags] = useState([
    "Reactjs",
    "Nodejs",
    "Javascript",
    "HTML",
    "CSS",
    "MongoDB",
  ]);

  return (
    <TagsContext.Provider value={[tags, setTags]}>
      {children}
    </TagsContext.Provider>
  );
};

// custom hook
const useTags = () => useContext(TagsContext);

export { useTags, TagsProvider };
