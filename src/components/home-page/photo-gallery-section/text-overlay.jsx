import React from 'react'

const TextOverlay = ({title, subtitle}) => {
  return (
    <div className="absolute inset-0 flex flex-col  items-center justify-center opacity-0 group-hover:opacity-100">
        <h1 className=" bg-black bg-opacity-50 w-full font-semibold text-white text-[0.4rem] pt-1 overflow-hidden">{title}</h1>
        <p className="bg-black bg-opacity-50 w-full font-semibold text-white text-[0.3rem] text-center max-w-full text-wrap px-2 py-1 overflow-hidden">
            {subtitle}
        </p>
    </div>
  )
}

export default TextOverlay