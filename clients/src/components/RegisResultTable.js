import React, { useState } from "react";
import "./RegisResultTable.css"; // Import CSS file for table styling
import MyImage from "../assets/Vector.png";
import RegisTa from './testtable';
// import SearchBar from "./SearchBar";
import './SearchBar.css';
import searchIcon from '../assets/searchbar.svg'; // Import รูปไอคอน


function RegisResultTable() {

  document.addEventListener("DOMContentLoaded", function () {
    // เพิ่มโค้ดที่ต้องการให้ทำงานหลังจากการโหลดหน้าเว็บเสร็จสมบูรณ์ที่นี่
    var searchButton = document.getElementById('searchButton');
    var saveButton = document.getElementById('saveButton');

    if (searchButton) {
      searchButton.addEventListener('click', function () {
        var searchText = document.getElementById('searchInput').value.trim();
        console.log('คำค้นหา:', searchText);
        // ทำสิ่งที่ต้องการกับ searchText ที่ได้รับจากผู้ใช้
      });
    }

    if (saveButton) {
      saveButton.addEventListener('click', function () {
        console.log("คุณกำลังคลิกปุ่มบันทึก");
        // สามารถเพิ่มโค้ดอื่น ๆ ต่อจากนี้เพื่อทำงานตามที่ต้องการ
      });
    }
  });
  // สร้างข้อมูลตาราง
  const tableData = [
    66,
    65,
    64,
    63,
    62,
    61,
    60,
    59,
    58,
    57,
    "วิชาบังคับ",
    "วิชาเลือก",
    "วิชาเสรี",
    1,
    2,
    3,
    4,
  ];
  const [selectedValue14, setSelectedValue14] = useState("");
  const [selectedValue15, setSelectedValue15] = useState("");
  const [selectedValue16, setSelectedValue16] = useState("");
  const [selectedValue17, setSelectedValue17] = useState("");
  const [selectedValue18, setSelectedValue18] = useState("");

  const handleDropdownChange14 = (event) => {
    setSelectedValue14(event.target.value);
  };

  const handleDropdownChange15 = (event) => {
    setSelectedValue15(event.target.value);
  };

  const handleDropdownChange16 = (event) => {
    setSelectedValue16(event.target.value);
  };
  const handleDropdownChange17 = (event) => {
    setSelectedValue17(event.target.value);
  };

  const handleDropdownChange18 = (event) => {
    setSelectedValue18(event.target.value);
  };

  return (
    <div>
      <div class="searchBar-texthead">
        <p1>ลงทะเบียนรายวิชา</p1>
      </div>
      <div>
        <div class="searchBar-container">
          <div>
            <div>
              <div className="RegisResultTable-searchbar-changposition">
                <div class="searchBar-subjectBox">รายวิชา</div>
                <div class="searchBar-searchBox">
                  <input id="searchInput" type="text" placeholder="รหัสวิชา,ชื่อวิชา" /> {/* เพิ่ม id ให้กับ input */}
                  <button id="searchButton">
                    <img src={searchIcon} alt="Search Icon" /> {/* เพิ่มรูปไอคอน */}
                  </button>
                </div>
              </div>

              <div class="RegisResultTable-buttonchange">
                <div class="RegisResultTable-saveButton">
                  <button id="saveButton">
                    <p class="RegisResultTable-saveButtontext">บันทึก</p></button>
                </div>

              </div>



            </div>
          </div>
        </div>
      </div>
      {/* <SearchBar></SearchBar> */}

      <div className="toptap">
        {/* <h className="DateAdmin-text">ลงทะเบียนรายวิชา</h> */}
        <div className="text5">
          <a>หลักสูตร</a>
          <a>ภาคการศึกษา</a>
        </div>
        <div className="dropdown">
          <div className="dropdown14">
            <select value={selectedValue14} onChange={handleDropdownChange14}>
              <option value=""></option>
              <option value="66">ปี 66</option>
              <option value="65">ปี 65</option>
              <option value="64">ปี 64</option>
              <option value="63">ปี 63</option>
              <option value="62">ปี 62</option>
              <option value="61">ปี 61</option>
              <option value="60">ปี 60</option>
              <option value="59">ปี 59</option>
              <option value="58">ปี 58</option>
              <option value="57">ปี 57</option>
            </select>
          </div>
          <div className="dropdown15">
            <select value={selectedValue15} onChange={handleDropdownChange15}>
              <option value=""></option>
              <option value="ภาคต้น">ภาคต้น</option>
              <option value="ภาคปลาย">ภาคปลาย</option>
              <option value="ภาคฤดูร้อน">ภาคฤดูร้อน</option>
            </select>
          </div>
          <div className="text7">
            <a>จำนวนsec</a>
            <a>ภาคปฏิบัติ/บรรยาย</a>
            <a>สาขา</a>
          </div>
          <div className="dropdown16">
            <select value={selectedValue16} onChange={handleDropdownChange16}>
              <option value=""></option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div className="dropdown17">
            <select value={selectedValue17} onChange={handleDropdownChange17}>
              <option value=""></option>
              <option value="ภาคปฏิบัติ">ภาคปฏิบัติ</option>
              <option value="ภาคบรรยาย">ภาคบรรยาย</option>
            </select>
          </div>
          <div className="dropdown18">
            <select value={selectedValue18} onChange={handleDropdownChange18}>
              <option value=""></option>
              <option value="T05">T05</option>
              <option value="T12">T12</option>
              <option value="T13">T13</option>
              <option value="T14">T14</option>
              <option value="T17">T17</option>
              <option value="T18">T18</option>
              <option value="T19">T19</option>
              <option value="T20">T20</option>
              <option value="T21">T21</option>
              <option value="T22">T22</option>
              <option value="T23">T23</option>
            </select>
          </div>


          {" "}
          {/* เพิ่มกล่องสี่เหลี่ยม */}

        </div>


      </div>
      <RegisTa></RegisTa>

    </div>

  );
}

export default RegisResultTable;
