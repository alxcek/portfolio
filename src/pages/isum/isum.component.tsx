import React from "react";

import "./isum.styles.scss";

const Isum = () => {
    return (
        <div className="isum">
            <div className="image__container"/>
            <div className="info__container">
                <div className="boxes">
                    <div className="overview">
                        <div className="overview__label">Overview</div>
                    </div>
                    <div className="project__description">
                        <div className="project__description__label">
                            <div className="small-txt">
                                name
                            </div>
                            ISUM
                        </div>
                        <div className="project__description__desc">
                            <div className="small-txt">
                                introduction
                            </div>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                            mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                            laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Isum;
