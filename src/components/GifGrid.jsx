
import { GIfItem } from './GIfItem'

import { useFetchGifs } from '../hooks/useFetchGifs'
import { Loading } from './Loading'

import PropTypes from 'prop-types'

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category)
    // console.log(images);

    return (
        <>
            {
                // isLoading && <Loading />
                isLoading && 'Loading...'
            }

            <div 
            className=' px-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 items-start place-items-center '
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

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
