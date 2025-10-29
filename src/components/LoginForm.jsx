import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    try {
      // const users = JSON.parse(localStorage.getItem("users"));
      // console.log(users);
      // const foundUser = users?.find(
      //   (user) => user.email === email && user.password === password
      // );
      // // let foundUser = false;
      // // if (users.email == email && users.password == password) {
      // //   foundUser = true;
      // // }
      // if (foundUser) {
      //   localStorage.setItem("loggedInUser", JSON.stringify(users));
      //   toast.success("logged in succesfully");
      //   navigate("/profile");
      const users = JSON.parse(localStorage.getItem("users"));
      console.log(users);

      if (users.email == email && users.password == password) { 
        localStorage.setItem("users", JSON.stringify(users));
        toast.success("logged in succesfully");
        navigate("/profile");
      } else {
        toast.error("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="py-16 px-16 flex flex-col gap-5 bg-linear-to-t from-black/70 to-white/20 border-2 border-gray-700 rounded-2xl shadow-xl max-w-md mx-auto text-white backdrop-blur-md"
    >
      <p className="text-center text-3xl font-bold mb-2">Login</p>

      <div className="flex flex-col gap-y-3">
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
      </div>

      <Button info="Login" type="submit" />

      <p className="text-center text-sm text-gray-300">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/register")}
          className="text-blue-400 font-semibold cursor-pointer hover:underline"
        >
          Register
        </span>
      </p>
    </form>
  );
}

export default LoginForm;
