import React, {useEffect, useState} from 'react';
import './App.scss';
import Loader from "./components/loader/loader.component";
import {Switch} from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5500)
    }, [])

    return (
        <main>
            {
                loading ? (
                    <div className="loader">
                        <Loader />
                    </div>
                ) : (
                    <div className="main">
                        <Header />
                        <Switch>
                            <HomePage />
                        </Switch>
                    </div>
                )
            }
        </main>
    );
}

export default App;
