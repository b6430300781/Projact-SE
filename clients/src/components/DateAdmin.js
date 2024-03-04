import React, { useState } from 'react';
import './DateAdmin.css';
import { ReactComponent as IconDate } from '../assets/fluent-mdl2--date-time.svg';
import { ReactComponent as IconTime } from '../assets/time_clock.svg';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { TimePicker } from 'antd';
import SaveTime from './saveTime';
import Axios from 'axios';

dayjs.extend(customParseFormat);

function DateAdmin() {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [dayS, setDayS] = useState("");
    const [timeS, setTimeS] = useState("");
    const [dayF, setDayF] = useState("");
    const [timeF, setTimeF] = useState("");

    const handleButtonSave = () => {
        Axios.post("http://localhost:3001/time1", {
          dayS: dayS,
          timeS: timeS,
          dayF: dayF,
          timeF: timeF,
        }).then(response => {
            console.log(response.data);
            // ทำการรีเซ็ตค่าในฟอร์มหลังจากส่งข้อมูลเรียบร้อย
            setStartDate(null);
            setEndDate(null);
            setStartTime(null);
            setEndTime(null);
            setDayS("");
            setTimeS("");
            setDayF("");
            setTimeF("");
            alert("บันทึกเวลาเรียบร้อยแล้ว");
            window.location.reload();
        })
        .catch(error => {
            console.error(error);

            alert("ข้อมูลไม่ถูกต้อง");
        });
        console.log("save");
        console.log(dayS);
        console.log(dayF);
        console.log(timeS);
        console.log(timeF);
        
        
    };

    const handleStartDateChange = (date) => {
        setStartDate(date);
        setDayS(dayjs(date).format("YYYY-MM-DD"));
    };
    
    const handleEndDateChange = (date) => {
        setEndDate(date);
        setDayF(dayjs(date).format("YYYY-MM-DD"));
    };
    
    const handleStartTimeChange = (time) => {
        setStartTime(time);
        setTimeS(dayjs(time).format("HH:mm:ss"));
    };
    
    const handleEndTimeChange = (time) => {
        setEndTime(time);
        setTimeF(dayjs(time).format("HH:mm:ss"));
    };

    return (
        <div className='turnleft-all'>
            <h className='DateAdmin-text' >ตั้งเวลาการใช้งานระบบ</h>
            <div className='custom-date-picker-all2'>
                <div className='Down-picker'>
                    <h className='text-header' >ระบบลงทะเบียน</h>
                    <div className='line'></div>
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
                                        onChange={handleStartTimeChange}
                                        defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
                                        showNow={false}
                                        format="HH:mm:ss"
                                        suffixIcon={<i className="fas fa-wifi" />}
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
