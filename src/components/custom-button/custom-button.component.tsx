import React from "react";
import "./custom-button.styles.scss";
import {CustomButtonProps} from "../../@types/CustomButton";

const CustomButton = ({children, inverted, onClick, circle}: CustomButtonProps) => (
    <button className={`${inverted ? "inverted" : ""} ${
        circle ? "circle" : ""}
        custom-button`}
            onClick={onClick}>
        {children}
    </button>
)

export default CustomButton;
