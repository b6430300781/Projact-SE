import React from "react";
import "./HeaderEdu.css";

const HeaderEdu = () => {
  return (
    <header className="header">
      <div className="Ed-text-font">
        <p>ระบบลงทะเบียนการสอน มหาวิทยาลัยเกษตรศาสตร์</p>
      </div>
      <img src="/noti.png" alt="Notification Icon" className="notification-icon" />
      <span className="Ed-text">ฝ่ายการศึกษา</span>
      <img src="/logout.png" alt="Logout Icon" className="logout-icon" />
    </header>
  );
};

export default HeaderEdu;
