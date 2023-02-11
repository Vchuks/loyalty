import React from 'react'

const Input = ({type = "", placeholder = "", className = "input",...rest}) => {
  return (
    <input type={type} placeholder={placeholder} {...rest} className = {className}/>
  )
}

export default Input
