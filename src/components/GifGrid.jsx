import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'



export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    const getImages = async () => {
        const gifs = await getGifs(category)
        setImages(gifs)
    }

    useEffect(() => {
        getImages()
    }, [])


    return (
        <>
            <h3 className='text-2xl text-center'>{category}</h3>

            <div className='grid grid-cols-3 gap-4'>
                {
                    images.map(({id, url, title}) => (
                        <div key={id}>
                            <img
                                key={id}
                                src={url}
                                alt={title}
                            />
                            <a href={url} target='_blank' className='hover:text-white'>{title}</a>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
