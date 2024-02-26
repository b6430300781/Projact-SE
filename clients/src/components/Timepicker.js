import React, { useState } from 'react';
import './Timepicker.css';
import { TimePicker } from 'antd'; // นำเข้าไลบรารี TimePicker
import dayjs from 'dayjs'; // นำเข้าไลบรารี dayjs

function TimePickerTa() {
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);

    const handleStartTimeChange = (time) => {
        setStartTime(time);
    };

    const handleEndTimeChange = (time) => {
        setEndTime(time);
    };

    return (
        <div>
            <div>
                <div>
                    <div>
                        <p1 className="timepicker-text">เริ่มต้น</p1>
                        <TimePicker
                            selected={startTime}
                            onChange={handleStartTimeChange}
                            defaultOpenValue={dayjs('00:00', 'HH:mm')}
                            showNow={false}
                            format="HH:mm"
                            className="custom-time-picker2"
                        />
                    </div>


                    <div>
                        <p1 className="timepicker-text">สิ้นสุด</p1>
                        <TimePicker
                            selected={endTime}
                            onChange={handleEndTimeChange}
                            defaultOpenValue={dayjs('00:00', 'HH:mm')}
                            showNow={false}
                            format="HH:mm"
                            className="custom-time-picker3"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TimePickerTa;
