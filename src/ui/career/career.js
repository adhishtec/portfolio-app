import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import "../../ui/career/career.scss";
import Detail from "../../ui/career/detail";
import { Image, Popup, Button } from "semantic-ui-react";
import { useState } from "react";
import { getCareer } from "../../data/dataProvider";
import resume from "../../assets/AdhishResume.pdf";

export default function Career() {
  const [isHover, setHover] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [CareerData, setCareerData] = React.useState({});
  const [dataObj, setDataObj] = React.useState({});

  React.useEffect(() => {
    const data = getCareer();
    setCareerData(data);
  }, [getCareer()]);

  React.useEffect(() => {
    console.log("...>", CareerData.digreeAndEducation);
  }, [CareerData]);

  function downloadFunc() {
    var anchor = document.createElement("a");
    anchor.setAttribute("href", { resume });
    anchor.setAttribute("download", "adhish_resume.pdf");
    document.body.appendChild(anchor);
    anchor.click();
    anchor.parentNode.removeChild(anchor);
  }

  function details() {
    setHover(true);
  }

  const openModal = (data) => {
    setIsModalOpen(true);
    setDataObj(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="main">
        {CareerData.digreeAndEducation?.map((data) => {
          return (
            <Timeline position="alternate">
              <Detail isOpen={isModalOpen} onClose={closeModal} obj={dataObj} />
              <TimelineItem>
                <TimelineOppositeContent
                  sx={{ m: "auto 0", color: "#eb6c04" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {data.startYear}-{data.endYear}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <h3>{data.title}</h3>
                  <TimelineConnector />
                  <TimelineDot color="primary">
                    <img
                      className="imageicon"
                      src={data.imgSrc}
                      width={"100px"}
                      onClick={() => openModal(data)}
                    />
                  </TimelineDot>
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "120px", px: 2 }}>
                  <Typography variant="h6" component="span">
                    {""}
                  </Typography>
                  <Typography>{data.fullName}</Typography>
                  <Typography>{data.responsiblities}</Typography>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          );
        })}

        <Button className="resume-button">
          <a href={resume} download="AdhishNigam.pdf">
            {""}
            Download Resume{" "}
          </a>
        </Button>
      </div>
    </>
  );
}
