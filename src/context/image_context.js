import React, { createContext, useEffect, useState } from "react";
import { fetchData } from "../api/fetchVideos";

export const ImageContext = createContext();

const ContextProvider = ({ children }) => {
  const [response, setResponse] = useState("");
  useEffect(() => {
    (async () => {
      const result = await fetchData();
      setResponse(result);
    })();
  }, []);

  return (
    <ImageContext.Provider value={[response]}>{children}</ImageContext.Provider>
  );
};

export default ContextProvider;
