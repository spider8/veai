import React from "react";
import "./WrapContent.css"

export default function WrapContent({ children }) {

    return (
        <div className="wrap-content">
            {children}
        </div>
    )
}