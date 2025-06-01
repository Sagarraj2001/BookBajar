import React, { useEffect } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const logout = async () => {
            try {
                const res = await axios.get("http://localhost:8080/api/logout", { withCredentials: true });
                if (res.data.logout) {
                    navigate("/");
                }
            }
            catch (err) {
                console.log(err);
            }
        }
        logout();
    }, [navigate])

    return <div>Logging out...</div>
}

export default Logout;
