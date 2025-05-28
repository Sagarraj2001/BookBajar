import React, { useState } from 'react'
import {Link} from "react-router-dom"
import axios from "axios"

const Login = () => {
    const [email,setEmail]=useState();
    const [password,setPassword]=useState();

    axios.defaults.withCredentials=true;

    const handleSubmit=async (e)=>{
        try{
            const res=await axios.post("http://localhost:5000/api/login",{email,password},{withCredentials:true});
            console.log(res.data);
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <div
                className="d-flex justify-content-center align-items-center vh-100 bg-light"
                style={{
                    backgroundImage: 'url("https://www.housedigest.com/img/gallery/how-to-make-custom-wallpaper-using-old-book-pages/l-intro-1660552487.jpg")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            >
                <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#002147', color: "white" }}>
                    <h3 className="text-center mb-4">Login</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                        </div>
                        <div className='mb-2'>
                            new user?
                            <Link to="/signup" className="text-warning text-decoration-none mx-2">
                                Signup
                            </Link>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login
