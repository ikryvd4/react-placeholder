export type UserItem = {
  id: number;
  name: string;
};

export type UserState = {
  users: UserItem[];
  loading: boolean;
  error: string | null;
  page: number;
  total: number;
  limit: number;
};
