import React from "react";
import "../../Assets/styles/Navbar.css";
import kvjLogo from "../../Assets/images/kvjLogo.jpg";
import GeuLogo from "../../Assets/images/geuLogo.png";

export default function Navbar() {
  const showContentOfNav = (): void => {
    var element: any = document.getElementById("ul");
    element.classList.toggle("ul");
  };
  return (
    <nav>
      <section>
        <div className="logo">
          <img src={GeuLogo} alt="" />
          <img src={kvjLogo} alt="" />
        </div>
        <div className="hamberger-joinus">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              onClick={showContentOfNav}
            >
              <path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"></path>
            </svg>
            <ul id="ul" className="none">
              <li onClick={showContentOfNav}>Home</li>
              <li onClick={showContentOfNav}>About Us</li>
              <li onClick={showContentOfNav}>Gallery</li>
            </ul>
          </div>
          <div className="joinUsBTN">
            <button className="button" >JOIN US</button>
          </div>
        </div>
      </section>
    </nav>
  );
}
