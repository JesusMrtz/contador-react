import { render } from "@testing-library/react";
import FirstApp from "../../src/components/FirstApp";


describe(`Pruebas en el componente <FirstApp />`, () => {
    it('Debe de hacer match con el snapshot', () => {
        /** 1. Inicialización */
        const title = 'Hola mundo';

        // Renderiza un componente en memoria
        // actualiza el objeto "screen" que es parte del @testing-library
        const { container } = render(<FirstApp title={ title } />);


        /** 3. Aserción */

        /* Se toma una fotografía del componente para evitar los cambios en el document
            * Si un componente cambia constantemente, no es recomendable hacer el snapshot
        */
        expect(container).toMatchSnapshot();
    });


    it('Debe de mostrar la prop "title" en un H1', () => {
        const title = 'Hola soy goku';
        const { container, getByText, getByTestId } = render(<FirstApp  title={ title } />);

        // Verificar en lo que se renderiza exista el titulo "Hola soy goku"
        expect(getByText(title)).toBeTruthy();
        
        // const h1Tag = container.querySelector('h1');

        // // Verificar de que exista un H1
        // expect(h1Tag).toBeTruthy();
        // expect(h1Tag.textContent).toContain(title);


        expect(getByTestId('title').textContent).toContain(title);
    });


    it('Debe de mostrar el "propNumber" enviado por los props', () => {
        const propNumber = 23;
        const { getAllByTestId } = render(<FirstApp propNumber={ propNumber } />);

        expect(getAllByTestId('prop-number').length).toBe(1);
    });
});
