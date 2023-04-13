import React from "react";
import { Link } from "react-router-dom";


const DropdownMenu = () => {
  return (
    <nav className="ptf-nav ptf-nav--default">
              {/* <!--Menu--> */}
              <ul className="sf-menu sf-menu-onepage">
                <li>
                  <Link to='/mainPage'>
                    <span>메인 페이지</span>
                   </Link>
                  
                </li>
                <li>
                  <Link to='/dotmap'>
                    <span>도트맵 페이지</span>
                   </Link>
                  
                </li>
                
                
              </ul>
            </nav>
  );
};

export default DropdownMenu;
