import React, { useState } from 'react';
import './RoomImport.css';
import axios from 'axios';
import { FaFileLines } from "react-icons/fa6";
import { Link } from 'react-router-dom'; // เพิ่มการนำเข้า Link ที่นี่

function handleClick(event) {
  const button = event.currentTarget;

  // เพิ่ม animation class เมื่อคลิก
  button.classList.add('flash-animation');

  // ลบ animation class เมื่อ animation เสร็จสิ้น
  button.addEventListener('animationend', () => {
    button.classList.remove('flash-animation');
  });
}

function CheckRoom() {
  return (
    <div className='turnleft-all'>
      <h className='DateAdmin-text'>ตรวจสอบห้องเรียนที่สามารถเปิดสอนได้</h>
      <div className="course-table">
        <div className="column">
          <p>ปีการศึกษา/ภาคเรียน</p>
        </div>
        <div className="column">
          <div>
            <p>ห้องเรียน</p>
          </div>
        </div>
      </div>

      <div className="course-table1">
        <div className="column1">
          <p>2566/ต้น</p>
        </div>
        <div className="column2">
          {/* ใช้ Link เพื่อเปลี่ยนหน้า */}
          <Link to="/2566_ต้น" className="file-button" onClick={handleClick}>
            <FaFileLines style={{ fontSize: '35px',color:'black' }} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CheckRoom;
