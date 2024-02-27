import React from 'react';
import './NavbarEdu.css';

const NavbarEdu = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="profile.png" alt="" />
        <span>ฝ่ายการศึกษา<br />: ######</span>
      </div>
      <div className='nav-turnlefts'>
        <ul className="navbar-nav">
          <li className="nav-item">
            <img src="index.png" alt="index" />
            <a href="/" className="nav-link">
              ประกาศ
            </a>
          </li>
          <li className="nav-item">
            <img src="resu.jpg" alt="time" />
            <a href="/ผลการลงทะเบียน" className="nav-link">
              ผลการลงทะเบียน
            </a>
          </li>
          <li className="nav-item">
            <img src="subject.jpg" alt="user" />
            <a href="/รายวิชาที่เปิดสอน" className="nav-link">
              รายวิชาที่เปิดสอน
            </a>
          </li>
          <li className="nav-item">
            <img src="room.jpg" alt="user" />
            <a href="/ห้องเรียนทั้งหมด" className="nav-link">
              ห้องเรียนทั้งหมด
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarEdu;
