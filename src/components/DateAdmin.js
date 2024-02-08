import './DateAdmin.css';
import { ReactComponent as IconDate } from '../assets/fluent-mdl2--date-time.svg';
import { ReactComponent as IconTime } from '../assets/time_clock.svg'; // เพิ่ม IconTime
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs'; // นำเข้า dayjs เพื่อใช้ในการจัดการกับวันเวลา
import customParseFormat from 'dayjs/plugin/customParseFormat'; // นำเข้า plugin สำหรับการ parse วันเวลาในรูปแบบที่กำหนดเอง
import { TimePicker } from 'antd'; // นำเข้า TimePicker จาก Ant Design


// เพิ่ม plugin สำหรับการ parse วันเวลาในรูปแบบที่กำหนดเอง ในที่นี้คือ HH:mm:ss
dayjs.extend(customParseFormat);

// ฟังก์ชัน onChange ที่ถูกเรียกเมื่อมีการเปลี่ยนแปลงใน TimePicker
const onChange = (time, timeString) => {
    console.log(time, timeString);
};


function DateAdmin() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startTime, setStartTime] = useState(null); // เพิ่ม startTime
    const [endTime, setEndTime] = useState(null); // เพิ่ม endTime

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleStartTimeChange = (time) => { // เพิ่มฟังก์ชัน handleStartTimeChange
        setStartTime(time);
    };

    const handleEndTimeChange = (time) => { // เพิ่มฟังก์ชัน handleEndTimeChange
        setEndTime(time);
    };

    return (
        <div>
            <h className='DateAdmin-text' >ตั้งเวลาการใช้งานระบบ</h>
            <div className='custom-date-picker-all2'>
                <div className='Down-picker'>
                    <h className='text-header' >ระบบลงทะเบียน</h>
                    <div className='line'>
                        
                    </div>

                    <div >
                        <p className='DateAdmin-text'>วันที่เริ่มต้น</p>
                        <p className='DateAdmin-text2'>เวลาการใช้งาน</p>

                    </div>



                    <div className='column-date'>

                        <div>
                            <div className='custom-date-picker-all'>
                                <div>
                                    <p className='DateAdmin-text3'>เริ่มต้น</p>
                                </div>
                                <div className="custom-date-picker-container">
                                    <IconDate className="icon-date" />
                                    <DatePicker
                                        selected={startDate}
                                        onChange={handleStartDateChange}
                                        dateFormat="dd/MM/yyyy"
                                        showYearDropdown
                                        showMonthDropdown
                                        dropdownMode="select"
                                        placeholderText="เลือกวันที่เริ่มต้น"
                                        className="custom-date-picker"
                                    />
                                </div>
                                <div className='Down-picker'>
                                    <p className='DateAdmin-text3'>สิ้นสุด</p>
                                </div>
                                <div className="custom-date-picker-container">
                                    <IconDate className="icon-date" />
                                    <DatePicker
                                        selected={endDate}
                                        onChange={handleEndDateChange}
                                        dateFormat="dd/MM/yyyy"
                                        showYearDropdown
                                        showMonthDropdown
                                        dropdownMode="select"
                                        placeholderText="เลือกวันที่สิ้นสุด"
                                        className="custom-date-picker"
                                    />
                                </div>
                            </div>
                        </div>


                        <div className='custom-date-picker-all2' >
                            <p className='DateAdmin-text3'>เริ่มต้น</p>


                            <div >
                                <div className="custom-date-picker-container" >
                                    <IconTime className="icon-date" />

                                    <TimePicker
                                        onChange={onChange}
                                        defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                                        showNow={false} // ไม่แสดงตัวเลือก "เวลาปัจจุบัน"
                                        format="HH:mm:ss" // กำหนดรูปแบบการแสดงผลของเวลา
                                        suffixIcon={<i className="fas fa-wifi" />} // เพิ่มไอคอน WiTime4
                                        className="custom-time-picker"
                                    />
                                </div>
                                <div className='Down-picker'>
                                    <p className='DateAdmin-text3'>สิ้นสุด</p>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <IconTime className="icon-date" />

                                    <TimePicker
                                        onChange={onChange}
                                        defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                                        showNow={false}
                                        format="HH:mm:ss"
                                        suffixIcon={<i className="fas fa-wifi" />}

                                        className="custom-time-picker"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default DateAdmin;