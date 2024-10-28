import { Profile, Sidebar } from "./components";

export default function Dashboard() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Sidebar />
      <Profile />
    </div>
  );
}
