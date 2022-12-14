import { render, screen } from "@testing-library/react";
import FirstApp from "../../src/components/FirstApp";


describe(`Pruebas en el componente <FirstApp />`, () => {
    const title = 'Hola soy goku';

    it('Debe de hacer match con el snapshot', () => {
        // Renderiza un componente en memoria
        // actualiza el objeto "screen" que es parte del @testing-library
        const { container } = render(<FirstApp title={ title } />);
        expect(container).toMatchSnapshot();
    });


    it('Debe de mostrar el mensaje "Hola soy goku"', () => {
        render(<FirstApp  title={ title } />);
        // screen.debug();

        expect( screen.getByText(title) ).toBeTruthy();
    });

    
    it('Debe de mostrar la prop "title" en un H1', () => {
        render(<FirstApp  title={ title } />);
        expect(screen.getByRole('heading', { level: 1 })).toBeTruthy();
    });


    it('Debe de mostrar el "propNumber" enviado por los props', () => {
        const propNumber = 23;
        render(<FirstApp propNumber={ propNumber } />);
        expect( screen.getAllByTestId('prop-number').length ).toBe(1);
    });
});
