import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

//Test sobre GifGrid
describe('Pruebas en <GifGrid />', () => {

    //Debe mostrar el loading inicialmente
    test('Debe mostrar el loading inicialmente', () => {

        const category = 'One Punch';

        useFetchGifs.mockReturnValue({
            // data: [],
            // loading: true
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />)
        expect(screen.getByText('Loading...'))


    })

    //Debe mostrar items cuando se cargan las imagenes
    test('Debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const category = 'One Punch';
        const gifs = [
            {
                id: 'ABC',
                url: 'https://localhost/cualquier/goku.jpg',
                title: 'Goku'
            },
            {
                id: '123',
                url: 'https://localhost/cualquier/saitama.jpg',
                title: 'Saitama'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })

        render(<GifGrid category={category} />)
        // screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2)

    })

})