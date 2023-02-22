
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

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
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
