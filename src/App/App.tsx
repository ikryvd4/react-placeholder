import {useAppDispatch, useAppSelector} from "./store/store";
import {toggleView} from "./store/todos/todos.slice";
import {Panel, List, Cards, Counter} from "@components/organisms";
import {Header, Footer} from "@components/templates";

import "./App.scss";

export default function App() {
    const {view} = useAppSelector((state) => state.todos);
    const dispatch = useAppDispatch();

    return (
        <>
            <Header/>
            <main className="main">
                <section className="todos" style={{marginTop: 30}}>
                    <div className="todos__container">
                        <Counter></Counter>
                        <h1 style={{marginBottom: 30}}>Todo List with Redux Toolkit</h1>

                        <button type="button" onClick={() => dispatch(toggleView())}>
                            BUTTON
                        </button>

                        <Panel/>
                        {view === "card" ? <Cards/> : <List/>}
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    )
}
