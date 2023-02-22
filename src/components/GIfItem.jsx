import React from 'react'

export const GIfItem = ({ url, title }) => {
    
    return (
        <div
            className='p-2  rounded-md shadow-md  hover:shadow-none hover:border-gray-500 bg-white transition-all flex flex-col justify-between'
        >
            <img
                src={url}
                alt={title}
            />
            <a href={url} target='_blank' className='hover:text-gray-500'>{title}</a>
        </div>
    )
}
