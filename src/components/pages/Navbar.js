import React from "react";
import { Link } from "react-router-dom";
import Leftarrow from "../arrow-left.svg";

function Navbar() {
  return (
    <div className="main-div">
      <div className="sub1">
        <img src={Leftarrow} />
        <Link to="/" class="navbar-brand">
          {" "}
          Favorite{" "}
        </Link>
      </div>

      <div className="sub2">
        <Link to="/Desk" class="nav-link active">
          Desk
        </Link>
        <Link to="/Dining" class="nav-link active">
          Dining
        </Link>
        <Link to="/Lounge " class="nav-link active">
          Lounge
        </Link>
        <Link to="/Outdoor " class="nav-link active">
          Outdoor
        </Link>
      </div>
    </div>
  );
}
export default Navbar;
