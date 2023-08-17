import React, { useState, useEffect } from "react";
import "./SlidingPuzzle.scss";
import classnames from "classnames";

const SlidingPuzzle = ({ initialConfiguration, onSolveCallback }) => {
  const [tiles, setTiles] = useState(initialConfiguration);
  const emptyTile = tiles.indexOf(0);
  const [checker, setChecker] = useState(false);

  useEffect(() => {
    // Check if the puzzle is correctly sorted into order
    if (isPuzzleSolved()) {
      onSolveCallback();
    }
  }, [tiles, onSolveCallback]);

  // const wrongClick = () => {
  //   setChecker(true);
  //   checker &&
  //     setTimeout(() => {
  //       setChecker(false);
  //     }, 1000);
  // };

  const isPuzzleSolved = () => {
    for (let i = 0; i < tiles.length - 1; i++) {
      if (tiles[i] !== i + 1) {
        return false;
      }
    }
    return true;
  };

  const handleTileClick = (index) => {
    if (index === emptyTile) {
      return; // Clicking on the empty tile does nothing
    }

    // Check if the clicked tile can slide to the empty space
    const diff = Math.abs(index - emptyTile);
    if (diff === 1 || diff === 4) {
      // Swap the tiles
      const newTiles = [...tiles];
      [newTiles[index], newTiles[emptyTile]] = [
        newTiles[emptyTile],
        newTiles[index],
      ];
      setTiles(newTiles);
    }
  };

  return (
    <div className="board">
      {tiles.map((tile, index) => (
        <div
          key={index}
          //  className={`tile ${tile === 0 ? "empty" : ""}`}
          className={classnames({
            tile: !checker,
            empty: tile === 0,
            "wrong-tile": checker,
          })}
          onClick={() => handleTileClick(index)}
        >
          {tile !== 0 && tile}
        </div>
      ))}
    </div>
  );
};

export default SlidingPuzzle;
