import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ScoreContext } from "../Contexts/ScoreContext";

const Scoreboard = () => {
  const { score, plusScore, minusScore } = useContext(ScoreContext);

  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-2 p-5 w-[30rem] text-center">
        <h2 className="text-[3rem] bg-green-200">Score Board</h2>
        <p className="text-[2rem] text-green-600 my-3">
          Your Current Score is {score}
        </p>
        <button
          className="hover:bg-yellow-500 text-[1.5rem] border-2 p-3 w-[4rem] bg-blue-200 mx-3"
          onClick={() => plusScore()}
        >
          +
        </button>
        <button
          className="hover:bg-yellow-500 border-2 text-[1.5rem]  p-3 w-[4rem] bg-red-200 mx-3"
          onClick={() => minusScore()}
        >
          -
        </button>
        <div className="bg-green-200 my-5 text-[1.5rem]">
          {score > 100 ? <p>Good Job!</p> : <p>"let's make it over 100!"</p>}
        </div>
        <button
          className="border-2 bg-purple-200"
          onClick={() => navigate("/infoboard")}
        >
          Click here to view your Score
        </button>
      </div>
    </div>
  );
};

export default Scoreboard;
