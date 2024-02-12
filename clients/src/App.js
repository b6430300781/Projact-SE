import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminNoti from '../src/pageAdmin/AdminNoti';
import NavbarAdmin from './navbar/NavbarAdmin';
import HeaderAdmin from './navbar/HeaderAdmin';
import AdminTimeDate from './pageAdmin/AdminTimeDate';
import AdminUser from './pageAdmin/AdminUser';

function App() {
  return (
    <Router>
      <div>
        <NavbarAdmin />
        <HeaderAdmin />
        <Routes>
          <Route exact path="/ประกาศ" element={<AdminNoti />} />
          <Route exact path="/กำหนดการ" element={<AdminTimeDate />} />
          <Route exact path="/ข้อมูลผู้ใช้งาน" element={<AdminUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
