import "./App.css";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./component/authentication/login/Login";
import Register from "./component/authentication/register/Register";
import Toaster from "./component/toaster/Toaster";
import useUserInfo from "./component/userInfo/UserInfoHook";
import Portfolio from "./component/simulator/Portfolio";
import AppNavbar from "./component/appNavbar/AppNavbar";
import QuotePage from "./component/simulator/QuotePage";
import Trade from "./component/simulator/Trade";


const App = () => {
  const { currentUser, authToken } = useUserInfo();

  const isAuthenticated = (): boolean => {
    return !!currentUser && !!authToken;
  };

  return (
    <div>
      <Toaster position="top-right" />
      <BrowserRouter>
        {isAuthenticated() ? (
          <AuthenticatedRoutes />
        ) : (
          <UnauthenticatedRoutes />
        )}
      </BrowserRouter>
    </div>
  );
};

const AuthenticatedRoutes = () => {
  return (
    <>
      <AppNavbar />
      <Routes>
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="trade" element={<Trade />} />
        <Route path="quote" element={<QuotePage />} />
        <Route path="logout" element={<Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/portfolio" />} />
      </Routes >
    </>
  );
};

const UnauthenticatedRoutes = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Login originalUrl={location.pathname} />} />
    </Routes>
  );
};

export default App;
