import React, { useState } from 'react';
import './CheckboxOpenCourse.css';

function CheckboxOpenCourse() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className='turnleft-all'>
            <div className='DateAdmin-text'>
                <h >เลือกรายวิชาที่สามารถเปิดสอน</h>
            </div>    
                <div className='CheckboxOpenCourse-box'>
                    <div className='CheckboxOpenCourse-dropdown' >
                        <p style={{ fontFamily: 'kanit', fontWeight: 'bold' }}>หลักสูตร</p>
                        <select>
                            <option value='65'>65</option>
                            <option value='60'>60</option>
                            <option value='55'>55</option>
                        </select>

                        <button className='CheckboxOpenCourse-button'>เลือก</button>

                        <div>


                            <div className="CheckboxOpenCourse-check-block">
                            <p >เลือกรายการ</p>
                            <div className='leftleft'>
                            <input type="checkbox" id="selectAll" checked={isChecked} onChange={handleCheckboxChange} />
                                <span className="CheckboxOpenCourse-checkbox-text">เลือกทั้งหมด</span>
                            </div>
                            </div>

                            <div class="CheckboxOpenCourse-NewBox">
                                <p2> 1. รหัสวิชา  ชื่อวิชา  หน่วยวิชา  วิชาบังคับ/แกน/เลือก</p2>


                            </div>


                        </div>

                    </div>

                    <div>

                    </div>

                </div>
            </div>
       
    );
}

export default CheckboxOpenCourse;
