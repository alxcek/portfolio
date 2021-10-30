import React, {useEffect, useState} from 'react';
import './App.scss';
import Loader from "./components/loader/loader.component";
import Hamburger from "./components/hamburger-button/hamburger.component";

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 5500)
    }, [])

    return (
        <div className="application">
            {
                loading ? (
                    <div className="loader">
                        <Loader/>
                    </div>
                ) : (
                    <h2>Testing</h2>
                )
            }
        </div>
    );
}

export default App;
