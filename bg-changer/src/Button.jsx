import React from 'react'

function Button({children, type="button",bgColor="olive",textColor="white",className='',...props}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor}`} {...props}>
        {children}
    </button>
  )
}

export default Button