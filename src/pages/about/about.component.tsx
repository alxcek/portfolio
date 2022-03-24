import React, {useEffect} from "react";

import './about.styles.scss';
import Grid from "../../components/grid/grid.component";


const AboutPage = () => {

    useEffect(() => {
        window.scrollTo({top: 0, behavior: "smooth"});
    }, []);

    return (
        <div className="about">
            <Grid/>
        </div>
    )
}

export default AboutPage;
