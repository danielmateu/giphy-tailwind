import { render, screen, fireEvent } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

//Pruebas en el componente GifExpertApp
describe('Pruebas en el componente GifExpertApp', () => {

    const category = 'One Punch'

    //setup function: para no repetir el setup de las pruebas repetidas veces
    const setup = () => {
        render(<GifExpertApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form", { name: "form" });
        return {
            input,
            form,
        };
    }

    //Debe hacer match con el snapshot
    test('Debe hacer match con el snapshot', () => {
        const { container } = render(<GifExpertApp />)
        expect(container).toMatchSnapshot();
    })

    //Debe agregar una categoria
    test('Debe agregar una categoria', () => {
        const { input, form } = setup()

        fireEvent.change(input, { target: { value: category } })
        fireEvent.submit(form)
        expect(screen.getByText(category)).toBeTruthy()
    })

    //Debe mostrar una lista de categorias
    test('Debe mostrar una lista de categorias', () => {
        const { input, form } = setup()

        fireEvent.change(input, { target: { value: category } })
        fireEvent.submit(form)
        expect(screen.getByText(category)).toBeTruthy()
    })

    //Debe añadir una categoria si no está repetida
    test('Debe añadir una categoria si no está repetida', () => {
        const { input, form } = setup()

        fireEvent.change(input, { target: { value: category } })
        fireEvent.submit(form)
        fireEvent.change(input, { target: { value: category } })
        fireEvent.submit(form)
        expect(screen.queryAllByText(category).length).toBe(1)
    })

    //No debe añadir la categoria si está repetida
    test('No debe añadir la categoria si está repetida', () => {
        const { input, form } = setup()

        fireEvent.change(input, { target: { value: category } })
        fireEvent.submit(form)
        fireEvent.change(input, { target: { value: category } })
        fireEvent.submit(form)
        expect(screen.queryAllByText(category).length).toBe(1)
    })

})