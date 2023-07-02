import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../../data/DataContext";
import Gallery from "react-photo-gallery";
import india1 from "../../assets/images/indiaPhoto/1.jpg";
import india2 from "../../assets/images/indiaPhoto/2.jpg";
import india3 from "../../assets/images/indiaPhoto/3.jpg";
import india4 from "../../assets/images/indiaPhoto/4.jpg";
import india5 from "../../assets/images/indiaPhoto/5.jpg";
import india6 from "../../assets/images/indiaPhoto/6.jpg";
import india7 from "../../assets/images/indiaPhoto/7.jpg";
import "./hobbies.scss";

const Details = () => {
  const { place } = useParams();
  const [localData, setLocalData] = useState([]);

  const { jsonData } = useContext(DataContext);
  const photos = [
    {
      src: india1,
      width: 5,
      height: 3,
    },
    {
      src: india2,
      width: 1,
      height: 1,
    },
    {
      src: india3,
      width: 6,
      height: 3,
    },
    {
      src: india4,
      width: 2,
      height: 1,
    },
    {
      src: india5,
      width: 5,
      height: 3,
    },
    {
      src: india6,
      width: 1,
      height: 1,
    },
    {
      src: india7,
      width: 4,
      height: 3,
    },
  ];

  // useEffect(() => {
  //   // Update local storage when jsonData changes
  //   localStorage.setItem("myAppData", JSON.stringify(jsonData));
  //   console.log("......>", data);
  //   setData(jsonData);
  // }, [jsonData]);
  useEffect(() => {
    // Update local storage when jsonData change
    const getDataLocalStorage = localStorage.getItem("myAppData");
    console.log("...Sonam...>", typeof getDataLocalStorage);
    setLocalData(JSON.parse(getDataLocalStorage));
  }, []);

  useEffect(() => {
    console.log("...localData...>", localData);
  }, [localData]);

  return (
    <>
      {localData &&
        localData.length &&
        localData.map((data, i) => {
          console.log("...localData...>", localData);
          return (
            <ul>
              <li key={i} className="detail-data">
                {data}
              </li>
            </ul>
          );
        })}
      <Gallery className="gallery" photos={photos} />;
    </>
  );
};
export default Details;
