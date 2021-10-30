import React, {useEffect, useState} from 'react';
import './App.scss';
import Loader from "./components/loader/loader.component";
import CustomButton from "./components/custom-button/custom-button.component";

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
                    <div>
                        <CustomButton circle>Yo</CustomButton>
                        <CustomButton>Yo</CustomButton>
                    </div>
                )
            }
        </div>
    );
}

export default App;
