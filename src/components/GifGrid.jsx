
import { GIfItem } from './GIfItem'

import { useFetchGifs } from '../hooks/useFetchGifs'
import { Loading } from './Loading'


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)

    return (
        <>
            {
                isLoading && <Loading />
            }

            <div 
            className=' px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-start place-items-center '
            // className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
            // className= 'grid grid-cols-[200px_minmax(900px,_1fr)_100px]'
            // className='grid grid-flow-row-dense grid-cols-3 grid-rows-3'
            // className='grid grid-flow-row auto-rows-max'
            >
                {
                    images.map((image) => (
                        <GIfItem
                            key={image.id}
                            {...image}
                        />
                    ))
                }
            </div>
        </>

    )
}
