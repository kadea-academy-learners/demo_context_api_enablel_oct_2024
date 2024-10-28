import { Profile, Sidebar } from "./components";

interface DashboardProps {}

export default function Dashboard({}: DashboardProps) {
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
