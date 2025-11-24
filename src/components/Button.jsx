import React from "react"

function Button({ children, region }) {
    return <button 
    className="toggle-button"
    type="button"
    data-region={region}>{ children }</button>
}

export default Button;