import React from "react";
import "./HeaderEdu.css";

const HeaderEdu = () => {
  return (
    <header className="HeaderEdu-header">
      <div className="HeaderEdu-Ed-text-font">
        <p>ระบบลงทะเบียนการสอน มหาวิทยาลัยเกษตรศาสตร์</p>
      </div>
      <img src="/noti.png" alt="Notification Icon" className="HeaderEdu-notification-icon" />
      <span className="HeaderEdu-Ed-text">ฝ่ายการศึกษา</span>
      <img src="/logout.png" alt="Logout Icon" className="HeaderEdu-logout-icon" />
    </header>
  );
};

export default HeaderEdu;
