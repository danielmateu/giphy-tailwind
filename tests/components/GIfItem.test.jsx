
import { render } from "@testing-library/react";
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

})