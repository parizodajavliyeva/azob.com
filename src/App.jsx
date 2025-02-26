import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PublicPage from "./components/Public/Public";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PrivatePage from "./components/Privatee/Private";


const AuthGuard = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<PublicPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/private"
        element={
          <AuthGuard>
            <PrivatePage />
          </AuthGuard>
        }
      />
    </Routes>
  </Router>
);

export default App;
