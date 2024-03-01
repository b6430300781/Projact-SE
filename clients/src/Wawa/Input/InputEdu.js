import React, { useState, useEffect } from 'react';
import './InputEdu.css';
import { IoIosAddCircleOutline, IoIosClose } from 'react-icons/io';
import { CgFileDocument } from "react-icons/cg";
import { FaRegSave } from "react-icons/fa";
import * as XLSX from 'xlsx';
import Axios from "axios";

const InputEdu = () => {
    const [idSubject, setIdSubject] = useState('');
    const [subjectName, setSubjectName] = useState('');
    const [userList, setuserList] = useState([]);

    const handleButtonAdd = () => {
        Axios.post("http://127.0.0.1:3001/create", {
          idSubject: idSubject,
          subjectName: subjectName,
        }).then(() => {
          setuserList([
            ...userList,
            {
              idSubject: idSubject,
              subjectName: subjectName
            },
          ]);
          setIdSubject('');
          setSubjectName('');
          
        });
      };

    useEffect(() => {
        // ทำสั่งการที่คุณต้องการที่นี่ เช่น อัพเดต UI
        console.log("User list updated:", userList);
    }, [userList]);


    return (
        <div className="Pop ">

            <div className='in '>

                <div className='box-Input-position'>

                    <div>
                        <label style={{ fontFamily: 'Kanit', fontSize: '15px', display: 'block', fontweight: 'bold', marginBottom: '5px' }}>รหัสวิชา:</label>
                        <input
                            type="text"
                            value={idSubject}
                            onChange={(e) => setIdSubject(e.target.value)}
                            style={{ marginBottom: '10px', width: '300px' , fontFamily: 'Kanit'}}
                        />
                    </div>
                    <div>
                        <label style={{ fontFamily: 'Kanit', fontSize: '15px', display: 'block', fontweight: 'bold', marginBottom: '5px' }}>ชื่อวิชา:</label>
                        <input
                            type="text"
                            value={subjectName}
                            onChange={(e) => setSubjectName(e.target.value)}
                            style={{ width: '300px', fontFamily: 'Kanit'}}
                        />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'end', marginTop: 'auto' }}>
                        <button onClick={handleButtonAdd} className='btn'>
                            <IoIosAddCircleOutline style={{ fontFamily: 'Kanit', fontSize: '15px', marginRight: '3px', paddingTop: '5px' }} />
                            ADD
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InputEdu;