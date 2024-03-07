import React, { useState } from 'react';
import './CheckboxOpenCourse.css';

function CheckboxOpenCourse() {
    const [isChecked, setIsChecked] = useState(false);
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        if (!isChecked) {
            // เมื่อติ๊กที่ "เลือกทั้งหมด"
            const allItemIds = document.querySelectorAll('.CheckboxOpenCourse-Item input[type="checkbox"]').forEach(checkbox => checkbox.checked = true);
            setSelectedItems(allItemIds);
        } else {
            // เมื่อยกเลิกติ๊กที่ "เลือกทั้งหมด"
            const allItemIds = document.querySelectorAll('.CheckboxOpenCourse-Item input[type="checkbox"]').forEach(checkbox => checkbox.checked = false);
            setSelectedItems([]);
        }
    };

    const handleItemCheckboxChange = (e) => {
        const itemId = e.target.id;
        if (e.target.checked) {
            setSelectedItems(prevSelectedItems => [...prevSelectedItems, itemId]);
        } else {
            setSelectedItems(prevSelectedItems => prevSelectedItems.filter(id => id !== itemId));
        }
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
 <div>
 <div className='CheckboxOpenCourse-Item'>
    <input type='checkbox' id='checkText2' />
    <p className='checkbox-text'>5. 65	03603352	Laws and Ethics in Information Technology	3(3-0-6)	วิชาบังคับ</p>
    <p className='checkbox-text CheckboxOpenCourse-status4'>สถานะ:</p>
    </div>
 </div>

 <div>
 <div className='CheckboxOpenCourse-Item'>
    <input type='checkbox' id='checkText2' />
    <p className='checkbox-text'>6. 65	03603251	Database Systems	3(3-0-6)	วิชาบังคับ
</p>
    <p className='checkbox-text CheckboxOpenCourse-status5'>สถานะ:</p>
    </div>
 </div>

 <div>
 <div className='CheckboxOpenCourse-Item'>
    <input type='checkbox' id='checkText2' />
    <p className='checkbox-text'>7. 65	03603252	Database Systems Laboratory	1(0-3-2)	วิชาบังคับ</p>
    <p className='checkbox-text CheckboxOpenCourse-status6'>สถานะ:</p>
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
