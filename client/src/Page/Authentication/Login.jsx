import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState('user');
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/api/login", { email, password, role }, {
                withCredentials: true
            });

            if (res.data.login) {
                alert("Login successful!");
                navigate("/");
            }
        } catch (err) {
            if (err.response && err.response.data.message) {
                alert(err.response.data.message);
            } else {
                alert("An error occurred. Please try again.");
            }
            console.error(err);
        }
    };

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
                            <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
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

                        <div className="mb-3">
                            <label className="form-label">Login as :</label>
                            <div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="role"
                                        id="userRole"
                                        value="user"
                                        checked={role === 'user'}
                                        onChange={(e) => setRole(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="userRole">User</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        name="role"
                                        id="adminRole"
                                        value="admin"
                                        checked={role === 'admin'}
                                        onChange={(e) => setRole(e.target.value)}
                                    />
                                    <label className="form-check-label" htmlFor="adminRole">Admin</label>
                                </div>
                            </div>
                        </div>

                        <div className='mb-2'>
                            New user?
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

export default Login;
