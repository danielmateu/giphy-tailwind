
import { render, screen } from "@testing-library/react";
import { GIfItem } from "../../src/components/GIfItem";



describe('Pruebas sobre <GIfItem/>', () => {
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';
    
    //Debe hacer match con el snapshot
    test('Debe hacer match con el snapshot', () => {
        const {container} = render(<GIfItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    })

    //Debe mostrar el titulo
    test('Debe mostrar el titulo', () => {
        const {getByText} = render(<GIfItem title={title} url={url}/>)
        const element = getByText(title);
        expect(element).toBeTruthy();
    })

    //Debe mostrar la imagen con el url y el alt indicado
    test('Debe mostrar la imagen con el url y el alt indicado', () => {
        render(<GIfItem title={title} url={url}/>)
        // screen.debug();
        // expect(screen.getByRole('img').src).toBe(url)
        // expect(screen.getByRole('img').alt).toBe(title)
        const { src, alt } = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(alt)
    })

    

})