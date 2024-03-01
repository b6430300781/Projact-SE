import React, { useState } from "react";
import "./RegisResultTable.css"; // Import CSS file for table styling
import MyImage from "../assets/Vector.png";
import RegisTa from "./testtable";
// import SearchBar from "./SearchBar";
import "./SearchBar.css";
import searchIcon from "../assets/searchbar.svg"; // Import รูปไอคอน

function RegisResultTable() {
  document.addEventListener("DOMContentLoaded", function () {
    // เพิ่มโค้ดที่ต้องการให้ทำงานหลังจากการโหลดหน้าเว็บเสร็จสมบูรณ์ที่นี่
    var searchButton = document.getElementById("searchButton");
    var saveButton = document.getElementById("saveButton");

    if (searchButton) {
      searchButton.addEventListener("click", function () {
        var searchText = document.getElementById("searchInput").value.trim();
        console.log("คำค้นหา:", searchText);
        // ทำสิ่งที่ต้องการกับ searchText ที่ได้รับจากผู้ใช้
      });
    }

    if (saveButton) {
      saveButton.addEventListener("click", function () {
        console.log("คุณกำลังคลิกปุ่มบันทึก");
        // สามารถเพิ่มโค้ดอื่น ๆ ต่อจากนี้เพื่อทำงานตามที่ต้องการ
      });
    }
  });
  // สร้างข้อมูลตาราง
  const [selectedValues, setSelectedValues] = useState({
    year: "",
    semester: "",
    numberOfSections: "",
    type: "",
    branch: ""
  });

  const handleDropdownChange = (event, field) => {
    setSelectedValues({
      ...selectedValues,
      [field]: event.target.value
    });
  };


  return (
    <div>
      <div class="searchBar-texthead">
        <p1>ลงทะเบียนรายวิชา</p1>
      </div>
      <div style={{ marginTop: '35px'}}>
        <div class="searchBar-container">
            <div>
          <div style={{ marginTop: '35px' }}>
              <div>
                <div className="text5">
                  <a>หลักสูตร</a>
                  <a>ภาคการศึกษา</a>
                </div>
                <div className="dropdown14">
                  <select
                    value={selectedValues.year}
                    onChange={(event) => handleDropdownChange(event, "year")}
                  >
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
                  <select
                    value={selectedValues.semester}
                    onChange={(event) => handleDropdownChange(event, "semester")}
                  >
                    <option value=""></option>
                    <option value="ภาคต้น">ภาคต้น</option>
                    <option value="ภาคปลาย">ภาคปลาย</option>
                    <option value="ภาคฤดูร้อน">ภาคฤดูร้อน</option>
                  </select>
                </div>
                <div className="RegisResultTable-searchbar-changposition">
                  <div class="searchBar-subjectBox">รายวิชา</div>
                  <div class="searchBar-searchBox">
                    <input
                      id="searchInput"
                      type="text"
                      placeholder="รหัสวิชา,ชื่อวิชา"
                    />{" "}
                    {/* เพิ่ม id ให้กับ input */}
                    <button id="searchButton">
                      <img src={searchIcon} alt="Search Icon" />{" "}
                      {/* เพิ่มรูปไอคอน */}
                    </button>
                  </div>
                </div>
                <div className="text7">
                  <a>จำนวนsec</a>
                  <a>ภาคปฏิบัติ/บรรยาย</a>
                  <a>สาขา</a>
                </div>
                <div className="dropdown16">
                  <select
                    value={selectedValues.numberOfSections}
                    onChange={(event) => handleDropdownChange(event, "numberOfSections")}
                  >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                  </select>
                </div>
                <div className="dropdown17">
                  <select
                    value={selectedValues.type}
                    onChange={(event) => handleDropdownChange(event, "type")}
                  >
                    <option value=""></option>
                    <option value="ภาคปฏิบัติ">ภาคปฏิบัติ</option>
                    <option value="ภาคบรรยาย">ภาคบรรยาย</option>
                  </select>
                </div>
                <div className="dropdown18">
                  <select
                    value={selectedValues.branch}
                    onChange={(event) => handleDropdownChange(event, "branch")}
                  >
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
                <div class="RegisResultTable-buttonchange">
                  <div class="RegisResultTable-saveButton">
                    <button id="saveButton">
                      <p class="RegisResultTable-saveButtontext">บันทึก</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <SearchBar></SearchBar> */}

      <RegisTa></RegisTa>
    </div>
  );
}

export default RegisResultTable;
