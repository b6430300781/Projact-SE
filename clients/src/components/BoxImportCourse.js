import React, { useState } from 'react';
import './BoxImportCourse.css'; // นี่คือไฟล์ CSS ของคุณ
import { FaFileLines } from "react-icons/fa6";
import { Link } from 'react-router-dom'; // เพิ่มการนำเข้า Link ที่นี่
import UploadEdu from '../Wawa/Upload/UploadEdu';
import InputEdu from '../Wawa/Input/InputEdu';


function handleClick(event) {
    const button = event.currentTarget;

    // เพิ่ม animation class เมื่อคลิก
    button.classList.add('flash-animation');

    // ลบ animation class เมื่อ animation เสร็จสิ้น
    button.addEventListener('animationend', () => {
        button.classList.remove('flash-animation');
    });
}

function BoxImportCourse() {
    // สร้างข้อมูลตาราง
    const tableData = [66, 65, 64, 63, 62, 61, 60, 59, 58, 57, 'วิชาบังคับ', 'วิชาเลือก', 'วิชาเสรี', 1, 2, 3, 4];
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [selectedValue3, setSelectedValue3] = useState('');
    const [selectedValue4, setSelectedValue4] = useState('');

    const handleDropdownChange1 = (event) => {
        setSelectedValue1(event.target.value);
    };

    const handleDropdownChange2 = (event) => {
        setSelectedValue2(event.target.value);
    };

    const handleDropdownChange3 = (event) => {
        setSelectedValue3(event.target.value);
    };
    const handleDropdownChange4 = (event) => {
        setSelectedValue4(event.target.value);
    };

    return (

        <div className='scrollable-content'>
            <div className='bg-gray'>
                <div className='turnleft-all'>
                    <div className='DateAdmin-text'>
                        <h>นำข้อมูลรายวิชาเข้าสู่ระบบ</h>
                    </div>

                    <div className="container">
                        <div className="top-left">
                            <p>นำข้อมูลรายวิชาเข้าสู่ระบบ</p>
                        </div>
                        <div className="bottom-rectangle">
                            <r style={{ color: '#8C3941' }}>นำเข้ารายวิชา</r>
                            <g style={{ color: '#838383' }}>(*ครั้งละ 1 ไฟล์)</g>
                            <b style={{ color: '#000000' }}>หลักสูตร</b>
                            <div className='dropdown1'>
                                <select value={selectedValue1} onChange={handleDropdownChange1}>
                                    <option value=""></option>
                                    <option value="66">ปี 66</option>
                                    <option value="65">ปี 65</option>
                                    <option value="64">ปี 64</option>
                                    <option value="63">ปี 63</option>
                                    <option value="62">ปี 62</option>
                                    <option value="61">ปี 61</option>
                                    <option value="60">ปี 60</option>
                                    <option value="59">ปี 59</option>
                                    <option value="58">ปี 58</option>
                                    <option value="57">ปี 57</option>
                                </select>
                            </div>
                            <div className='test'>
                                <UploadEdu />
                                <InputEdu/>
                            </div>
                            <w style={{ color: '#8C3941' }}>เพิ่มรายวิชา</w>
                            <t style={{ color: '#838383' }}>(*ครั้งละ 1 วิชา)</t>
                            <f style={{ color: '#000000' }}>หลักสูตร</f>
                            <a style={{ color: '#000000' }}>หมวดวิชา</a>
                            <c style={{ color: '#000000' }}>หน่วยกิต</c>
                            {/* <x style={{ color: '#000000' }}>รหัสวิชา</x>
                            <y style={{ color: '#000000' }}>ชื่อวิชา</y> */}
                            <div className='test'>
                                
                            </div>
                            <p style={{ color: '#8C3941' }}>รายวิชาที่เปิดสอน</p>
                            
                            <div className='dropdown2'>
                                <select value={selectedValue2} onChange={handleDropdownChange2}>
                                    <option value=""></option>
                                    <option value="66">ปี 66</option>
                                    <option value="65">ปี 65</option>
                                    <option value="64">ปี 64</option>
                                    <option value="63">ปี 63</option>
                                    <option value="62">ปี 62</option>
                                    <option value="61">ปี 61</option>
                                    <option value="60">ปี 60</option>
                                    <option value="59">ปี 59</option>
                                    <option value="58">ปี 58</option>
                                    <option value="57">ปี 57</option>
                                </select>
                            </div>
                            <div className='dropdown3'>
                                <select value={selectedValue3} onChange={handleDropdownChange3}>
                                    <option value=""></option>
                                    <option value="วิชาบังคับ">วิชาบังคับ</option>
                                    <option value="วิชาเลือก">วิชาเลือก</option>
                                    <option value="วิชาเสรี">วิชาเสรี</option>

                                </select>
                            </div>
                            <div className='dropdown4'>
                                <select value={selectedValue4} onChange={handleDropdownChange4}>
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>

                                </select>
                            </div>
                        </div> {/* เพิ่มกล่องสี่เหลี่ยม */}

                        <div className="course-table">
                            <div className="column">
                                <p>หลักสูตร</p>
                                {/* ใส่ข้อมูลที่ต้องการแสดงในคอลัมนี้ */}
                            </div>
                            <div className="column">
                                <div>
                                    <p>รายวิชาที่เปิดสอน</p>
                                </div>
                                {/* ใส่ข้อมูลที่ต้องการแสดงในคอลัมนี้ */}
                            </div>
                        </div>


                        {/* เพิ่มตารางอีก 3 ตาราง */}
                        <div className="course-table1">
                            <div className="column1">
                                <p>66</p>
                                {/* ใส่ข้อมูลที่ต้องการแสดงในคอลัมนี้ */}
                            </div>
                            <div className="column2">
                                <Link to="/หลักสูตรปี_66" className="file-button" onClick={handleClick}>
                                    <FaFileLines style={{ fontSize: '35px', color: 'black' }} />
                                </Link>
                                {/* ใส่ข้อมูลที่ต้องการแสดงในคอลัมนี้ */}
                            </div>
                        </div>

                        <div className="course-table2">
                            <div className="column3">
                                <p>65</p>
                                {/* ใส่ข้อมูลที่ต้องการแสดงในคอลัมนี้ */}
                            </div>
                            <div className="column4">
                                <Link to="/หลักสูตรปี_65" className="file-button" onClick={handleClick}>
                                    <FaFileLines style={{ fontSize: '35px', color: 'black' }} />
                                </Link>
                                {/* ใส่ข้อมูลที่ต้องการแสดงในคอลัมนี้ */}
                            </div>
                        </div>

                        <div className="course-table3">
                            <div className="column5">
                                <k>64</k>
                                {/* ใส่ข้อมูลที่ต้องการแสดงในคอลัมนี้ */}
                            </div>
                            <div className="column6">
                                <Link to="/หลักสูตรปี_64" className="file-button" onClick={handleClick}>
                                    <FaFileLines style={{ fontSize: '35px', color: 'black' }} />
                                </Link>
                                {/* ใส่ข้อมูลที่ต้องการแสดงในคอลัมนี้ */}
                            </div>
                        </div>
                        <div className="course-table4">
                            <div className="column7">
                                <p>63</p>
                                {/* ใส่ข้อมูลที่ต้องการแสดงในคอลัมนี้ */}
                            </div>
                            <div className="column8">
                                <Link to="/หลักสูตรปี_63" className="file-button" onClick={handleClick}>
                                    <FaFileLines style={{ fontSize: '35px', color: 'black' }} />
                                </Link>
                                {/* ใส่ข้อมูลที่ต้องการแสดงในคอลัมนี้ */}
                            </div>
                        </div>
                    </div>

                </div>

            </div>



        </div>

    );
}

export default BoxImportCourse;
