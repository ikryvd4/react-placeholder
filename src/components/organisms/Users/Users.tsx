// import { useState } from "react";
// import { fetchApi } from "@shared/api/users";

import { useEffect } from "react";
import css from "./Users.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "@app/store/users/thunks";
import { type AppDispatch } from "@app/store";

export function Users() {
  // const [users, setUsers] = useState<UsersType[]>([]);

  const { users } = useSelector((state) => state.users);

  console.log(users);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // const handleFetch = () => {
  //   fetchApi.getUsers().then((json) => setUsers(json));
  // };

  return (
    <>
      <button type="button" className={css.button}>
        FETCH
      </button>

      <div className={css.items}>
        {users.length === 0 && <div>Немає данних</div>}
        {users.map((item) => (
          <div className={css.item} key={item.id}>
            {item.name}
          </div>
        ))}
      </div>
    </>
  );
}
