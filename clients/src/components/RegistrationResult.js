import React from 'react';
import newSearchIcon from '../assets/newsearch.png'; // นำเข้าไฟล์รูปภาพ

class RegistrationResult extends React.Component {
  // สร้างฟังก์ชัน handleSearch
  handleSearch = () => {
    // เพิ่มโค้ดการทำงานเมื่อกดปุ่มค้นหา
    console.log('Searching...'); // เช่น ให้แสดงข้อความ "Searching..." ใน console
  }

  // เพิ่มฟังก์ชัน handleAdvancedSearch
  handleAdvancedSearch = () => {
    // เพิ่มโค้ดการทำงานเมื่อกดปุ่มค้นหาอย่างละเอียด
    console.log('Advanced Searching...'); // เช่น ให้แสดงข้อความ "Advanced Searching..." ใน console
  }

  render() {
    return (
      <div className='turnleft-all'>
        <h1 style={{ fontSize: '20px' }}>ผลการลงทะเบียน</h1>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '30px', width: '150px' }}>
            <h2 style={{ fontSize: '15px' }}>วัน </h2>
            <select style={{ borderRadius: '5px', border: '2px solid black', padding: '5px', color: 'black', width: '100%' }}>
              <option></option>
              <option>จันทร์</option>
              <option>อังคาร</option>
              <option>พุธ</option>
              <option>พฤหัสบดี</option>
              <option>ศุกร์</option>
              <option>เสาร์</option>
              <option>อาทิตย์</option>
              {/* เพิ่มตัวเลือกของวันที่ต้องการ */}
            </select>
          </div>
          <div style={{ marginRight: '30px', width: '150px' }}>
            <h2 style={{ fontSize: '15px' }}>ชั้นปี</h2>
            <select style={{ borderRadius: '5px', border: '2px solid black', padding: '5px', color: 'black', width: '100%' }}>
              <option></option>
              <option>ปีที่ 1</option>
              <option>ปีที่ 2</option>
              <option>ปีที่ 3</option>
              <option>ปีที่ 4</option>
              {/* เพิ่มตัวเลือกของชั้นปีที่ต้องการ */}
            </select>
          </div>
          <div style={{ width: '150px', position: 'relative' }}>
            <h2 style={{ fontSize: '15px' }}>ห้อง</h2>
            <select style={{ borderRadius: '5px', border: '2px solid black', padding: '5px', color: 'black', width: '100%' }}>
              <option></option>
              <option>ห้อง 1</option>
              <option>ห้อง 2</option>
              <option>ห้อง 3</option>
              {/* เพิ่มตัวเลือกของห้องที่ต้องการ */}
            </select>
            {/* search */}
            <button style={{ position: 'absolute',  top: '58%', right: '-150px', backgroundColor: '#127151', border: 'none', cursor: 'pointer', width: '110px', height: '30px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '5px 10px' }} onClick={this.handleAdvancedSearch}>
              <span style={{ color: 'white', fontSize: '20px' }}>search</span>
              <img src={newSearchIcon} alt="New Search Icon" style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
          
        </div>
      </div>
    );
  }
}

export default RegistrationResult;