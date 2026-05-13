import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import PageNotFound from "./Pages/PageNotFound";
import DashboardPage from "./Pages/DashboardPage";
import DashboardMessages from "./Pages/DashboardMessages";
import DashboardTasks from "./Pages/DashboardTasks";
import AboutPage from "./Pages/AboutPage";
import PostsPage from "./Pages/PostsPage";
import PostList from "./Pages/PostList";
import PostDetailPage from "./Pages/PostDetailPage";
import ProtectedRoute from "../Components/ProtectedRoute";

export default function DashRoutes() {
  return (
    <Route
      path="dash"
      element={
        <ProtectedRoute>
          <DashboardPage {...props} />
        </ProtectedRoute>
      }
    >
      <Route path="messages" element={<DashboardMessages />} />
      <Route path="tasks" element={<DashboardTasks />} />
    </Route>
  );
}
