import React from "react";
import SlidingPuzzle from "./SlidingPuzzle";

const Puzzle = () => {
  const initialConfiguration = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0,
  ];

  const handleSolveCallback = () => {
    //   alert("Congratulations! You solved the puzzle!");
  };

  return (
    <div className="App">
      <h1>15-Puzzle</h1>
      <SlidingPuzzle
        initialConfiguration={initialConfiguration}
        onSolveCallback={handleSolveCallback}
      />
    </div>
  );
};

export default Puzzle;
