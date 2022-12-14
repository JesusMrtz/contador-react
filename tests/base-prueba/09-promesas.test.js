import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe(`Pruebas en el archivo 09-promesas.js`, () => {
    /**
     * Es necesario llamar al done() al finalizar el then o el catch para evitar errores de timeOut
     */
    
    it(`La función getHeroeByIdAsync() debe retornar un heroe de manera asincrona`, (done) => {
        const testObject =  {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        }

        getHeroeByIdAsync(2)
        .then(hero => {
            expect(hero).toStrictEqual(testObject);
            done();
        })
        .catch(done);
    });


    it(`La función getHeroeByIdAsync() debe retornar un error de manera asíncrona`, (done) => {
        getHeroeByIdAsync(100)
        .catch(error => {
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
});