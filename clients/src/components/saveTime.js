import React, { useState } from 'react';
import { FaRegSave } from "react-icons/fa";
import Axios from "axios";
import DateAdmin from './DateAdmin';

const SaveTime = () => {
  const [timeList, setTimeList] = useState([]);
  const [dayS, setDayS] = useState(""); // ประกาศตัวแปร dayS
  const [timeS, setTimeS] = useState(""); // ประกาศตัวแปร timeS
  const [dayF, setDayF] = useState(""); // ประกาศตัวแปร dayF
  const [timeF, setTimeF] = useState(""); // ประกาศตัวแปร timeF

  const handleButtonSave = () => {
    Axios.post("http://localhost:3001/time1", {
      dayS: dayS,
      timeS: timeS,
      dayF: dayF,
      timeF: timeF,
    }).then(response => {
      console.log(response.data);
      // ทำการรีเซ็ตค่าในฟอร์มหลังจากส่งข้อมูลเรียบร้อย
      setDayS("");
      setTimeS("");
      setDayF("");
      setTimeF("");
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'start', marginTop: 'auto' }}>
      <button
        onClick={handleButtonSave}
        className='btn'
        style={{ backgroundColor: '#127151', color: 'white' }}
      >
        <FaRegSave style={{ fontSize: '20px', marginRight: '3px'}} />
        SAVE
      </button>
    </div>
  );
};

export default SaveTime;
