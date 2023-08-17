import Myprofile from "../../src/ui/profile/Myprofile";
import { connect } from "react-redux";
import { addVisit } from "../Services/Actions/Action";
export default Myprofile;

const mapDispatchToProp = (dispatch) => ({
  addToCartHandeler: (data) => dispatch(addVisit(data)),
});
