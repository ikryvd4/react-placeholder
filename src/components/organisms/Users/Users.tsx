import s from "./Users.module.css";
import { useEffect } from "react";
import { fetchUsers, useAppDispatch, useAppSelector } from "@app/store";

export function Users() {
  const { users, page } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  const handleNextPage = () => {
    dispatch({ type: "USERS_NEXT_PAGE" });
  };

  const handleDeleteUser = (id: number) => {
    dispatch({ type: "USERS_DELETE", payload: id });
  };

  return (
    <div className={s.wrapper}>
      <h3 className={s.title}>Users List</h3>

      <button
        type="button"
        className={s.button}
        onClick={handleNextPage}
        style={{ marginBottom: "2rem" }}
      >
        NEXT
      </button>

      <ul className={s.list}>
        {users.map((item) => (
          <li key={item.id} className={s.item}>
            <p>
              {item.id}: {item.name}
            </p>
            <button
              type="button"
              className={s.button}
              onClick={() => handleDeleteUser(item.id)}
            >
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
