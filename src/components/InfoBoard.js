import React, { useContext } from "react";

import { ScoreContext } from "../Contexts/ScoreContext";

const InfoBoard = () => {
  const { score } = useContext(ScoreContext);

  return (
    <div className=" flex justify-center items-center h-screen">
      <h2 className="bg-gray-300 text-[1.5rem] flex items-center justify-center border-4 border-black p-2 w-[12rem] h-[12rem]">
        Score is: {score}
      </h2>
    </div>
  );
};

export default InfoBoard;
