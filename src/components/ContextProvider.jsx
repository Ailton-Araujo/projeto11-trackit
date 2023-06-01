import { createContext, useContext, useState } from "react";

const UserDataContext = createContext();
const UserDataContextUpdate = createContext();
const HabitStatusContext = createContext();
const HabitStatusContextUpadate = createContext();

export function useUserDataContext() {
  return useContext(UserDataContext);
}

export function useUserDataContextUpdate() {
  return useContext(UserDataContextUpdate);
}

export function useHabitStatusContext() {
  return useContext(HabitStatusContext);
}

export function useHabitStatusContextUpadate() {
  return useContext(HabitStatusContextUpadate);
}

export default function PageContextProvider({ children }) {
  const userDataStringify = localStorage.getItem("UserData");
  let UserData = {};
  if (userDataStringify !== null) {
    UserData = { ...JSON.parse(userDataStringify) };
  }
  const [user, setUser] = useState(UserData);
  const [habitStatus, setHabitStatus] = useState(0);

  return (
    <UserDataContext.Provider value={user}>
      <UserDataContextUpdate.Provider value={setUser}>
        <HabitStatusContext.Provider value={habitStatus}>
          <HabitStatusContextUpadate.Provider value={setHabitStatus}>
            {children}
          </HabitStatusContextUpadate.Provider>
        </HabitStatusContext.Provider>
      </UserDataContextUpdate.Provider>
    </UserDataContext.Provider>
  );
}
