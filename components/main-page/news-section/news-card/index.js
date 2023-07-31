import React from 'react'

const NewsCard = () => {
  return (
//news card that width equals 400px, rounded with standard shadow, containing full-size image, title, description and button to read more
    <div className="w-96 rounded-lg shadow-lg">
        <img src="https://picsum.photos/400/300" alt="news" className="w-contain rounded-t-lg" />
        <div className="p-4 flex flex-col">
            <h3 className="text-xl font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</h3>
            <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <button className="w-1/3 ml-auto bg-slate-700 text-white text-sm font-semibold px-4 py-2 rounded-lg mt-4">Read more</button>
        </div>
    </div>

  )
}

export default NewsCard;