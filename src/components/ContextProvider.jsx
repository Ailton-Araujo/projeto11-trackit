import { createContext, useContext, useState } from "react";

const LoginContext = createContext();
const LoginContextUpdate = createContext();

export function useLoginContext() {
  return useContext(LoginContext);
}

export function useLoginContextUpdate() {
  return useContext(LoginContextUpdate);
}

export default function PageContextProvider({ children }) {
  const [user, setUser] = useState({});

  return (
    <LoginContext.Provider value={user}>
      <LoginContextUpdate.Provider value={setUser}>
        {children}
      </LoginContextUpdate.Provider>
    </LoginContext.Provider>
  );
}
