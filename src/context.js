import React from "react"
const Context = React.createContext(null)

export const Provider = (props) => {
    return <Context.Provider value={props.store}>
        {props.children}
    </Context.Provider>
}

export default Context