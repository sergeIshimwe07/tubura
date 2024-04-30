import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function Protected({ children }) {
  const isLoggedIn = localStorage.getItem("token")
  if (!isLoggedIn) {
    return <Navigate to="/login" replace />
  }
  return children
}

export default Protected
