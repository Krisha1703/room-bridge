import React from 'react'

const TextOverlay = ({title, subtitle}) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <h1 className="font-semibold text-white text-[0.5rem]">{title}</h1>
        <p className="font-semibold text-white text-[0.35rem] text-center">
            {subtitle}
        </p>
    </div>
  )
}

export default TextOverlay