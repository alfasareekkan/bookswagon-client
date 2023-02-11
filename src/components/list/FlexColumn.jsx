import React from "react";
import "./List.css"

function FlexColumn({children}) {
    return (
        <div className="flex-column-list">
            {children }
        </div>
    )
}

export default FlexColumn