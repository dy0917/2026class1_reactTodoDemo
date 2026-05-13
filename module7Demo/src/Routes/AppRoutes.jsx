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
import ProtectedRoute from "./Components/ProtectedRoute";
import DashRoutes from "./dashRoutes";

function AppRoutes(props) {
  return (
    <Routes>
      {/* index matches on default/home URL: / */}
      <Route index element={<Homepage {...props} />} />
      {/* nested routes, matches on /dash/messages etc */}
      <DashRoutes></DashRoutes>
      <Route path="/about" element={<AboutPage {...props} />} />
      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList {...props} />} />
        <Route path=":id" element={<PostDetailPage {...props} />} />
      </Route>
      {/* special route to handle if none of the above match */}
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
export default AppRoutes;
