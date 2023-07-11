import Detail from "../career/detail";
import "./portfolio.scss";
import { useParams, useLocation } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import video from "../../assets/M.mp4";
import celcom from "../../assets/celcom1.png";
import generali from "../../assets/generali1.png";
import adhishnigam from "../../assets/adhishnigam.png";
import { Button } from "@mui/base";
import mobilevdo from "../../assets/mobilevdo.mp4";
import mobile1 from "../../assets/mobile1.png";
import mobile2 from "../../assets/mobile2.png";
import mobile3 from "../../assets/mobile3.png";
import mobile4 from "../../assets/mobile4.png";

const PortfolioDetails = () => {
  const { state } = useLocation();
  const { optionObj } = state;
  return (
    <>
      <div className="portfolio-class">
        <div className="vdo-pannel">
          <video
            className="video-portfolio-detail"
            src={optionObj.video}
            controls
            autoPlay
          />
        </div>
        <Divider className="divider" orientation={"vertical"} />
        <div className="detail-pannel">
          <div className="profile-one">
            {optionObj.img.map((imgurl) => {
              return (
                <div className="profile-one">
                  <Box
                    sx={{
                      width: 300,
                      height: 300,
                      margin: 10,
                      backgroundImage: `url(${imgurl})`,
                      backgroundSize: 580,
                      backgroundColor: "primary.dark",
                      "&:hover": {
                        backgroundColor: "primary.main",
                        opacity: [0.9, 0.8, 0.7],
                      },
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioDetails;
