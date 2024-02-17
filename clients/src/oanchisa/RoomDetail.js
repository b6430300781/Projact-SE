import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function RoomDetail() {
  const { building, room, Quantity } = useParams(); // กำหนดตัวแปร building และ room จาก useParams()
  const [roomData, setRoomData] = useState([]); // กำหนดตัวแปร roomData ด้วย useState()

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/room`);
      setRoomData(response.data); // ตั้งค่าข้อมูลห้องจาก API
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  

  return (
    <div className='turnleft-all'>
      <h className='DateAdmin-text'>ห้องเรียนที่สามารถเปิดสอนได้</h>
      <div className="course-table">
        <div className="row">
          <h3>ตึก</h3>
          {roomData.map((item, index) => (
            <div key={index}>
              <p>{item.building}</p>
            </div>
          ))}
        </div>
        <div className="row">
          <div>
            <h3>ห้องเรียน</h3>
            {roomData.map((item, index) => (
              <div key={index}>
                <p>{item.room}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="row">
          <div>
            <h3>จำนวนที่นั่ง</h3>
            {roomData.map((item, index) => (
              <div key={index}>
                <p>{item.Quantity}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoomDetail;
