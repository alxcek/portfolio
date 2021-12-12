import React from "react";
import {ProgressBarProps} from "../../@types/ProgressBar";

import "./progress-bar.styles.scss";

const Progress = ({title, value, max}: ProgressBarProps) => {

    return (
        <div>
            <span>{title}</span>
            <br />
            <progress value={value} max={max}/>
            {/*<span>{(value / max) * 100}%</span>*/}
        </div>
    )
}

Progress.defaultProps = {
    max: 100
}

export default Progress;
