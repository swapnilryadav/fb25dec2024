const express=require("express");
const cors =require("cors");
const mysql=require("mysql2");

const app =express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Swapnil@29",
    database: "fb25dec24"
});
app.post("/save",(req,res)=>{
    let sql ="insert into student values(?,?)";
    let data=[req.body.name,req.body.feedback];
    con.query(sql,data,(err,result)=>{
        if(err) res.send(err);
        else res.send(result);
});

});

app.listen(9000,()=>{
    console.log("Server started at port 9000");
 });
