import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");

    const navigate = useNavigate();
    useEffect(() => {
        const auth = localStorage.getItem('user');
        if (auth) {
            navigate('/')
        }
    },)

            const collectData = async () => {
                console.warn(Name, Email, Password);
                let result = await fetch("http://localhost:5000/register", {
                    method: 'post',
                    body: JSON.stringify({ Name, Email, Password }),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                result = await result.json();
                console.warn(result);
                localStorage.setItem("user", JSON.stringify(result.result))
                localStorage.setItem("token", JSON.stringify(result.auth))
        
                navigate('/')
            }

    return (
        <div className="Register">
            <h3>Register</h3>
            <input className="InputBox" type="text"
            value={Name} onChange={(e)=>setName(e.target.value)} placeholder="Enter user Name" />

            <input className="InputBox" type="text"
            value={Email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email id" />

            <input className="InputBox" type="Password"
            value={Password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />

            <button onClick={collectData} className="AppButton" type="button">SignUp</button>
        </div> 
    )
}

export default SignUp;