import { TextField, FormLabel, Button } from "@mui/material";
import "../../ui/profile/profile.scss";
import { getUserData } from "../../data/dataProvider";
import BasicCard from "./Myprofile";

function Myhomeprofile() {
  function login() {
    getUserData();
  }
  return (
    <div className="main-component">
      <BasicCard />
    </div>
  );
}

export default Myhomeprofile;
