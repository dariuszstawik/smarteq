import React from 'react'

const CardButton = ({children}) => {
  return (
    <button className={"p-2 m-4 border bg-gray-300 rounded-full w-1/3 ml-auto"}>{children}</button>
  )
}

export default CardButton;