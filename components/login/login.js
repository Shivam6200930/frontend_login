import React,{useState, useEffect} from 'react';
import "./login.css";
import axios from 'axios';
const Login = () => { 
    const [user,setUser] = useState({ 
        email: "",
        password: ""
        
    })
    const HandaleChange = e => {
        const { name, value } = e.target
        console.log(name, value)
        setUser({
            ...user,
            [name]: value
        })
    }
    const logins=async()=>{
        const {email,password}=user
        await axios.post("https://localhost:5454/login",user)
        .then( res=> console.log(res))
    }
   
    return (
        <>
            <div className="login">     
                <h1>Login</h1>
                <input type="text" className="input" name="email"  value={user.email} placeholder="Enter your Email"  onChange={HandaleChange}></input>
                <input type="password" className="input" name="password"  value={user.password} placeholder="Enter Your Password" onChange={HandaleChange}></input>
                <div className="button" onClick={logins}>Login</div>
                <div className="">or</div>
                <div className="button">Register</div>
            </div>
        </>
    )
}

export default Login