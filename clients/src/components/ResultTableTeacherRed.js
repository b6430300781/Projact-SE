import React from 'react';
import './ResultTableTeacherRed.css'; // Import CSS file for table styling

class ResultTableTeacherRed extends React.Component {
  
  render() {
    return (
      <div>
       
        {/* ตารางผลการลงทะเบียน */}
        <header className="ResultTableTeacherRed-Texthead">
       
          <table className="ResultTableTeacherRed-bordered-table">
            <thead>
              <tr>
                <th>No.</th>
                <th>รหัสวิชา</th>
                <th>ชื่อวิชา</th>
                <th>นก.</th>
                <th>lab/lec</th>
                <th>sec</th>
                <th>ชื่อผู้สอน</th>
                <th>จำนวนนิสิต</th>
                <th>ชั้นปี</th>
                <th>วัน</th>
                <th>เวลา</th>
                <th>ห้องlab</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td>03603213-65</td>
                <td>Algorithm Design and Analysis</td>
                <td>3</td>
                <td>lec</td>
                <td>800</td>
                <td>อาจารย์ สมเกียรติ   ใจดี</td>
                <td>100</td>
                <td>2 3 4 x</td>
                <td>Mon</td>
                <td>9-12</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>03600390-00</td>
                <td>Co-operative Education</td>
                <td>3</td>
                <td>lec</td>
                <td>800</td>
                <td>อาจารย์ สมเกียรติ   ใจดี</td>
                <td>100</td>
                <td>3 4 x</td>
                <td>Tue</td>
                <td>13-16</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>03603423-60</td>
                <td>Network Programming</td>
                <td>3</td>
                <td>lec</td>
                <td>800</td>
                <td>อาจารย์ สมเกียรติ   ใจดี</td>
                <td>50</td>
                <td>3 4 x</td>
                <td>Thu</td>
                <td>9-12</td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td>01420114-60</td>
                <td>Data Mining</td>
                <td>3</td>
                <td>lec</td>
                <td>800</td>
                <td>อาจารย์ สมเกียรติ   ใจดี</td>
                <td>30</td>
                <td>3 4 x</td>
                <td>Fri</td>
                <td>16-19</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </header> 
      </div>
    );
  }
}
export default ResultTableTeacherRed;