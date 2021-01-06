//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";
import "../styles/tallBuilding.scss";
import "../styles/squareBuilding.scss";
import "../styles/buildingMidde.scss";
import "../styles/buildingRight.scss";
import "../styles/buildingLast.scss";
//import your own components
import { Home } from "./component/home.js";

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
