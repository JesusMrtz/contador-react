import { getImagen } from "../../src/base-pruebas/11-async-await";


describe(`Pruebas en el archivo 11-async-await.js para probar métodos async`, () => {
    it(`La función getImagen() retornará una url`, async () => {
        const url = await getImagen();

        expect(typeof url).toBe('string');
        expect(url).toContain('https://');
    });


    // it(`La función getImage() debe de retornar un error`, async() => {
    //     const response = await getImagen();
    //     expect(response).toBe('No se encontró la imagen');
    // });
});