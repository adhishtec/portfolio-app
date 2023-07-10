import Detail from "../career/detail";
import "./achivements.scss";
import { useParams, useLocation } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

import video from "../../assets/M.mp4";
import celcom from "../../assets/celcom1.png";
import generali from "../../assets/generali1.png";
import adhishnigam from "../../assets/adhishnigam.png";
import devopscertificate from "../../assets/cerificateDEvops.png";
import achivement from "../../assets/achivement.png";
import { Button } from "@mui/base";
import mobilevdo from "../../assets/mobilevdo.mp4";

const Achivements = () => {
  const { state } = useLocation();

  return (
    <>
      <div className="portfolio-class">
        <div className="vdo-pannel"></div>
        <Divider className="divider" orientation={"vertical"} />
        <div className="detail-pannel">
          <div className="profile-one">
            <Box
              sx={{
                width: 300,
                height: 300,
                margin: 10,
                backgroundImage: `url(${devopscertificate})`,
                backgroundSize: 280,
                backgroundColor: "primary.dark",
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
            Certifide Devops Engineer
          </div>
          <div className="profile-one">
            <Box
              sx={{
                width: 300,
                height: 300,
                margin: 10,
                backgroundColor: "primary.dark",
                backgroundImage: `url(${achivement})`,
                backgroundSize: 270,
                "&:hover": {
                  backgroundColor: "primary.main",
                  opacity: [0.9, 0.8, 0.7],
                },
              }}
            />
            On the spot award
          </div>
        </div>
      </div>
    </>
  );
};

export default Achivements;
