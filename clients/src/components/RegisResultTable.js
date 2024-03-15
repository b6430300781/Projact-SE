import React, { useState } from "react";
import "./RegisResultTable.css"; // Import CSS file for table styling
import MyImage from "../assets/Vector.png";
import RegisTa from "./testtable";
// import SearchBar from "./SearchBar";
import "./SearchBar.css";
import Axios from "axios";

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
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchCourses = async () => {
    try {
      const response = await Axios.get(
        `http://localhost:3001/search-courses?query=${searchText}`
      );
      setSearchResults(response.data); // อัปเดต state ด้วยข้อมูลผลการค้นหา
    } catch (error) {
      console.error("Error searching courses:", error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    if (e.target.value.length > 0) {
      // แก้ไขตรงนี้เพื่อค้นหาทันทีที่ผู้ใช้พิมพ์
      searchCourses();
    } else {
      setSearchResults([]); // หากช่องค้นหาว่าง, ล้างผลลัพธ์การค้นหา
    }
  };

  const [selectedCourse, setSelectedCourse] = useState({
    course_code: "",
    course_name: "",
  });
  const handleSelectCourse = (course) => {
    setSearchText(`${course.course_code} - ${course.course_name}`);
    setSelectedCourse({
      course_code: course.course_code,
      course_name: course.course_name,
    });
    setSearchResults([]); // ล้างผลลัพธ์การค้นหาหลังจากเลือกวิชา
  };

  // ฟังก์ชันสำหรับบันทึกข้อมูล
  const saveCourseRegistration = async () => {
    // แปลง array ของปีการศึกษาเป็นสตริง
    const yearString = selectedYear.join(", ");
    const branchString = selectedBranch.join(", ");
    try {
      const response = await Axios.post("http://localhost:3001/register", {
        // ข้อมูลอื่นๆ ที่ต้องการบันทึก
        course_code: selectedCourse.course_code,
        course_name: selectedCourse.course_name,
        year: yearString,
        section: selectedValues.section,
        lectureOrLab: selectedValues.lectureOrLab,
        branch: branchString,
        // ...
      });

      // แสดงข้อความแจ้งเตือนหรือดำเนินการต่อ ตามความเหมาะสม
      alert("Registration successful!");
      window.location.reload();
      // ตัวอย่าง: รีเซ็ตฟอร์มหรือ redirect ผู้ใช้
    } catch (error) {
      console.error("Error saving course registration:", error);
      // Log the entire error object to see more details
      console.log(error.response.data); // Log the response data from the server, if ava
    }
  };

  const [selectedYear, setSelectedYear] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState([]);

  const handleCheckboxChange = (e) => {
    const { value, checked, name } = e.target;
    if (name === "year") {
      if (checked) {
        setSelectedYear([...selectedYear, value]);
      } else {
        setSelectedYear(selectedYear.filter((year) => year !== value));
      }
    } else if (name === "branch") {
      if (checked) {
        setSelectedBranch([...selectedBranch, value]);
      } else {
        setSelectedBranch(selectedBranch.filter((branch) => branch !== value));
      }
    }
  };
  // สร้างข้อมูลตาราง
  const [selectedValues, setSelectedValues] = useState({
    year: "",
    section: "",
    lectureOrLab: "",
    branch: "",
    course_name: "",
    course_code: "",
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
                </div>
                <div className="checkbox-group2">
                  <label>
                    ปี55
                    <input
                      type="checkbox"
                      name="year"
                      value="ปี55"
                      checked={selectedYear.includes("ปี55")}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                  <label>
                    ปี60
                    <input
                      type="checkbox"
                      name="year"
                      value="ปี60"
                      checked={selectedYear.includes("ปี60")}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                  <label>
                    ปี65
                    <input
                      type="checkbox"
                      name="year"
                      value="ปี65"
                      checked={selectedYear.includes("ปี65")}
                      onChange={handleCheckboxChange}
                    />
                  </label>
                </div>
                <div className="RegisResultTable-searchbar-changposition">
                  <div className="searchBar-subjectBox">รายวิชา</div>
                  <div
                    className="searchBar-searchBox"
                    style={{ position: "relative" }}
                  >
                    <input
                      value={searchText}
                      onChange={handleSearchChange}
                      type="text"
                      placeholder="รหัสวิชา, ชื่อวิชา"
                    />
                    <button onClick={searchCourses}>
                      <img src={searchIcon} alt="Search Icon" />
                    </button>
                    {searchResults.length > 0 && (
                      <div className="autocomplete-dropdown">
                        {searchResults.map((course, index) => (
                          <div
                            className="autocomplete-item"
                            key={index}
                            onClick={() => handleSelectCourse(course)}
                          >
                            {course.course_code} - {course.course_name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text7">
                  <a>จำนวนsec</a>
                  <a>ภาคปฏิบัติ/บรรยาย</a>
                  <a>สาขา</a>
                </div>
                <div className="dropdown16">
                  <select
                    value={selectedValues.section}
                    onChange={(event) => handleDropdownChange(event, "section")}
                  >
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                  </select>
                </div>
                <div className="dropdown17">
                  <select
                    value={selectedValues.lectureOrLab}
                    onChange={(event) =>
                      handleDropdownChange(event, "lectureOrLab")
                    }
                  >
                    <option value=""></option>
                    <option value="ภาคบรรยาย">ภาคบรรยาย</option>
                    <option value="ภาคปฏิบัติ">ภาคปฏิบัติ</option>
                  </select>
                </div>
                <div>
                  <div className="checkbox-group">
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T05"
                        checked={selectedBranch.includes("T05")}
                        onChange={handleCheckboxChange}
                      />
                      T05
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T12"
                        checked={selectedBranch.includes("T12")}
                        onChange={handleCheckboxChange}
                      />
                      T12
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T13"
                        checked={selectedBranch.includes("T13")}
                        onChange={handleCheckboxChange}
                      />
                      T13
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T14"
                        checked={selectedBranch.includes("T14")}
                        onChange={handleCheckboxChange}
                      />
                      T14
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T17"
                        checked={selectedBranch.includes("T17")}
                        onChange={handleCheckboxChange}
                      />
                      T17
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T18"
                        checked={selectedBranch.includes("T18")}
                        onChange={handleCheckboxChange}
                      />
                      T18
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T19"
                        checked={selectedBranch.includes("T19")}
                        onChange={handleCheckboxChange}
                      />
                      T19
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T20"
                        checked={selectedBranch.includes("T20")}
                        onChange={handleCheckboxChange}
                      />
                      T20
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T21"
                        checked={selectedBranch.includes("T21")}
                        onChange={handleCheckboxChange}
                      />
                      T21
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T22"
                        checked={selectedBranch.includes("T22")}
                        onChange={handleCheckboxChange}
                      />
                      T22
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="branch"
                        value="T23"
                        checked={selectedBranch.includes("T23")}
                        onChange={handleCheckboxChange}
                      />
                      T23
                    </label>
                  </div>
                </div>
                <div className="RegisResultTable-buttonchange">
                  <div className="RegisResultTable-saveButton">
                    <button id="saveButton" onClick={saveCourseRegistration}>
                      <p className="RegisResultTable-saveButtontext">บันทึก</p>
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
