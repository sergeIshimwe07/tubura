import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Logout() {

  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("uid");
    localStorage.removeItem("email");
    localStorage.clear();
    navigate('/login');
  }, [])
}

export default Logout
