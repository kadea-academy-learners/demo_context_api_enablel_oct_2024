import { useContext } from "react";
import { useUserContext } from "./context/userContext";
import { CountContext } from "./context/countContext";

export function Sidebar() {
  const user = useUserContext();
  const count = useContext(CountContext);
  return (
    <div>
      <p>Count: {count?.count}</p>
      <div>{user.userName}</div>
      <div>{user.email}</div>
      <button onClick={count?.decrement}>-</button>
      <button onClick={count?.increment}>+</button>
    </div>
  );
}

export function Profile() {
  const user = useUserContext();

  const count = useContext(CountContext);

  return (
    <div style={{ border: "solid black 1px", padding: "50px" }}>
      <h1>Profile</h1>
      {user.userName}
      <p>{count?.count}</p>
      <button onClick={count?.decrement}>-</button>
      <button onClick={count?.increment}>+</button>
    </div>
  );
}
