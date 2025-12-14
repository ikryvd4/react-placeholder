import { useAppDispatch, useAppSelector } from "./store/store";
import { Panel, List, Cards } from "@components/organisms";
import { toogleView } from "./store/todos/todos.slice";
import Counter from "@components/organisms/Counter/Counter";

import "./App.scss";

export default function App() {
  const { view } = useAppSelector((state) => state.todos);
  const dispatch = useAppDispatch();

  return (
    <>
      <header className="header">
        <div className="header__container">header</div>
      </header>
      <main className="main">
        <section className="todos" style={{ marginTop: 30 }}>
          <div className="todos__container">
            <Counter></Counter>
            <h1 style={{ marginBottom: 30 }}>Todo List with Redux Toolkit</h1>

            <button type="button" onClick={() => dispatch(toogleView())}>
              BUTTON
            </button>

            <Panel />
            {view === "card" ? <Cards /> : <List />}
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer__container">footer</div>
      </footer>
    </>
  );
}
