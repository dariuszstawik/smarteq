import Link from 'next/link';
import React from 'react'

const ButtonLg = ({children, isOrange}) => {
  return (
    <button className={`p-3 m-6 uppercase border border-orange-600 rounded-full ${isOrange ? "bg-orange-600" : "bg-white"}`}>{children}</button>
  )
}

export default ButtonLg;