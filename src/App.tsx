import { useState } from "react";

import { UserContext } from "./contexts/userContext";
import Dashboard from "./dashboard";

export interface User {
  email: string;
  userName: string;
}

interface DemoProps {}

export default function Demo({}: DemoProps) {
  const [user] = useState<User>({
    email: "francois@kadea.co",
    userName: "fdis111",
  });

  return (
    <div>
      <UserContext.Provider value={user}>
        <Dashboard />
      </UserContext.Provider>
    </div>
  );
}
