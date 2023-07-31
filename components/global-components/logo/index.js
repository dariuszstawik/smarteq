import Link from 'next/link';
import React from 'react'

const Logo = ({closeMobileMenu}) => {
  return (

<Link href="/">     
    <img className="w-72" src="smart_logo.svg" onClick={()=>closeMobileMenu()}/>
    </Link>
  )
}

export default Logo;