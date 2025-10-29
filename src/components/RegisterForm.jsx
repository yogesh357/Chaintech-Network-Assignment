import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    try {
      // const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
      // const newUser = { username, email, password, bio };
      // localStorage.clear("users");
      // localStorage.setItem("users", JSON.stringify(newUser));

      // get existing users array or empty array
      const existingUsers = JSON.parse(localStorage.getItem("users"));

      // create new user
      const newUser = { username, email, password, bio };

      // add new user to array
      // existingUsers.push(newUser);

      // save updated list
      localStorage.setItem("users", JSON.stringify(newUser));

      toast("user registered");
      navigate("/login");
    } catch (error) {
      toast.error("Erroroccured while regitering the user");
      console.error("user regiter error : ", error);
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      className="py-16 px-16 flex flex-col gap-5 bg-linear-to-t from-black/70 to-white/20 border-2 border-gray-700 rounded-2xl shadow-xl max-w-md mx-auto text-white backdrop-blur-md"
    >
      <p className="text-center text-3xl font-bold mb-2">Register New User</p>

      <div className="flex flex-col gap-y-3">
        <Input
          type="text"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <textarea
          className="border-2 border-gray-800 rounded-2xl w-full px-4 py-3 text-lg outline-none bg-transparent placeholder:text-gray-400 placeholder:italic placeholder:opacity-70 focus:border-blue-500 transition-all duration-300"
          placeholder="Enter your bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        ></textarea>
      </div>

      <Button info="Register" type="submit" />

      <p className="text-center text-sm text-gray-300">
        Already have an account?{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-blue-400 font-semibold cursor-pointer hover:underline"
        >
          Login
        </span>
      </p>
    </form>
  );
}

export default RegisterForm;
