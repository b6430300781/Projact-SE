import React, { useState } from 'react';
import CrossIcon from '../assets/circle-xmark-regular.png';


const whiteBlockStyle = {
  backgroundColor: 'white',
  width: '500px',
  height: '300px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  border: '1px solid #ccc',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  zIndex: '9999',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const overlayStyle = {
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  zIndex: '9998',
};

const imageStyle = {
  width: '110px', 
  height: '110px', 
  marginTop: '20px',
};

const alertTextStyle1 = {
  marginTop: '20px',
  fontFamily: 'Kanit, sans-serif',
};

const alertTextStyle2 = {
  marginTop: '-20px',
  fontSize: '20px',
  fontFamily: 'Kanit, sans-serif',
};

const buttonStyle = {
  backgroundColor: '#127151',
  color: 'white',
  border: 'none',
  padding: '10px 40px',
  borderRadius: '5px',
  marginTop: '-5px',
  cursor: 'pointer',
  fontFamily: 'Kanit, sans-serif',
};

const AlertRoom= () => {
  const [isPopupVisible, setPopupVisible] = useState(true);

  const handlePopupClose = () => {
    setPopupVisible(false);
  };

  return isPopupVisible ? (
    <div id="popup">
      <div style={overlayStyle}></div>
      <div style={whiteBlockStyle}>
        <img src={CrossIcon} alt=" " style={imageStyle} />
        <h1 style={alertTextStyle1}>ไม่สามารถลงทะเบียนได้</h1>
        <h2 style={alertTextStyle2}>กรุณาเลือกเวลาและห้องเรียนใหม่</h2>
        <button style={buttonStyle} onClick={handlePopupClose}>ตกลง</button> 
      </div>
    </div>
  ) : null;
};

export default AlertRoom;

