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
        }, 4500)
    }, [])

    return (
        <div>
            {
                loading ? (
                    <Loader/>
                ) : (
                    <Hamburger/>
                )
            }
        </div>
    );
}

export default App;
