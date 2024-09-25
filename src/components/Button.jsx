import React from 'react'

const Button = ({ onClick, className, title, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      disabled={disabled}
    >
      {title}
    </button>
  )
}
export default Button
