import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";


//Pruebas en AddCategory
describe('Pruebas en <AddCategory />', () => {
    //Debe cambiar el valor de la caja de texto
    test('Debe cambiar el valor de la caja de texto', () => {

        const value = 'Hola Mundo'

        render(<AddCategory onNewCategory={()=>{}}/>)
        // screen.debug()
        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target: {value} });

        expect(input.value).toBe(value)

    })

    //Debe llamar la función onNewCategory y limpiar la caja de texto
    test('Debe llamar la función onNewCategory y limpiar la caja de texto', () => {
        const value = 'Hola Mundo'
        const onNewCategory = jest.fn()

        render(<AddCategory onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox')
        
        fireEvent.input(input, { target: {value} });
        fireEvent.submit(input)

        expect(onNewCategory).toHaveBeenCalled()
        expect(input.value).toBe('')
    })

    //Debe llamar la función onNewCategory si el input tiene un valor
    test('Debe llamar la función onNewCategory si el input tiene un valor', () => {

        const onNewCategory = jest.fn()
        const inputValue = 'Hola Mundo'

        render(<AddCategory onNewCategory={onNewCategory}/>)

        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input, { target: {value: inputValue} });
        fireEvent.submit(form)

        expect(onNewCategory).toHaveBeenCalled()
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)
        expect(input.value).toBe('')
    })

    //No debe llamar el onNewCategory si el input está vacío
    test('No debe llamar el onNewCategory si el input está vacío', () => {
            
            const onNewCategory = jest.fn()
    
            render(<AddCategory onNewCategory={onNewCategory}/>)
    
            const form = screen.getByRole('form')
    
            fireEvent.submit(form)
    
            expect(onNewCategory).not.toHaveBeenCalled()

    })

})

