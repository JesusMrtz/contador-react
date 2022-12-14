import { number } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";


describe(`Pruebas en el archivo 07-desses-arr.js`, () => {
    it('La función retornarArreglo() debe de retornar un string y un número', () => {
        /** 1. Inicialización */
        const value = retornaArreglo();

        /** Estímulo */
        const [stringValue, numberValue] = value;

        /** Aserción */
        expect(typeof stringValue).toBe('string'); 
        // expect(stringValue).toEqual(expect.any(String));

        expect(typeof numberValue).toBe('number');
        // expect(numberValue).toEqual(expect.any(Number));
    });
});