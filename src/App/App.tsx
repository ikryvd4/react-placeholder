import {Users} from "@components/organisms/Users/Users.tsx";
import "./App.css";


export default function App() {
    return (
        <>
            <header className="header">
                <div className="header__container">header</div>
            </header>
            <main className="main">
                <div className="main__container">
                    <Users></Users>
                </div>
            </main>
            <footer className="footer">
                <div className="footer__container">footer</div>
            </footer>
        </>
    );
}
