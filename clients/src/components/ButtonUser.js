import "./ButtonUser.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";
import UserBoxNameAjarn from "./UserBoxNameAjarn";
import UserBoxNameEduca from "./UserBoxNameEduca";
import React from 'react';
import { ReactComponent as Icon } from '../assets/carbon--user-profile.svg';




function ButtonUser() {
    const [tab, setTab] = useState(0);

    const handleButtonClick = (tabIndex) => {
        setTab(tabIndex);
    };
    return (

        <div>
            <h1 className='ButtonUser-textfont' >ข้อมูลผู้ใช้งาน</h1>
            <div className='ButtonUser-buttonbox'>
                <button className='ButtonUser-buttonAjarn' onClick={() => {
                    setTab(0);
                }}>จำนวนอาจารย์
                    <br></br> 80
                </button>
                <button className='ButtonUser-buttonAdmin' onClick={() => {
                    setTab(1);
                }}>จำนวนฝ่ายการศึกษา
                    <br></br> 2
                </button>
                

                

            </div>

           {tab === 0?<UserBoxNameAjarn></UserBoxNameAjarn>:<UserBoxNameEduca></UserBoxNameEduca>}
        </div >
    );
}

export default ButtonUser;
