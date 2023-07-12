import "./portfolio.scss";

import HoverVideoPlayer from "react-hover-video-player";
import webimg from "../../assets/1.png";
import mobileimg from "../../assets/2.png";
import uiuximg from "../../assets/3.png";
import { useNavigate } from "react-router-dom";
import mobile from "../../assets/mobile.mp4";
import web from "../../assets/M.mp4";
import mobilevdo from "../../assets/mobilevdo.mp4";
import figma from "../../assets/figma.mp4";
import uxvdo from "../../assets/ux.mp4";
import celcom from "../../assets/celcom1.png";
import generali from "../../assets/generali1.png";
import adhishnigam from "../../assets/adhishnigam.png";
import maybank from "../../assets/maybank.png";
import mobile1 from "../../assets/mobile1.png";
import mobile2 from "../../assets/mobile2.png";
import mobile3 from "../../assets/mobile3.png";
import mobile4 from "../../assets/mobile4.png";
import figma1 from "../../assets/figma1.png";
import figma2 from "../../assets/figma2.png";
import figma3 from "../../assets/figma3.png";
import figma4 from "../../assets/figma4.png";

const Portfolio = () => {
  const navigate = useNavigate();
  const options = [
    {
      id: "web",
      name: "Web Applications",
      coverImg: webimg,
      img: [celcom, generali, adhishnigam],
      link: [
        "https://www.celcom.com.my/personal",
        "https://portal.generali.ch/en/login#/login",
        "https://adhish-nigam-web-app.vercel.app/",
      ],
      video: web,
    },
    {
      id: "mobile",
      name: "Mobile Applications",
      coverImg: mobileimg,
      img: [mobile1, mobile2, mobile3, mobile4],
      link: [
        "https://play.google.com/store/apps/details?id=com.grppl.android.shell.CMBlloydsTSB73&hl=en_GB",
        "https://play.google.com/store/apps/details?id=com.ge.projectc&hl=en_US",
        "https://play.google.com/store/apps/details?id=com.celcom.mycelcom&hl=en&gl=US",
        "https://play.google.com/store/apps/details?id=ch.generali.customer.acpt&hl=de",
      ],
      video: mobilevdo,
    },
    {
      id: "uiux",
      name: "UI/UX",
      coverImg: uiuximg,
      img: [figma1, figma2, figma3, figma4],
      link: [
        "https://play.google.com/store/apps/details?id=com.grppl.android.shell.CMBlloydsTSB73&hl=en_GB",
        "https://play.google.com/store/apps/details?id=com.ge.projectc&hl=en_US",
        "https://play.google.com/store/apps/details?id=com.celcom.mycelcom&hl=en&gl=US",
        "https://play.google.com/store/apps/details?id=ch.generali.customer.acpt&hl=de",
      ],
      video: figma,
    },
  ];

  function detailPage(obj) {
    navigate("/portfolioDetail", {
      state: {
        optionObj: obj,
      },
    });
  }

  return (
    <>
      <div className="main-container">
        {options.length &&
          options.map((data, i) => {
            return (
              <>
                <HoverVideoPlayer
                  key={i}
                  className="video"
                  videoSrc={data.video}
                  onClick={() => detailPage(data)}
                  pausedOverlay={
                    <img
                      src={data.coverImg}
                      alt=""
                      style={{
                        // Make the image expand to cover the video's dimensions
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  }
                  loadingOverlay={
                    <div className="loading-overlay">
                      <div className="loading-spinner" />
                    </div>
                  }
                />
              </>
            );
          })}
      </div>
    </>
  );
};

export default Portfolio;
