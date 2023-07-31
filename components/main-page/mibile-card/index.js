import React from 'react'

const MobileCard = () => {
  return (
    // <div className="relative w-[345px] h-[588px] bg-indigo-500 black rounded-3xl after:relative after:left-28 after:top-28 after:w-[345px] after:h-[588px] after:bg-gray-500"></div>
      <div className="relative">
         <div className="absolute left-7 top-7 w-[345px] h-[588px] bg-gray-500 rounded-3xl"></div>
    <div className="relative w-[345px] h-[588px] bg-indigo-500 text-white rounded-3xl z-20"></div>
   
  </div>
    )
}

export default MobileCard;