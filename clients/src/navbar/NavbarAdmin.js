import React from 'react';
import './NavbarAdmin.css';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
  
  return (
    <nav className="navbar">

      <div className="navbar-left">
        <img src="profile.png" alt="" />
        <span>:admin<br />######</span>
      </div>

      <div className='nav-turnlefts'>
        <ul className="navbar-nav">
          <li className="nav-item">
            <img src="index.png" alt="index" />
            <Link to="/" className="nav-link">
              ประกาศ
            </Link>
          </li>
          <li className="nav-item">
            <img src="time.png" alt="time" />
            <Link to="/กำหนดการ" className="nav-link">
              กำหนดการ
            </Link>
          </li>
          <li className="nav-item">
            <img src="user.png" alt="user" />
            <Link to="/ข้อมูลผู้ใช้งาน" className="nav-link">
              ข้อมูลผู้ใช้งาน
            </Link>
          </li>
        </ul>

      </div>


    </nav>
  );
};

export default NavbarAdmin;