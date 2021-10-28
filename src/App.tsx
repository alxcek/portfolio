import React, {useEffect, useState} from 'react';
import './App.scss';
import Loader from "./components/loader/loader.component";

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
                    <Loader/>
                ) : (
                    <div><h2>Testing</h2></div>
                )
            }
        </div>
    );
}

export default App;
