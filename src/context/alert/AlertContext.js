import { createContext, useReducer  } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext()

export const AlerProvider = ({children})=> {
  const initialState = null

  const [state, dispatch] = useReducer(alertReducer, initialState)

  // Set an alert 関数を作成
  const setAlert = (msg, type) => {
    dispatch({
    type: 'SET_ALERT',
    payload: {msg, type},
    })
    
    setTimeout(() => dispatch({type: 'REMOVE_ALERT'}), 3000)
  }

  return <AlertContext.Provider value={{alert: state, setAlert }} >
    {children}
  </AlertContext.Provider>
}

export default AlertContext