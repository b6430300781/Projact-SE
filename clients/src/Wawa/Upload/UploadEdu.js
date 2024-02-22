import React, { useState, useEffect } from 'react';
import './UploadEdu.css';
import { IoIosAddCircleOutline, IoIosClose } from 'react-icons/io';
import { CgFileDocument } from "react-icons/cg";
import { FaRegSave } from "react-icons/fa";
import * as XLSX from 'xlsx';
import Axios from "axios";

const UploadEdu = () => {
  const [excelData, setExcelData] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [userList,setuserList] = useState([]);

  const handleFileUpload = (file) => {
    setFileName(file.name);
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // แปลงไฟล์
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
      setExcelData(jsonData);
    };

    reader.readAsArrayBuffer(file);
  };

  const getuser = () => {
    // Axios.get("http://127.0.0.1:3001/add").then((response) => {
    //     setuserList(response.data);
    // });
  };

  const handleButtonClick = () => {
    // Axios.post("http://127.0.0.1:3001/upload",{
    //   excelData:excelData,

    // }).then(() => {
    //   setuserList([
    //     ...userList,
    //     {
    //       excelData:excelData,
    //   },
    //   ]);
    // });

    console.log(excelData);
  };


  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  useEffect(() => {
    // ทำสั่งการที่คุณต้องการที่นี่ เช่น อัพเดต UI
    console.log("User list updated:", userList);
  }, [userList]);


  return (
    <div className="Pop ">

      <div className='in '>

        <div className='box-Edu-position' onDrop={handleDrop} onDragOver={(e) => e.preventDefault()}>

          <div
            className="drop-area-Edu "
            onClick={() => document.querySelector('input[type=file]').click()}
          >
            <CgFileDocument style={{ fontSize: '80px', marginTop: '15px' }} />
            <div style={{fontSize: '20px'}}>
              {fileName ? fileName : 'Import file excel'}
            </div>

            <input
              type="file"
              accept=".xlsx, .xls"
              onChange={(e) => handleFileUpload(e.target.files[0])}
              className='file'
            />
          </div>

          {excelData && (
            <div style={{ display: 'flex', justifyContent: 'end', marginTop: 'auto' }}>
              {/* <pre>{JSON.stringify(excelData, null, 2)}</pre> */}

              <button onClick={handleButtonClick} className='btn'>
                <FaRegSave style={{ fontFamily: 'Kanit' ,fontSize: '15px', marginRight: '3px' ,paddingTop:'5px'}} />
                SAVE
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default UploadEdu;