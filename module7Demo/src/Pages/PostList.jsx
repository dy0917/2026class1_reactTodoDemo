import { Outlet, useParams, Link, useSearchParams } from "react-router-dom";
import { useData } from "../Hooks/useData";

export default function PostList() {
  const [searchParams, setSearchParams] = useSearchParams(); //
  const limit = searchParams.get("limit") ? searchParams.get("limit") : 5;
  const postsData = useData(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`,
  );

  const handleChangeLimit = (e) => {
    console.log(" e.target.value", e.target.value);
    setSearchParams({ limit: e.target.value });
  };
  // the ? means only call map if postsData is not null
  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={"/posts/" + post.id}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));
  return (
    <ul>
      {postList}
      <Link to="/posts?limit=10">Load 10 Posts</Link>
      <select onClick={handleChangeLimit}>
        <option value="5">
          5
        </option>
        <option value="25">
          25
        </option>
      </select>
    </ul>
  );
}
