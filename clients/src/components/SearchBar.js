import './SearchBar.css';
import searchIcon from '../assets/searchbar.svg'; // Import รูปไอคอน

function SearchBar() {
    document.addEventListener("DOMContentLoaded", function () {
        var searchInput = document.getElementById('searchInput'); // เลือก input โดยใช้ id
        var searchButton = document.getElementById('searchButton'); // เลือก button โดยใช้ id

        searchButton.addEventListener('click', function () {
            var searchText = searchInput.value.trim();
            console.log('คำค้นหา:', searchText);
            // ทำสิ่งที่ต้องการกับ searchText ที่ได้รับจากผู้ใช้
        });
    });

    return (
        <div>
            <div>
                    <div class="searchBar-subjectBox">รายวิชา</div>
                    <div class="searchBar-searchBox">
                        <input id="searchInput" type="text" placeholder="รหัสวิชา,ชื่อวิชา" /> {/* เพิ่ม id ให้กับ input */}
                        <button id="searchButton">
                            <img src={searchIcon} alt="Search Icon" /> {/* เพิ่มรูปไอคอน */}
                        </button>
                    </div>

                
            </div>
        </div>
    );
}

export default SearchBar;
