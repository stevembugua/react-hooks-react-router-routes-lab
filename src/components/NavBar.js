import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  const menuLinks = [
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Movies",
      url: "/movies",
    },
    {
      label: "Directors",
      url: "/directors",
    },
    {
      label: "Actors",
      url: "/actors",
    },
  ];

  const navList = menuLinks.map((link, index) => {
    let { label, url } = link;
    return (
      <li key={index}>
        <NavLink  to={url}>
          {label}
        </NavLink>
      </li>
    );
  });

  return (
    <div className="navbar">
      <ul>{navList}</ul>
    </div>
  );
}

export default NavBar;