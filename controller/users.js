import {v4 as uuid } from "uuid";

let users=[];

export const getUsers=(req,res)=>{
    res.send(users);
};

export const createUser=(req,res)=>{
    const user=req.body;
    users.push({...user,id:uuid()});
    res.send("user added successfully");
};

export const getUser=(req,res)=>{
    const ourUser=users.filter((user)=>{
        return user.id===req.params.id;
    });
    res.send(ourUser);
};


export const deleteUser=(req,res)=>{
    const ourUsers=users.filter((user)=>{
        return user.id!==req.params.id;
    });
    users=ourUsers;
    res.send(ourUsers);
};

export const updateUser=(req,res)=>{
    const ourUser=users.find((user)=>user.id===req.params.id);
    ourUser.name=req.body.name;
    ourUser.class=req.body.class;
    console.log(users);
    res.send(users);
};
