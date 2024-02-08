import React from "react";
import "./Header.css";

const HeaderAdmin = () => {
  return (
    <header className="header">
      <img src="/noti.png" alt="Notification Icon" className="notification-icon" />
      <span className="admin-text">admin</span>
      <img src="/logout.png" alt="Logout Icon" className="logout-icon" />
    </header>
  );
};

export default HeaderAdmin;
