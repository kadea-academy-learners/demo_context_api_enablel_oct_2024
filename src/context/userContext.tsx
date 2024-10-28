import { User } from "../App";
import React, { useContext } from "react";

export const UserContext = React.createContext<User | null>(null);

export function useUserContext() {
  const user = useContext(UserContext);
  if (user === null) {
    throw new Error("Le user n'existe pas");
  }

  return user;
}
