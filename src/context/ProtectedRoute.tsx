import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
    isAuthenticated: boolean;
    children: React.ReactNode
}

const ProtectedRoute: React.FC <ProtectedRouteProps> = ({ isAuthenticated, children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/")
    } 
  },[isAuthenticated, navigate])
  
  return (
    <>
        {children}
    </>

  );
};

export default ProtectedRoute