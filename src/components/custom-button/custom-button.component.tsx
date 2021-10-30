import React from "react";
import "./custom-button.styles.scss";

type CustomButtonProps = {
    isCheckMore?: string,
    children?: string,
    inverted?: boolean,
    circle?: boolean,
    onClick?: () => void
}

const CustomButton = ({children, isCheckMore, inverted, onClick, circle}: CustomButtonProps) => (
    <button className={`${inverted ? "inverted" : ""} ${
        isCheckMore ? "check-more" : ""} ${
        circle ? "circle" : ""}
        custom-button`}
            onClick={onClick}>
        {children}
    </button>
)

export default CustomButton;
