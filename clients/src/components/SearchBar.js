import React, { useState } from 'react';
import './Searchbar.css';
import searchIcon from './searchbar.svg';
import axios from 'axios';

function SearchBar() {
    const [searchResults, setSearchResults] = useState([]);
    
    const handleSearch = async () => {
      const searchInput = document.getElementById('searchInput');
      const searchText = searchInput.value.trim();
  
      try {
          // ใช้ Axios ทำ AJAX request
          const response = await axios.get(`http://localhost:3001/searchsubject?searchText=${searchText}`);
  
          // ตรวจสอบว่า response.data เป็น array หรือไม่
          if (Array.isArray(response.data)) {
              // อัปเดต state ด้วยผลลัพธ์ที่ได้
              setSearchResults(response.data);
          } else {
              console.error('ผลลัพธ์ที่ได้ไม่ใช่ array:', response.data);
          }
      } catch (error) {
          console.error('เกิดข้อผิดพลาด:', error);
      }
  };
  

    return (
        <div>
            <div>
                <div className="searchBar-subjectBox">รายวิชา</div>
                <div className="searchBar-searchBox">
                    <input id="searchInput" type="text" placeholder="รหัสวิชา,ชื่อวิชา" />
                    <button onClick={handleSearch} id="searchButton">
                        <img src={searchIcon} alt="Search Icon" />
                    </button>
                </div>
            </div>

            {/* แสดงผลลัพธ์ */}
            <div>
                {searchResults.map(result => (
                    <div key={result.id}>
                        ID: {result.id} - Name: {result.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SearchBar;
