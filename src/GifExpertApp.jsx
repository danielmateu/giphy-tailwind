import React, { useState } from 'react'

import { GifGrid, AddCategory } from './components'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    // Añadir categorias
    const handleAdd = (newCategory) => {
        
        if (categories.includes(newCategory)) return
        setCategories(cats => [newCategory, ...cats])

    }

    return (
        <div className='bg-sky-400 p-10'>

            <h1 className='text-4xl text-center'>GifExpertApp</h1>

            <AddCategory
                onNewCategory={handleAdd}
            />

            {
                categories.map(category =>
                (
                    <div
                        className='py-10'
                        key={category}>
                        <h3 className='text-2xl text-center pb-4'>{category}</h3>

                        <GifGrid
                            category={category}
                        />
                    </div>
                )
                )
            }
        </div>
    )
}
