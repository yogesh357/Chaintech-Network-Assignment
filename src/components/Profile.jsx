// import React, { useState, useEffect } from "react";
// import { useAppContext } from "./appContext";
// import { useNavigate } from "react-router-dom";
// import Input from "../components/Input";
// import { toast } from "react-toastify";
// import { Eye } from "lucide-react";

// function Profile() {
//   const { user, setUser } = useAppContext();
//   const navigate = useNavigate();
//   const [showPassword, setShowPassword] = useState(false);

//   // local editable state
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     bio: "",
//   });

//   // Load user details when component mounts
//   useEffect(() => {
//     if (user) {
//       setFormData({
//         username: user.username || "",
//         email: user.email || "",
//         password: user.password || "",
//         bio: user.bio || "",
//       });
//     }
//   }, [user]);

//   // If no user is logged in
//   if (!user) {
//     return (
//       <div className="text-2xl text-red-500 text-center mt-20">
//         You are not logged in.{" "}
//         <span
//           onClick={() => navigate("/login")}
//           className="text-blue-400 cursor-pointer hover:underline"
//         >
//           Go to Login
//         </span>
//       </div>
//     );
//   }

//   // Handle input changes
//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   // Save updated profile
//   const handleSave = (e) => {
//     e.preventDefault();

//     try {
//       // update user in localStorage
//       localStorage.setItem("users", JSON.stringify([formData]));
//       localStorage.setItem("loggedInUser", JSON.stringify([formData]));
//       setUser(formData);
//       toast.success("Profile updated successfully!");
//     } catch (error) {
//       toast.error("Error updating profile");
//       console.error("Profile update error:", error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center mt-16 gap-6  bg-linear-to-tr from-gray-800 to-gray-700 p-10 rounded-2xl shadow-xl text-white w-[400px] mx-auto">
//       <div className="bg-linear-to-br from-red-400   via-transparent to-transparent blur-3xl"></div>
//       <h2 className="text-3xl font-bold mb-4">Your Profile</h2>

//       <form onSubmit={handleSave} className="flex flex-col gap-4 w-full">
//         <Input
//           name="username"
//           type="text"
//           placeholder="Enter your username"
//           value={formData.username || ""}
//           onChange={handleChange}
//         />

//         <Input
//           name="email"
//           type="email"
//           placeholder="Enter your email"
//           value={formData.email || ""}
//           onChange={handleChange}
//         />

//         <div className="flex justify-between items-center">
//           <Input
//             name="password"
//             //   type="password"
//             placeholder="Enter new password"
//             value={formData.password || ""}
//             onChange={handleChange}
//             type={showPassword ? "text" : "password"}
//           />
//           <Eye onClick={handleShowPassword} />
//         </div>

//         <textarea
//           name="bio"
//           placeholder="Enter your bio"
//           value={formData.bio || ""}
//           onChange={handleChange}
//           className="border-2 border-gray-700 rounded-xl px-4 py-3 text-lg bg-transparent placeholder:text-gray-400 focus:border-blue-500 outline-none transition-all duration-300"
//         ></textarea>

//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-600 transition-all py-2 rounded-xl font-semibold text-white"
//         >
//           Save Changes
//         </button>
//       </form>
//     </div>
//   );
// }

// export default Profile;

//:

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Input";
import { toast } from "react-toastify";
import { Eye, EyeOff, Edit3, Save } from "lucide-react";
import { useAppContext } from "../context/appContext";

function Profile() {
  const { user, setUser } = useAppContext();

  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    bio: "",
  });

  // Load current user
  useEffect(() => {
    if (user) {
      setFormData({
        username: user.username || "",
        email: user.email || "",
        password: user.password || "",
        bio: user.bio || "",
      });
    }
  }, [user]);

  // If no user is logged in
  if (!user) {
    return (
      <div className="text-2xl text-red-500 text-center mt-20">
        You are not logged in.{" "}
        <span
          onClick={() => navigate("/login")}
          className="text-blue-400 cursor-pointer hover:underline"
        >
          Go to Login
        </span>
      </div>
    );
  }

  // Handle input change
  const handleChange = (e) => {
    if (!isEditing) return;
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Save changes
  const handleSave = (e) => {
    e.preventDefault();

    try {
      localStorage.setItem("users", JSON.stringify(formData));
      localStorage.setItem("loggedInUser", JSON.stringify(formData));
      setUser(formData);
      setIsEditing(false);
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast.error("Error updating profile");
      console.error("Profile update error:", error);
    }
  };

  return (
    <div className="flex flex-col items-center mt-16 gap-6 bg-gradient-to-tr from-gray-800 to-gray-700 p-10 rounded-2xl shadow-2xl text-white w-[400px] mx-auto relative overflow-hidden">
      {/* Light beam effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500/20 via-transparent to-transparent blur-3xl pointer-events-none"></div>

      <h2 className="text-3xl font-bold mb-2 z-10">Your Profile</h2>
      <p className="text-gray-300 text-sm mb-4">
        Manage your account details and preferences.
      </p>

      {/* Edit / Save Button */}
      <button
        onClick={() =>
          isEditing ? handleSave(new Event("submit")) : setIsEditing(true)
        }
        className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all z-10 ${
          isEditing
            ? "bg-green-500 hover:bg-green-600"
            : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {isEditing ? <Save size={18} /> : <Edit3 size={18} />}
        {isEditing ? "Save Changes" : "Edit Profile"}
      </button>

      <form
        onSubmit={handleSave}
        className="flex flex-col gap-4 w-full z-10"
        autoComplete="off"
      >
        <Input
          name="username"
          type="text"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          disabled={!isEditing}
        />

        <Input
          name="email"
          type="email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          disabled={!isEditing}
        />

        <div className="relative">
          <Input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter new password"
            value={formData.password}
            onChange={handleChange}
            disabled={!isEditing}
          />
          {isEditing && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400 hover:text-white"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          )}
        </div>

        <textarea
          name="bio"
          placeholder="Enter your bio"
          value={formData.bio}
          onChange={handleChange}
          disabled={!isEditing}
          className={`border-2 rounded-xl px-4 py-3 text-lg bg-transparent placeholder:text-gray-400 focus:border-blue-500 outline-none transition-all duration-300 ${
            isEditing ? "border-gray-600" : "border-gray-700 opacity-60"
          }`}
        ></textarea>
      </form>
    </div>
  );
}

export default Profile;
