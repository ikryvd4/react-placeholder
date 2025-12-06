import { useEffect } from "react";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./store/store";
import { fetchPosts } from "./store/posts/posts.thunk";
import { fetchUsers } from "./store/users/users.thunk";
import { removePost } from "./store/posts/posts.slice";
import { increment } from "./store/couter/couter.slice";
import { multiplyAction } from "./store/couter/couter.actions";

export default function App() {
  const { posts, loading, error } = useAppSelector((state) => state.posts);
  const { users, page, limit, total } = useAppSelector((state) => state.users);
  const { value } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchUsers({ page, limit }));
  }, [dispatch]);

  const totalPages = Math.ceil(total / limit);

  return (
    <>
      <header className="header">
        <div className="header__container">header</div>
      </header>
      <main className="main">
        <div className="main__container">
          <div className="counter">
            <button type="button" onClick={() => dispatch(increment())}>
              PLUS
            </button>
            <button type="button" onClick={() => dispatch(multiplyAction(2))}>
              MINUS
            </button>
            <div className="counter__value">{value}</div>
          </div>
          <div className="posts">
            {loading && <p>Loading...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            {posts.map((post) => (
              <div key={post.id} onClick={() => dispatch(removePost(post.id))}>
                {post.id}: {post.title}
              </div>
            ))}
          </div>
          <div className="users" style={{ marginTop: 20 }}>
            <div className="total">{totalPages}</div>
            {users.map((post) => (
              <div key={post.id} onClick={() => dispatch(removePost(post.id))}>
                {post.id}: {post.name}
              </div>
            ))}
            <div className="next" style={{ display: "flex", gap: 5 }}>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  style={{ padding: 5, border: "1px solid white" }}
                  onClick={() => dispatch(fetchUsers({ page: i + 1, limit }))}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__container">footer</div>
      </footer>
    </>
  );
}
