import "./styles.css";
import React from "react";


const HOC = (Component) => {
  const WithVisible = ({ visible, ...rest}) => {
    if (!visible) return null
    else
    return <Component {...rest} /> 
  }
  return WithVisible
}

export default HOC;




