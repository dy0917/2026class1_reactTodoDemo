import { useData } from "../Hooks/useData";
import { useParams } from "react-router-dom";
export default function PostDetailPage() {
  const { id } = useParams(); // custom hook to access dynamicparams;
  const post = useData("https://jsonplaceholder.typicode.com/posts/" + id);
  return (
    <div className="Post">
      {post ? (
        <>
          <h3>
            Post #{post.id}: {post.title}
          </h3>
          <p>{post.body}</p>
        </>
      ) : (
        "Loading ..."
      )}
    </div>
  );
}
