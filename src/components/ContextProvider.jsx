import { createContext, useContext, useState } from "react";

const UserDataContext = createContext();
const HabitStatusContext = createContext();
const TotalNumberHabits = createContext();

export function useUserDataContext() {
  return useContext(UserDataContext);
}

export function useHabitStatusContext() {
  return useContext(HabitStatusContext);
}

export function useTotalNumberHabits() {
  return useContext(TotalNumberHabits);
}

export default function PageContextProvider({ children }) {
  const userDataStringify = localStorage.getItem("UserData");
  let UserData = {};
  if (userDataStringify !== null) {
    UserData = { ...JSON.parse(userDataStringify) };
  }
  const [user, setUser] = useState(UserData);
  const [habitDone, setHabitDone] = useState(0);
  const [numberOfHabits, setNumberOfHabits] = useState([]);

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      <HabitStatusContext.Provider value={{ habitDone, setHabitDone }}>
        <TotalNumberHabits.Provider
          value={{ numberOfHabits, setNumberOfHabits }}
        >
          {children}
        </TotalNumberHabits.Provider>
      </HabitStatusContext.Provider>
    </UserDataContext.Provider>
  );
}
