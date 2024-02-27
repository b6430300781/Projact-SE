import React from 'react';
import './NavbarTeacher.css';
import { LuPencilLine } from "react-icons/lu";
import pen from '../assets/pen.svg';
import glass from '../assets/glass.svg';



const NavbarTeacher = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src="profile.png" alt="" />
        <span>อาจารย์<br />: สมเกียรติ ใจดี</span>
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
          <img src={pen} alt="pen" />
            <a href="/ลงทะเบียนรายวิชา" className="nav-link">
              ลงทะเบียนรายวิชา
            </a>
          </li>
          <li className="nav-item">
            <img src="resu.jpg" alt="user" />
            <a href="/ผลการลงทะเบียนอาจารย์" className="nav-link">
              ผลการลงทะเบียน
            </a>
          </li>
          <li className="nav-item">
            <img src="subject.jpg" alt="user" />
            <a href="/รายวิชาที่สามารถเปิดสอน" className="nav-link">
              รายวิชาที่สามารถเปิดสอน
            </a>
          </li>
          <li className="nav-item">
            <img src="room.jpg" alt="user" />
            <a href="/ห้องเรียนทั้งหมดอาจารย์" className="nav-link">
              ห้องเรียนทั้งหมด
            </a>
          </li>
          <li className="nav-item">
          <img src={glass} alt="glass" />
            <a href="/ตรวจสอบผลการลงทะเบียน" className="nav-link">
              ตรวจสอบผลการลงทะเบียน
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarTeacher;
