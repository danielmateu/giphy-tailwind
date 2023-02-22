import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch'])

    // Añadir categorias
    const handleAdd = (newCategory) => {
        //Pasar new category a lowercase
        // newCategory = newCategory.toLowerCase()
        //Si newCategory ya existe en el arreglo
        if (categories.includes(newCategory)) return
        setCategories(cats => [newCategory, ...cats])
        
    }


    return (
        <div className='bg-sky-400 p-10'>
            {/* TITULO */}
            <h1 className='text-4xl text-center'>GifExpertApp</h1>
            {/* INPUT */}
            <AddCategory
                onNewCategory={handleAdd}
            // setCategories={setCategories}
            // categories = {categories}
            />

            {/* LISTA DE GIFS */}
            <h2 className='p-2'>Listado</h2>

            {
                categories.map(category =>
                (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                )
                )
            }



            {/* GIF ITEM */}
        </div>
    )
}
