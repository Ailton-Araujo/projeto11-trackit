import { createContext, useContext, useState } from "react";

const UserDataContext = createContext();
const HabitStatusContext = createContext();

export function useUserDataContext() {
  return useContext(UserDataContext);
}

export function useHabitStatusContext() {
  return useContext(HabitStatusContext);
}

export default function PageContextProvider({ children }) {
  const userDataStringify = localStorage.getItem("UserData");
  let UserData = {};
  if (userDataStringify !== null) {
    UserData = { ...JSON.parse(userDataStringify) };
  }
  const [user, setUser] = useState(UserData);
  const [habitStatus, setHabitStatus] = useState(50);

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      <HabitStatusContext.Provider value={{ habitStatus, setHabitStatus }}>
        {children}
      </HabitStatusContext.Provider>
    </UserDataContext.Provider>
  );
}
