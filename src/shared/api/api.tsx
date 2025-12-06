import type { PostItem } from "@app/store/posts/posts.types";
import type { UserItem } from "@app/store/users/users.types";

export const api = {
  url: "https://jsonplaceholder.typicode.com",

  getPost: async (): Promise<PostItem[]> => {
    const response = await fetch(api.url + "/posts");
    if (!response.ok) throw new Error("Network response");
    const data: PostItem[] = await response.json();
    return data;
  },

  getUsers: async (
    page = 1,
    limit = 2
  ): Promise<{ data: UserItem[]; total: number }> => {
    const query = new URLSearchParams({
      _page: String(page),
      _limit: String(limit),
    });
    const response = await fetch(api.url + "/users" + "?" + query);
    if (!response.ok) throw new Error("Network response");
    const data: UserItem[] = await response.json();
    const total = Number(response.headers.get("x-total-count"));
    return { data, total };
  },
};
