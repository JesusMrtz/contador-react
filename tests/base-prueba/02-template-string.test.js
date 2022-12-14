import { getSaludo } from "../../src/base-pruebas/02-template-string";


describe('Pruebas en el archivo 02-template-string.js', () => {
    it(`la función getSaludo debe de devolver "Hola Jesús"`, () => {
        // 1. Inicialización
        const name = 'Jesús';

        // 2. Estímulo
        const message = getSaludo(name);

        // 3. Aserciones

        /** la variable message debe de decir "Hola Jesús" */
        expect(message).toBe('Hola Jesús');
    });
});