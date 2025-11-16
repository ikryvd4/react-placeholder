import { useState } from "react";
import { fetchApi } from "@shared/api/users";
import css from "./Users.module.css";

type UsersType = {
  id: number;
  name: string;
};

export function Users() {
  const [users, setUsers] = useState<UsersType[]>([]);

  const handleFetch = () => {
    fetchApi.getUsers().then((json) => setUsers(json));
  };

  return (
    <>
      <button type="button" className={css.button} onClick={handleFetch}>
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
