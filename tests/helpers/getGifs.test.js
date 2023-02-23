import { getGifs } from "../../src/helpers/getGifs"

describe('Pruebas sobre getGifs.js', () => {

    //Debe retornar un array
    test('Debe retornar un arreglo de gifs de 20', async() => {
        const gifs = await getGifs('One Punch')
        expect(gifs.length).toBe(20)
    })

    //Debe retornar un array vacio
    test('Debe de traer 0 elementos', async () => {
        const gifs = await getGifs('')
        expect(gifs.length).toBe(0)
    })

    //Debe retornar un arreglo mayor a 0
    test('Debe de traer un arreglo mayor a 0', async () => {
        const gifs = await getGifs('One Punch')
        expect(gifs.length).toBeGreaterThan(0)
    })

    //Debe retornar un arreglo de objetos con las propiedades img, id y url
    test('Debe de traer un arreglo de objetos con las propiedades img, id y url', async () => {
        const gifs = await getGifs('One Punch')
        expect(gifs[0]).toHaveProperty('id')
        expect(gifs[0]).toHaveProperty('title')
        expect(gifs[0]).toHaveProperty('url')
    })

    //Debe retornar un arreglo de objetos con las propiedades img, id y url y verificar que son string
    test('Debe de traer un arreglo de objetos con las propiedades img, id y url y verificar que son string', async () => {
        const gifs = await getGifs('One Punch')

        expect(typeof gifs[0].id).toBe('string')
        expect(typeof gifs[0].title).toBe('string')
        expect(typeof gifs[0].url).toBe('string')

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })

})