import React, { useState } from "react";
import './ResultRegisEdu.css'; // นี่คือไฟล์ CSS ของคุณ

function ResultRegisEdu() {
    const tableData = [2566, 2565, 2564, 2563,2562,2561,2560,2559,2558,2557,'ภาคต้น','ภาคปลาย','ภาคฤดูร้อน'];
    const [selectedValue5, setSelectedValue5] = useState('');
    const [selectedValue6, setSelectedValue6] = useState('');
    const [selectedValue7, setSelectedValue7] = useState('');
    const handleDropdownChange5 = (event) => {
        setSelectedValue5(event.target.value);
    };

    const handleDropdownChange6 = (event) => {
        setSelectedValue6(event.target.value);
    };

    const handleDropdownChange7 = (event) => {
        setSelectedValue7(event.target.value);
    };

  return (
    <div className="top">
        <div className="text1">
            <a>ปีการศึกษา</a>
            <a>ภาคการศึกษา</a>
            <a>ห้อง</a>
            <a>เวลาเริ่มต้น</a>
            <a>เวลาสิ้นสุด</a>
        </div>
        <div className="dropdown">
            <div className='dropdown5'>
            <select value={selectedValue5} onChange={handleDropdownChange5}>
                <option value=""></option>
                <option value="2566">2566</option>
                <option value="2565">2565</option>
                <option value="2564">2564</option>
                <option value="2563">2563</option>
                <option value="2562">2562</option>
                <option value="2561">2561</option>
                <option value="2560">2560</option>
                <option value="2559">2559</option>
                <option value="2558">2558</option>
                <option value="2557">2557</option>
            </select>
            </div>
            <div className='dropdown6'>
            <select value={selectedValue6} onChange={handleDropdownChange6}>
                <option value=""></option>
                <option value="ภาคต้น">ภาคต้น</option>
                <option value="ภาคปลาย">ภาคปลาย</option>
                <option value="ภาคฤดูร้อน">ภาคฤดูร้อน</option>
            </select>
            </div>
            <div className='dropdown7'>
            <select value={selectedValue7} onChange={handleDropdownChange7}>
                <option value=""></option>
                <option value="15101">15101</option>
                <option value="15102">15102</option>
                <option value="15103">15103</option>
                <option value="LABCOM23">LABCOM23</option>
                <option value="DAT">DAT</option>
                <option value="2101">2101</option>
                <option value="2102">2102</option>
                <option value="LABEE">LABEE</option>
                <option value="LABCOM1">LABCOM1</option>
                <option value="LABCOM2">LABCOM2</option>
            </select>
            </div>
        </div>
    </div>
  );
}

export default ResultRegisEdu;
