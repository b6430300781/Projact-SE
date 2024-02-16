import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminNoti from '../src/pageAdmin/AdminNoti';
import NavbarAdmin from './navbar/NavbarAdmin';
import HeaderAdmin from './navbar/HeaderAdmin';
import AdminTimeDate from './pageAdmin/AdminTimeDate';
import AdminUser from './pageAdmin/AdminUser';
/////////////
import NavbarEdu from './navbar/NavbarEdu';
import HeaderEdu from './navbar/HeaderEdu';
import EduNoti from './pageEdu/EduNoti';
import RegisResults from './pageEdu/RegisResults';
import CoursesTaught from './pageEdu/CoursesTaught';
import AllRoom from './pageEdu/AllRoom';
import BoxNoti2 from './oanchisa/BoxNoti2';




function App() {
  return (
    // <Router>
    //   <div>
    //     <NavbarEdu />
    //     <HeaderEdu />
    //     <Routes>
    //       <Route exact path="/" element={<EduNoti />} />
    //       <Route exact path="/ผลการลงทะเบียน" element={<RegisResults />} />
    //       <Route exact path="/รายวิชาที่เปิดสอน" element={<CoursesTaught />} />
    //       <Route exact path="/ห้องเรียนทั้งหมด" element={<AllRoom />} />
    //     </Routes>
    //   </div>
    // </Router>

    
    // <div>
    //   <NavbarEdu />
    //   <HeaderEdu />
    // </div>

  );
}

export default App;
