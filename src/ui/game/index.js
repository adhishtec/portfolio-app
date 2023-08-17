import Box from "@mui/material/Box";
import img from "../../../src/assets/puzzleimg.png";
import img2 from "../../assets/images/france/1.png";
import { useNavigate } from "react-router-dom";

const GameZone = () => {
  const navigate = useNavigate();
  const click = () => {
    navigate("/puzzle");
  };
  return (
    <>
      <h1>gamezone</h1>
      <Box
        onClick={() => click()}
        sx={{
          width: 300,
          height: 300,
          backgroundImage: `url(${img})`,
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      />
    </>
  );
};

export default GameZone;
