import React from 'react';
import './testtable.css'; // Import CSS file for table styling
import MyImage from "../assets/Vector.png";
// import RegisResultTable from './RegisResultTable';
import InputNumNisit from './compoRegisCourse';
import TimePickerTa from './Timepicker';

class RegisTa extends React.Component {




  // handleDeleteRow = (event) => {
  //   // รับค่า index ของแถวที่คลิกที่ภาพ
  //   const rowIndex = event.target.parentNode.parentNode.rowIndex;
  //   // ลบแถวออกจากตาราง
  //   if(rowIndex !== 0) { // ไม่ให้ลบแถวแรก (หัวตาราง)
  //     document.querySelector('.bordered-table').deleteRow(rowIndex);
  //   }
  // }
  render() {


    document.addEventListener("DOMContentLoaded", function () {
      // เพิ่มโค้ดที่ต้องการให้ทำงานหลังจากการโหลดหน้าเว็บเสร็จสมบูรณ์ที่นี่
      var saveButtonLab = document.getElementById('saveButton');
      var saveButtonLec = document.getElementById('saveButton');
      var saveButtonSavecourse = document.getElementById('saveButton');


      if (saveButtonLab) {
        saveButtonLab.addEventListener('click', function () {
          console.log("คุณกำลังคลิกปุ่มบันทึก");
          // สามารถเพิ่มโค้ดอื่น ๆ ต่อจากนี้เพื่อทำงานตามที่ต้องการ
        });
      }

      if (saveButtonLec) {
        saveButtonLec.addEventListener('click', function () {
          console.log("คุณกำลังคลิกปุ่มบันทึก");
          // สามารถเพิ่มโค้ดอื่น ๆ ต่อจากนี้เพื่อทำงานตามที่ต้องการ
        });
      }

      if (saveButtonSavecourse) {
        saveButtonSavecourse.addEventListener('click', function () {
          console.log("คุณกำลังคลิกปุ่มบันทึก");
          // สามารถเพิ่มโค้ดอื่น ๆ ต่อจากนี้เพื่อทำงานตามที่ต้องการ
        });
      }




    });

    return (

      <div className='testtable-turnleft-all'>
        {/* <RegisResultTable></RegisResultTable> */}
        {/* ตารางภาคปฏิบัติ */}
        <header className="testtable-Texthead">
          <div>ภาคปฏิบัติ</div>
          <div className='box-table-container'>
          <table className="testtable-bordered-table">
            <thead>
              <tr>
                <th></th>
                <th>รหัสวิชา</th>
                <th>ชื่อวิชา</th>
                <th>นก.</th>
                <th>lab</th>
                <th>sec</th>
                <th>จำนวนนิสิต</th>
                <th>สาขา,ชั้นปี</th>
                <th>วัน</th>
                <th>เวลา</th>
                <th>ห้องlab</th>
                <th>หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="testtable-image-container">
                    <img src={MyImage} alt=" " className="testtable-centered-image" onClick={this.handleDeleteRow} />
                  </div>
                </td>
                <td>01420112</td>
                <td>General Physics</td>
                <td>3</td>
                <td>1</td>
                <td>830</td>
                <td>
                  <div className='testtable-inputNumNisit'>
                    <InputNumNisit></InputNumNisit>

                  </div>

                </td>
                <td></td>
                <td>
                  <div className='testtable-dropdownposition'>
                    <select className='testtable-dropdown'>
                      {/* 2. Dropdown เลือกวัน */}
                      <option value=""></option>
                      <option value="Monday">Mon</option>
                      <option value="Tuesday">Tue</option>
                      <option value="Wednesday">Wed</option>
                      <option value="Thursday">Thu</option>
                      <option value="Friday">Fri</option>
                      <option value="Friday">Sat</option>
                      <option value="Friday">Sun</option>
                    </select>
                  </div>
                </td>
                <td>
                  <TimePickerTa />
                </td>
                <td>
                  <div className='testtable-dropdownposition'>
                    <select className='testtable-dropdown'>
                      {/* 3. Dropdown เลือกห้อง */}
                      <option value=""></option>
                      <option value="Room1">ห้อง 1</option>
                      <option value="Room2">ห้อง 2</option>
                      <option value="Room3">ห้อง 3</option>
                      <option value="Room3">ห้อง 4</option>
                    </select>
                  </div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
            
          </div>
          
        </header>
        <div>
          <div class="testtable-buttonchange">
            <div class="RegisResultTable-saveButton">
              <button id="saveButtonLab">
                <p class="RegisResultTable-saveButtontext">บันทึก</p></button>
            </div>

          </div>
        </div>

        {/* ตารางภาคบรรยาย */}
        <header className="testtable-Texthead">
          <div>ภาคบรรยาย</div>
          <table className="testtable-bordered-table">
            <thead>
              <tr>
                <th>   </th>
                <th>รหัสวิชา</th>
                <th>ชื่อวิชา</th>
                <th>นก.</th>
                <th>lec</th>
                <th>sec</th>
                <th>จำนวนนิสิต</th>
                <th>สาขา,ชั้นปี</th>
                <th>วัน</th>
                <th>เวลา</th>
                <th>หมายเหตุ</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="testtable-image-container">
                    <img src={MyImage} alt=" " className="testtable-centered-image" onClick={this.handleDeleteRow} />
                  </div>
                </td>
                <td>03603423-60</td>
                <td>Network Programming</td>
                <td>3</td>
                <td>1</td>
                <td>800</td>
                <td>
                  <div className='testtable-inputNumNisit'>
                    <InputNumNisit></InputNumNisit>

                  </div>
                </td>
                <td> </td>
                <td>
                  <div className='testtable-dropdownposition'>
                    <select className='testtable-dropdown'>
                      {/* 2. Dropdown เลือกวัน */}
                      <option value=""></option>
                      <option value="Monday">Mon</option>
                      <option value="Tuesday">Tue</option>
                      <option value="Wednesday">Wed</option>
                      <option value="Thursday">Thu</option>
                      <option value="Friday">Fri</option>
                      <option value="Friday">Sat</option>
                      <option value="Friday">Sun</option>
                    </select>
                  </div>

                </td>
                <td>
                  <div>
                    <div>
                      <TimePickerTa />
                    </div>

                  </div>

                </td>
                <td> </td>
              </tr>
            </tbody>
          </table>
        </header>

        <div>
          <div class="testtable-buttonchange">
            <div class="RegisResultTable-saveButton">
              <button id="saveButtonLec">
                <p class="RegisResultTable-saveButtontext">บันทึก</p></button>
            </div>

          </div>
        </div>

        {/* ตารางผลการลงทะเบียน */}
        <header className="testtable-Texthead">
          <div>ผลการลงทะเบียนเบื้องต้น</div>
          <table className="testtable-bordered-table">
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
                  <div className="testtable-image-container">
                    <img src={MyImage} alt=" " className="testtable-centered-image" onClick={this.handleDeleteRow} />
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
                  <div className="testtable-image-container">
                    <img src={MyImage} alt=" " className="testtable-centered-image" onClick={this.handleDeleteRow} />
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
                  <div className="testtable-image-container">
                    <img src={MyImage} alt=" " className="testtable-centered-image" onClick={this.handleDeleteRow} />
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
                  <div className="testtable-image-container">
                    <img src={MyImage} alt=" " className="testtable-centered-image" onClick={this.handleDeleteRow} />
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
            </tbody>
          </table>
        </header>
        <div>
          <div class="testtable-buttonchange">
            <div class="RegisResultTable-saveButton">
              <button id="saveButtonSavecourse">
                <p class="RegisResultTable-saveButtontext">บันทึก</p></button>
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default RegisTa;
