# Todo List with Redux Toolkit

- Local Storage (without Library)
- Project: [Delete, Create, View, LocalStorage, dark theme]
- TypeScript Store
- hooks: [useTheme, useInput]
- utils: [localStorage: [loadState, saveState]]

---

### use prepare

```
reducers: {
  addTodo: {
      reducer(state, action: PayloadAction<TodoItem>) {...},
      prepare(title: string) {...},
  },
}
```
