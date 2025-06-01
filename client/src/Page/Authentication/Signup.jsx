import React, { useState } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [mob, setMob] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); 

    axios.defaults.withCredentials = true;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/signup", { username, email, mob, password }, { withCredentials: true });
            console.log(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center vh-100 bg-light"
            style={{
                backgroundImage: 'url("https://www.housedigest.com/img/gallery/how-to-make-custom-wallpaper-using-old-book-pages/l-intro-1660552487.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="card p-4 shadow" style={{ width: '100%', maxWidth: '400px', backgroundColor: '#002147', color: "white" }}>
                <h3 className="text-center mb-4">Signup</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">UserName</label>
                        <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="mobile" className="form-label">Mobile Number</label>
                        <input type="tel" className="form-control" value={mob} onChange={(e) => setMob(e.target.value)} required />
                    </div>
                    <div className="mb-3 position-relative">
                        <label htmlFor="password" className="form-label">Password</label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span className="input-group-text" onClick={() => setShowPassword(!showPassword)} style={{ cursor: "pointer" }}>
                                <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`}></i>
                            </span>
                        </div>
                    </div>
                    <div className='mb-2'>
                        Already have an account?
                        <Link to="/login" className="text-warning text-decoration-none mx-2">
                            Login
                        </Link>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Signup</button>
                </form>
            </div>
        </div>
    );
};

export default Signup;
