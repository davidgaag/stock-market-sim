import "./App.css";
// import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
// import Login from "./component/authentication/login/Login";
// import Register from "./component/authentication/register/Register";
// import MainLayout from "./component/mainLayout/MainLayout";
// import Toaster from "./component/toaster/Toaster";
// import useUserInfo from "./component/userInfo/UserInfoHook";
// import UserItem from "./component/userItem/UserItem";


const App = () => {
  // const { currentUser, authToken } = useUserInfo();

  // const isAuthenticated = (): boolean => {
  //   return !!currentUser && !!authToken;
  // };


  return (
    <div>
      Hello world
    </div>
  )
  // return (
  //   <div>
  //     <Toaster position="top-right" />
  //     <BrowserRouter>
  //       {isAuthenticated() ? (
  //         <AuthenticatedRoutes />
  //       ) : (
  //         <UnauthenticatedRoutes />
  //       )}
  //     </BrowserRouter>
  //   </div>
  // );
};

// const AuthenticatedRoutes = () => {
//   return (
//     <Routes>
//       <Route path="logout" element={<Navigate to="/login" />} />
//       <Route path="*" element={<Navigate to="/feed" />} />
//     </Routes >
//   );
// };

// const UnauthenticatedRoutes = () => {
//   const location = useLocation();

//   return (
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="*" element={<Login originalUrl={location.pathname} />} />
//     </Routes>
//   );
// };

export default App;
