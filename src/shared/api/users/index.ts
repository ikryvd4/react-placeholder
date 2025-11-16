export const fetchApi = {
  getUsers: () => {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        if (!response.ok) throw new Error(`Error ${response.status}`);
        return response.json();
      })
      .catch((e) => {
        console.error("От халепа", e);
        return [];
      });
  },
};
