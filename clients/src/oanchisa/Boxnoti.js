import React, { useState } from 'react';
import plus from '../assets/plus.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Boxnoti.css';
import axios from 'axios';

function Box() {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleButtonClick = () => {
    setPopupVisible(true);
  };

  const handlePopupClose = () => {
    setPopupVisible(false);
    setInputValue('');
  };

  const handleSaveButtonClick = async() => {
    try {
      const response = await axios.post('http://localhost:3001/box1', { inputValue });
      const savedData = response.data; // ข้อมูลที่ได้รับจากเซิร์ฟเวอร์
      console.log('Saved value:', savedData);
      setBoxes((prevBoxes) => [{ text: inputValue }, ...prevBoxes]);
      setInputValue('');
      handlePopupClose();
    } catch (error) {
      console.error('Error saving data:', error);
      // ในกรณีเกิดข้อผิดพลาดในการบันทึกข้อมูล
      // คุณสามารถทำการจัดการข้อผิดพลาดตามที่คุณต้องการได้ที่นี่
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted Value:', inputValue);
    handleSaveButtonClick();
    handlePopupClose();
    setInputValue('');
  };

  const handleDeleteBox = async (index) => {
  try {
    // ส่งคำร้องขอลบข้อมูลไปยังเซิร์ฟเวอร์
    await axios.delete(`http://localhost:3001/box1/${index}`);
    
    // หลังจากลบข้อมูลเรียบร้อยแล้ว อัปเดต UI โดยการลบกล่องที่ถูกคลิกออกไป
    setBoxes((prevBoxes) => prevBoxes.filter((_, i) => i !== index));
  } catch (error) {
    console.error('Error deleting data:', error);
    // ในกรณีเกิดข้อผิดพลาดในการลบข้อมูล
    // คุณสามารถทำการจัดการข้อผิดพลาดตามที่คุณต้องการได้ที่นี่
  }
};

  const newBoxStyle = {
    width: '1070px',
    height: '150px',
    backgroundColor: '#127151',
    border: '1px solid #127151',
    borderStyle: 'dashed',
    borderRadius: '40px',
    display: 'flex',
    alignItems: 'center', // เพิ่มบรรทัดนี้
    position: 'relative',
    top: '10px', // หรือค่าที่ต้องการให้ top คงที่
    left: '136px',
    flexDirection: 'row',
    margin: '10px',
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column-reverse', // สลับลำดับของคอลัมน์
    alignItems: 'center',
  };

  return (
    <div className="App">
      <header className="App-header" style={containerStyle}>
        <div style={{ display: 'flex', justifyContent: 'center',backgroundColor:'black' }}>
          <button className='box' onClick={handleButtonClick} style={{ marginTop: '10px' }}>
            <img src={plus} className="plus" alt="plus" />
            <p className="text-under-img">เพิ่มประกาศใหม่</p>
          </button>
        </div>
        {isPopupVisible && (
          <div className="popup" style={{ width: '750px', height: '600px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <form onSubmit={handleFormSubmit} style={{ width: '100%' }}>
              <div className="form-group" style={{ width: '100%' }}>
                <input
                  type="text"
                  className="form-control"
                  id="inputField"
                  value={inputValue}
                  onChange={handleInputChange}
                  style={{ width: '550px', height: '360px', wordWrap: 'break-word' }}
                />
                <div className="button-container">
                  <button type="submit" className="btn btn-primary" onClick={handleSaveButtonClick}>Submit</button>
                  <button onClick={handlePopupClose} className="btn btn-secondary ml-auto">Cancel</button>
                </div>
              </div>
            </form>
          </div>
        )}

        {/* Render Box ที่ถูกเพิ่มขึ้นมา */}
        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          {boxes.map((box, index) => (

            <div key={box.id} className='box' style={newBoxStyle}>
              {/* ไอคอนลบ */}
              <span
                className="delete-icon"
                style={{ position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', color: 'white' }}
                onClick={() => handleDeleteBox(index)}
              >
                {/* ตัวอย่าง SVG สีแดง */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </span>
              <p>{box.text}</p>
            </div>
          ))}

        {/* แสดงข้อความที่ได้จาก input หลังจากกด Submit */}
        {inputValue && !boxes.length && (
          <div className='box' style={{ ...newBoxStyle, color: 'red' }}>
            <p>{inputValue}</p>
          </div>
        )}</div>
      </header>
    </div>
  );
}

export default Box;