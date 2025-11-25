import React from "react"

function Button({ children, region, state, setState }) {
    const isActive = state.includes(region)

    const handleClick = () => {
        if (isActive) {
        setState(state.filter(item => item!== region))
    } else {
        setState([...state, region])
    }
    }

    return <button 
    className={isActive === true ? `toggle-button toggle-button-click` : `toggle-button`}
    type="button"
    data-region={region}
    onClick={handleClick}>{ children }</button>
}

export default Button;