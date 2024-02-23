import React, { useState, useEffect } from 'react';
import './InputEdu.css';
import { IoIosAddCircleOutline, IoIosClose } from 'react-icons/io';
import { CgFileDocument } from "react-icons/cg";
import { FaRegSave } from "react-icons/fa";
import * as XLSX from 'xlsx';
import Axios from "axios";

const InputEdu = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [userList, setuserList] = useState([]);

    const handleButtonAdd = () => {
        Axios.post("http://127.0.0.1:3001/create", {
          email: email,
          fullName: fullName,
        }).then(() => {
          setuserList([
            ...userList,
            {
              email: email,
              fullName: fullName
            },
          ]);
          setEmail('');
          setFullName('');
          
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

                    <h1 style={{ fontFamily: 'Kanit', color: '#838383', fontSize: 'small' }}>
                        <span style={{ color: '#8C3941' }}>เพิ่มรายชื่อผู้ใช้งาน</span> (*ครั้งละ 1 USER)
                    </h1>

                    <div>
                        <label style={{ fontFamily: 'Kanit', fontSize: '15px', display: 'block', fontweight: 'bold', marginBottom: '5px' }}>EMAIL:</label>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ marginBottom: '10px' }}
                        />
                    </div>
                    <div>
                        <label style={{ fontFamily: 'Kanit', fontSize: '15px', display: 'block', fontweight: 'bold', marginBottom: '5px' }}>ชื่อ-สกุล:</label>
                        <input
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
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