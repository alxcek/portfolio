import React, {useEffect, useState} from 'react';
import './App.scss';
import Loader from "./components/loader/loader.component";
import {Switch} from "react-router-dom";
import Header from "./components/header/header.component";

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5500)
    }, [])

    return (
        <div>
            {
                loading ? (
                    <div className="loader">
                        <Loader />
                    </div>
                ) : (
                    <div className="main">
                        <Header />
                        <Switch>

                        </Switch>
                    </div>
                )
            }
        </div>
    );
}

export default App;
