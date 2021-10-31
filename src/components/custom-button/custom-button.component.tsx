import React from "react";
import "./custom-button.styles.scss";

type CustomButtonProps = {
    children?: string,
    inverted?: boolean,
    circle?: boolean,
    onClick?: () => void
}

const CustomButton = ({children, inverted, onClick, circle}: CustomButtonProps) => (
    <button className={`${inverted ? "inverted" : ""} ${
        circle ? "circle" : ""}
        custom-button`}
            onClick={onClick}>
        {children}
    </button>
)

export default CustomButton;
