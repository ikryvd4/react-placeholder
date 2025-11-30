# Redux basic

> So this branch has the basic Redux setup,and uses the main Redux patterns
> Very important: RTK includes redux-thunk by default (applyMiddleware, combineReducer, redux-thunk)
> RTK have: [redux-thunk, devTools, combineReducer, applyMiddleware, ]
> RTK have: Boilerplate - меньше коду
> RTK have: immer - mutation checks (не думай про імутацію)

@@@@@@@@@@@@@@@@@@@@

- `createStore(reducer, _)` - DEAD
- `comibineReducer({reducer1, reducer2})` - RTK auto
- `applyMiddleware()` - RTK auto
- `redux-thunk` - RTK auto

@@@@@@@@@@@@@@@@@@@@

- `const store = configureStore({ reducer })` - create store RTK
- `function reducer(state, action)` - Clear function
- `<Provider store={store}>` - just provider
- `useDispatch()` - get dispatch
- `useSelector((state) => state.counter)` - get state
