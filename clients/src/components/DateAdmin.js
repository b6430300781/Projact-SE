import './DateAdmin.css';
import { ReactComponent as IconDate } from '../assets/fluent-mdl2--date-time.svg';
import { ReactComponent as IconTime } from '../assets/time_clock.svg'; // เพิ่ม IconTime
import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs'; // นำเข้า dayjs เพื่อใช้ในการจัดการกับวันเวลา
import customParseFormat from 'dayjs/plugin/customParseFormat'; // นำเข้า plugin สำหรับการ parse วันเวลาในรูปแบบที่กำหนดเอง
import { TimePicker } from 'antd'; // นำเข้า TimePicker จาก Ant Design
import SaveTime from './saveTime';
import Axios from 'axios'; // เพิ่ม import Axios เพื่อใช้งาน

// เพิ่ม plugin สำหรับการ parse วันเวลาในรูปแบบที่กำหนดเอง ในที่นี้คือ HH:mm:ss
dayjs.extend(customParseFormat);


function DateAdmin() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startTime, setStartTime] = useState(null); // เพิ่ม startTime
    const [endTime, setEndTime] = useState(null); // เพิ่ม endTime
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
            setTimeList([])
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
        
        console.log("save");
        console.log(dayS);
        console.log(dayF);
        console.log(timeS);
        console.log(timeF);
      };

      


      const handleStartDateChange = (date) => {
        setStartDate(date);
        setDayS(dayjs(date).format("YYYY-MM-DD")); // เก็บค่าวันที่เริ่มต้นลงในตัวแปร dayS
    };
    
    const handleEndDateChange = (date) => {
        setEndDate(date);
        setDayF(dayjs(date).format("YYYY-MM-DD")); // เก็บค่าวันที่สิ้นสุดลงในตัวแปร dayF
    };
    
    const handleStartTimeChange = (time) => {
        setStartTime(time);
        setTimeS(dayjs(time).format("HH:mm:ss")); // เก็บค่าเวลาเริ่มต้นลงในตัวแปร timeS
    };
    
    const handleEndTimeChange = (time) => {
        setEndTime(time);
        setTimeF(dayjs(time).format("HH:mm:ss")); // เก็บค่าเวลาสิ้นสุดลงในตัวแปร timeF
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
                                        // value={dayS}
                                        onChange={handleStartDateChange}
                                        dateFormat="yyyy-MM-dd"
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
                                        // value={dayF}
                                        onChange={handleEndDateChange}
                                        dateFormat="yyyy-MM-dd"
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
                                        selected={startTime}
                                        // value={timeS}
                                        onChange={handleStartTimeChange}
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
                                        selected={endTime}
                                        // value={timeF}
                                        onChange={handleEndTimeChange}
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
                <div style={{marginTop:'10px',marginLeft:'20em'}}>
                    <SaveTime onClick={handleButtonSave} />
                </div>
            </div>

        </div>
    );
}

export default DateAdmin;
