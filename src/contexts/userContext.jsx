import { createContext } from "react";
import {useLocalStorage} from "../hooks/useLocalStorage";

const initialUser = {
  email: "",
  password: "",
};

export const userContext = createContext({
  user: initialUser,
  setUser: () => {},
});

export function UserProvider({ children }) {
  const [user, setUser] = useLocalStorage("signUpData", initialUser);
//   function logout(){}
  return (
    <userContext.Provider
      value={{
        user,
        setUser,
        // logout
      }}
    >
      {children}
    </userContext.Provider>
  );
}

