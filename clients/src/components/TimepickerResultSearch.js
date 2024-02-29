import React, { useState } from 'react';
import './Timepicker.css';
import { TimePicker } from 'antd'; // นำเข้าไลบรารี TimePicker
import dayjs from 'dayjs'; // นำเข้าไลบรารี dayjs

function TimePickerRe() {
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
                        <TimePicker
                            selected={startTime}
                            onChange={handleStartTimeChange}
                            defaultOpenValue={dayjs('00:00', 'HH:mm')}
                            showNow={false}
                            format="HH:mm"
                            className="custom-time-picker4"
                        />
                    </div>


                  
            </div>
        </div>
    );
}

export default TimePickerRe;
