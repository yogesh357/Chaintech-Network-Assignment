import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { ToastContainer } from "react-toastify";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className=" h-screen w-screen bg-linear-to-b  from-black/90">
      <Navbar />
      <div className="flex flex-col justify-center items-center h-full w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} theme="dark" />
      </div>
    </div>
  );
}

export default App;

//user
export const ProtectedRoute = () => {
  const navigate = useNavigate();
  if (localStorage.getItem("loggedInUser")) {
    return <Outlet />;
  } else {
    return navigate("/login");
  }
};
