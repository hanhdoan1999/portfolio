import React from 'react'
import "./Button.scss"

function Button({title,onClick,style = "primary", ...props}) {
  return (
    <button {...props} className={`${'btn'} ${style === "primary" ? "btn-primary" : "btn-secondrary"}`} onClick = {onClick}>{title}</button>
  )
}

export default Button