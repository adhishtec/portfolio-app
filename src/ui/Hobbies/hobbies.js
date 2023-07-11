import * as React from "react";
import { useContext, useHistory } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import img from "../../assets/adhish.png";
import { getHobbies } from "../../data/dataProvider";
import "../../assets/images/india.png";
import "./hobbies.scss";
import { Box } from "@mui/system";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { Margin } from "@mui/icons-material";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import Detail from "../Hobbies/details";
import { Route, useNavigate } from "react-router-dom";
import { DataContext } from "../../data/DataContext";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

const card = (
  <React.Fragment>
    <CardContent className="card">
      <Typography variant="h5" component="div" color="white">
        The Story Of Globetrotter
      </Typography>
      <Typography sx={{ mb: 1.5, marginTop: 2 }} color="white">
        Meet Adhish, an adventurous soul and passionate travel blogger who
        traverses the globe in search of awe-inspiring experiences. With a
        curious mind and an insatiable wanderlust, I made it his mission to
        uncover hidden gems and share captivating tales with his devoted
        audience.
        <p>
          From the vibrant streets of bustling cities to the tranquil beauty of
          remote landscapes, my journey takes me to the farthest corners of the
          world. Armed with his camera and a keen eye for detail, my captures
          the essence of each destination, immortalizing the spirit and charm in
          his photographs and blog posts.
        </p>
        <p>
          Beyond the allure of exotic locations, my blog is a testament to my
          belief in sustainable travel and responsible tourism. My strives to
          create awareness about the importance of preserving our planet and its
          diverse cultures. Through his blog, I am educating to my readers on
          eco-friendly practices and encourages them to travel with mindfulness
          and respect for the environment.
        </p>
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function Hobbies() {
  const [PlacesData, setPlacesData] = React.useState({});
  const [clickedData, setClickedData] = React.useState({});
  const [isDetail, setDetail] = React.useState(false);
  const navigate = useNavigate();
  const { setJsonData } = useContext(DataContext);
  // const history = useNavigate();
  React.useEffect(() => {
    const data = getHobbies();
    setPlacesData(data.countries);
  }, [getHobbies()]);

  function detail(place) {
    localStorage.setItem("myAppData", JSON.stringify(place));
    setJsonData(place);
    navigate("/hobbyDetails", "place");
    setDetail(true);
  }

  return (
    <>
      <div className="main-hobby-component">
        {card}
        <ImageList
          className="countries-list"
          sx={{
            width: 800,
            height: 350,
            backgroundColor: "#03395B",
            padding: 1,
          }}
          cols={3}
          rowHeight={220}
        >
          {Object.keys(PlacesData).map((place) => {
            return (
              <ImageListItem key={place.img}>
                <img
                  src={PlacesData[place].flag}
                  srcSet={PlacesData[place].flag}
                  alt={place.title}
                  loading="lazy"
                  onClick={() => detail(PlacesData[place])}
                />
                {isDetail && <Detail />}
                <ImageListItemBar
                  title={PlacesData[place].country_name}
                  subtitle={<span>by: {PlacesData[place].country_name}</span>}
                  position="below"
                  sx={{ color: "white" }}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </div>
    </>
  );
}
