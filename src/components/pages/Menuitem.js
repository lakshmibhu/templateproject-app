import React from "react";
import { Link } from "react-router-dom";
// import FanGrid from "../directory/AllGrids/FanGrid";

function Menuitem(props) {
  console.log(props);
  return (
    <div className="menuitem-component">
      <div className="NameCost">
        {" "}
        <h3 style={{ fontSize: "30px", fontWeight: "bold", color: "purple" }} t>
          {props.categoryname.name}  {" "}
        </h3>
        {" "}
        <h2   style={{ fontSize: "30px",  color: "purple" }} t>
           {props.categoryname.text}  {" "} {props.categoryname.quantity} 
        </h2> {" "}
      </div>
      <Link to={props.categoryname.linkUrl}>
        <img
          src={props.categoryname.imageUrl}
          alt="gopi"
          className="menu-img"
        />
      </Link>
    </div>
  );
}

export default Menuitem;
