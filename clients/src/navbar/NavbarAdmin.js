import React ,{ useState }from 'react';
import './NavbarAdmin.css';
import { Link } from 'react-router-dom';

const NavbarAdmin = () => {
  const [selectItem,setSelectItem] = useState(null);

  const handleItemClick = (index) => {
    setSelectItem((prevIndex) => (prevIndex === index ? null : index));
  };
  
  return (
    <nav className="navbar">

      <div className="navbar-left">
        <img src="profile.png" alt="" />
        <span>admin<br />: ######</span>
      </div>

      <div className='nav-left'>
        <ul className="navbar-nav">
        <li className={`nav-item ${selectItem === 0 ? 'selected' : ''}` }
        onClick={() => handleItemClick(0)}>
            <img src="index.png" style={{ marginLeft: "20px" }} alt="index" />
            <Link to="/" className="nav-link">
              ประกาศ
            </Link>
          </li>
          <li className={`nav-item ${selectItem === 1 ? 'selected' : ''}` }
        onClick={() => handleItemClick(1)}>
            <img src="time.png" style={{ marginLeft: "20px" }} alt="time" />
            <Link to="/กำหนดการ" className="nav-link">
              กำหนดการ
            </Link>
          </li>
          <li className={`nav-item ${selectItem === 2 ? 'selected' : ''}` }
        onClick={() => handleItemClick(2)}>
            <img src="user.png" style={{ marginLeft: "20px" }} alt="user" />
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