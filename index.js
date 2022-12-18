import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from "./routes/users.js";
import cors from 'cors';
const app=express();

app.use(bodyParser.json());
app.use(cors());

app.use("/",userRoutes);

app.get("/",(req,res)=>{
    res.send("okey")
});

app.all("*",(req,res)=>{
    res.send("DIDNT FOUND ROUTE");
})

app.listen(5000,()=>{
    console.log('listening');
})
