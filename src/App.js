import React, {useEffect} from "react";
import './App.css';
import LoginForm from "./components/LoginForm";

const App = () => {
    useEffect(() => {
        const link = document.createElement("link");
        link.href = "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css";
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, []);

    return (
        <div className='app'>
            <LoginForm/>

        </div>
    );
}

export default App;
