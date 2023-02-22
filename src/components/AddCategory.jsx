import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim().length <= 1) return
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    return (
        <form
            onSubmit={onSubmit}
        >
            <input
                type="text"
                className='bg-gray-200 p-2 rounded-md m-2'
                placeholder='Add something... '
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}
