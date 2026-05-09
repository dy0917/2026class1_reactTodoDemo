import { useContext } from "react";
import { UserContext } from "../Contexts/UserContext";
export default function DashboardMessages(props) {
  const { currentUser } = useContext(UserContext);
  return (
    <div className="DashboardMessages">
      <p>Welcome to your dashboard, {currentUser.email}</p>
    </div>
  );
}
