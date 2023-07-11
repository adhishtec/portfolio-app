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
      <Typography sx={{ mb: 1.5 }} color="white">
        Obsessed with exploring the world, meeting new people. I’m not going to
        lie: I think I have a pretty good travel blog. (You probably do too if
        you’re here.) I work hard to provide excellent practical travel advice
        to help you travel better, but I’m not the only great travel blogger out
        there. In fact — and I know this might be shocking — there’s a lot about
        travel that I’m not an expert on. Family travel? No idea. Travel as a
        woman? Clueless. Information on hotels? Only a little. Photography? I
        can manage to turn my camera on if that counts. Food expert? Only at
        eating it.
        <p>
          Hi I am Adhish and welcome to my Travel blog 'The story of
          globetrotter'{" "}
        </p>
        <p>
          Besides being one of my all-time favorite people in the world, Jodi is
          also a damn amazing blogger who writes often about food and culture.
          She devotes a lot of time to food on the road, taking mouthwatering
          photos that make me jealous of her ability to do so. A former lawyer,
          she also writes a series called “Thrillable Hours” about other lawyers
          who gave up being a corporate lackey for life on the road.
        </p>
        <p>
          If there was a contest for the best travel blog, I would tell everyone
          to vote for me. Then I would go vote for Audrey and Dan. They tell
          heartwarming stories and take incredible, out-of-this-world
          photographs. Their blog focuses on cultural travel and sustainability
          issues (they even work with the UN Global Sustainable Tourism
          Council). I focus on the nuts and bolts of going places, whereas they
          focus on the people. They are simply great storytellers.
        </p>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
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
        <h4>My destinations</h4>
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
