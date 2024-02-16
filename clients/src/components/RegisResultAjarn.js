import React from 'react';
import './RegisResultAjarn.css'; // Import CSS file for table styling
import MyImage from './Vector.png';

class BorderedTable extends React.Component {
  render() {
    return (
      <header className="Texthead">
        <div>ผลการลงทะเบียนเบื้องต้น</div>
        <table className="bordered-table">
          <thead>
            <tr>
              <th>   </th>
              <th>รหัสวิชา</th>
              <th>ชื่อวิชา</th>
              <th>นก.</th>
              <th>lab/lec</th>
              <th>sec</th>
              <th>จำนวนนิสิต</th>
              <th>ชั้นปี</th>
              <th>วัน</th>
              <th>เวลา</th>
              <th>ห้องlab</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td> 
                <div className="image-container">
                <img src={MyImage} alt=" "className="centered-image"/> 
                </div></td>
              <td>03603213-65</td>
              <td>Algorithm Design and Analysis</td>
              <td>3</td>
              <td>lec</td>
              <td>800</td>
              <td>100</td>
              <td>2 3 4 x</td>
              <td>Mon</td>
              <td>9-12</td>
              <td></td>
            </tr>
            <tr>
              <td>              
                <div className="image-container">
                <img src={MyImage} alt=" "className="centered-image"/>
                </div></td>
              <td>03600390-00</td>
              <td>Co-operative Education</td>
              <td>3</td>
              <td>lec</td>
              <td>800</td>
              <td>100</td>
              <td>3 4 x</td>
              <td>Tue</td>
              <td>13-16</td>
              <td></td>
            </tr>
            <tr>
              <td>              
                <div className="image-container">
                <img src={MyImage} alt=" "className="centered-image"/> 
                </div></td>
              <td>03603423-60</td>
              <td>Network Programming</td>
              <td>3</td>
              <td>lec</td>
              <td>800</td>
              <td>50</td>
              <td>3 4 x</td>
              <td>Thu</td>
              <td>9-12</td>
              <td></td>
            </tr>
            <tr>
              <td>             
                <div className="image-container">
                <img src={MyImage} alt=" "className="centered-image"/> 
                </div></td>
              <td>01420114-60</td>
              <td>Laboratory in Physics</td>
              <td>1</td>
              <td>lab</td>
              <td>830</td>
              <td>30</td>
              <td>3 4 x</td>
              <td>Mon</td>
              <td>13-14</td>
              <td>lab15</td>
            </tr>
            {/* เพิ่มแถวเพิ่มเติม */}
          </tbody>
        </table>
      </header>
    );
  }
}

export default BorderedTable;
