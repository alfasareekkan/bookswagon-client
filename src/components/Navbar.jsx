/* eslint-disable */

import React from 'react';
import {Link} from "react-router-dom"
import "./Navbar.css"

const navItems = [
  { name: "New Arrivals", link: "/new-arrivals" },
  { name: "Box Sets", link: "/box-sets" },
  { name: "Best Sellers", link: "/best-sellers" },
  { name: "Fiction Books", link: "/fiction-books" },
  {name:"Featured Authors", link: "/featured-authors" },
  
]

function Navbar({handleShow}) {
  return (
    <div className="navbar">
      <div onClick={handleShow}>Books</div>
      <div className="nav-items">
        {
          navItems.map((item) => (
            <Link to={item.link}>{item.name }</Link>
          ))
        }
      </div>
    </div>
  );
}

export default Navbar;
