import React, { createContext, useState } from "react";

export const ScoreContext = createContext();

const ScoreContextProvider = ({ children }) => {
  const [score, setScore] = useState(0);

  function plusScore() {
    return setScore((prev) => prev + 10);
  }

  function minusScore() {
    return setScore((prev) => prev - 10);
  }

  return (
    <ScoreContext.Provider value={{ score, plusScore, minusScore }}>
      {children}
    </ScoreContext.Provider>
  );
};

export default ScoreContextProvider;
