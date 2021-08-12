const client = require('./connection')
const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(cors())




app.get('/users',(req,res)=>{
  client.query('select * from users',(err,result)=>{
    if(!err){
      res.send(result.rows)
    }
  });
  client.end;
})









app.get('/users/email',(req,res)=>{
    client.query("select * from users where email='ansam.hiary@gmail.com'",(err,result)=>{
      if(!err){
        res.send(result.rows)
      }
    });
    client.end;
  })




app.get('/devices',(req,res)=>{
  client.query("select * from devices",(err,result)=>{
    if(!err){
      res.send(result.rows)
    }
  });
  client.end;
})

app.get('/devices/id',(req,res)=>{
  client.query("select * from devices where id=1",(err,result)=>{
if(!err){
  res.send(result.rows)
}
  });
  client.end;
})

app.post('/users',(req,res) =>{

    const user = req.body;
    let insertQuery = `insert into users(id,name,email,password) values(${user.id},'${user.name}','${user.email}','${user.password}')`;
    client.query(insertQuery,(err,result) =>{
if(!err){
    res.send('Insertion Was Successful')
}else{
    console.log(err.message)
}
    })

client.end;

})





app.post('/devices',(req,res)=>{
  const device = req.body;
  let insertQuery2=`insert into devices(status,solutionname,solutiontype,solutoinid,devicenumber,city,description,createdby,version) values ('${device.status}','${device.solutionname}',
  '${device.solutiontype}','${device.solutoinid}','${device.devicenumber}','${device.city}','${device.description}','${device.createdby}','${device.version}')`;
  client.query(insertQuery2,(err,result)=>{
    if(!err){
      res.send('Insertion Was Successful')
    }else{
      console.log(err.message)
    }
  })
  client.end;
})

app.listen(3000, ()=>{
    console.log("Server is running in port 3000");
  })
  client.connect();