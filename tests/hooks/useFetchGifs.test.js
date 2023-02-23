
//Pruebas en el hook de nuestro useFetchGifs
import { useFetchGifs } from './../../src/hooks/useFetchGifs'
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFetchGifs', () => {

    //Debe retornar el estado inicial
    test('Debe de retornar el estado inicial', async() => {
        
        const { result } = renderHook( () => useFetchGifs('One Punch') )
        const { images, isLoading } = result.current
        
        expect( images ).toEqual([])
        expect( isLoading ).toBe(true)
    })

    //Debe de retornar un arreglo de imagenes y el loading en false
    test('Debe de retornar un arreglo de imagenes y el loading en false', async() => {
            
            const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('One Punch') )
            await waitForNextUpdate(
                { timeout: 5000 }
            )
            const { images, isLoading } = result.current
            
            expect(images.length).toBeGreaterThan(0)
            expect( images.length ).toBe(20)
            expect( isLoading ).toBe(false)
    })

    
    
})