import React from "react";
import { useAppContext } from "../context/AppContext";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const { user } = useAppContext();
  const navigate = useNavigate();
  const handleLogoutUser = () => {
    localStorage.removeItem("users");
    toast.success("logged out ");
    navigate("/register");
  };
  return (
    <div>
      <div className="flex justify-between mx-16 pt-6">
        <p
          onClick={() => navigate("/")}
          className="text-xl font-bold text-white cursor-pointer"
        >
          Profile manager
        </p>
        {!user && (
          <button
            onClick={() => navigate("/register")}
            className="px-5 py-3 rounded-3xl font-bold bg-red-300"
          >
            Get Started
          </button>
        )}
        {user ? (
          <button
            onClick={handleLogoutUser}
            className="px-5 py-3 rounded-3xl font-bold bg-red-300"
          >
            Logout
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default Navbar;
