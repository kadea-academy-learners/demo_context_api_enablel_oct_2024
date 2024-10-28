import { useState } from "react";

import Dashboard from "./dashboard";
import { UserContext } from "./context/userContext";
import { CountContext } from "./context/countContext";

export interface User {
  email: string;
  userName: string;
}

export default function Demo() {
  const [count, setCount] = useState(0);

  const [user] = useState<User>({
    email: "toto@toto.xo",
    userName: "string",
  });

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }
  return (
    <div>
      <UserContext.Provider value={user}>
        <CountContext.Provider
          value={{
            count,
            increment,
            decrement,
          }}
        >
          <Dashboard />
          <button onClick={decrement}>-</button>
          <button onClick={increment}>+</button>
        </CountContext.Provider>
      </UserContext.Provider>
    </div>
  );
}
