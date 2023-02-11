import React from 'react'

const Logo = ({src="", alt="", className="", ...rest }) => {
  return (
    <img src={src} alt={alt} className={className} {...rest}/>
  )
}

export default Logo
