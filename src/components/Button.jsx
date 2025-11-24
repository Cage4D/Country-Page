import React from "react"

function Button({ children, region, state, setState }) {
    const [click, setClick] = React.useState(false)

    return <button 
    className={click === true ? `toggle-button toggle-button-click` : `toggle-button`}
    type="button"
    data-region={region}
    onClick={event => {
        setClick(!click)
        setState([...state, event.target.getAttribute("data-region")])
    }}>{ children }</button>
}

export default Button;