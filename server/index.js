const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '123456',
  database: 'db',
  port: '3306'
})

db.connect((err)=>{
  if(err){
    console.log('Error connecting to MySQL database =',err)
    return;
  }
  console.log('MySQL successfully')
})

app.post("/create", (req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
  
    db.query(
      "INSERT INTO usersaj (email,name ) VALUES (?,?)",
      [email,fullName],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });

  app.post("/upload", (req, res) => {
    const excelData = req.body.excelData;

    const values = excelData.map(() => "( ?)").join(", ");
  
    const sql = `INSERT INTO usersaj (email, name) VALUES ${values}`;
  
    db.query(sql,excelData, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting values");
      } else {
        res.send("Values Inserted");
      }
    });
  });
  
  app.post("/creates", (req, res) => {
    const fullName = req.body.fullName;
    const email = req.body.email;
  
    db.query(
      "INSERT INTO usersed (email,name ) VALUES (?,?)",
      [email,fullName],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send("Values Inserted");
        }
      }
    );
  });
  

  app.post("/uploads", (req, res) => {
    const excelData = req.body.excelData;

    const values = excelData.map(() => "( ?)").join(", ");
  
    const sql = `INSERT INTO usersed (email, name) VALUES ${values}`;
  
    db.query(sql,excelData, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error inserting values");
      } else {
        res.send("Values Inserted");
      }
    });
  });



app.get('/get',(req,res)=>{
    db.query("SELECT*FROM usersaj",(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
})
app.get('/get1',(req,res)=>{
  db.query("SELECT*FROM usersed",(err,result)=>{
      if(err){
          console.log(err);
      }else{
          res.send(result);
      }
  })
})
app.get('/api/rowCount', (req, res) => {
  const query = 'SELECT COUNT(*) AS rowCount FROM usersaj';

  db.query(query, (err, result) => {
    if (err) {
      console.error('Query error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      const rowCount = result[0].rowCount;
      res.json({ rowCount });
    }
  });
});

app.get('/api/rowCount1', (req, res) => {
  const query = 'SELECT COUNT(*) AS rowCount FROM usersed';

  db.query(query, (err, result) => {
    if (err) {
      console.error('Query error:', err);
      res.status(500).send('Internal Server Error');
    } else {
      const rowCount = result[0].rowCount;
      res.json({ rowCount });
    }
  });
});


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