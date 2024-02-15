import React, { useState, useEffect } from 'react';
import Axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // ดึงข้อมูลผู้ใช้งานจากเซิร์ฟเวอร์
    Axios.get("http://127.0.0.1:3001/get1")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []); 

  return (
    <div>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <p>Email: {user.email}</p>
            <p>Full Name: {user.name}</p>
            {/* เพิ่มข้อมูลอื่น ๆ ตามต้องการ */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
