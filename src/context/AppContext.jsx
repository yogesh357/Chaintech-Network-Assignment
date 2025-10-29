import { createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // const loggedInUser = localStorage.getItem("loggedInUser");
    const loggedInUser = JSON.parse(localStorage.getItem("users"));
    // if (!loggedInUser) {
    //   return;
    // }
    console.log("current logged in user :", loggedInUser);
    setUser(loggedInUser);
  }, []);

  const value = { user, setUser };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};
