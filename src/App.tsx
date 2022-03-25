import React, {useEffect, useState} from 'react';
import Loader from "./components/loader/loader.component";
import {Route, Switch} from "react-router-dom";
import Header from "./components/header/header.component";
import HomePage from "./pages/home-page/home-page.component";

import "./App.scss";
import AboutPage from "./pages/about/about.component";

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5500)
    }, []);

    return (
        <main>
            {
                loading ? (
                    <div className="loader">
                        <Loader/>
                    </div>
                ) : (
                    <div className="main">
                        {/*<Cursor />*/}
                        <Header/>
                        <Switch>
                            <Route exact path='/' component={HomePage} />
                            <Route path='/about' component={AboutPage} />
                        </Switch>
                    </div>
                )
            }
        </main>
    );
}

export default App;
