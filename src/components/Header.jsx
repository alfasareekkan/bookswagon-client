import React from 'react';
import { BsFillCartCheckFill, BsMenuButtonWide } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import './Header.css';

function Header() {
  return (
    <div>

      <div className="header">
        <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png" alt="" />
        <div>
          <input type="text" name="" id="" className="search-1" />
        </div>
        <div className="icons">
          <div className="cart-icon">
            <BsFillCartCheckFill />
          </div>
          <div className="profile-icon">
            <CgProfile />
          </div>
        </div>

      </div>
      {/* mobile view */}
      <div className="toggle-header">
        <div>
          <div className="toggle-menu">
            <BsMenuButtonWide />
          </div>
          <div>
            <img src="https://d2g9wbak88g7ch.cloudfront.net/staticimages/logo-new.png" alt="" />
          </div>
          <div className="icons-2">
            <BsFillCartCheckFill />
            <CgProfile />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
