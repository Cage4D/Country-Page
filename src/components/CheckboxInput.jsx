import React from "react"

function CheckboxInput({ id, children, state, setState, type="checkbox"}) {
    return (
        <>
            <label htmlFor={id} className="checkbox-label">
                <input id={id} type={type} 
                className="checkbox-input"
                checked={state}
                onChange={() => setState(!state)}/>
                {children}
            </label>
        </>
    )
}

export default CheckboxInput;