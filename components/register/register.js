import React,{ useState } from 'react';
import "./register.css";
import axios from "axios";
const Register=()=>{

    const [ user ,setUser]= useState({
        name:"",
        email:"",
        password:"",
        reEnterPassword:""
    })
      const HandaleChange =e =>{
        
        const{ name, value }=e.target
        console.log(name , value )
        setUser({
            ...user,
            [name]:value
        })
      }

      const registers=()=>{
        const {name , email , password , reEnterPassword}=user
        if(name && email && password && (password === reEnterPassword)){
            
             axios.post("http://localhost:5454/register",user)
             .then( res=> console.log(res))
        }else{
            alert("invalid")
        }
       
      }

    return(
        <>
        <div className="register">
            <h1>Rgesister</h1>
            {console.log("User",user)}
            <input type="text" className="input"  name="name"  value={user.name} placeholder="Enter your name"  onChange={HandaleChange}></input>
            <input type="text" className="input"  name="email"  value={user.email} placeholder="Enter your Email"  onChange={HandaleChange}></input>
            <input type="password" className="input"  name="password"  value={user.password} placeholder="Enter Your Password"  onChange={HandaleChange}></input>
            <input type="password" className="input"  name="reEnterPassword"  value={user.reEnterPassword} placeholder="re-enter Password"  onChange={HandaleChange}></input>
            <div className="button" onClick={registers}>register</div>
            <div  className="">or</div>
            <div className="button">login</div>
            </div>
        </>
    )
}

export default Register