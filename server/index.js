const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "12345678",
    database: "dbtest"
})

app.get('/box', (req, res) => {
    db.query("SELECT * FROM box", (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(result); // ส่งผลลัพธ์กลับไปยังผู้ใช้
      }
    });
  });

app.post('/box1', (req, res) => {
    const { inputValue } = req.body;

    if(!inputValue){
      return res.status(400).json({ error: 'error'});
    }
  
    db.query("INSERT INTO `box` (id,info) VALUES (null,?)", [inputValue], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ success: true, message: 'Data saved successfully' });
        console.log("บันทึกสำเร็จ")
      }
    });
  });


app.get('/time', (req, res) => {
    db.query("SELECT * FROM time", (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json(result); // ส่งผลลัพธ์กลับไปยังผู้ใช้
        console.log("อ่านข้อมูลสำเร็จ")
      }
    });
  });

  app.post('/time1', (req, res) => {
    const { dayS, timeS, dayF, timeF } = req.body;

    if(!dayS || !timeS || !dayF || !timeF){
      return res.status(400).json({ error: 'error'});
    }
  
    db.query("INSERT INTO time (`id`, `dayS`, `timeS`, `dayF`, `timeF`) VALUES (NULL, ? , ? ,? , ?)", [dayS, timeS, dayF, timeF], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ success: true, message: 'Data saved successfully' });
        console.log("บันทึกสำเร็จ")
      }
    });
  });

  app.delete('/box1/:inputValue', (req, res) => {
    const inputValue = req.params.inputValue;
    // ทำการลบข้อมูลในฐานข้อมูล MySQL ตามดัชนีที่รับมาจาก params
    // ส่งคำตอบกลับไปว่าลบข้อมูลสำเร็จหรือไม่

    if(!inputValue){
      return res.status(400).json({ error: 'error'});
    }
  
    db.query("DELETE FROM `box` WHERE id=?", [inputValue], (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        res.json({ success: true, message: 'Data saved successfully' });
        console.log("ลบสำเร็จ")
      }
    });
  });
  

app.listen("3001", () => {
    console.log('Server is running on port 3001');
})