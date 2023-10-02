export default function ProductAmount() {
  return (
    <div className="w-auto md:w-1/6 lg:w-96 px-4 flex justify-center my-auto">
      <div className="mx-auto inline-flex items-center justify-center px-4 font-semibold font-heading text-black border border-gray-800 focus:ring-blue-300 focus:border-blue-300 rounded-md">
        <button className="py-2 hover:text-gray-700">
          <svg
            width="12"
            height="2"
            viewBox="0 0 12 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.35">
              <rect
                x="12"
                width="2"
                height="12"
                transform="rotate(90 12 0)"
                fill="currentColor"
              ></rect>
            </g>
          </svg>
        </button>
        <input
          className="w-12 m-0 px-2 py-4 text-center md:text-right border-0 focus:ring-transparent focus:outline-none rounded-md bg-transparent"
          type="number"
          placeholder="1"
        />
        <button className="py-2 hover:text-gray-700">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="black"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.35">
              <rect x="5" width="2" height="12" fill="currentColor"></rect>
              <rect
                x="12"
                y="5"
                width="2"
                height="12"
                transform="rotate(90 12 5)"
                fill="currentColor"
              ></rect>
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
