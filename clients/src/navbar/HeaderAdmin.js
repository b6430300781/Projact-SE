import React from "react";
import "./HeaderAdmin.css";

const HeaderAdmin = () => {
  return (
    <header className="HeaderAdmin-header">
      <img src="/noti.png" alt="Notification Icon" className="HeaderAdmin-notification-icon" />
      <span className="HeaderAdmin-HeaderAdmin-admin-text">admin</span>
      <img src="/logout.png" alt="Logout Icon" className="HeaderAdmin-logout-icon" />
    </header>
  );
};

export default HeaderAdmin;
