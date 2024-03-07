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
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    }
  };
  // สร้างข้อมูลตาราง
  const [selectedValues, setSelectedValues] = useState({
    year: "",
    semester: "",
    numberOfSections: "",
    type: "",
    branch: "",
  });

  const handleDropdownChange = (event, field) => {
    setSelectedValues({
      ...selectedValues,
      [field]: event.target.value,
    });
  };

  return (
    <div>
      <div class="searchBar-texthead">
        <p1>ลงทะเบียนรายวิชา</p1>
      </div>
      <div style={{ marginTop: "35px" }}>
        <div class="searchBar-container">
          <div>
            <div style={{ marginTop: "35px" }}>
              <div>
                <div className="text5">
                  <a>หลักสูตร</a>
                  {/* <a>ภาคการศึกษา</a> */}
                </div>
                <div className="dropdown14">
                  <select
                    value={selectedValues.year}
                    onChange={(event) => handleDropdownChange(event, "year")}
                  >
                    <option value=""></option>
                    <option value="2569">2569</option>
                    <option value="2568">2568</option>
                    <option value="2567">2567</option>
                    <option value="2566">2566</option>
                    <option value="2565">2565</option>
                    <option value="2564">2564</option>
                    <option value="2563">2563</option>
                    <option value="2562">2562</option>
                    <option value="2561">2561</option>
                    <option value="2560">2560</option>
                    <option value="2559">2559</option>
                    <option value="2558">2558</option>
                    <option value="2557">2557</option>
                    <option value="2556">2556</option>
                    <option value="2555">2555</option>
                  </select>
                </div>
                <div className="dropdown15">
                  {/* <select
                    value={selectedValues.semester}
                    onChange={(event) =>
                      handleDropdownChange(event, "semester")
                    }
                  >
                    <option value=""></option>
                    <option value="ภาคต้น">ภาคต้น</option>
                    <option value="ภาคปลาย">ภาคปลาย</option>
                    <option value="ภาคฤดูร้อน">ภาคฤดูร้อน</option>
                  </select> */}
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
                    onChange={(event) =>
                      handleDropdownChange(event, "numberOfSections")
                    }
                  >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="3">4</option>
                    <option value="3">5</option>
                    <option value="3">6</option>
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
                <div>
                  <div className="checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T05"
                        checked={selectedOptions.includes("T05")}
                        onChange={handleCheckboxChange}
                      />
                      T05
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T12"
                        checked={selectedOptions.includes("T12")}
                        onChange={handleCheckboxChange}
                      />
                      T12
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T13"
                        checked={selectedOptions.includes("T13")}
                        onChange={handleCheckboxChange}
                      />
                      T13
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T14"
                        checked={selectedOptions.includes("T14")}
                        onChange={handleCheckboxChange}
                      />
                      T14
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T17"
                        checked={selectedOptions.includes("T17")}
                        onChange={handleCheckboxChange}
                      />
                      T17
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T18"
                        checked={selectedOptions.includes("T18")}
                        onChange={handleCheckboxChange}
                      />
                      T18
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T19"
                        checked={selectedOptions.includes("T19")}
                        onChange={handleCheckboxChange}
                      />
                      T19
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T20"
                        checked={selectedOptions.includes("T20")}
                        onChange={handleCheckboxChange}
                      />
                      T20
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T21"
                        checked={selectedOptions.includes("T21")}
                        onChange={handleCheckboxChange}
                      />
                      T21
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T22"
                        checked={selectedOptions.includes("T22")}
                        onChange={handleCheckboxChange}
                      />
                      T22
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T23"
                        checked={selectedOptions.includes("T23")}
                        onChange={handleCheckboxChange}
                      />
                      T23
                    </label>
                  </div>
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
