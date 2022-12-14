import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';


describe('Pruebas en el archivo 05-funciones.js', () => {
    it(`La función getUser() debe retornar un objeto`, () => {
        /** 1. Inicialización  */
        const testObject = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };


        /** 2. Estímulo */
        const value = getUser();


        /** Aserción */

        // toStrictEqual y toEqual sirve para comparar dos objetos
        expect(testObject).toStrictEqual(value);
    });


    it('La función getUsuarioActivo() debe retornar un objeto con el nombre "Jesús"', () => {
        /** Inicialización */
        const testObject = {
            uid: 'ABC567',
            username: 'Jesús'
        }

        /** 2. Estímulo */
        const value = getUsuarioActivo('Jesús');

        /** 3 Aserción */
        expect(testObject).toStrictEqual(value);
    });
});