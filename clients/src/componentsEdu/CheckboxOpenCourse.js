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
                        <div>
                        <div>
  <div className='CheckboxOpenCourse-Item'>
    <input type='checkbox' id='checkText' />
    <p className='checkbox-text'>1. รหัสวิชา ชื่อวิชา หน่วยวิชา วิชาบังคับ/แกน/เลือก</p>
    <p className='checkbox-text CheckboxOpenCourse-status'>สถานะ:</p>
  </div>
 
  <div>
  <div className='CheckboxOpenCourse-Item'>
    <input type='checkbox' id='checkText2' />
    <p className='checkbox-text'>2. 65  03603111  Programming Fundamentals I  3(2-3-6)  วิชาแกน</p>
    <p className='checkbox-text CheckboxOpenCourse-status1'>สถานะ:</p>
  </div>
 <div>
 <div className='CheckboxOpenCourse-Item'>
    <input type='checkbox' id='checkText2' />
    <p className='checkbox-text'>3. 65	03603112	Programming Fundamentals II	3(2-3-6)	วิชาแกน</p>
    <p className='checkbox-text CheckboxOpenCourse-status2'>สถานะ:</p>
    </div>
 </div>
 <div>
 <div className='CheckboxOpenCourse-Item'>
    <input type='checkbox' id='checkText2' />
    <p className='checkbox-text'>4. 65	03603171	Introduction to Computer Engineering and Informatics	3(3-0-6)	วิชาบังคับ</p>
    <p className='checkbox-text CheckboxOpenCourse-status3'>สถานะ:</p>
    </div>
 </div>
</div>
</div>


            </div>
                                

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
