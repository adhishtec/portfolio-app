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
  const [localData, setLocalData] = useState({});
  const [imgSrc, setImgSrc] = useState([]);

  const { jsonData } = useContext(DataContext);

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const dataStructure = () => {
    let tempArr = [];
    if (localData.photos) {
      for (let i of localData?.photos) {
        const data = { src: i, width: random(5, 7), height: random(4, 7) };
        tempArr.push(data);
      }
      return tempArr;
    }
  };

  useEffect(() => {
    // Update local storage when jsonData change
    const getDataLocalStorage = localStorage.getItem("myAppData");
    console.log("...Sonam...>", typeof getDataLocalStorage);
    setLocalData(JSON.parse(getDataLocalStorage));
  }, []);

  useEffect(() => {
    setImgSrc(localData);
    console.log("...zzzzlocalData...>", localData.photos);
  }, [localData]);

  return (
    <>
      {localData.description &&
        localData.description.length &&
        localData.description.map((data, i) => {
          return (
            <ul>
              <li key={i} className="detail-data">
                {data}
              </li>
            </ul>
          );
        })}
      <Gallery className="gallery" photos={dataStructure()} />
    </>
  );
};
export default Details;
