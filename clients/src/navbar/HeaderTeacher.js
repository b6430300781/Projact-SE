import React from "react";
import "./HeaderTeacher.css";
import LogoKU from '../assets/Logo.png';
import Logout from '../assets/logout2.png';

const HeaderTeacher = () => {
  return (
    <header className="HeaderTeacher-header">

      <div className="HeaderTeacher-Ed-text-font"></div>
      <img src={LogoKU} alt="KU Logo" className="KU-logo" />
      
      <p className="HeaderTeacher-text">ระบบลงทะเบียนการสอน มหาวิทยาลัยเกษตรศาสตร์</p>
      
      <div className = "HeaderTeacher-icon">
        {/* <img src="/noti.png" alt="Notification Icon" className="HeaderTeacher-notification-icon" /><p className="HeaderTeacher-text-icon">ติดต่อ</p> */}
        <span className="HeaderTeacher-Ed-text"></span>
        <img src={Logout} alt="Logout Icon" className="HeaderTeacher-logout-icon" /><p className="HeaderTeacher-text-icon">ออกจากระบบ</p>
      </div>


    </header>
  );
};

export default HeaderTeacher;
