import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";


describe(`Pruebas en el archivo 08-imp-exp.js`, () => {
    it('La función getHeroesById() debe obtener a Spiderman', () => {
        /** Inicialización  */
        const spidermanObject = {
            id: 2,
            name: 'Spiderman',
            owner: 'Marvel'
        }

        /** Estímulo  */
        const hero = getHeroeById(2);

        /** Aserción */
        expect(hero.name).toBe(spidermanObject.name);
        expect(hero).toEqual(spidermanObject);
    });


    it( `La función getHeroesById() debe obtener un 'undefined'`, () => {
        const hero = getHeroeById(100);
        expect(hero).toBeUndefined();
    });


    it(`La función getHeroesByOwner() debe obtener todos los heroes de DC que son tres elementos`, () => {
        const testArray = [
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ];

        const getHeroes = getHeroesByOwner('DC');

        /** Aserción */
        expect(getHeroes.length).toBe(3);
        expect(getHeroes).toStrictEqual(testArray);
    });


    it(`La función getHeroesByOwner() debe obtener todos los heroes de Marvel que son tres elementos`, () => {
        const testArray =  [
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ];

        const getHeroes = getHeroesByOwner('Marvel');

        /** Aserción */
        expect(getHeroes.length).toBe(2);
        expect(getHeroes).toStrictEqual(testArray);
    });
});