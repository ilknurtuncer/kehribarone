import React from "react";
import { Link } from "react-router-dom";
import menuData from "../../data/menuData";


const Nav = () => {
  return (
    <div className="main-menu text-center">
      <nav>
        <ul className="main-menu__list">
          {menuData.map((menuItem, index) => (
            <li className="dropdown" key={index}>
              <Link to={`/${menuItem.slug}`}>{menuItem.title}</Link>
              {menuItem["sub-menu"] && menuItem["sub-menu"].length > 0 && (
                <ul>
                  {menuItem["sub-menu"].map((subMenuItem, subIndex) => (
                    <li key={subIndex}>
                      <Link to={`/${menuItem.slug}/${subMenuItem.slug}`}>
                        {subMenuItem.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
