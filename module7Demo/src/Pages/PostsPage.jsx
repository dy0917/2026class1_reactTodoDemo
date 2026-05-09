import { Outlet, useParams, Link } from "react-router-dom";
import { useData } from "../Hooks/useData";
// save as pages/PostsPage.jsx
export default function PostsPage() {
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}